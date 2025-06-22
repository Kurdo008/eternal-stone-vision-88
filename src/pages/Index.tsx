
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Palette, Eye, Mountain, TreePine, Flower, Heart, Star, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import CollectionShowcase from '@/components/CollectionShowcase';
import Professional3DViewer from '@/components/Professional3DViewer';
import CleaningService from '@/components/CleaningService';
import Footer from '@/components/Footer';

const Index = () => {
  const craftFeatures = [
    {
      icon: Eye,
      title: "Handgemaakt",
      description: "Vakmanschap door ervaren ambachtslieden"
    },
    {
      icon: Leaf,
      title: "Natuurlijke Harmonie",
      description: "Ontwerpen die één worden met de omgeving"
    },
    {
      icon: Shield,
      title: "Eeuwige Duurzaamheid",
      description: "Materialen die generaties lang mooi blijven"
    },
    {
      icon: Palette,
      title: "Persoonlijke Verhalen",
      description: "Elk monument vertelt een uniek verhaal"
    }
  ];

  const memorialGallery = [
    {
      image: "/api/placeholder/300/300",
      title: "Tuin Herinneringen",
      description: "Monumenten in harmonie met natuur",
      icon: TreePine
    },
    {
      image: "/api/placeholder/300/300", 
      title: "Eeuwige Bloesems",
      description: "Delicate ontwerpen geïnspireerd door bloemen",
      icon: Flower
    },
    {
      image: "/api/placeholder/300/300",
      title: "Liefdevol Gedenken",
      description: "Persoonlijke verhalen in steen",
      icon: Heart
    },
    {
      image: "/api/placeholder/300/300",
      title: "Sterren Memorial",
      description: "Hemelse rust en vrede",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-moss-50">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-12 md:py-16 px-4 nature-gradient text-white overflow-hidden">
        <div className="absolute inset-0 nature-texture"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 animate-fade-in leading-tight">
            <span className="block sm:inline">Waardige Monumenten</span>
            <span className="block text-sage-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 sm:mt-0 sm:ml-2">in Harmonie met de Natuur</span>
          </h1>
          <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-sage-100 animate-fade-in">
            Handgemaakt vakmanschap voor eeuwige herinneringen
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center animate-fade-in">
            <Button 
              size="sm"
              className="bg-white hover:bg-sage-50 text-sage-800 font-semibold px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg border-none"
              asChild
            >
              <Link to="/products">
                Bekijk Collectie <ArrowRight className="ml-2 h-3 md:h-5 w-3 md:w-5" />
              </Link>
            </Button>
            <Button 
              size="sm"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sage-700 px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg"
              asChild
            >
              <Link to="/editor">Start 3D Ontwerp</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collection Showcase */}
      <CollectionShowcase />

      {/* Enhanced 3D Preview Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-white to-sage-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-sage-700 mb-3 md:mb-6">
                Ervaar Uw Monument in 3D
              </h2>
              <p className="text-xs md:text-base text-sage-600 mb-4 md:mb-6">
                Onze geavanceerde 3D technologie stelt u in staat om uw monument van alle kanten te bekijken.
              </p>
              <ul className="space-y-1 md:space-y-3 mb-4 md:mb-6">
                <li className="flex items-center text-sage-700 text-xs md:text-sm">
                  <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                  360° weergave van uw monument
                </li>
                <li className="flex items-center text-sage-700 text-xs md:text-sm">
                  <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                  Real-time materiaal voorbeelden
                </li>
                <li className="flex items-center text-sage-700 text-xs md:text-sm">
                  <div className="w-2 h-2 bg-sage-600 rounded-full mr-3"></div>
                  Instant tekst en gravure preview
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  size="sm"
                  className="bg-sage-600 hover:bg-sage-700 text-white border-none flex-1"
                  asChild
                >
                  <Link to="/editor">3D Editor</Link>
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-sage-600 text-sage-700 hover:bg-sage-50 flex-1"
                  asChild
                >
                  <Link to="/products">Bekijk Collectie</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sage-50 to-white p-2 md:p-6 rounded-xl shadow-lg">
              <Professional3DViewer 
                material="granite"
                text="In Herinnering"
                shape="rectangular"
                color="#4a4a4a"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Service Section */}
      <CleaningService />

      {/* Craftsmanship Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-moss-50 to-sage-100">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-sage-700 mb-2 md:mb-4">
              Waar Ambacht & Natuur Samenkomen
            </h2>
            <p className="text-sm md:text-lg text-sage-600 max-w-2xl mx-auto">
              Traditionele technieken met respect voor natuurlijke schoonheid
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {craftFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-sage-300/50 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-3 md:p-6">
                  <div className="bg-sage-100 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <feature.icon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-sage-600" />
                  </div>
                  <h3 className="text-xs md:text-lg font-semibold text-sage-700 mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-sage-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Gallery */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-sage-50 to-moss-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-sage-700 mb-2 md:mb-4">
              Herinneringen in Steen
            </h2>
            <p className="text-sm md:text-lg text-sage-600 max-w-2xl mx-auto">
              Unieke monumenten die leven en natuur eren
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {memorialGallery.map((item, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-sage-300/50 transition-colors group bg-white/80 backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <item.icon className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 text-sage-500 group-hover:text-sage-600 transition-colors" />
                  </div>
                </div>
                <CardContent className="p-2 md:p-4">
                  <h3 className="text-xs md:text-lg font-semibold text-sage-700 mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-sage-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-sage-700 mb-2 md:mb-4">
              Bezoek Onze Showroom
            </h2>
            <p className="text-sm md:text-lg text-sage-600 max-w-2xl mx-auto">
              Ervaar de kwaliteit van onze monumenten persoonlijk
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="space-y-3 md:space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-sage-600 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-sage-700 mb-1">Adres</h3>
                  <p className="text-xs md:text-sm text-sage-600">
                    Monumentenstraat 123<br />
                    1234 AB Amsterdam<br />
                    Nederland
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-sage-600 p-2 rounded-lg">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-sage-700 mb-1">Openingstijden</h3>
                  <p className="text-xs md:text-sm text-sage-600">
                    Ma-Vr: 9:00 - 17:00<br />
                    Za: 10:00 - 16:00<br />
                    Zo: Gesloten
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-sage-600 p-2 rounded-lg">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-sage-700 mb-1">Contact</h3>
                  <p className="text-xs md:text-sm text-sage-600">
                    Telefoon: +31 20 123 4567<br />
                    Email: info@eternummonuments.nl
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 md:h-12 md:w-12 text-sage-600 mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-sage-600">Interactieve kaart wordt hier geladen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-12 md:py-16 px-4 bg-gradient-to-br from-forest-600 to-forest-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6">Niet Gevonden Wat U Zoekt?</h2>
          <p className="text-sm md:text-lg mb-4 md:mb-8 max-w-2xl mx-auto text-forest-100">
            Wij maken ook volledig op maat gemaakte monumenten.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
            <Button 
              size="sm"
              className="bg-forest-500 hover:bg-forest-600 text-white font-semibold border-none"
              asChild
            >
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
            <Button 
              size="sm"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-forest-700"
              asChild
            >
              <Link to="/editor">Start Custom Design</Link>
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
