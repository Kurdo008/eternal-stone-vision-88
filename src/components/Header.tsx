
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Mountain, ShoppingCart, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const allProducts = [
    'Graniet', 'Marmer', 'Natuursteen', 'Modern', 'Klassiek',
    'Steen Kunst', 'Gedenkstenen', 'Rechtopstaand', 'Liggend', 'Hartvorm',
    'Basalt', 'Zandsteen', 'Rechthoekig', 'Rond'
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const filtered = allProducts.filter(product => 
        product.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4);
      setSearchSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    navigate(`/products?search=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  const collections = [
    { name: 'Graniet', path: '/products?category=rechtop&material=graniet' },
    { name: 'Marmer', path: '/products?category=rechtop&material=marmer' },
    { name: 'Natuursteen', path: '/products?category=rechtop&material=zandsteen' },
    { name: 'Modern', path: '/products?category=speciaal' },
    { name: 'Klassiek', path: '/products?category=rechtop' },
    { name: '3D Ontwerp', path: '/editor', isSpecial: true }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-sage-200 sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="bg-sage-600 p-2 rounded-lg">
              <Mountain className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-lg md:text-xl font-bold text-sage-700">Aurora Stenen</h1>
              <p className="text-xs text-sage-500">Natuursteen & Gedenkstenen</p>
            </div>
          </Link>

          {/* Search Bar - Mobile optimized */}
          <div className="flex-1 max-w-md md:max-w-2xl mx-2 md:mx-8 relative">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sage-400" />
                <Input
                  type="text"
                  placeholder="Zoek gedenkstenen..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  onFocus={() => searchQuery && setShowSuggestions(true)}
                  className="pl-10 pr-4 py-2 w-full border-sage-300 focus:border-sage-500 focus:ring-sage-500 text-sm"
                />
              </div>
            </form>
            
            {/* Search Suggestions */}
            {showSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-sage-200 rounded-md shadow-lg mt-1 z-50">
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-2 hover:bg-sage-50 text-sm text-sage-700"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right side actions - Mobile optimized */}
          <div className="flex items-center space-x-1 md:space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-sage-600 hover:text-sage-700 hover:bg-sage-50 p-2"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-medium px-3 md:px-6 py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg border-2 border-sage-500/20"
              asChild
            >
              <Link to="/contact">
                <span className="flex items-center">
                  Contact
                  <div className="ml-2 w-2 h-2 bg-white/30 rounded-full"></div>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Collections bar - Mobile optimized */}
      <div className="bg-sage-50 border-t border-sage-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 md:space-x-8 py-3 overflow-x-auto">
            {collections.map((collection) => (
              <Link
                key={collection.name}
                to={collection.path}
                className={`text-xs md:text-sm font-medium whitespace-nowrap transition-colors flex items-center ${
                  collection.isSpecial 
                    ? 'text-white bg-sage-600 px-2 md:px-3 py-1 rounded-full hover:bg-sage-700' 
                    : 'text-sage-600 hover:text-sage-800 bg-sage-200/50 px-2 md:px-3 py-1 rounded-full hover:bg-sage-300/50'
                }`}
              >
                {collection.isSpecial && <Palette className="h-3 w-3 md:h-4 md:w-4 mr-1" />}
                {collection.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
