import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Award, Users, Target, CheckCircle, Star, Calendar, MapPin, Phone, Mail, BookOpen, Play, Share2, Brain, TrendingUp, BarChart3, Zap, Box, Camera, Lightbulb, Palette, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { useFormation } from "@/contexts/FormationContext";

const Bootcamp3D = () => {
  const navigate = useNavigate();
  const { setSelectedFormation } = useFormation();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [activeProgramStep, setActiveProgramStep] = useState<number>(1);
  const [activeBootcamp, setActiveBootcamp] = useState<number>(1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegistrationClick = () => {
    setSelectedFormation(bootcamps[activeBootcamp - 1].formationId);
    setIsRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
    setSelectedFormation(null);
  };

  // Set the selected formation when component mounts
  useEffect(() => {
    setSelectedFormation('bootcamp-3d-generaliste');
    
    // Clean up when component unmounts
    return () => {
      setSelectedFormation(null);
    };
  }, [setSelectedFormation]);

  // Auto-switch program steps every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProgramStep(prevStep => {
        const nextStep = prevStep >= 5 ? 1 : prevStep + 1;
        return nextStep;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bootcamps = [
    {
      id: 1,
      title: "3D Généraliste",
      subtitle: "Création de Scènes Complètes",
      heroTitle: "Lancez Votre Carrière : Bootcamp Intensif en Création 3D à Marrakech",
      heroSubtitle: "Acquérez une expertise complète en modélisation, texturing et rendu pour créer des mondes 3D saisissants, avec une intégration exclusive du moteur de rendu photoréaliste Cycles. Conçu pour les créatifs et futurs professionnels.",
      introduction: "Dans un monde où la 3D est omniprésente, du jeu vidéo à la publicité, maîtriser les outils de création numérique est devenu une compétence essentielle. Le Bootcamp 3D Généraliste de Supemir Marrakech Academy est une formation intensive et immersive, spécialement conçue pour les passionnés et les professionnels souhaitant construire une base solide pour une carrière dans l'industrie créative. Notre programme, dispensé en présentiel sur 5 jours en cours du soir, est parfaitement adapté à votre emploi du temps. Il vous offre l'opportunité unique d'acquérir des compétences pratiques sur Blender, le logiciel 3D open-source de référence, vous permettant de transformer vos idées en images spectaculaires.",
      cta: "Découvrez notre Bootcamp et Inscrivez-vous Maintenant !",
      benefits: [
        {
          title: "Intégration du Rendu Photoréaliste",
          description: "Focus exclusif sur Cycles. Maîtrisez l'éclairage et les matériaux pour des images d'un réalisme époustouflant.",
          icon: <Zap className="h-5 w-5" />
        },
        {
          title: "Certification Supemir Marrakech Academy",
          description: "Validez vos compétences avec une certification reconnue pour son excellence académique.",
          icon: <Award className="h-5 w-5" />
        },
        {
          title: "Ressources Exclusives",
          description: "Bibliothèque de modèles 3D, textures et ressources pédagogiques pour accélérer votre apprentissage.",
          icon: <BookOpen className="h-5 w-5" />
        }
      ],
      objectives: [
        "Maîtriser Blender (modélisation, texturing, éclairage)",
        "Créer des scènes 3D complètes de A à Z",
        "Développer un portfolio solide",
        "Comprendre le pipeline de production"
      ],
      program: [
        "Fondamentaux de la Modélisation",
        "UV & Texturing PBR",
        "Éclairage & Composition",
        "Shading & Matériaux avancés",
        "Rendu Cycles & Post‑prod"
      ],
      programDetails: [
        {
          title: "Fondamentaux de la Modélisation",
          bullets: [
            "Modélisation polygonale: outils essentiels, modifiers",
            "Props et environnements: bonnes pratiques",
            "Organisation de scène et nommage"
          ]
        },
        {
          title: "UV & Texturing PBR",
          bullets: [
            "Dépliage UV propre et non‑distordu",
            "Textures PBR (bois, métal, tissu)",
            "Gestion des maps (albedo, roughness, normal)"
          ]
        },
        {
          title: "Éclairage & Composition",
          bullets: [
            "Éclairage 3 points et HDRI",
            "Règles de composition et focus",
            "Caméras, profondeur de champ"
          ]
        },
        {
          title: "Shading & Matériaux avancés",
          bullets: [
            "Node editor: matériaux complexes",
            "Mix shaders, textures procédurales",
            "Optimisations pour le réalisme"
          ]
        },
        {
          title: "Rendu Cycles & Post‑production",
          bullets: [
            "Paramètres Cycles (samples, denoise)",
            "AOVs, passes et Compositor",
            "Export et finitions"
          ]
        }
      ],
      practical: {
        duree: "5 séances de formation condensée pour une expertise rapide.",
        format: "100% en présentiel à Supemir Marrakech Academy.",
        rythme: "Cours du soir, 5 jours, pour concilier formation et activité professionnelle.",
        rentree: "Octobre 2025."
      },
      formationId: "bootcamp-3d-generaliste",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "3D Architecture",
      subtitle: "Archviz Photoréaliste",
      heroTitle: "Rendez Vos Projets Immobiliers Irrésistibles : Le Bootcamp d'Architecture 3D",
      heroSubtitle: "Maîtrisez l'art de la visualisation architecturale photoréaliste pour séduire vos clients et vendre vos projets avant même leur construction, avec un focus sur les techniques de rendu avancées sur Blender.",
      introduction: "Dans le secteur de l'immobilier et de l'architecture, une image vaut mille plans. La capacité à présenter un projet avec un rendu 3D photoréaliste est aujourd'hui un avantage concurrentiel décisif. Le Bootcamp d'Architecture 3D de Supemir Marrakech Academy est une formation intensive conçue pour les architectes, designers d'intérieur et promoteurs immobiliers souhaitant maîtriser cet outil puissant. Dispensé sur 5 jours en cours du soir, notre programme vous apprendra à transformer un plan 2D en une expérience visuelle immersive et convaincante, vous permettant de valider vos choix de design et d'accélérer vos ventes.",
      cta: "Explorez le Programme et Réservez Votre Place !",
      benefits: [
        {
          title: "Photoréalisme Architectural",
          description: "Matériaux (verre, béton, bois) et éclairage (HDRI, Sun-light) dans Cycles.",
          icon: <Palette className="h-5 w-5" />
        },
        {
          title: "Certification Supemir Marrakech Academy",
          description: "Renforcez votre crédibilité professionnelle en Archviz.",
          icon: <Award className="h-5 w-5" />
        },
        {
          title: "Ressources Pro",
          description: "Modèles de mobilier design et matériaux PBR de haute qualité.",
          icon: <Box className="h-5 w-5" />
        }
      ],
      objectives: [
        "Modéliser un espace à partir d'un plan 2D",
        "Créer des matériaux réalistes",
        "Mettre en place un éclairage cinématographique",
        "Produire un rendu de qualité professionnelle"
      ],
      program: [
        "Modéliser depuis plans 2D",
        "Matériaux PBR d’architecture",
        "Éclairage avancé (HDRI, IES)",
        "Composition & cadrage",
        "Rendu & Post‑production"
      ],
      programDetails: [
        {
          title: "Modéliser depuis plans 2D",
          bullets: [
            "Import DWG/PDF et mise à l’échelle",
            "Murs, sols, ouvertures: précision",
            "Détails architecturaux"
          ]
        },
        {
          title: "Matériaux PBR d’architecture",
          bullets: [
            "Verre, béton, bois, métal brossé",
            "UVs propres pour surfaces larges",
            "Bibliothèques de matériaux"
          ]
        },
        {
          title: "Éclairage avancé",
          bullets: [
            "HDRI pour lumière naturelle",
            "IES profiles pour lumières artificielles",
            "Ambiances et storytelling"
          ]
        },
        {
          title: "Composition & cadrage",
          bullets: [
            "Règles photo d’architecture",
            "Angles, lens, verticales droites",
            "Postures de caméra"
          ]
        },
        {
          title: "Rendu & Post‑production",
          bullets: [
            "Optimiser Cycles pour Archviz",
            "Compositor: color grading",
            "Export haute qualité"
          ]
        }
      ],
      practical: {
        duree: "5 séances de formation condensée.",
        format: "100% en présentiel à Supemir Marrakech Academy.",
        rythme: "Cours du soir, 5 jours.",
        rentree: "Octobre 2025."
      },
      formationId: "bootcamp-3d-architecture",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "3D Produits",
      subtitle: "E-commerce & Publicité",
      heroTitle: "Sublimez Vos Produits : Le Bootcamp de Rendu 3D pour le Marketing",
      heroSubtitle: "Apprenez à créer des visuels produits dignes des plus grandes marques pour vos campagnes publicitaires et fiches e-commerce. Maîtrisez l'art du studio lighting et du shading complexe sur Blender.",
      introduction: "À l'ère du commerce en ligne, la qualité des visuels produits est le premier facteur de conversion. La 3D offre une flexibilité et une perfection impossibles à atteindre avec la photographie traditionnelle. Le Bootcamp de Rendu 3D pour Produits de Supemir Marrakech Academy est une formation intensive pour les marketeurs, entrepreneurs et designers souhaitant créer des images produits exceptionnelles. Sur 5 jours en cours du soir, ce programme vous donnera les clés pour monter un studio photo virtuel, éclairer et texturer n'importe quel produit pour le rendre irrésistible aux yeux de vos clients.",
      cta: "Transformez Vos Produits, Inscrivez-vous !",
      benefits: [
        {
          title: "Studio Lighting Pro",
          description: "Éclairage de studio à 3 points et configurations avancées pour magnifier les détails.",
          icon: <Lightbulb className="h-5 w-5" />
        },
        {
          title: "Certification Supemir Marrakech Academy",
          description: "Démontrez votre expertise en visuels produits 3D.",
          icon: <Award className="h-5 w-5" />
        },
        {
          title: "Ressources prêtes à l'emploi",
          description: "Configurations de studio et groupes de nœuds matériaux pour accélérer le workflow.",
          icon: <Settings className="h-5 w-5" />
        }
      ],
      objectives: [
        "Mettre en place un studio photo virtuel",
        "Créer des matériaux photoréalistes (verre, liquides, métaux, plastiques)",
        "Appliquer logos et étiquettes via UV Mapping",
        "Produire des visuels de qualité publicitaire"
      ],
      program: [
        "Studio virtuel & 3‑points",
        "Shading avancé produits",
        "UVs & branding",
        "Composition marketing",
        "Rendu web & publicité"
      ],
      programDetails: [
        {
          title: "Studio virtuel & 3‑points",
          bullets: [
            "Cyclorama et fonds",
            "Éclairage de studio 3‑points",
            "Contrôle des reflets"
          ]
        },
        {
          title: "Shading avancé produits",
          bullets: [
            "Verre, liquides, métaux (brossé, chromé)",
            "Plastiques (mat, brillant)",
            "Noeuds de shading réutilisables"
          ]
        },
        {
          title: "UVs & branding",
          bullets: [
            "Placement précis des logos/étiquettes",
            "Déformations minimales",
            "Textures haute résolution"
          ]
        },
        {
          title: "Composition marketing",
          bullets: [
            "Cadrage pour impact",
            "Mise en scène et props",
            "Couleurs et mood"
          ]
        },
        {
          title: "Rendu web & publicité",
          bullets: [
            "Formats et compression",
            "Post‑production et retouches",
            "Variantes pour campagnes"
          ]
        }
      ],
      practical: {
        duree: "5 séances de formation condensée.",
        format: "100% en présentiel à Supemir Marrakech Academy.",
        rythme: "Cours du soir, 5 jours.",
        rentree: "Octobre 2025."
      },
      formationId: "bootcamp-3d-produits",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const currentBootcamp = bootcamps[activeBootcamp - 1];

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
                Lancez Votre Carrière : <br />
                <span className="text-primary">Bootcamp Intensif en Création 3D à Marrakech</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl text-left px-4">
                {currentBootcamp.heroSubtitle}
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
                {[{label:'Jours', value:'5'}, {label:'Modules', value:'5'}, {label:'Certification', value:'Officielle'}].map((s) => (
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">À Propos du Bootcamp</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>{currentBootcamp.introduction.split(". ")[0]}.</p>
              <p>{currentBootcamp.introduction.split(". ").slice(1).join(". ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bénéfices Clés / Pourquoi choisir ce Bootcamp ?</h2>
            <p className="text-xl text-gray-600">Un parcours d’excellence, axé production et réalisme</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {currentBootcamp.benefits?.map((b, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 text-white flex items-center justify-center mb-6 shadow-sm">
                    {b.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diplôme & Certifications */}
      <section id="diplome" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Diplôme et Certifications</h2>
            <p className="text-xl text-gray-600">Parcours certifiant, reconnu par Supemir Marrakech Academy</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Certification card */}
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
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">Certification</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Certification Supemir Marrakech Academy</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    À l'issue du bootcamp, vous recevez une attestation officielle de Supemir Marrakech Academy, attestant
                    de vos compétences pratiques en création 3D (modélisation, shading, lighting, rendu Cycles).
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[{label:'Format', value:'Présentiel'}, {label:'Durée', value:'5 jours'}, {label:'Langue', value:'Français'}].map((s) => (
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
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ce que vous obtenez</h4>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Attestation officielle Supemir',
                    'Portfolio (1 scène complète + rendus)',
                    'Accès ressources (modèles, textures)',
                    'Reconnaissance professionnelle'
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
        </div>
      </section>
      {/* Career Outcomes */}
      <section id="carriere" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Débouchés & Carrières</h2>
            <p className="text-xl text-gray-600">Des rôles créatifs, des projets concrets</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {title:'Artiste 3D Généraliste', stat:'Portfolio pro', accent:'from-indigo-500 to-violet-500'},
              {title:'Visualiseur Architectural', stat:'Projets vendus', accent:'from-emerald-500 to-teal-500'},
              {title:'Product Visualizer', stat:'E‑commerce +', accent:'from-amber-500 to-orange-500'}
            ].map((item) => (
              <div key={item.title} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} text-white flex items-center justify-center mb-4 font-bold`}>
                  {item.stat.split(' ')[0]}
                </div>
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
                  <p className="text-gray-700 mb-4">J’ai construit ma première scène 3D complète avec un rendu Cycles pro. Super accompagnement.</p>
                  <div className="text-sm text-gray-600 font-medium">Alumni Bootcamp 3D</div>
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
              {q:"À qui s’adresse ce bootcamp ?", a:"Aux débutants motivés et aux créatifs souhaitant accélérer en 3D."},
              {q:"Quel logiciel ?", a:"Blender (open‑source), avec rendu photoréaliste via Cycles."},
              {q:"Y a‑t‑il un projet ?", a:"Oui, une scène 3D complète de A à Z, livrable pour portfolio."}
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

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Objectifs de la Formation</h2>
            <p className="text-xl text-gray-600">À l'issue de ce bootcamp intensif, vous serez capable de :</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentBootcamp.objectives?.slice(0,2).map((o, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><Target className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{o.split(':')[0]}</h3>
                  <p className="text-gray-600">{o.includes(':') ? o.split(':').slice(1).join(':').trim() : ''}</p>
                </div>
              </div>
            ))}
            {currentBootcamp.objectives?.slice(2,4).map((o, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><Award className="h-6 w-6 text-accent" /></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{o.split(':')[0]}</h3>
                  <p className="text-gray-600">{o.includes(':') ? o.split(':').slice(1).join(':').trim() : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="programme" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-10 -left-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Programme Détaillé</h2>
            <p className="text-xl text-gray-600">Un parcours progressif et immersif couvrant les piliers essentiels</p>
          </div>

          {/* Stepper */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="relative flex items-center justify-between">
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
              {[1,2,3,4,5].map((step) => (
                <button key={step} type="button" onClick={() => setActiveProgramStep(step)} className="relative z-10 flex flex-col items-center focus:outline-none" aria-pressed={activeProgramStep === step}>
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
                    {currentBootcamp.program?.[step - 1]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step content */}
          <div className="max-w-4xl mx-auto">
            {[1,2,3,4,5].map((step) => (
              activeProgramStep === step ? (
                <Card key={step} className="group border-0 shadow-none bg-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
                  <CardHeader className="rounded-2xl p-5 transition-all group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 group-hover:ring-primary/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {currentBootcamp.programDetails?.[step - 1]?.title}
                      <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">Module {step}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-colors">
                    <ul className="text-gray-600 space-y-2 list-disc list-inside">
                      {currentBootcamp.programDetails?.[step - 1]?.bullets?.map((li: string) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ) : null
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section id="infos" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Informations Pratiques</h2>
            <p className="text-xl text-gray-600">Pour s'adapter au mieux à votre emploi du temps</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Durée</h3>
                      <p className="text-gray-600">{currentBootcamp.practical?.duree}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Format</h3>
                      <p className="text-gray-600">{currentBootcamp.practical?.format}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Rythme</h3>
                      <p className="text-gray-600">{currentBootcamp.practical?.rythme}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-900">Prochaine rentrée</h3>
                      <p className="text-gray-600">{currentBootcamp.practical?.rentree}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 inset-x-0 px-4 z-40">
        <div className="mx-auto max-w-3xl rounded-full px-4 py-3 flex items-center justify-between bg-white/25 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/20 border border-white/30 ring-1 ring-white/20 shadow-lg">
          <div className="hidden sm:flex items-center gap-3 text-sm text-gray-700">
            <Clock className="h-4 w-4 text-primary" />
            5 séances • Marrakech
          </div>
          <Button size="sm" className="rounded-full px-5" onClick={handleRegistrationClick}>S’inscrire maintenant</Button>
        </div>
      </div>

      {/* Call to Action */}
      <section id="inscription" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Prêt à Créer en 3D ?</h2>
            <p className="text-xl text-gray-600 mb-8">Rejoignez le Bootcamp 3D et réalisez une scène complète avec rendu Cycles.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" onClick={handleRegistrationClick}>S'inscrire au Bootcamp</Button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contactez-nous pour plus d'informations</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center"><Mail className="h-5 w-5 text-primary mr-2" /><span className="text-gray-700">info@supemir.ma</span></div>
                <div className="flex items-center"><Phone className="h-5 w-5 text-primary mr-2" /><span className="text-gray-700">+212 5XX XXX XXX</span></div>
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
          selectedFormation={currentBootcamp.formationId}
        />
      )}
    </div>
  );
};

export default Bootcamp3D;