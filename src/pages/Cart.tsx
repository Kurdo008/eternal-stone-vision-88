
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CartItem {
  id: number;
  name: string;
  material: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Sample products for the new section
  const sampleProducts = [
    {
      id: 1,
      name: "Klassieke Rechte Steen",
      material: "Graniet",
      price: 1250,
      image: "/placeholder.svg",
      description: "Elegante rechte grafsteen in donker graniet"
    },
    {
      id: 2,
      name: "Hartvorm Monument",
      material: "Marmer",
      price: 1850,
      image: "/placeholder.svg",
      description: "Liefdevol hartvormig monument in wit marmer"
    },
    {
      id: 3,
      name: "Moderne Minimalistische Steen",
      material: "Basalt",
      price: 1650,
      image: "/placeholder.svg",
      description: "Strak moderne vormgeving in zwart basalt"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-moss-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-sage-700 mb-8">Winkelwagen</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-sage-400 mx-auto mb-4" />
            <p className="text-sage-600 mb-4">Uw winkelwagen is leeg</p>
            <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white">
              <Link to="/products">Verder Winkelen</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sage-700">{item.name}</h3>
                        <p className="text-sage-600 text-sm">{item.material}</p>
                        <p className="text-sage-700 font-bold">€ {item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, 0)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sage-700 mb-4">Bestelling Overzicht</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotaal:</span>
                      <span>€ {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Verzendkosten:</span>
                      <span>Gratis</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Totaal:</span>
                        <span>€ {total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                    <Link to="/checkout">Bestelling Plaatsen</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Section with sample products */}
        <section className="mt-16 py-12 px-4 bg-gradient-to-br from-sage-100 to-sage-200 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-sage-700 mb-4">
              Meer Grafstenen
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Ontdek onze uitgebreide collectie of maak uw eigen unieke ontwerp
            </p>
          </div>
          
          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {sampleProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sage-700 mb-1">{product.name}</h3>
                  <p className="text-sage-600 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-sage-600 bg-sage-100 px-2 py-1 rounded-full">
                      {product.material}
                    </span>
                    <span className="font-bold text-sage-700">€ {product.price.toLocaleString()}</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                    onClick={() => {
                      const newItem: CartItem = {
                        id: product.id,
                        name: product.name,
                        material: product.material,
                        price: product.price,
                        quantity: 1,
                        image: product.image
                      };
                      
                      const existingItem = cartItems.find(item => item.id === product.id);
                      if (existingItem) {
                        updateQuantity(product.id, existingItem.quantity + 1);
                      } else {
                        setCartItems([...cartItems, newItem]);
                      }
                    }}
                  >
                    Toevoegen aan Winkelwagen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Design Button */}
          <div className="text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <div className="bg-sage-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-sage-700 mb-2">Maak Je Eigen Ontwerp</h3>
                <p className="text-sage-600 mb-4">
                  Ontwerp uw unieke monument met onze 3D editor
                </p>
                <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white">
                  <Link to="/editor">
                    Start 3D Editor
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
