
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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const { orderId } = await req.json()
    
    // Get order details
    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (*)
        )
      `)
      .eq('id', orderId)
      .single()

    if (orderError) throw orderError

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      throw new Error('Resend API key not configured')
    }

    const emailHtml = `
      <h2>Bedankt voor uw bestelling!</h2>
      <p>Beste ${order.shipping_address.firstName} ${order.shipping_address.lastName},</p>
      <p>Wij hebben uw bestelling ontvangen en zijn deze aan het verwerken.</p>
      
      <h3>Bestelling Details:</h3>
      <p><strong>Bestelnummer:</strong> ${order.id}</p>
      <p><strong>Totaalbedrag:</strong> €${order.total_amount}</p>
      
      <h3>Verzendadres:</h3>
      <p>
        ${order.shipping_address.firstName} ${order.shipping_address.lastName}<br>
        ${order.shipping_address.address}<br>
        ${order.shipping_address.zipCode} ${order.shipping_address.city}<br>
        Tel: ${order.shipping_address.phone}
      </p>

      <h3>Bestelde producten:</h3>
      <ul>
        ${order.order_items.map((item: any) => 
          `<li>${item.products.name} - ${item.quantity}x €${item.price}</li>`
        ).join('')}
      </ul>
      
      <p>Wij nemen binnenkort contact met u op voor verdere details.</p>
      <p>Met vriendelijke groet,<br>GM Specialist</p>
    `

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'GM Specialist <noreply@gmspecialist.nl>',
        to: [order.email],
        subject: `Bevestiging van uw bestelling - ${order.id}`,
        html: emailHtml,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
