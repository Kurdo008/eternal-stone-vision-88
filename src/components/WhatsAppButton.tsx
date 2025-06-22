
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WhatsAppButtonProps {
  showPopup?: boolean;
}

const WhatsAppButton = ({ showPopup = true }: WhatsAppButtonProps) => {
  const [showHomePopup, setShowHomePopup] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
  }, []);

  useEffect(() => {
    if (showPopup && isHomePage) {
      const timer = setTimeout(() => {
        setShowHomePopup(true);
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [showPopup, isHomePage]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31201234567?text=Hallo,%20ik%20heb%20hulp%20nodig%20met%20monumenten', '_blank');
  };

  return (
    <>
      {/* Homepage popup only */}
      {showHomePopup && isHomePage && (
        <div className="fixed bottom-20 right-2 md:right-6 z-40 animate-fade-in">
          <Card className="w-40 md:w-48 shadow-lg border-2 border-sage-300">
            <CardHeader className="pb-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xs md:text-sm text-sage-700">Hulp Nodig?</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowHomePopup(false)}
                  className="h-5 w-5 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-sage-600 mb-2">
                Neem direct contact op voor hulp of advies.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-xs"
              >
                <img 
                  src="/lovable-uploads/31004f9e-8700-40fc-9c29-ae4a60096a94.png" 
                  alt="WhatsApp" 
                  className="h-3 w-3 mr-2" 
                />
                Chat via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Fixed WhatsApp button (always visible) */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Contact via WhatsApp"
      >
        <img 
          src="/lovable-uploads/31004f9e-8700-40fc-9c29-ae4a60096a94.png" 
          alt="WhatsApp" 
          className="h-6 w-6" 
        />
      </button>
    </>
  );
};

export default WhatsAppButton;
