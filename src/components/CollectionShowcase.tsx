
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionShowcase = () => {
  const collections = [
    {
      name: 'Graniet',
      description: 'Duurzaam en elegant graniet voor eeuwige monumenten',
      image: '/lovable-uploads/3d8bd79b-695c-4e81-a1f5-be4438c59390.png',
      path: '/products?category=rechtop&material=graniet',
      highlight: false
    },
    {
      name: 'Marmer',
      description: 'Klassieke marmeren monumenten met tijdloze schoonheid',
      image: '/lovable-uploads/2de35e37-3622-499a-82ec-2df7299494e0.png',
      path: '/products?category=rechtop&material=marmer',
      highlight: true
    },
    {
      name: 'Natuursteen',
      description: 'Authentieke natuursteen direct uit de natuur',
      image: '/lovable-uploads/f0ad3896-94f1-46b6-a5b1-abe90a55da80.png',
      path: '/products?category=rechtop&material=zandsteen',
      highlight: false
    },
    {
      name: 'Modern',
      description: 'Moderne designs voor hedendaagse monumenten',
      image: '/lovable-uploads/71035eda-0c60-4379-a78a-b1ef9a736998.png',
      path: '/products?category=speciaal',
      highlight: false
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sage-700 mb-2 md:mb-4">
            Onze Monument Collecties
          </h2>
          <p className="text-sm md:text-lg text-sage-600 max-w-2xl mx-auto">
            Ontdek onze uitgebreide collectie van hoogwaardige monumenten
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className={`
                overflow-hidden transition-all duration-300 group h-full flex flex-col
                ${collection.highlight 
                  ? 'border-2 border-sage-400 shadow-lg hover:shadow-xl hover:border-sage-500 bg-gradient-to-b from-white to-sage-50' 
                  : 'border-2 hover:border-sage-300/50 hover:shadow-lg'
                }
              `}
            >
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 relative overflow-hidden">
                {collection.highlight && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-sage-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Populair</span>
                    </div>
                  </div>
                )}
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className={`p-4 md:p-6 flex-1 flex flex-col justify-between ${collection.highlight ? 'bg-gradient-to-b from-sage-50 to-white' : ''}`}>
                <div>
                  <h3 className={`text-lg md:text-xl font-semibold mb-2 ${collection.highlight ? 'text-sage-800' : 'text-sage-700'}`}>
                    {collection.name}
                  </h3>
                  <p className="text-sm md:text-base text-sage-600 mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                </div>
                <Button 
                  asChild
                  variant={collection.highlight ? "default" : "outline"}
                  size="sm"
                  className={`
                    w-full text-sm mt-auto transition-all duration-200
                    ${collection.highlight 
                      ? 'bg-sage-600 hover:bg-sage-700 text-white shadow-md hover:shadow-lg' 
                      : 'border-sage-500 text-sage-700 bg-sage-200 hover:bg-sage-300 hover:border-sage-600 hover:text-sage-700'
                    }
                  `}
                >
                  <Link to={collection.path} className="flex items-center justify-center">
                    Bekijk Collectie 
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-xl p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Niet gevonden wat u zoekt?
            </h3>
            <p className="text-sage-100 mb-6 max-w-2xl mx-auto">
              Wij maken ook volledig op maat gemaakte monumenten. 
              Neem contact met ons op voor een persoonlijk advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="secondary"
                className="bg-white text-sage-700 hover:bg-sage-50"
              >
                <Link to="/contact">
                  Persoonlijk Advies
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-700"
              >
                <Link to="/editor">
                  3D Editor Proberen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
