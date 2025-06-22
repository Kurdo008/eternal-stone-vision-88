
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31201234567?text=Hallo,%20ik%20heb%20hulp%20nodig%20met%20monumenten', '_blank');
  };

  return (
    <>
      {/* Popup notification */}
      {showPopup && (
        <div className="fixed bottom-24 right-6 z-40 animate-fade-in">
          <Card className="w-56 shadow-lg border-2 border-sage-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-sage-700">Hulp Nodig?</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowPopup(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-sage-600 mb-3">
                Neem direct contact op voor hulp of advies. Binnen enkele uren beantwoord!
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-xs"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating WhatsApp button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-nature-glow"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
};

export default WhatsAppButton;
