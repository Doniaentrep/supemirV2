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

  // Auto-switch program steps every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProgramStep(prevStep => {
        const nextStep = prevStep >= 5 ? 1 : prevStep + 1;
        return nextStep;
      });
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 py-12 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center px-4 lg:px-8">
              <div className="mb-4 text-left">
                
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-left px-4">
                Transformez Votre Carrière : <br />
                <span className="text-primary">Bootcamp Intensif en Marketing Digital à Marrakech</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl text-left px-4">
                Acquérez une expertise de pointe et un double certification pour dominer le paysage numérique, 
                avec une intégration exclusive de l'IA par SkillsUp AI. Conçu pour les professionnels ambitieux.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-start mb-8 px-4">
                <Button 
                  size="default" 
                  className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-4 sm:px-6 py-3 w-full sm:w-auto"
                  onClick={handleRegistrationClick}
                >
                  S'inscrire au Bootcamp
                </Button>
                <Button 
                  size="default" 
                  variant="outline"
                  className="text-sm sm:text-base px-4 sm:px-6 py-3 w-full sm:w-auto"
                  onClick={() => scrollToSection('programme')}
                >
                  Voir le programme
                </Button>
                <Button 
                  size="default"
                  variant="secondary"
                  className="text-sm sm:text-base px-4 sm:px-6 py-3 bg-white text-primary border border-primary/30 hover:bg-primary/5 w-full sm:w-auto"
                  onClick={() => scrollToSection('diplome')}
                >
                  Diplôme & Certifs
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {[{label:'Heures', value:'16h'}, {label:'Modules', value:'5'}, {label:'Certification', value:'Double'}].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/70 backdrop-blur border border-gray-100 p-3 text-center">
                    <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                    <div className="text-xs text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end px-4 lg:px-8">
              
              {/* Floating badges */}
              <div className="flex flex-col gap-3 items-center lg:items-end">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section id="carriere" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Débouchés & Carrières</h2>
            <p className="text-xl text-gray-600">Des rôles tangibles, des résultats mesurables</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {title:'Social Media Manager', stat:'+35% engagement', accent:'from-indigo-500 to-violet-500'},
              {title:'Growth Marketer', stat:'+20% conversions', accent:'from-emerald-500 to-teal-500'},
              {title:'Data/Analytics Marketer', stat:'ROAS x1.8', accent:'from-amber-500 to-orange-500'}
            ].map((item) => (
              <div key={item.title} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} text-white flex items-center justify-center mb-4 font-bold`}>{item.stat.split(' ')[0]}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">Objectif type: {item.stat} 3 à 6 mois après mise en pratique.</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ils en parlent le mieux</h2>
            <p className="text-lg text-gray-600">Retour d’expérience d’apprenants</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1,2,3].map((i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">Formation très concrète et immédiatement actionnable. Le module IA m’a fait gagner un temps fou sur nos campagnes.</p>
                  <div className="text-sm text-gray-600 font-medium">Alumni Bootcamp 2024</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Questions fréquentes</h2>
            <p className="text-gray-600">Tout ce qu’il faut savoir avant de vous lancer</p>
          </div>
          <div className="space-y-4">
            {[
              {q:"À qui s’adresse ce bootcamp ?", a:"Aux professionnels et étudiants souhaitant accélérer en marketing digital."},
              {q:"Quel est le niveau requis ?", a:"Connaissances de base du marketing ou forte motivation à apprendre rapidement."},
              {q:"Y a-t-il un projet ?", a:"Oui, un mini‑projet par module et un cas fil rouge avec soutenance."}
            ].map((item, idx) => (
              <Card key={idx} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                  <CardDescription>{item.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 inset-x-0 px-4 z-40">
        <div className="mx-auto max-w-3xl rounded-full px-4 py-3 flex items-center justify-between bg-white/25 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/20 border border-white/30 ring-1 ring-white/20 shadow-lg">
          <div className="hidden sm:flex items-center gap-3 text-sm text-gray-700">
            <Clock className="h-4 w-4 text-primary" />
            16h (4 séances de 4h) • Marrakech
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Places limitées
            </span>
          </div>
          <Button size="sm" className="rounded-full px-5" onClick={handleRegistrationClick}>S’inscrire maintenant</Button>
        </div>
      </div>
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
                Notre programme, dispensé en présentiel sur 16 heures réparties en 4 séances de 4h, est parfaitement adapté à votre emploi du temps 
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

          {/* Cards styled like the Campus Life screenshot */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Certification (now first) */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center mb-6 shadow-sm">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🎖️ Certification Supemir Marrakech Academy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Validez vos compétences avec une certification reconnue, délivrée par une école supérieure
                  réputée pour son excellence académique et son engagement envers la réussite de ses étudiants.
                </p>
              </div>
            </div>

            {/* IA Integration (now second) */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white flex items-center justify-center mb-6 shadow-sm">
                  <Brain className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🚀 Intégration de l'Intelligence Artificielle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bénéficiez d'un module exclusif sur l'intégration de l'IA dans le Digital Marketing,
                  conçu et animé par SkillsUp AI. Exploitez les dernières innovations pour optimiser
                  vos campagnes et vos analyses.
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 text-white flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🎯 Ressources Exclusives et à Jour
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Accédez à des supports pédagogiques exclusifs, conçus par des experts SMA, pour un
                  apprentissage de pointe et une veille constante sur les tendances du marché.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplôme & Certifications */}
      <section id="diplome" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Diplôme et Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours certifiant, sanctionné par un certificat délivré par Supemir Marrakech Academy et incluant un module IA by SkillsUp AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Hero certification card */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-primary/10 via-white to-accent/10 p-8 shadow-sm transition-all hover:shadow-xl">
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white flex items-center justify-center shadow-md shrink-0">
                  <Award className="h-9 w-9" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">Officiel</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">Double certification</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Double Certification Supemir + SkillsUp AI</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    À l'issue du bootcamp, vous recevez un certificat exécutif de Supemir Marrakech Academy
                    et une validation du module IA conçu par SkillsUp AI, attestant de vos compétences pratiques
                    en marketing digital et en intégration de l'intelligence artificielle.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[{label:'Format', value:'Présentiel'}, {label:'Durée', value:'16h (4x4h)'}, {label:'Langue', value:'Français'}].map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/80 backdrop-blur border border-gray-100 p-3 text-center">
                        <div className="text-base font-bold text-gray-900">{s.value}</div>
                        <div className="text-xs text-gray-600">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* What you get + Recognition */}
            <div className="grid sm:grid-cols-2 gap-8 items-stretch">
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ce que vous obtenez</h4>
                <ul className="text-gray-700 grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-3">
                  {[ 
                    'Certificat Exécutif',
                    'Validation du module IA (SkillsUp AI)',
                    'Portfolio de livrables (projets, dashboards, contenus)',
                    'Accès aux ressources et mises à jour'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Reconnaissance</h4>
                <p className="text-gray-700 mb-4">Certificat partageable et valorisable sur LinkedIn et votre CV.</p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Share2 className="h-4 w-4 text-primary" />
                  Ajoutez votre certification à votre profil en un clic.
                </div>
                <div className="mt-6 grid grid-cols-4 gap-3">
                  <div className="aspect-[3/2] rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2">
                    <img src="/logos/LOGO-PM.png" alt="Supemir Marrakech Academy" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="aspect-[3/2] rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2">
                    <img src="/logos/ISO21001-2018.png" alt="ISO 21001:2018" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="aspect-[3/2] rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2">
                    <img src="/logos/iso2015-1024x395-1.webp" alt="ISO 9001:2015" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="aspect-[3/2] rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2">
                    <img src="/logos/PL-Seal-final.webp" alt="Professional Learning" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-10">
            <div className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-3 text-sm text-gray-700 flex items-center justify-between">
              <span>
                Le diplôme atteste de compétences opérationnelles immédiatement applicables en entreprise.
              </span>
              <Button size="sm" variant="outline" onClick={() => scrollToSection('inscription')}>Commencer votre inscription</Button>
            </div>
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
      <section id="programme" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
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
      <section id="infos" className="py-20 bg-white">
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
                      <p className="text-gray-600">16h de formation réparties en 4 séances de 4h pour une expertise rapide et efficace</p>
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
                      <p className="text-gray-600">4 séances de 4h chacune, pour concilier formation et activité professionnelle</p>
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
                  <span className="text-gray-700">marrakech-academy@supemir.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">+212 661497647</span>
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


