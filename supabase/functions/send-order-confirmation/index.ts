
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
    console.log('=== SEND ORDER CONFIRMATION START ===')
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const { orderId } = await req.json()
    console.log('Processing order confirmation for order ID:', orderId)
    
    // Get order details
    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single()

    if (orderError) {
      console.error('Order fetch error:', orderError)
      throw orderError
    }

    console.log('Order details:', order)

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      throw new Error('Resend API key not configured')
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Bevestiging van uw bestelling</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2d5a4a;">Bedankt voor uw bestelling!</h2>
          
          <p>Beste ${order.shipping_address?.firstName || 'klant'} ${order.shipping_address?.lastName || ''},</p>
          
          <p>Wij hebben uw bestelling ontvangen en zijn deze aan het verwerken.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2d5a4a;">Bestelling Details:</h3>
            <p><strong>Bestelnummer:</strong> ${order.id}</p>
            <p><strong>Totaalbedrag:</strong> €${order.total_amount}</p>
            <p><strong>Status:</strong> ${order.status}</p>
          </div>

          ${order.shipping_address ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2d5a4a;">Contactgegevens:</h3>
            <p>
              ${order.shipping_address.firstName} ${order.shipping_address.lastName}<br>
              Email: ${order.email}<br>
              Tel: ${order.shipping_address.phone || 'Niet opgegeven'}
            </p>
          </div>
          ` : ''}
          
          <p>Wij nemen binnenkort contact met u op voor verdere details over uw monument.</p>
          
          <p style="margin-top: 30px;">
            Met vriendelijke groet,<br>
            <strong>GM Specialist Team</strong>
          </p>
        </div>
      </body>
      </html>
    `

    console.log('Sending email to:', order.email)

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
      const errorData = await emailResponse.text()
      console.error('Resend API error:', errorData)
      throw new Error(`Failed to send email: ${errorData}`)
    }

    const result = await emailResponse.json()
    console.log('Email sent successfully:', result)
    console.log('=== SEND ORDER CONFIRMATION END ===')

    return new Response(
      JSON.stringify({ success: true, emailId: result.id }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error in send-order-confirmation:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
