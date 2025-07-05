
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionShowcase = () => {
  const collections = [
    {
      name: 'Test A',
      description: 'Duurzaam en elegant test product voor test doeleinden',
      image: '/lovable-uploads/3d8bd79b-695c-4e81-a1f5-be4438c59390.png',
      path: '/products?category=rechtop&material=graniet'
    },
    {
      name: 'Test B',
      description: 'Klassieke test producten met tijdloze schoonheid',
      image: '/lovable-uploads/2de35e37-3622-499a-82ec-2df7299494e0.png',
      path: '/products?category=rechtop&material=marmer'
    },
    {
      name: 'Test C',
      description: 'Authentieke test materiaal direct uit de natuur',
      image: '/lovable-uploads/f0ad3896-94f1-46b6-a5b1-abe90a55da80.png',
      path: '/products?category=rechtop&material=zandsteen'
    },
    {
      name: 'Test Modern',
      description: 'Moderne test designs voor hedendaagse toepassingen',
      image: '/lovable-uploads/71035eda-0c60-4379-a78a-b1ef9a736998.png',
      path: '/products?category=speciaal'
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sage-700 mb-2 md:mb-4">
            Onze Test Collecties
          </h2>
          <p className="text-sm md:text-lg text-sage-600 max-w-2xl mx-auto">
            Ontdek onze uitgebreide collectie van hoogwaardige test producten
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-sage-300/50 transition-colors group h-full flex flex-col">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-3 md:p-4 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-sage-700 mb-1 md:mb-2">{collection.name}</h3>
                  <p className="text-xs md:text-sm text-sage-600 mb-3 md:mb-4 line-clamp-2">{collection.description}</p>
                </div>
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="w-full border-sage-300 text-white bg-sage-600 hover:bg-sage-700 text-xs mt-auto"
                >
                  <Link to={collection.path}>
                    Bekijk Test Collectie <ArrowRight className="ml-1 h-3 w-3" />
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
