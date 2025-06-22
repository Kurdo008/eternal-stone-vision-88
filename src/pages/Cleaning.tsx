
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cleaning = () => {
  const services = [
    {
      title: "Basis Reiniging",
      price: "€ 75",
      description: "Grondige reiniging met milieuvriendelijke middelen",
      features: ["Verwijdering van algen en mos", "Reinigen van tekst en ornamenten", "Naspoelen met schoon water"]
    },
    {
      title: "Premium Reiniging",
      price: "€ 125",
      description: "Uitgebreide reiniging met beschermende behandeling",
      features: ["Alles van basis reiniging", "Verwijdering van hardnekkige vlekken", "Beschermende coating", "6 maanden garantie"]
    },
    {
      title: "Restauratie",
      price: "Op aanvraag",
      description: "Volledige restauratie van beschadigde monumenten",
      features: ["Reparatie van scheuren", "Herbewerking van tekst", "Kleurrestauratie", "12 maanden garantie"]
    }
  ];

  const beforeAfterGallery = [
    { title: "Graniet Monument", before: "Voor", after: "Na" },
    { title: "Marmeren Kruis", before: "Voor", after: "Na" },
    { title: "Natuursteen Gedenkteken", before: "Voor", after: "Na" },
    { title: "Basalt Monument", before: "Voor", after: "Na" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-moss-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 nature-gradient text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Grafsteen Reiniging</h1>
          </div>
          <p className="text-lg md:text-xl text-sage-100 max-w-2xl mx-auto">
            Professionele reiniging en onderhoud voor alle soorten grafmonumenten
          </p>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-700 mb-4">Voor & Na Resultaten</h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Zie het verschil dat onze professionele reiniging maakt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterGallery.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-sage-700">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600 rounded flex items-center justify-center">
                    <span className="text-white font-semibold">{item.before}</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 rounded flex items-center justify-center">
                    <span className="text-sage-700 font-semibold">{item.after}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-700 mb-4">Onze Services</h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Kies het service pakket dat het beste bij uw monument past
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-sage-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-sage-700">{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-sage-600">{service.price}</div>
                  <p className="text-sage-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sage-600">
                        <CheckCircle className="h-4 w-4 text-sage-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white" asChild>
                    <Link to="/contact">Offerte Aanvragen</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-moss-50 to-sage-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sage-700 mb-6">
                Maak een Afspraak
              </h2>
              <p className="text-lg text-sage-600 mb-8">
                Onze specialisten komen graag bij u langs voor een vrijblijvende inspectie en offerte.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-sage-600 mr-3" />
                  <span className="text-sage-700">+31 20 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-sage-600 mr-3" />
                  <span className="text-sage-700">reiniging@eternummonuments.nl</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-sage-600 mr-3" />
                  <span className="text-sage-700">Ma-Vr: 8:00-17:00</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-sage-700">Gratis Offerte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-1">Type Monument</label>
                    <select className="w-full border border-sage-300 rounded-md px-3 py-2">
                      <option>Selecteer materiaal</option>
                      <option>Graniet</option>
                      <option>Marmer</option>
                      <option>Natuursteen</option>
                      <option>Basalt</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sage-700 mb-1">Gewenste Service</label>
                    <select className="w-full border border-sage-300 rounded-md px-3 py-2">
                      <option>Basis Reiniging</option>
                      <option>Premium Reiniging</option>
                      <option>Restauratie</option>
                    </select>
                  </div>
                  <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                    Offerte Aanvragen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cleaning;
