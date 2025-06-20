
import { Users, Award, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Medeleven",
      description: "Wij begrijpen de emotionele waarde van elk monument"
    },
    {
      icon: Award,
      title: "Vakmanschap",
      description: "Traditionele technieken gecombineerd met moderne technologie"
    },
    {
      icon: Clock,
      title: "Ervaring",
      description: "Meer dan 50 jaar ervaring in grafmonumenten"
    },
    {
      icon: Users,
      title: "Familie",
      description: "Een familiebedrijf dat generaties heeft bediend"
    }
  ];

  const team = [
    {
      name: "Jan van der Steen",
      role: "Oprichter & Meester Steenhouwer",
      experience: "45 jaar ervaring",
      description: "Jan begon zijn carrière als leerling steenhouwer en heeft het bedrijf opgebouwd tot wat het vandaag is."
    },
    {
      name: "Maria van der Steen",
      role: "Directeur & Designer",
      experience: "25 jaar ervaring", 
      description: "Maria heeft de 3D technologie geïntroduceerd en zorgt voor de moderne uitstraling van onze monumenten."
    },
    {
      name: "Pieter van der Steen",
      role: "Technisch Manager",
      experience: "15 jaar ervaring",
      description: "Pieter leidt ons technische team en zorgt voor de perfecte uitvoering van elk monument."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 memorial-gradient text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Over Eternum Monuments</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Sinds 1970 helpen wij families bij het creëren van waardige monumenten 
            ter nagedachtenis aan hun geliefden. Traditie, vakmanschap en innovatie 
            gaan bij ons hand in hand.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-gray mb-6">Ons Verhaal</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Eternum Monuments werd opgericht in 1970 door Jan van der Steen, 
                  een gepassioneerde steenhouwer met een droom om families te helpen 
                  bij het eren van hun geliefden met waardige monumenten.
                </p>
                <p>
                  Wat begon als een kleine werkplaats in het hart van Nederland, 
                  is uitgegroeid tot een van de meest gerespecteerde monumentenbedrijven 
                  van het land. Wij combineren traditionele vakmanschap met moderne 
                  3D technologie.
                </p>
                <p>
                  Vandaag de dag wordt het familiebedrijf gerund door de tweede generatie, 
                  waarbij de waarden van kwaliteit, respect en persoonlijke service 
                  centraal blijven staan.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-stone-gray mx-auto mb-4" />
                  <p className="text-gray-600">Historische foto van de werkplaats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-gray mb-4">Onze Waarden</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deze principes vormen de basis van alles wat wij doen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-bronze/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-gray mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-gray mb-4">Ons Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leer de mensen kennen achter Eternum Monuments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-stone-gray to-stone-dark rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-gray mb-2">{member.name}</h3>
                  <p className="text-bronze font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-gray mb-4">Onze Geschiedenis</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "1970", title: "Oprichting", description: "Jan van der Steen start zijn eigen steenhouwers werkplaats" },
                { year: "1985", title: "Uitbreiding", description: "Verhuizing naar een groter pand en uitbreiding van het team" },
                { year: "2000", title: "Tweede Generatie", description: "Maria en Pieter nemen de leiding over van het familiebedrijf" },
                { year: "2015", title: "Digitalisering", description: "Introductie van CAD software en moderne ontwerptechnieken" },
                { year: "2023", title: "3D Innovatie", description: "Lancering van onze revolutionaire 3D monument configurator" }
              ].map((milestone, index) => (
                <div key={index} className="flex gap-8 items-center">
                  <div className="bg-bronze text-stone-gray font-bold px-4 py-2 rounded-lg min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-stone-gray mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
