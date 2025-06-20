
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Save, Download, RotateCcw, Eye } from 'lucide-react';
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

  const shapes = [
    { value: 'rectangular', label: 'Rechthoekig' },
    { value: 'cross', label: 'Kruis' },
    { value: 'heart', label: 'Hart' }
  ];

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

  const handleSave = () => {
    toast.success("Monument configuratie opgeslagen!");
    console.log("Saved configuration:", monumentConfig);
  };

  const handleExport = () => {
    toast.success("3D model geëxporteerd als PDF!");
    console.log("Exporting configuration:", monumentConfig);
  };

  const handleReset = () => {
    setMonumentConfig({
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
    toast.info("Configuratie gereset naar standaardwaarden");
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
                  <Eye className="h-5 w-5" />
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
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                    <Save className="h-4 w-4 mr-2" />
                    Opslaan
                  </Button>
                  <Button onClick={handleExport} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exporteer PDF
                  </Button>
                  <Button onClick={handleReset} variant="outline">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            
            {/* Shape Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>Vorm & Materiaal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="shape">Vorm</Label>
                  <Select value={monumentConfig.shape} onValueChange={(value) => handleConfigChange('shape', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {shapes.map((shape) => (
                        <SelectItem key={shape.value} value={shape.value}>
                          {shape.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="material">Materiaal</Label>
                  <Select value={monumentConfig.material} onValueChange={(value) => handleConfigChange('material', value)}>
                    <SelectTrigger>
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
                  <Label htmlFor="color">Kleur</Label>
                  <Select value={monumentConfig.color} onValueChange={(value) => handleConfigChange('color', value)}>
                    <SelectTrigger>
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

            {/* Text Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>Tekst & Gravure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="text">Tekst</Label>
                  <Textarea
                    id="text"
                    value={monumentConfig.text}
                    onChange={(e) => handleConfigChange('text', e.target.value)}
                    placeholder="Voer uw tekst in..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dimensions */}
            <Card>
              <CardHeader>
                <CardTitle>Afmetingen (cm)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="width">Breedte</Label>
                  <Input
                    id="width"
                    type="number"
                    value={monumentConfig.width}
                    onChange={(e) => handleConfigChange('width', parseInt(e.target.value))}
                    min={30}
                    max={120}
                  />
                </div>
                <div>
                  <Label htmlFor="height">Hoogte</Label>
                  <Input
                    id="height"
                    type="number"
                    value={monumentConfig.height}
                    onChange={(e) => handleConfigChange('height', parseInt(e.target.value))}
                    min={40}
                    max={150}
                  />
                </div>
                <div>
                  <Label htmlFor="depth">Diepte</Label>
                  <Input
                    id="depth"
                    type="number"
                    value={monumentConfig.depth}
                    onChange={(e) => handleConfigChange('depth', parseInt(e.target.value))}
                    min={8}
                    max={30}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Estimate */}
            <Card className="border-bronze/30">
              <CardHeader>
                <CardTitle className="text-bronze">Prijs Indicatie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-gray mb-2">
                    € 1.850
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Inclusief gravure en plaatsing
                  </p>
                  <Button 
                    className="w-full bg-bronze hover:bg-bronze/90 text-stone-gray"
                    onClick={() => toast.success("Offerte aangevraagd! We nemen binnen 24 uur contact op.")}
                  >
                    Vraag Offerte Aan
                  </Button>
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
