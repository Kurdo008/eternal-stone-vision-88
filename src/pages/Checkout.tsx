
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

interface CartItem {
  id: number;
  name: string;
  material: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: ''
  });

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast({
        title: "Winkelwagen leeg",
        description: "Voeg eerst producten toe aan uw winkelwagen.",
        variant: "destructive"
      });
      return;
    }

    // Validate form
    if (!formData.email || !formData.firstName || !formData.lastName || 
        !formData.address || !formData.city || !formData.zipCode || !formData.phone) {
      toast({
        title: "Vul alle velden in",
        description: "Alle contactgegevens en adresgegevens zijn verplicht.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log('Sending order data:', { formData, cartItems, total: subtotal });
      
      // Create checkout session
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          orderData: {
            ...formData,
            total: subtotal
          },
          cartItems
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Checkout session response:', data);

      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(m => 
        m.loadStripe('pk_test_51RfPiJ1TfGR3VtghRzxxwlqF2xVysMCPOn8i0lUnh2qssWvfcLy2wuE7SvJVhivi6yHosrVLKcHuzgfELKDJeOQF008CSSP2D5')
      );

      if (stripe && data?.sessionId) {
        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId: data.sessionId
        });

        if (stripeError) {
          throw stripeError;
        }
      } else {
        throw new Error('Stripe niet geladen of geen sessie ID ontvangen');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Fout bij bestelling",
        description: error.message || "Er is iets misgegaan. Probeer het opnieuw.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-moss-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="text-sage-600 hover:text-sage-700">
            <Link to="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar winkelwagen
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-bold text-sage-700 mb-8">Bestelling Afrekenen</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bestelformulier */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sage-700">Contactgegevens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="uw.email@voorbeeld.nl"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Voornaam *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Achternaam *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Telefoonnummer *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sage-700">Adresgegevens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Adres *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Straat en huisnummer"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Plaats *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Postcode *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="1234 AB"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bestelling overzicht */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-sage-700">Bestelling Overzicht</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Cart items */}
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sage-600">{item.material} × {item.quantity}</p>
                      </div>
                      <span className="font-medium">€ {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Subtotaal:</span>
                    <span>€ {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verzendkosten:</span>
                    <span>Gratis</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Totaal:</span>
                    <span>€ {subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleSubmit}
                  disabled={isLoading || cartItems.length === 0}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white flex items-center justify-center"
                  size="lg"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isLoading ? 'Verwerken...' : 'Veilig Betalen'}
                </Button>

                <div className="text-center mt-4">
                  <p className="text-xs text-sage-500">
                    U wordt doorgestuurd naar een veilige betaalpagina
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
