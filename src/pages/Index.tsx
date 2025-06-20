import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Palette, Eye, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const Index = () => {
  const features = [
    {
      icon: Eye,
      title: "3D Visualisatie",
      description: "Bekijk uw monument in realistische 3D voordat u bestelt"
    },
    {
      icon: Palette,
      title: "Persoonlijke Aanpassing",
      description: "Pas tekst, materiaal en afmetingen aan naar uw wensen"
    },
    {
      icon: Shield,
      title: "Kwaliteit Garantie",
      description: "Alleen de beste materialen en vakmanschap"
    },
    {
      icon: Star,
      title: "Ervaring",
      description: "Meer dan 50 jaar ervaring in grafmonumenten"
    }
  ];

  const testimonials = [
    {
      name: "Maria van der Berg",
      text: "De 3D weergave heeft ons enorm geholpen bij het maken van de juiste keuze. Prachtig vakwerk.",
      rating: 5
    },
    {
      name: "Jan Pietersen",
      text: "Professionele service en een prachtig eindresultaat. Zeer tevreden over de hele ervaring.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 memorial-gradient text-white overflow-hidden">
        <div className="absolute inset-0 stone-texture"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Waardige Monumenten
            <span className="block text-bronze">in 3D</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-fade-in">
            Ontwerp en personaliseer uw monument met onze innovatieve 3D technologie. 
            Eerbiedige craftsmanship ontmoet moderne visualisatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-bronze hover:bg-bronze/90 text-stone-gray font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/products">
                Bekijk Collectie <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-stone-gray px-8 py-4 text-lg"
              asChild
            >
              <Link to="/editor">Start 3D Editor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-gray mb-4">
              Waarom Kiezen Voor Eternum?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wij combineren traditioneel vakmanschap met moderne technologie
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-bronze/20">
                <CardContent className="p-8">
                  <div className="bg-bronze/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-gray mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-gray mb-6">
                Ervaar Uw Monument in 3D
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Onze geavanceerde 3D technologie stelt u in staat om uw monument 
                van alle kanten te bekijken en aan te passen voordat het wordt vervaardigd.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                  360° weergave van uw monument
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                  Real-time materiaal voorbeelden
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                  Instant tekst en gravure preview
                </li>
              </ul>
              <Button 
                size="lg" 
                className="bg-stone-gray hover:bg-stone-gray/90 text-white"
                asChild
              >
                <Link to="/editor">Probeer 3D Editor</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Mountain className="h-16 w-16 text-stone-gray mx-auto mb-4" />
                  <p className="text-gray-600">3D Preview wordt hier geladen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-gray mb-4">
              Wat Onze Klanten Zeggen
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-bronze/20 transition-colors">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-bronze fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-stone-gray">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 memorial-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Begin Vandaag Met Uw Monument</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Ontdek onze collectie of start direct met het ontwerpen van uw unieke monument
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-bronze hover:bg-bronze/90 text-stone-gray font-semibold"
              asChild
            >
              <Link to="/products">Bekijk Producten</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-stone-gray"
              asChild
            >
              <Link to="/contact">Neem Contact Op</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
