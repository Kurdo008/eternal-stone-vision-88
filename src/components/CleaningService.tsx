
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CleaningService = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-moss-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-sage-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700">
              Professionele Grafsteen Reiniging
            </h2>
          </div>
          <p className="text-lg md:text-xl text-sage-600 max-w-2xl mx-auto">
            Herstel de natuurlijke schoonheid van uw monument met onze specialistische reinigingsservice
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Voor</span>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center">
                  <span className="text-sage-700 font-semibold">Na</span>
                </div>
              </Card>
            </div>
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                  <span className="text-white font-semibold">Voor</span>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-300 flex items-center justify-center">
                  <span className="text-sage-700 font-semibold">Na</span>
                </div>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-sage-700 mb-4">
              Vakkundige Zorg voor Uw Monument
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-sage-700">Milieuvriendelijk</h4>
                  <p className="text-sage-600 text-sm">Specialistische reinigingsmiddelen die het materiaal respecteren</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-sage-700">Ervaren Vakmensen</h4>
                  <p className="text-sage-600 text-sm">Jarenlange ervaring met verschillende materiaalsoorten</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-sage-600 rounded-full mr-3 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-sage-700">Beschermende Behandeling</h4>
                  <p className="text-sage-600 text-sm">Optionele beschermlaag tegen toekomstige vervuiling</p>
                </div>
              </div>
            </div>
            <Button 
              className="bg-sage-600 hover:bg-sage-700 text-white" 
              asChild
            >
              <Link to="/cleaning">
                Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningService;
