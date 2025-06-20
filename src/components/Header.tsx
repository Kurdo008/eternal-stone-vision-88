
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Mountain, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const collections = [
    { name: 'Graniet', path: '/products?type=graniet' },
    { name: 'Marmer', path: '/products?type=marmer' },
    { name: 'Natuursteen', path: '/products?type=natuursteen' },
    { name: 'Modern', path: '/products?type=modern' },
    { name: 'Klassiek', path: '/products?type=klassiek' }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-sage-200 sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-sage-600 p-2 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sage-700">Eternum Monuments</h1>
              <p className="text-xs text-sage-500">Grafstenen & Monumenten</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sage-400" />
              <Input
                type="text"
                placeholder="Zoek naar monumenten, materialen of stijlen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-sage-300 focus:border-sage-500 focus:ring-sage-500"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-sage-600 hover:text-sage-700 hover:bg-sage-50"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-sage-600 hover:text-sage-700 hover:bg-sage-50"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-sage-600 hover:bg-sage-700 text-white font-medium"
              asChild
            >
              <Link to="/editor">3D Editor</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Collections bar */}
      <div className="bg-sage-50 border-t border-sage-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-3">
            {collections.map((collection) => (
              <Link
                key={collection.name}
                to={collection.path}
                className="text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors"
              >
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
