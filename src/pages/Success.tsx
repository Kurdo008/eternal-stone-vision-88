
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [orderSent, setOrderSent] = useState(false);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const sendOrderConfirmation = async () => {
      if (sessionId && !orderSent) {
        try {
          // Get order ID from session
          const { data } = await supabase
            .from('orders')
            .select('id')
            .eq('stripe_session_id', sessionId)
            .single();

          if (data) {
            // Send confirmation email
            await supabase.functions.invoke('send-order-confirmation', {
              body: { orderId: data.id }
            });
            
            // Clear cart and any saved address data
            localStorage.removeItem('cartItems');
            localStorage.removeItem('checkoutAddress');
            localStorage.removeItem('customerAddress');
            setOrderSent(true);
          }
        } catch (error) {
          console.error('Error sending confirmation:', error);
        }
      }
    };

    sendOrderConfirmation();
  }, [sessionId, orderSent]);

  // Also clear cart on component mount as backup
  useEffect(() => {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('checkoutAddress');
    localStorage.removeItem('customerAddress');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-moss-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-sage-700">
                Bedankt voor uw bestelling!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sage-600">
                Uw bestelling is succesvol geplaatst en betaald. U ontvangt binnenkort een bevestiging per email met alle details.
              </p>
              
              <div className="bg-sage-50 p-4 rounded-lg">
                <p className="text-sm text-sage-600">
                  <strong>Wat gebeurt er nu?</strong><br />
                  • U ontvangt een orderbevestiging per email<br />
                  • Wij nemen binnen 24 uur contact met u op<br />
                  • Samen bespreken we de details van uw monument
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Terug naar Home
                  </Link>
                </Button>
                <Button asChild className="bg-sage-600 hover:bg-sage-700">
                  <Link to="/products">
                    Meer Producten Bekijken
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Success;
