
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Save, Send, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Monument3D from '@/components/Monument3D';

const Editor = () => {
  const [monumentConfig, setMonumentConfig] = useState({
    shape: 'rectangular',
    material: 'granite',
    color: '#4a4a4a',
    text: 'In Loving Memory',
    fontSize: 'medium',
    textColor: '#333333',
    width: 60,
    height: 80,
    depth: 15
  });

  const materials = [
    { value: 'granite', label: 'Graniet' },
    { value: 'marble', label: 'Marmer' },
    { value: 'bronze', label: 'Brons' }
  ];

  const colors = [
    { value: '#4a4a4a', label: 'Donkergrijs', color: '#4a4a4a' },
    { value: '#2c2c2c', label: 'Zwart', color: '#2c2c2c' },
    { value: '#f5f5f5', label: 'Wit', color: '#f5f5f5' },
    { value: '#8b4513', label: 'Bruin', color: '#8b4513' },
    { value: '#cd7f32', label: 'Brons', color: '#cd7f32' }
  ];

  const handleConfigChange = (key: string, value: string | number) => {
    setMonumentConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveConcept = () => {
    toast.success("Concept opgeslagen!");
    console.log("Saved concept:", monumentConfig);
  };

  const handleSendDesign = () => {
    toast.success("Ontwerp verzonden! We nemen binnen 24 uur contact op.");
    console.log("Sending design:", monumentConfig);
  };

  const handleHelp = () => {
    toast.info("Voor vragen kunt u contact opnemen via WhatsApp of telefoon");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8 px-4 bg-stone-gray text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">3D Monument Editor</h1>
          <p className="text-gray-300">Ontwerp uw monument en bekijk het direct in 3D</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 3D Preview */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  3D Voorvertoning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Monument3D
                  material={monumentConfig.material}
                  text={monumentConfig.text}
                  shape={monumentConfig.shape}
                  color={monumentConfig.color}
                />
                
                {/* Price under 3D monument */}
                <Card className="mt-6 border-bronze/30 bg-gradient-to-r from-bronze/5 to-stone-gray/5">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-stone-gray mb-2">
                        € 1.850
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Inclusief gravure en plaatsing
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <Button onClick={handleHelp} variant="outline" className="flex items-center gap-2">
                          <HelpCircle className="h-4 w-4" />
                          Hulp
                        </Button>
                        <Button onClick={handleSendDesign} className="bg-bronze hover:bg-bronze/90 text-stone-gray">
                          <Send className="h-4 w-4 mr-2" />
                          Verstuur Ontwerp
                        </Button>
                        <Button onClick={handleSaveConcept} variant="outline">
                          <Save className="h-4 w-4 mr-2" />
                          Concept Opslaan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            
            {/* Material & Color Configuration */}
            <Card className="border-2 border-bronze/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-bronze/10 to-stone-gray/10">
                <CardTitle className="text-stone-gray">Materiaal & Kleur</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <Label htmlFor="material" className="text-base font-semibold">Materiaal</Label>
                  <Select value={monumentConfig.material} onValueChange={(value) => handleConfigChange('material', value)}>
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue />
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

                <div>
                  <Label htmlFor="color" className="text-base font-semibold">Kleur</Label>
                  <Select value={monumentConfig.color} onValueChange={(value) => handleConfigChange('color', value)}>
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((color) => (
                        <SelectItem key={color.value} value={color.value}>
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-4 h-4 rounded border"
                              style={{ backgroundColor: color.color }}
                            />
                            {color.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Luxurious Text Configuration */}
            <Card className="border-2 border-bronze/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-bronze/10 to-stone-gray/10">
                <CardTitle className="text-stone-gray">Tekst & Gravure</CardTitle>
                <p className="text-sm text-gray-600 mt-2">Personaliseer uw monument met een betekenisvolle tekst</p>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <Label htmlFor="text" className="text-base font-semibold">Uw Tekst</Label>
                  <Textarea
                    id="text"
                    value={monumentConfig.text}
                    onChange={(e) => handleConfigChange('text', e.target.value)}
                    placeholder="Voer uw persoonlijke tekst in..."
                    rows={4}
                    className="mt-2 resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-2">Tip: Korte, betekenisvolle teksten werken het beste</p>
                </div>
              </CardContent>
            </Card>

            {/* Dimensions with Standard Info */}
            <Card className="border-2 border-bronze/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-bronze/10 to-stone-gray/10">
                <CardTitle className="text-stone-gray">Afmetingen</CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Standaard afmeting: 60 x 80 x 15 cm<br/>
                  <span className="text-xs">Aanpassingen mogelijk op verzoek</span>
                </p>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <Label htmlFor="width" className="text-base font-semibold">Breedte (cm)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={monumentConfig.width}
                    onChange={(e) => handleConfigChange('width', parseInt(e.target.value))}
                    min={30}
                    max={120}
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="height" className="text-base font-semibold">Hoogte (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={monumentConfig.height}
                    onChange={(e) => handleConfigChange('height', parseInt(e.target.value))}
                    min={40}
                    max={150}
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="depth" className="text-base font-semibold">Diepte (cm)</Label>
                  <Input
                    id="depth"
                    type="number"
                    value={monumentConfig.depth}
                    onChange={(e) => handleConfigChange('depth', parseInt(e.target.value))}
                    min={8}
                    max={30}
                    className="mt-2 h-12"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
