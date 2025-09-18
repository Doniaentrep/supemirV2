import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, GraduationCap, Clock, Users, CheckCircle, Star, BookOpen, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Diplome = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Diplôme data
  const diplomesData = [
    {
      id: "licence-developpement-web",
      title: "Licence Développement Web Full Stack",
      description: "Formation complète en développement web front-end et back-end",
      duration: "1 an",
      level: "Bac+3",
      type: "licence",
      modules: [
        "HTML5 et CSS3 avancés",
        "JavaScript ES6+ et frameworks",
        "React.js et Vue.js",
        "Node.js et Express",
        "Bases de données",
        "API REST et GraphQL",
        "Déploiement et DevOps",
        "Projet de fin d'études"
      ],
      careers: [
        "Développeur Web Full Stack",
        "Développeur Frontend",
        "Développeur Backend",
        "Architecte Web"
      ],
      skills: [
        "Développement full stack",
        "Frameworks modernes",
        "Bases de données",
        "Déploiement cloud"
      ],
      price: "25,000 MAD/an",
      certification: "Diplôme d'État",
      requirements: [
        "Baccalauréat ou équivalent",
        "Connaissances en informatique",
        "Test d'admission"
      ]
    },
    {
      id: "licence-marketing-digital",
      title: "Licence Marketing Digital",
      description: "Formation complète en marketing digital et communication",
      duration: "1 an",
      level: "Bac+3",
      type: "licence",
      modules: [
        "Stratégie marketing digital",
        "SEO et SEM",
        "Réseaux sociaux",
        "Content marketing",
        "Email marketing",
        "Analytics et data",
        "E-commerce",
        "Projet de campagne"
      ],
      careers: [
        "Digital Marketer",
        "Community Manager",
        "SEO Specialist",
        "E-commerce Manager"
      ],
      skills: [
        "Stratégie digitale",
        "Gestion des réseaux sociaux",
        "Analyse de données",
        "Campagnes publicitaires"
      ],
      price: "22,000 MAD/an",
      certification: "Diplôme d'État",
      requirements: [
        "Baccalauréat ou équivalent",
        "Intérêt pour le marketing",
        "Créativité"
      ]
    },
    {
      id: "master-developpement-web",
      title: "Master Développement Web Avancé",
      description: "Formation avancée en développement web et technologies émergentes",
      duration: "1 an",
      level: "Bac+5",
      type: "master",
      modules: [
        "Architecture web avancée",
        "Microservices et APIs",
        "DevOps et CI/CD",
        "Sécurité web",
        "Performance et optimisation",
        "Technologies émergentes",
        "Gestion de projet agile",
        "Mémoire de fin d'études"
      ],
      careers: [
        "Lead Developer",
        "Architecte Web",
        "Tech Lead",
        "CTO"
      ],
      skills: [
        "Architecture avancée",
        "DevOps et automation",
        "Sécurité web",
        "Leadership technique"
      ],
      price: "30,000 MAD/an",
      certification: "Master d'État",
      requirements: [
        "Licence en informatique ou équivalent",
        "Expérience en développement",
        "Entretien d'admission"
      ]
    },
    {
      id: "master-marketing-digital",
      title: "Master Marketing Digital et E-commerce",
      description: "Formation avancée en marketing digital et stratégie e-commerce",
      duration: "1 an",
      level: "Bac+5",
      type: "master",
      modules: [
        "Stratégie digitale avancée",
        "Data marketing et analytics",
        "E-commerce et marketplace",
        "Marketing automation",
        "Growth hacking",
        "Digital transformation",
        "Gestion d'équipe",
        "Mémoire de fin d'études"
      ],
      careers: [
        "Digital Marketing Manager",
        "E-commerce Director",
        "Growth Hacker",
        "Digital Consultant"
      ],
      skills: [
        "Stratégie digitale avancée",
        "Data analytics",
        "E-commerce",
        "Management digital"
      ],
      price: "28,000 MAD/an",
      certification: "Master d'État",
      requirements: [
        "Licence en marketing ou équivalent",
        "Expérience en marketing",
        "Entretien d'admission"
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
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Diplômes d'État</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des formations diplômantes reconnues par l'État pour votre réussite professionnelle
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            <Button variant="outline" size="sm" className="mr-1">
              Tous
            </Button>
            <Button variant="outline" size="sm" className="mr-1">
              Licences
            </Button>
            <Button variant="outline" size="sm">
              Masters
            </Button>
          </div>
        </div>

        {/* Diplômes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {diplomesData.map((diplome) => (
            <Card key={diplome.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={diplome.type === 'licence' ? 'default' : 'secondary'} className="bg-primary/10 text-primary">
                    {diplome.level}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {diplome.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {diplome.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Duration and Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{diplome.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {diplome.price}
                  </div>
                </div>

                {/* Certification */}
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-gray-700">{diplome.certification}</span>
                </div>

                {/* Modules */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Modules principaux
                  </h4>
                  <div className="space-y-1">
                    {diplome.modules.slice(0, 4).map((module, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span>{module}</span>
                      </div>
                    ))}
                    {diplome.modules.length > 4 && (
                      <div className="text-xs text-gray-500 ml-5">
                        +{diplome.modules.length - 4} autres modules
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
                    {diplome.careers.slice(0, 2).map((career, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {career}
                      </Badge>
                    ))}
                    {diplome.careers.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{diplome.careers.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => navigate(`/diplome/${diplome.type}/${diplome.id}`)}
                >
                  Voir les détails
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à obtenir votre diplôme ?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactez-nous pour plus d'informations sur nos programmes diplômants
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

export default Diplome;
