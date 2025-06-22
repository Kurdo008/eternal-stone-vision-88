
import { Link } from 'react-router-dom';
import { Mountain, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-sage-600 p-2 rounded-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Eternum Monuments</h3>
              </div>
            </div>
            <p className="text-sage-200 text-sm">
              Waardige monumenten in harmonie met de natuur. Vakmanschap en respect gecombineerd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-sage-200 hover:text-white transition-colors">Producten</Link></li>
              <li><Link to="/editor" className="text-sage-200 hover:text-white transition-colors">3D Editor</Link></li>
              <li><Link to="/about" className="text-sage-200 hover:text-white transition-colors">Over Ons</Link></li>
              <li><Link to="/contact" className="text-sage-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-sage-200">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +31 20 123 4567
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@eternummonuments.nl
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Amsterdam, Nederland
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold mb-4">Openingstijden</h4>
            <ul className="space-y-1 text-sm text-sage-200">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Ma-Vr: 9:00-17:00
              </li>
              <li>Za: 10:00-16:00</li>
              <li>Zo: Gesloten</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center">
          <p className="text-sm text-sage-300">
            © 2024 Eternum Monuments. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
