
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedMaterial = searchParams.get('material') || 'all';
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Klassieke Rechte Steen",
      category: "rechtop",
      material: "graniet",
      price: 1250,
      priceFormatted: "€ 1.250",
      image: "/placeholder.svg",
      description: "Elegante rechte grafsteen in donker graniet",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: 2,
      name: "Hartvorm Monument",
      category: "speciaal",
      material: "marmer",
      price: 1850,
      priceFormatted: "€ 1.850",
      image: "/placeholder.svg",
      description: "Liefdevol hartvormig monument in wit marmer"
    },
    {
      id: 3,
      name: "Liggende Familie Steen",
      category: "liggend",
      material: "graniet",
      price: 2100,
      priceFormatted: "€ 2.100",
      image: "/placeholder.svg",
      description: "Ruime liggende steen voor meerdere personen"
    },
    {
      id: 4,
      name: "Moderne Minimalistische Steen",
      category: "rechtop",
      material: "basalt",
      price: 1650,
      priceFormatted: "€ 1.650",
      image: "/placeholder.svg",
      description: "Strak moderne vormgeving in zwart basalt"
    },
    {
      id: 5,
      name: "Traditionele Kruis Vorm",
      category: "speciaal",
      material: "zandsteen",
      price: 1450,
      priceFormatted: "€ 1.450",
      image: "/placeholder.svg",
      description: "Klassieke kruisvorm in natuurlijke zandsteen"
    },
    {
      id: 6,
      name: "Dubbele Rechte Steen",
      category: "rechtop",
      material: "graniet",
      price: 1950,
      priceFormatted: "€ 1.950",
      image: "/placeholder.svg",
      description: "Dubbele steen voor twee personen"
    }
  ];

  const materials = [
    { value: 'graniet', label: 'Graniet' },
    { value: 'marmer', label: 'Marmer' },
    { value: 'basalt', label: 'Basalt' },
    { value: 'zandsteen', label: 'Zandsteen' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const materialMatch = selectedMaterial === 'all' || product.material === selectedMaterial;
    
    return categoryMatch && materialMatch;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    toast({
      title: "Product toegevoegd!",
      description: `${product.name} is toegevoegd aan uw winkelwagen`,
    });
  };

  const getFilterTitle = () => {
    if (selectedMaterial !== 'all') {
      const material = materials.find(m => m.value === selectedMaterial);
      return `${material?.label} Monumenten`;
    }
    if (selectedCategory !== 'all') {
      return `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Monumenten`;
    }
    return 'Onze Monument Collectie';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-moss-50">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-12 md:py-16 px-4 nature-gradient text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{getFilterTitle()}</h1>
          <p className="text-sm md:text-lg text-sage-100 max-w-2xl mx-auto">
            Ontdek onze uitgebreide collectie grafmonumenten, elk met zorg vervaardigd en beschikbaar in 3D
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-sage-300/30 h-full flex flex-col">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="p-3 md:p-4 lg:p-6 flex-1 flex flex-col">
                  <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-sage-700 mb-1 md:mb-2">{product.name}</h3>
                  <p className="text-xs md:text-sm text-sage-600 mb-2 md:mb-4 line-clamp-2 flex-1">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs md:text-sm font-medium text-sage-600 bg-sage-100 px-2 py-1 rounded-full">
                      {materials.find(m => m.value === product.material)?.label}
                    </span>
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-sage-700">{product.priceFormatted}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-3 md:p-4 lg:p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button
                      size="sm"
                      className="flex-1 bg-forest-600 hover:bg-forest-700 text-white text-xs"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Toevoegen
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-sage-600 hover:bg-sage-700 text-white text-xs"
                      asChild
                    >
                      <Link to={`/editor?product=${product.id}`}>
                        3D Editor <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-forest-600 to-forest-700 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Niet Gevonden Wat U Zoekt?</h2>
          <p className="text-base md:text-xl text-forest-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            Wij maken ook volledig op maat gemaakte monumenten.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-forest-500 hover:bg-forest-600 text-white border-none"
              asChild
            >
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
            <Button 
              size="lg" 
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

export default Products;
