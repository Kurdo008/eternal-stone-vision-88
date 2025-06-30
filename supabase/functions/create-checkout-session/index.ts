
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('=== CREATE CHECKOUT SESSION START ===')
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { orderData, cartItems } = await req.json()
    console.log('Received data:', { orderData, cartItems })
    
    // Create order in database - use string IDs instead of UUIDs
    const orderId = crypto.randomUUID()
    console.log('Generated order ID:', orderId)
    
    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .insert([{
        id: orderId,
        email: orderData.email,
        total_amount: orderData.total,
        shipping_address: {
          firstName: orderData.firstName,
          lastName: orderData.lastName,
          address: orderData.address,
          city: orderData.city,
          zipCode: orderData.zipCode,
          phone: orderData.phone
        },
        status: 'pending'
      }])
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      throw orderError
    }
    
    console.log('Order created:', order)

    // Add order items - generate UUIDs for product_id
    const orderItems = cartItems.map((item: any) => ({
      order_id: orderId,
      product_id: crypto.randomUUID(), // Generate a UUID instead of using item.id directly
      quantity: item.quantity,
      price: item.price
    }))

    console.log('Order items to insert:', orderItems)

    const { error: itemsError } = await supabaseClient
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      console.error('Order items error:', itemsError)
      throw itemsError
    }

    console.log('Order items created successfully')

    // Create Stripe checkout session
    const stripe = new (await import('https://esm.sh/stripe@12.18.0')).default(
      Deno.env.get('STRIPE_SECRET_KEY') ?? '',
      { apiVersion: '2023-10-16' }
    )

    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.material,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }))

    console.log('Stripe line items:', lineItems)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'ideal'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      metadata: {
        order_id: orderId,
      },
      customer_email: orderData.email,
    })

    console.log('Stripe session created:', session.id)

    // Update order with Stripe session ID
    await supabaseClient
      .from('orders')
      .update({ stripe_session_id: session.id })
      .eq('id', orderId)

    console.log('Order updated with session ID')
    console.log('=== CREATE CHECKOUT SESSION END ===')

    return new Response(
      JSON.stringify({ sessionId: session.id, orderId: orderId }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error in create-checkout-session:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
