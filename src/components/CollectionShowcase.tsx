
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
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-700 mb-4">
            Onze Monument Collecties
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Ontdek onze uitgebreide collectie van hoogwaardige monumenten
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-sage-300/50 transition-colors group">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="h-20 w-20 text-sage-500 group-hover:text-sage-600 transition-colors" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-sage-700 mb-2">{collection.name}</h3>
                <p className="text-sage-600 text-sm mb-4">{collection.description}</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-sage-300 text-sage-700 hover:bg-sage-50"
                >
                  <Link to={collection.path}>
                    Bekijk Collectie <ArrowRight className="ml-2 h-4 w-4" />
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
