
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionShowcase = () => {
  const collections = [
    {
      name: 'Graniet',
      description: 'Duurzaam en elegant graniet voor eeuwige monumenten',
      image: '/api/placeholder/300/300',
      path: '/products?type=graniet'
    },
    {
      name: 'Marmer',
      description: 'Klassieke marmeren monumenten met tijdloze schoonheid',
      image: '/api/placeholder/300/300',
      path: '/products?type=marmer'
    },
    {
      name: 'Natuursteen',
      description: 'Authentieke natuursteen direct uit de natuur',
      image: '/api/placeholder/300/300',
      path: '/products?type=natuursteen'
    },
    {
      name: 'Modern',
      description: 'Moderne designs voor hedendaagse monumenten',
      image: '/api/placeholder/300/300',
      path: '/products?type=modern'
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
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-sage-300/50 transition-colors group">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-sage-500 group-hover:text-sage-600 transition-colors" />
                </div>
              </div>
              <CardContent className="p-3 md:p-4 lg:p-6">
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-sage-700 mb-1 md:mb-2">{collection.name}</h3>
                <p className="text-xs md:text-sm text-sage-600 mb-3 md:mb-4 line-clamp-2">{collection.description}</p>
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 text-xs"
                >
                  <Link to={collection.path}>
                    Bekijk Collectie <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
