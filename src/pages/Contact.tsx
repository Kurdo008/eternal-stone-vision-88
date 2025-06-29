
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Header from '@/components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Monumentenweg 123\n1234 AB Arnhem\nNederland"
    },
    {
      icon: Phone,
      title: "Telefoon",
      content: "+31 26 123 4567\n+31 6 12 34 56 78"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@eternummonuments.nl\nofferte@eternummonuments.nl"
    },
    {
      icon: Clock,
      title: "Openingstijden",
      content: "Ma-Vr: 09:00 - 17:00\nZa: 10:00 - 15:00\nZo: Gesloten"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Vul alle verplichte velden in");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    toast.success("Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 memorial-gradient text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Heeft u vragen over onze monumenten of wilt u een vrijblijvende offerte? 
            Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-stone-gray">Stuur ons een bericht</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Naam *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefoon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Onderwerp</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Bericht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="Vertel ons over uw wensen voor het monument..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-bronze hover:bg-bronze/90 text-stone-gray"
                  >
                    Bericht Versturen
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-bronze/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-bronze" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-gray mb-2">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Emergency Contact */}
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-800 mb-2">Spoedgevallen</h3>
                <p className="text-red-700 text-sm mb-3">
                  Voor dringende zaken buiten kantooruren kunt u bellen naar:
                </p>
                <p className="font-semibold text-red-800">+31 6 98 76 54 32</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-stone-gray">Locatie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-stone-gray mx-auto mb-4" />
                  <p className="text-gray-600">Interactieve kaart wordt hier geladen</p>
                  <p className="text-sm text-gray-500 mt-2">Monumentenweg 123, Arnhem</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-stone-gray">Veelgestelde Vragen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-stone-gray mb-2">Hoe lang duurt het maken van een monument?</h4>
                  <p className="text-gray-600">
                    De levertijd is gemiddeld 4-6 weken na goedkeuring van het ontwerp. 
                    Dit kan variëren afhankelijk van de complexiteit en het gekozen materiaal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-gray mb-2">Kan ik mijn monument eerst in 3D bekijken?</h4>
                  <p className="text-gray-600">
                    Ja! Met onze 3D editor kunt u uw monument volledig configureren en bekijken 
                    voordat u een bestelling plaatst. U ontvangt ook een gedetailleerde 3D visualisatie.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-gray mb-2">Bieden jullie ook plaatsing aan?</h4>
                  <p className="text-gray-600">
                    Ja, wij verzorgen de volledige plaatsing van het monument inclusief fundering 
                    en aansluiting. Dit wordt uitgevoerd door onze ervaren vakmensen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
