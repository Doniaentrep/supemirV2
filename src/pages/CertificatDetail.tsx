import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Award, Users, Target, CheckCircle, Star, Calendar, MapPin, Phone, Mail, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFormation } from "@/contexts/FormationContext";

const CertificatDetail = () => {
  const { certificat } = useParams();
  const navigate = useNavigate();
  const { setSelectedFormation } = useFormation();

  // Debug: Log the certificat parameter
  console.log('Certificat parameter:', certificat);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Certificat data
  const certificatsData = {
    "certificat-developpement-web": {
      title: "Certificat Développement Web",
      description: "Certification professionnelle en développement web moderne",
      detailedDescription: "Cette certification vous permet de maîtriser les technologies web essentielles pour créer des sites et applications web modernes. Formation pratique avec de nombreux projets concrets et accompagnement personnalisé.",
      duration: "6 mois",
      level: "Professionnel",
      certification: "Certification Professionnelle",
      modules: [
        "HTML5 et CSS3 avancés",
        "JavaScript ES6+ et frameworks modernes",
        "React.js pour le développement frontend",
        "Node.js et Express pour le backend",
        "Bases de données (MySQL, MongoDB)",
        "API REST et intégration",
        "Déploiement et hébergement",
        "Projet final complet"
      ],
      skills: [
        "Développement frontend moderne",
        "Création d'APIs REST",
        "Gestion de bases de données",
        "Déploiement d'applications web",
        "Travail en équipe avec Git",
        "Résolution de problèmes techniques"
      ],
      careers: [
        "Développeur Web Full Stack",
        "Développeur Frontend",
        "Développeur Backend",
        "Intégrateur Web",
        "Freelance Web Developer",
        "Chef de projet web"
      ],
      price: "15,000 MAD",
      requirements: [
        "Baccalauréat ou équivalent",
        "Connaissances de base en informatique",
        "Motivation et assiduité",
        "Accès à un ordinateur personnel"
      ],
      benefits: [
        "Certification reconnue par l'industrie",
        "Projets pratiques et portfolio",
        "Accompagnement personnalisé",
        "Accès à la communauté des anciens",
        "Support emploi et stage"
      ],
      schedule: "Cours du soir et weekends",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Mars 2024"
    },
    "certificat-marketing-digital": {
      title: "Certificat Marketing Digital",
      description: "Formation complète en marketing digital et réseaux sociaux",
      detailedDescription: "Maîtrisez les stratégies de marketing digital les plus efficaces. Apprenez à créer des campagnes performantes, gérer les réseaux sociaux et analyser les données pour optimiser vos résultats.",
      duration: "16h (4h x 4 séances)",
      level: "Professionnel",
      certification: "Certification Professionnelle",
      modules: [
        "Stratégie marketing digital",
        "SEO et référencement naturel",
        "SEM et publicité en ligne",
        "Réseaux sociaux et community management",
        "Email marketing et automation",
        "Analytics et mesure de performance",
        "E-commerce et conversion",
        "Projet de campagne complète"
      ],
      skills: [
        "Stratégie digitale",
        "Gestion des réseaux sociaux",
        "Analyse de données",
        "Campagnes publicitaires",
        "SEO et SEM",
        "Email marketing"
      ],
      careers: [
        "Community Manager",
        "Digital Marketer",
        "SEO Specialist",
        "E-commerce Manager",
        "Social Media Manager",
        "Growth Hacker"
      ],
      price: "12,000 MAD",
      requirements: [
        "Baccalauréat ou équivalent",
        "Intérêt pour le digital",
        "Créativité et sens du marketing",
        "Maîtrise des outils informatiques de base"
      ],
      benefits: [
        "Certification reconnue",
        "Projets réels avec entreprises",
        "Réseau professionnel",
        "Outils et licences inclus",
        "Suivi post-formation"
      ],
      schedule: "Cours du soir",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Avril 2024"
    },
    "certificat-gestion-projet": {
      title: "Certificat Gestion de Projet",
      description: "Maîtrise des outils et méthodes de gestion de projet",
      detailedDescription: "Développez vos compétences en gestion de projet avec les méthodologies les plus utilisées dans l'industrie. Apprenez à planifier, organiser et diriger des projets de A à Z.",
      duration: "3 mois",
      level: "Professionnel",
      certification: "Certification Professionnelle",
      modules: [
        "Méthodologies agiles (Scrum, Kanban)",
        "Planification et suivi de projet",
        "Gestion d'équipe et leadership",
        "Outils de gestion (Jira, Trello, MS Project)",
        "Communication et reporting",
        "Gestion des risques et qualité",
        "Budget et ressources",
        "Projet de fin de formation"
      ],
      skills: [
        "Planification stratégique",
        "Gestion d'équipe",
        "Communication efficace",
        "Résolution de problèmes",
        "Gestion des risques",
        "Outils de gestion"
      ],
      careers: [
        "Chef de projet",
        "Project Manager",
        "Scrum Master",
        "Coordinateur de projet",
        "Product Owner",
        "Consultant en gestion"
      ],
      price: "10,000 MAD",
      requirements: [
        "Baccalauréat ou équivalent",
        "Expérience professionnelle recommandée",
        "Leadership et communication",
        "Maîtrise des outils informatiques"
      ],
      benefits: [
        "Certification professionnelle",
        "Méthodes agiles reconnues",
        "Simulation de projets réels",
        "Réseau de professionnels",
        "Accompagnement carrière"
      ],
      schedule: "Weekends",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Mai 2024"
    }
  };

  const currentCertificat = certificat ? certificatsData[certificat as keyof typeof certificatsData] : null;

  // Set the selected formation when component mounts
  useEffect(() => {
    if (certificat) {
      setSelectedFormation(certificat);
    }
    
    // Clean up when component unmounts
    return () => {
      setSelectedFormation(null);
    };
  }, [certificat, setSelectedFormation]);

  // If certificat not found, show error message
  if (!certificat || !currentCertificat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Certificat non trouvé</h1>
            <p className="text-lg text-gray-600 mb-8">
              Le certificat que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Button onClick={() => navigate('/certificat')} className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux certificats
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate('/certificat')} 
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux certificats
        </Button>

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {currentCertificat.level}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentCertificat.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {currentCertificat.description}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {currentCertificat.detailedDescription}
            </p>
            
            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentCertificat.duration}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentCertificat.startDate}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentCertificat.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentCertificat.schedule}</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-primary/5 rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {currentCertificat.price}
              </div>
              <p className="text-gray-600">Prix total de la formation</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi choisir ce certificat ?</h3>
            <div className="space-y-3">
              {currentCertificat.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-6 w-6 mr-2" />
              Programme de formation
            </CardTitle>
            <CardDescription>
              Découvrez tous les modules de cette certification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {currentCertificat.modules.map((module, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <span className="font-medium">{module}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills and Careers */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Compétences acquises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {currentCertificat.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Débouchés professionnels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {currentCertificat.careers.map((career, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{career}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Prérequis</CardTitle>
            <CardDescription>
              Conditions d'accès à cette certification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {currentCertificat.requirements.map((requirement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à obtenir votre certification ?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Contactez-nous pour vous inscrire ou obtenir plus d'informations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('contact')}
            >
              S'inscrire maintenant
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/certificat')}
            >
              Voir autres certificats
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CertificatDetail;
