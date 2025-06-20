
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');

  const products = [
    {
      id: 1,
      name: "Klassieke Rechte Steen",
      category: "rechtop",
      material: "graniet",
      price: "€ 1.250",
      image: "/placeholder.svg",
      description: "Elegante rechte grafsteen in donker graniet"
    },
    {
      id: 2,
      name: "Hartvorm Monument",
      category: "speciaal",
      material: "marmer",
      price: "€ 1.850",
      image: "/placeholder.svg",
      description: "Liefdevol hartvormig monument in wit marmer"
    },
    {
      id: 3,
      name: "Liggende Familie Steen",
      category: "liggend",
      material: "graniet",
      price: "€ 2.100",
      image: "/placeholder.svg",
      description: "Ruime liggende steen voor meerdere personen"
    },
    {
      id: 4,
      name: "Moderne Minimalistische Steen",
      category: "rechtop",
      material: "basalt",
      price: "€ 1.650",
      image: "/placeholder.svg",
      description: "Strak moderne vormgeving in zwart basalt"
    },
    {
      id: 5,
      name: "Traditionele Kruis Vorm",
      category: "speciaal",
      material: "zandsteen",
      price: "€ 1.450",
      image: "/placeholder.svg",
      description: "Klassieke kruisvorm in natuurlijke zandsteen"
    },
    {
      id: 6,
      name: "Dubbele Rechte Steen",
      category: "rechtop",
      material: "graniet",
      price: "€ 1.950",
      image: "/placeholder.svg",
      description: "Dubbele steen voor twee personen"
    }
  ];

  const categories = [
    { value: 'all', label: 'Alle Categorieën' },
    { value: 'rechtop', label: 'Rechtopstaand' },
    { value: 'liggend', label: 'Liggend' },
    { value: 'speciaal', label: 'Speciale Vormen' }
  ];

  const materials = [
    { value: 'all', label: 'Alle Materialen' },
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-stone-gray text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Onze Monument Collectie</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ontdek onze uitgebreide collectie grafmonumenten, elk met zorg vervaardigd en beschikbaar in 3D
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-stone-gray" />
              <span className="font-medium text-stone-gray">Filters:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Categorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Materiaal" />
                </SelectTrigger>
                <SelectContent>
                  {materials.map((material) => (
                    <SelectItem key={material.value} value={material.value}>
                      {material.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-bronze/30">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="bg-white/90 text-stone-gray hover:bg-white"
                      asChild
                    >
                      <Link to={`/editor?product=${product.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        Bekijk in 3D
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-stone-gray mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-bronze bg-bronze/10 px-3 py-1 rounded-full">
                      {materials.find(m => m.value === product.material)?.label}
                    </span>
                    <span className="text-2xl font-bold text-stone-gray">{product.price}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      className="flex-1 border-stone-gray text-stone-gray hover:bg-stone-gray hover:text-white"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>Details</Link>
                    </Button>
                    <Button
                      className="flex-1 bg-bronze hover:bg-bronze/90 text-stone-gray"
                      asChild
                    >
                      <Link to={`/editor?product=${product.id}`}>
                        3D Editor <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 memorial-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Niet Gevonden Wat U Zoekt?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Wij maken ook volledig op maat gemaakte monumenten. Neem contact met ons op voor de mogelijkheden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-bronze hover:bg-bronze/90 text-stone-gray"
              asChild
            >
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-stone-gray"
              asChild
            >
              <Link to="/editor">Start Custom Design</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
