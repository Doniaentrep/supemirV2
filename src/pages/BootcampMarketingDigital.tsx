import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Award, Users, Target, CheckCircle, Star, Calendar, MapPin, Phone, Mail, BookOpen, Play, Share2, Brain, TrendingUp, BarChart3, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { useFormation } from "@/contexts/FormationContext";

const BootcampMarketingDigital = () => {
  const navigate = useNavigate();
  const { setSelectedFormation } = useFormation();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [activeProgramStep, setActiveProgramStep] = useState<number>(1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegistrationClick = () => {
    setSelectedFormation('bootcamp-marketing-digital');
    setIsRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
    setSelectedFormation(null);
  };


  // Set the selected formation when component mounts
  useEffect(() => {
    setSelectedFormation('bootcamp-marketing-digital');
    
    // Clean up when component unmounts
    return () => {
      setSelectedFormation(null);
    };
  }, [setSelectedFormation]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')} 
                className="mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Button>
              
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                BOOTCAMP INTENSIF
              </Badge>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
                Transformez Votre Carrière : 
                <span className="text-primary"> Bootcamp Intensif en Marketing Digital</span> à Marrakech
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed mr-2 md:mr-4 lg:mr-6 ml-2 md:ml-4 lg:ml-6">
                Acquérez une expertise de pointe et un double certification pour dominer le paysage numérique, 
                avec une intégration exclusive de l'IA par SkillsUp AI. Conçu pour les professionnels ambitieux.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                  onClick={handleRegistrationClick}
                >
                  Découvrez notre Bootcamp et Inscrivez-vous Maintenant !
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Marketing Digital + IA</h3>
                  <p className="text-gray-600">Formation d'excellence avec SkillsUp AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              À Propos du Bootcamp
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Dans un monde où le digital évolue à une vitesse fulgurante, maîtriser les stratégies de marketing numérique 
                n'est plus une option, mais une nécessité. Le Bootcamp Marketing Digital de Supemir Marrakech Academy est une 
                formation intensive et immersive, spécialement conçue pour les professionnels désireux de propulser leur carrière 
                et de devenir des leaders dans l'économie numérique.
              </p>
              <p>
                Notre programme, dispensé en présentiel sur 5 jours en cours du soir, est parfaitement adapté à votre emploi du temps 
                chargé. Il vous offre l'opportunité unique d'acquérir des compétences pratiques et directement applicables, vous 
                permettant de transformer les défis numériques en opportunités de croissance pour votre entreprise ou votre carrière.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bénéfices Clés / Pourquoi choisir ce Bootcamp ?
            </h2>
            <p className="text-xl text-gray-600">
              Choisir le Bootcamp Marketing Digital de Supemir Marrakech Academy, c'est investir dans une formation d'excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Intégration de l'Intelligence Artificielle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Bénéficiez d'un module exclusif sur l'intégration de l'IA dans le Digital Marketing, 
                  conçu et animé par SkillsUp AI. Apprenez à exploiter les dernières innovations technologiques 
                  pour optimiser vos campagnes et analyses.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Certification Supemir Marrakech Academy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Validez vos compétences avec une certification délivrée par Supemir Marrakech Academy, 
                  une école supérieure réputée pour son excellence académique et son engagement envers 
                  la réussite de ses étudiants.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Ressources Exclusives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Accédez à des ressources pédagogiques uniques et à jour, élaborées par l'équipe d'enseignants 
                  experts de SMA, vous garantissant un apprentissage de pointe et une veille constante sur 
                  les tendances du marché.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Objectifs de la Formation
            </h2>
            <p className="text-xl text-gray-600">
              À l'issue de ce bootcamp intensif, vous serez capable de :
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maîtriser le Marketing Numérique</h3>
                  <p className="text-gray-600">
                    Acquérir une compréhension approfondie des concepts fondamentaux et des outils avancés du marketing numérique, 
                    incluant le SEO, le SEM, le marketing de contenu, et les médias sociaux.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Élaborer des Stratégies Marketing Efficaces</h3>
                  <p className="text-gray-600">
                    Concevoir et mettre en œuvre des stratégies de marketing numérique intégrées, alignées sur les objectifs 
                    commerciaux et capables de générer un retour sur investissement significatif.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analyser les Données pour la Prise de Décision</h3>
                  <p className="text-gray-600">
                    Comprendre comment collecter, interpréter et utiliser les données analytiques pour optimiser les performances 
                    des campagnes et prendre des décisions éclairées.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Obtenir une Certification Reconnue</h3>
                  <p className="text-gray-600">
                    Être parfaitement préparé pour obtenir une certification reconnue dans le domaine du marketing numérique 
                    et du commerce électronique, renforçant ainsi votre crédibilité professionnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative blur accents */}
        <div className="pointer-events-none absolute -top-10 -left-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Programme Détaillé
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours progressif et immersif couvrant les piliers essentiels du Marketing Digital
            </p>
          </div>
          
          {/* Stepper */}
          {/** Interactive stepper to reveal each module step-by-step **/}
          {/** activeProgramStep controls which module content is visible **/}
          
          {/* Local UI state for this section */}
          {/* Note: kept inside component scope, defined above render using useState */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="relative flex items-center justify-between">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
              {[1,2,3,4,5].map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => setActiveProgramStep(step)}
                  className="relative z-10 flex flex-col items-center focus:outline-none"
                  aria-pressed={activeProgramStep === step}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-200 shadow-md ${
                    activeProgramStep === step
                      ? 'bg-gradient-to-br from-primary to-accent text-white ring-4 ring-primary/20 scale-105'
                      : 'bg-white text-primary ring-2 ring-primary/30 hover:ring-primary/50'
                  }`}>
                    {step}
                  </div>
                  <span className={`mt-2 text-xs hidden sm:block transition-colors ${
                    activeProgramStep === step ? 'text-primary' : 'text-gray-600'
                  }`}>
                    {step === 1 ? 'Fondamentaux' : step === 2 ? 'Contenu' : step === 3 ? 'Analytics' : step === 4 ? 'Automation' : 'IA'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step content */}
          <div className="max-w-4xl mx-auto">
          {activeProgramStep === 1 && (
            <Card className="group border-0 shadow-none bg-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
              <CardHeader className="rounded-2xl p-5 transition-all group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 group-hover:ring-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg flex items-center justify-between">
                  Fondamentaux du Marketing Digital
                  <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">Module 1</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-colors">
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Introduction au paysage digital et canaux d’acquisition</li>
                  <li>Fondamentaux SEO/SEA et bonnes pratiques</li>
                  <li>Stratégie Social Media et community building</li>
                </ul>
              </CardContent>
            </Card>
          )}
          {activeProgramStep === 2 && (
            <Card className="group border-0 shadow-none bg-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
              <CardHeader className="rounded-2xl p-5 transition-all group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 group-hover:ring-accent/10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-accent/20 transition-transform group-hover:scale-105">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg flex items-center justify-between">
                  Stratégies de Contenu et Branding
                  <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-accent/10 text-accent font-semibold">Module 2</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 group-hover:bg-gradient-to-br group-hover:from-accent/5 group-hover:to-transparent rounded-2xl transition-colors">
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Brand voice, identité visuelle et storytelling</li>
                  <li>Calendrier éditorial multi‑plateformes</li>
                  <li>Formats performants: short video, carrousels, newsletters</li>
                </ul>
              </CardContent>
            </Card>
          )}
          {activeProgramStep === 3 && (
            <Card className="group border-0 shadow-none bg-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
              <CardHeader className="rounded-2xl p-5 transition-all group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 group-hover:ring-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg flex items-center justify-between">
                  Analyse de Données et Web Analytics
                  <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">Module 3</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-colors">
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Metrics clés, attribution et tableaux de bord</li>
                  <li>Google Analytics 4, Tag Manager et Data Studio</li>
                  <li>Mesure des conversions et optimisation continue</li>
                </ul>
              </CardContent>
            </Card>
          )}
          {activeProgramStep === 4 && (
            <Card className="group border-0 shadow-none bg-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
              <CardHeader className="rounded-2xl p-5 transition-all group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 group-hover:ring-accent/10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-accent/20 transition-transform group-hover:scale-105">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg flex items-center justify-between">
                  Marketing Automation et CRM
                  <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-accent/10 text-accent font-semibold">Module 4</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 group-hover:bg-gradient-to-br group-hover:from-accent/5 group-hover:to-transparent rounded-2xl transition-colors">
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Parcours client, nurturing et scoring</li>
                  <li>Outils d’automation, email/SMS et triggers</li>
                  <li>Segmentation et personnalisation à grande échelle</li>
                </ul>
              </CardContent>
            </Card>
          )}
          {activeProgramStep === 5 && (
            <Card className="group border-0 shadow-none bg-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
              <CardHeader className="rounded-2xl p-5 transition-all group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 group-hover:ring-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg flex items-center justify-between">
                  Intelligence Artificielle pour le Marketing
                  <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">Module 5</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-colors">
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Personnalisation par IA et recommandations</li>
                  <li>Prédiction, scoring et optimisation des campagnes</li>
                  <li>Automatisation intelligente et assistants IA</li>
                </ul>
              </CardContent>
            </Card>
          )}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Informations Pratiques
            </h2>
            <p className="text-xl text-gray-600">
              Pour s'adapter au mieux à votre emploi du temps de professionnel
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Durée</h3>
                      <p className="text-gray-600">5 séances de formation condensée pour une expertise rapide et efficace</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Format</h3>
                      <p className="text-gray-600">100% en présentiel, favorisant les échanges et l'apprentissage interactif</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Rythme</h3>
                      <p className="text-gray-600">Cours du soir, 5 jours par semaine, pour concilier formation et activité professionnelle</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Prochaine rentrée</h3>
                      <p className="text-gray-600">Octobre 2025 (Veuillez nous contacter pour les dates exactes des prochaines sessions)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="inscription" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Prêt à Transformer Votre Carrière ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez le Bootcamp Marketing Digital et devenez un expert du marketing numérique avec l'intégration de l'IA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                onClick={handleRegistrationClick}
              >
                S'inscrire au Bootcamp
              </Button>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contactez-nous pour plus d'informations</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">info@supemir.ma</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">+212 5XX XXX XXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />


      {/* Registration Modal */}
      {isRegistrationOpen && (
        <RegistrationForm 
          onClose={handleCloseRegistration}
          selectedFormation="bootcamp-marketing-digital"
        />
      )}
    </div>
  );
};

export default BootcampMarketingDigital;


