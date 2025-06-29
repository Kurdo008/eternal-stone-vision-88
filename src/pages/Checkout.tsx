
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier zou de echte betaalverwerking plaatsvinden
    alert('Betaling wordt verwerkt...');
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
                  <Label htmlFor="email">E-mailadres</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="uw.email@voorbeeld.nl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Voornaam</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Achternaam</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
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
                  <Label htmlFor="address">Adres</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Straat en huisnummer"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Plaats</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Postcode</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="1234 AB"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sage-700 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Betaalgegevens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Naam op kaart</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Kaartnummer</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Vervaldatum</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/JJ"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
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
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotaal:</span>
                    <span>€ 0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>BTW (21%):</span>
                    <span>€ 0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Verzendkosten:</span>
                    <span>Gratis</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Totaal:</span>
                      <span>€ 0</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white flex items-center justify-center"
                  size="lg"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Veilig Betalen
                </Button>

                <div className="text-center mt-4">
                  <p className="text-xs text-sage-500">
                    Uw betaling wordt veilig verwerkt met SSL-encryptie
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
