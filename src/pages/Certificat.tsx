import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, Clock, Users, CheckCircle, Star, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Certificat = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Certificat data
  const certificatsData = [
    {
      id: "certificat-developpement-web",
      title: "Certificat Développement Web",
      description: "Certification professionnelle en développement web moderne",
      duration: "6 mois",
      level: "Professionnel",
      modules: [
        "HTML5 et CSS3",
        "JavaScript ES6+",
        "React.js",
        "Node.js",
        "Bases de données",
        "Déploiement"
      ],
      careers: [
        "Développeur Web Junior",
        "Intégrateur Web",
        "Freelance Web Developer"
      ],
      skills: [
        "Développement frontend",
        "Création d'APIs",
        "Gestion de bases de données",
        "Déploiement web"
      ],
      price: "15,000 MAD",
      certification: "Certification Professionnelle",
      requirements: [
        "Baccalauréat ou équivalent",
        "Connaissances de base en informatique",
        "Motivation et assiduité"
      ]
    },
    {
      id: "certificat-marketing-digital",
      title: "Certificat Marketing Digital",
      description: "Formation complète en marketing digital et réseaux sociaux",
      duration: "16h (4h x 4 séances)",
      level: "Professionnel",
      modules: [
        "Stratégie marketing digital",
        "SEO et SEM",
        "Réseaux sociaux",
        "Email marketing",
        "Analytics",
        "E-commerce"
      ],
      careers: [
        "Community Manager",
        "Digital Marketer",
        "SEO Specialist",
        "E-commerce Manager"
      ],
      skills: [
        "Stratégie digitale",
        "Gestion des réseaux sociaux",
        "Analyse de données",
        "Campagnes publicitaires"
      ],
      price: "12,000 MAD",
      certification: "Certification Professionnelle",
      requirements: [
        "Baccalauréat ou équivalent",
        "Intérêt pour le digital",
        "Créativité"
      ]
    },
    {
      id: "certificat-gestion-projet",
      title: "Certificat Gestion de Projet",
      description: "Maîtrise des outils et méthodes de gestion de projet",
      duration: "3 mois",
      level: "Professionnel",
      modules: [
        "Méthodologies agiles",
        "Planification et suivi",
        "Gestion d'équipe",
        "Outils de gestion",
        "Communication projet",
        "Gestion des risques"
      ],
      careers: [
        "Chef de projet",
        "Project Manager",
        "Scrum Master",
        "Coordinateur de projet"
      ],
      skills: [
        "Planification",
        "Gestion d'équipe",
        "Communication",
        "Résolution de problèmes"
      ],
      price: "10,000 MAD",
      certification: "Certification Professionnelle",
      requirements: [
        "Baccalauréat ou équivalent",
        "Expérience professionnelle recommandée",
        "Leadership"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')} 
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Button>
          
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Certificats Professionnels</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des certifications professionnelles reconnues pour booster votre carrière
          </p>
        </div>

        {/* Certificats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {certificatsData.map((certificat) => (
            <Card 
              key={certificat.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/30 active:scale-95"
              onClick={() => {
                console.log('Certificate clicked:', certificat.id);
                navigate(`/certificat/${certificat.id}`);
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {certificat.level}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {certificat.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {certificat.description}
                </CardDescription>
                <div className="text-xs text-primary/70 mt-2 group-hover:text-primary transition-colors">
                  👆 Cliquez pour voir les détails
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Duration and Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{certificat.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {certificat.price}
                  </div>
                </div>

                {/* Modules */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Modules principaux
                  </h4>
                  <div className="space-y-1">
                    {certificat.modules.slice(0, 4).map((module, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span>{module}</span>
                      </div>
                    ))}
                    {certificat.modules.length > 4 && (
                      <div className="text-xs text-gray-500 ml-5">
                        +{certificat.modules.length - 4} autres modules
                      </div>
                    )}
                  </div>
                </div>

                {/* Careers */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Débouchés
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {certificat.careers.slice(0, 2).map((career, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {career}
                      </Badge>
                    ))}
                    {certificat.careers.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{certificat.careers.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Certificate details button clicked:', certificat.id);
                    navigate(`/certificat/${certificat.id}`);
                  }}
                >
                  📋 Voir les détails
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à obtenir votre certification ?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactez-nous pour plus d'informations sur nos programmes de certification
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('contact')}
            >
              Demander des informations
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/')}
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Certificat;
