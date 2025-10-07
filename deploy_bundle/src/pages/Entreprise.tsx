import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, Users, Target, CheckCircle, Star, Briefcase, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Entreprise = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Entreprise services data
  const servicesData = [
    {
      id: "formation-sur-mesure",
      title: "Formation sur Mesure",
      description: "Formations personnalisées adaptées aux besoins spécifiques de votre entreprise",
      duration: "Flexible",
      level: "Professionnel",
      modules: [
        "Analyse des besoins",
        "Conception de programme",
        "Formation en entreprise",
        "Suivi et évaluation",
        "Certification interne",
        "Support post-formation"
      ],
      benefits: [
        "Formation adaptée à vos équipes",
        "Intervenants experts",
        "Flexibilité des horaires",
        "Certification reconnue"
      ],
      price: "Sur devis",
      target: "Entreprises de toutes tailles"
    },
    {
      id: "conseil-digital",
      title: "Conseil en Transformation Digitale",
      description: "Accompagnement dans votre transformation digitale et modernisation des processus",
      duration: "3-12 mois",
      level: "Stratégique",
      modules: [
        "Audit digital",
        "Stratégie de transformation",
        "Formation des équipes",
        "Mise en œuvre",
        "Suivi et optimisation",
        "Transfert de compétences"
      ],
      benefits: [
        "Expertise reconnue",
        "Accompagnement personnalisé",
        "ROI mesurable",
        "Formation des équipes"
      ],
      price: "Sur devis",
      target: "PME et Grandes entreprises"
    },
    {
      id: "recrutement-specialise",
      title: "Recrutement Spécialisé IT",
      description: "Recrutement de profils techniques et digitaux pour votre entreprise",
      duration: "2-8 semaines",
      level: "Recrutement",
      modules: [
        "Définition du profil",
        "Sourcing actif",
        "Pré-sélection",
        "Tests techniques",
        "Entretiens",
        "Intégration"
      ],
      benefits: [
        "Accès à notre réseau",
        "Tests techniques validés",
        "Garantie de compétences",
        "Suivi d'intégration"
      ],
      price: "15% du salaire annuel",
      target: "Entreprises tech et digitales"
    },
    {
      id: "partenariat-academique",
      title: "Partenariat Académique",
      description: "Collaboration avec SUPEMIR pour vos projets de recherche et développement",
      duration: "Long terme",
      level: "Recherche",
      modules: [
        "Projets de recherche",
        "Stages étudiants",
        "Conférences et événements",
        "Échanges d'expertise",
        "Publications communes",
        "Innovation collaborative"
      ],
      benefits: [
        "Accès à l'innovation",
        "Talent pipeline",
        "Visibilité académique",
        "Réseau d'experts"
      ],
      price: "Négociable",
      target: "Entreprises innovantes"
    }
  ];

  // Success stories
  const successStories = [
    {
      company: "TechCorp Maroc",
      sector: "Technologie",
      service: "Formation sur Mesure",
      result: "Formation de 50 développeurs en React.js",
      testimonial: "SUPEMIR a transformé nos équipes techniques avec une formation exceptionnelle."
    },
    {
      company: "Digital Agency Pro",
      sector: "Marketing Digital",
      service: "Conseil Digital",
      result: "Transformation digitale complète",
      testimonial: "Un accompagnement professionnel qui a réussi notre approche digitale."
    },
    {
      company: "E-commerce Plus",
      sector: "E-commerce",
      service: "Recrutement Spécialisé",
      result: "Recrutement de 15 profils tech",
      testimonial: "Des candidats de qualité qui ont immédiatement contribué à notre croissance."
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
            <Building2 className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Solutions Entreprise</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions sur mesure pour accompagner votre entreprise dans sa transformation digitale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {servicesData.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {service.level}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Duration and Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {service.price}
                  </div>
                </div>

                {/* Target */}
                <div className="flex items-center">
                  <Target className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-gray-700">{service.target}</span>
                </div>

                {/* Modules */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Services inclus
                  </h4>
                  <div className="space-y-1">
                    {service.modules.slice(0, 4).map((module, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span>{module}</span>
                      </div>
                    ))}
                    {service.modules.length > 4 && (
                      <div className="text-xs text-gray-500 ml-5">
                        +{service.modules.length - 4} autres services
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Avantages
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                    {service.benefits.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.benefits.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection('contact')}
                >
                  Demander un devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Témoignages d'entreprises
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{story.company}</CardTitle>
                  <CardDescription>{story.sector}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {story.service}
                    </Badge>
                    <p className="text-sm text-gray-600 mb-3">
                      {story.result}
                    </p>
                  </div>
                  <blockquote className="text-sm italic text-gray-700">
                    "{story.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactez-nous pour discuter de vos besoins et obtenir une solution sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('contact')}
            >
              <Handshake className="h-5 w-5 mr-2" />
              Demander un rendez-vous
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

export default Entreprise;
