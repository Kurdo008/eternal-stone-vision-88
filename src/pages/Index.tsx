
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollectionShowcase from '@/components/CollectionShowcase';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-moss-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/beeaa2a1-9459-4d64-8e20-3f0373aabc46.png')"
        }}
      >
        <div className="absolute inset-0 bg-sage-600/30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Waardige Monumenten<br />
            <span className="text-sage-100">in Harmonie met de Natuur</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto">
            Wij creëren persoonlijke grafmonumenten die de herinnering aan uw dierbaren voor altijd koesteren. 
            Met respect voor traditie en oog voor moderne vormgeving.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white" asChild>
              <Link to="/products">Bekijk Onze Collectie <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/90 hover:bg-white text-sage-700 border-sage-300" asChild>
              <Link to="/editor">Start 3D Editor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collection Showcase */}
      <CollectionShowcase />

      {/* 3D Experience Section - Mobile optimized */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-sage-100 to-sage-200">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sage-700 mb-4 md:mb-6">
                Ervaar Uw Monument in 3D
              </h2>
              <p className="text-base md:text-lg text-sage-600 mb-6 md:mb-8">
                Met onze geavanceerde 3D-technologie kunt u uw monument volledig personaliseren 
                en bekijken voordat het wordt gemaakt. Pas materialen, afmetingen en gravures 
                aan naar uw wensen.
              </p>
              <div className="space-y-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-sage-700">Realistische 3D voorbeelden</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-sage-700">Alle materialen beschikbaar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-sage-700">Personalisatie opties</span>
                </div>
              </div>
              <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white" asChild>
                <Link to="/editor">Probeer Nu Gratis <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-sage-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl md:text-3xl font-bold">3D</span>
                  </div>
                  <p className="text-sage-600 text-sm md:text-base">3D Monument Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sage-700 mb-4">
              Waarom Kiezen voor Eternum Monuments?
            </h2>
            <p className="text-base md:text-lg text-sage-600 max-w-2xl mx-auto">
              Al meer dan 25 jaar helpen wij families bij het creëren van waardige herinneringen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-sage-700">Vakmanschap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-sage-600">
                  Onze ervaren vakmensen creëren elk monument met de grootste zorg en precisie.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-sage-700">Persoonlijke Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-sage-600">
                  Wij begeleiden u persoonlijk door het hele proces, van ontwerp tot plaatsing.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-sage-700">Duurzame Materialen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-sage-600">
                  Wij gebruiken alleen de beste materialen die generaties lang meegaan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-sage-600 to-sage-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Klaar om te Beginnen?
          </h2>
          <p className="text-base md:text-xl text-sage-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend gesprek over uw wensen.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-700 hover:bg-gray-100" asChild>
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-700" asChild>
              <Link to="/products">Bekijk Voorbeelden</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
