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
  const { setSelectedFormation, setSelectedFormations } = useFormation();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [activeProgramStep, setActiveProgramStep] = useState<number>(1);
  const [activeBootcamp, setActiveBootcamp] = useState<number>(1);
  const [localSelectedFormations, setLocalSelectedFormations] = useState<number[]>([1]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormationToggle = (formationId: number) => {
    setLocalSelectedFormations(prev => {
      if (prev.includes(formationId)) {
        // Remove formation if already selected
        const newSelection = prev.filter(id => id !== formationId);
        // If no formations selected, keep at least one (the first one)
        if (newSelection.length === 0) {
          return [1];
        }
        return newSelection;
      } else {
        // Add formation if not selected
        return [...prev, formationId];
      }
    });
  };

  const handleRegistrationClick = () => {
    // Pass all selected formations to the context
    const selectedFormationIds = localSelectedFormations.map(id => 
      bootcamps.find(b => b.id === id)?.formationId
    ).filter(Boolean) as string[];
    
    
    if (selectedFormationIds.length > 0) {
      // Set multiple formations in context
      setSelectedFormations(selectedFormationIds);
      // Also set the first one for backward compatibility
      setSelectedFormation(selectedFormationIds[0]);
    setIsRegistrationOpen(true);
    }
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
    setSelectedFormation(null);
    setSelectedFormations([]);
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
      heroSubtitle: "Devenez un artiste 3D complet. Apprenez à sculpter, habiller et photographier virtuellement vos créations pour donner vie à des mondes saisissants. Nous vous initierons à Cycles, le puissant moteur de rendu qui transforme vos scènes en images ultra-réalistes. Conçu pour les créatifs et futurs professionnels.",
      introduction: "Dans un monde où la 3D est omniprésente, du jeu vidéo à la publicité, maîtriser les outils de création numérique est devenu une compétence essentielle. Le Bootcamp 3D Généraliste de Supemir Marrakech Academy est une formation intensive et immersive, spécialement conçue pour vous donner des bases solides et lancer votre carrière dans l'industrie créative. Notre programme, dispensé en présentiel sur 5 jours en cours du soir, est parfaitement adapté à votre emploi du temps. Il vous offre l'opportunité unique de maîtriser Blender, le logiciel 3D open-source de référence, pour transformer vos idées en images spectaculaires.",
      cta: "Découvrez notre Bootcamp et Inscrivez-vous Maintenant !",
      benefits: [
        {
          title: "Le Secret du Photoréalisme Dévoilé",
          description: "Nous mettons l'accent sur Cycles, le \"cerveau\" de Blender qui calcule la lumière comme dans le monde réel. Vous apprendrez à maîtriser l'éclairage et les matériaux pour obtenir des images d'un réalisme époustouflant, une compétence clé recherchée par les studios.",
          icon: <Zap className="h-5 w-5" />
        },
        {
          title: "Certification Supemir Marrakech Academy",
          description: "Validez vos compétences avec une certification délivrée par Supemir Marrakech Academy, une école supérieure réputée pour son excellence académique.",
          icon: <Award className="h-5 w-5" />
        },
        {
          title: "Ressources Exclusives",
          description: "Accédez à une bibliothèque de modèles 3D, de textures prêtes à l'emploi et de ressources pédagogiques pour accélérer votre apprentissage et enrichir vos projets personnels.",
          icon: <BookOpen className="h-5 w-5" />
        }
      ],
      objectives: [
        "Maîtriser Blender : Comprendre l'interface et les fondamentaux pour modéliser (sculpter vos objets), texturer (les habiller) et éclairer (créer une ambiance)",
        "Créer des Scènes 3D Complètes : Concevoir et réaliser une scène de A à Z, de l'objet brut à l'image finale",
        "Développer un Portfolio Solide : Produire une ou plusieurs images de qualité professionnelle pour démarrer ou enrichir votre portfolio",
        "Comprendre le Processus Professionnel : Avoir une vision claire des étapes de création d'une image 3D (le \"pipeline\" de production), une base essentielle pour travailler en équipe ou en freelance"
      ],
      program: [
        "Modélisation Polygonale",
        "UV Unwrapping et Texturing PBR",
        "Éclairage et Composition",
        "Shading et Matériaux Avancés",
        "Rendu avec Cycles et Post-Production"
      ],
      programDetails: [
        {
          title: "Modélisation Polygonale",
          bullets: [
            "Apprenez à sculpter numériquement vos propres objets 3D",
            "Nous vous montrerons comment construire, point par point, n'importe quelle forme",
            "D'un objet simple à un décor complexe"
          ]
        },
        {
          title: "UV Unwrapping et Texturing PBR",
          bullets: [
            "Découvrez comment \"habiller\" vos créations",
            "L'UV Unwrapping, c'est l'art de déplier votre modèle 3D à plat (comme un patron de couture)",
            "Pour y appliquer des textures PBR — des matériaux intelligents qui réagissent à la lumière comme dans la réalité (bois, métal, tissu)"
          ]
        },
        {
          title: "Éclairage et Composition",
          bullets: [
            "Tel un photographe en studio, apprenez à placer des lumières virtuelles pour créer des ambiances",
            "Révéler les détails avec les techniques professionnelles",
            "L'éclairage à 3 points pour sublimer vos sujets"
          ]
        },
        {
          title: "Shading et Matériaux Avancés",
          bullets: [
            "Allez plus loin que la simple couleur",
            "Le Shading consiste à définir la nature d'une surface : est-elle brillante, mate, transparente ou rugueuse ?",
            "C'est ce qui donnera à votre verre son éclat et à votre pierre son aspect brut"
          ]
        },
        {
          title: "Rendu avec Cycles et Post-Production",
          bullets: [
            "L'étape finale ! Le rendu, c'est \"prendre la photo\" de votre scène",
            "Vous apprendrez à utiliser Cycles pour un réalisme incroyable",
            "Avec le Compositor, notre \"Photoshop intégré\", vous ajouterez la touche finale (ajustement des couleurs, effets) directement dans le logiciel"
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
      heroSubtitle: "Transformez vos plans en visites virtuelles saisissantes. Maîtrisez l'art de la visualisation architecturale pour séduire vos clients et vendre vos projets avant même leur construction, grâce aux techniques de rendu photoréaliste sur Blender.",
      introduction: "Dans le secteur de l'immobilier, une image vaut mille plans. Le Bootcamp d'Architecture 3D de Supemir Marrakech Academy est une formation intensive conçue pour les architectes, designers et promoteurs souhaitant transformer leurs projets en visuels percutants. Dispensé sur 5 jours en cours du soir, notre programme vous apprendra à passer d'un plan 2D à une expérience visuelle immersive et convaincante, vous permettant de valider vos choix de design et d'accélérer vos ventes.",
      cta: "Explorez le Programme et Réservez Votre Place !",
      benefits: [
        {
          title: "Focus sur le Photoréalisme Architectural",
          description: "Apprenez les techniques spécifiques pour simuler des matériaux (verre, béton, bois) et maîtriser la lumière (lumière du soleil, éclairage d'ambiance) pour créer des scènes d'un réalisme à couper le souffle.",
          icon: <Palette className="h-5 w-5" />
        },
        {
          title: "Certification Supemir Marrakech Academy",
          description: "Obtenez une certification qui atteste de votre compétence en visualisation architecturale 3D, renforçant votre crédibilité professionnelle.",
          icon: <Award className="h-5 w-5" />
        },
        {
          title: "Ressources Pro",
          description: "Accédez à une collection de modèles de mobilier design et de matériaux réalistes de haute qualité, prêts à être utilisés dans vos projets.",
          icon: <Box className="h-5 w-5" />
        }
      ],
      objectives: [
        "Modéliser un Espace à partir d'un Plan : Transformer un plan technique 2D (DWG/PDF) en une maquette 3D précise et détaillée",
        "Créer des Matériaux Réalistes : Concevoir et appliquer des textures et matériaux qui semblent réels au toucher (parquets, marbres, textiles)",
        "Mettre en Place un Éclairage d'Ambiance : Maîtriser les techniques d'éclairage pour créer des atmosphères uniques, de la lumière chaude d'un salon à la clarté d'un bureau",
        "Produire une Image Professionnelle : Générer des images de haute qualité et les peaufiner directement dans Blender pour un résultat impeccable"
      ],
      program: [
        "Modélisation d'après Plans 2D",
        "Matériaux PBR pour l'Architecture",
        "Éclairage Avancé",
        "Composition et Cadrage",
        "Rendu et Post-Production"
      ],
      programDetails: [
        {
          title: "Modélisation d'après Plans 2D",
          bullets: [
            "Donnez vie à vos plans",
            "Apprenez les techniques pour transformer un plan 2D en une maquette 3D précise",
            "En construisant les murs, les sols et les ouvertures"
          ]
        },
        {
          title: "Matériaux PBR pour l'Architecture",
          bullets: [
            "Habillez votre structure avec un réalisme parfait",
            "Nous utiliserons la technologie PBR pour créer les textures essentielles",
            "La transparence du verre, le grain du parquet ou la texture brute du béton"
          ]
        },
        {
          title: "Éclairage Avancé",
          bullets: [
            "Créez des ambiances qui vendent",
            "Maîtrisez la lumière naturelle avec des HDRI (des photos du ciel à 360° qui baignent votre scène d'une lumière authentique)",
            "Et l'éclairage artificiel avec des profils IES (qui imitent le faisceau exact de véritables luminaires)"
          ]
        },
        {
          title: "Composition et Cadrage",
          bullets: [
            "Pensez comme un photographe d'architecture",
            "Apprenez à choisir le meilleur angle de caméra pour mettre en valeur les volumes",
            "Les perspectives et les points forts de votre projet"
          ]
        },
        {
          title: "Rendu et Post-Production",
          bullets: [
            "Générez l'image finale",
            "Lancez le rendu avec Cycles pour une qualité saisissante",
            "Puis, utilisez le Compositor, l'outil de retouche intégré, pour ajuster la luminosité et donner à votre image une finition professionnelle"
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
      heroSubtitle: "Créez des visuels produits dignes des plus grandes marques. Apprenez à monter un studio photo virtuel et à maîtriser l'éclairage professionnel pour des images parfaites, destinées à vos campagnes publicitaires et fiches e-commerce.",
      introduction: "À l'ère du e-commerce, la qualité des visuels est le premier facteur de conversion. La 3D offre une flexibilité et une perfection impossibles à atteindre avec la photographie traditionnelle. Le Bootcamp de Rendu 3D pour Produits de Supemir Marrakech Academy est une formation intensive pour les marketeurs, entrepreneurs et designers souhaitant créer des images produits exceptionnelles. Sur 5 jours en cours du soir, ce programme vous donnera les clés pour monter un studio photo virtuel, éclairer et texturer n'importe quel produit pour le rendre irrésistible.",
      cta: "Transformez Vos Produits, Inscrivez-vous !",
      benefits: [
        {
          title: "Focus sur l'Éclairage de Studio Pro",
          description: "Maîtrisez les techniques d'éclairage utilisées par les photographes professionnels pour magnifier chaque détail de vos produits et leur donner un aspect luxueux.",
          icon: <Lightbulb className="h-5 w-5" />
        },
        {
          title: "Certification Supemir Marrakech Academy",
          description: "Une certification prouvant votre expertise en création de visuels 3D, un atout majeur pour les métiers du marketing et de l'e-commerce.",
          icon: <Award className="h-5 w-5" />
        },
        {
          title: "Ressources Prêtes à l'Emploi",
          description: "Obtenez des configurations de studio et des matériaux prêts à l'emploi pour accélérer considérablement la création de vos visuels.",
          icon: <Settings className="h-5 w-5" />
        }
      ],
      objectives: [
        "Mettre en Place un Studio Photo Virtuel : Construire une scène avec un fond et un éclairage professionnels pour isoler et sublimer votre produit",
        "Créer des Matériaux Photoréalistes : Apprendre à simuler des matières complexes comme le verre, les liquides, les métaux (brossé, chromé) et les plastiques",
        "Appliquer des Logos et Étiquettes : Utiliser des techniques précises pour appliquer parfaitement des éléments de branding sur vos produits, sans aucune déformation",
        "Produire des Visuels Publicitaires : Composer, \"photographier\" virtuellement et retoucher des images prêtes pour une campagne marketing ou une boutique en ligne"
      ],
      program: [
        "Studio Virtuel et Éclairage",
        "Shading Avancé (La Science des Matières)",
        "UV Mapping pour le Branding",
        "Composition pour le Marketing",
        "Rendu et Publicité"
      ],
      programDetails: [
        {
          title: "Studio Virtuel et Éclairage",
          bullets: [
            "Montez votre propre studio photo numérique",
            "Vous apprendrez à créer un environnement parfait, comme un fond infini (cyclorama)",
            "Et à maîtriser l'éclairage professionnel pour mettre en valeur chaque courbe de votre produit"
          ]
        },
        {
          title: "Shading Avancé (La Science des Matières)",
          bullets: [
            "Le Shading est l'art de recréer numériquement l'aspect exact d'un matériau",
            "Nous verrons comment simuler à la perfection la transparence du verre, la viscosité d'un liquide",
            "L'éclat du métal ou la douceur d'un plastique mat"
          ]
        },
        {
          title: "UV Mapping pour le Branding",
          bullets: [
            "Apposez votre marque avec une précision absolue",
            "L'UV Mapping est la technique qui permet de \"coller\" une étiquette ou un logo sur la surface de votre produit 3D",
            "Sans aucun pli ni déformation"
          ]
        },
        {
          title: "Composition pour le Marketing",
          bullets: [
            "Racontez une histoire avec votre image",
            "Apprenez à cadrer et à mettre en scène votre produit pour créer un visuel qui attire l'œil",
            "Communique la qualité et suscite le désir d'achat"
          ]
        },
        {
          title: "Rendu et Publicité",
          bullets: [
            "De la 3D à la campagne pub",
            "Le rendu transforme votre scène en une image finale haute définition",
            "Nous vous montrerons comment optimiser cette \"photo virtuelle\" pour qu'elle soit parfaite pour votre site e-commerce et vos réseaux sociaux"
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

  const currentBootcamp = bootcamps[localSelectedFormations[0] - 1];

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
                {currentBootcamp.heroTitle}
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
                  {localSelectedFormations.length === 1 
                    ? `S'inscrire au ${currentBootcamp.title}` 
                    : `S'inscrire (${localSelectedFormations.length} formations)`
                  }
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

      {/* Formation Selector Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choisissez Vos Spécialisations 3D</h2>
            <p className="text-lg text-gray-600">Sélectionnez une ou plusieurs formations qui correspondent à vos objectifs professionnels</p>
            {localSelectedFormations.length > 1 && (
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                {localSelectedFormations.length} formations sélectionnées
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bootcamps.map((bootcamp, index) => (
              <Card 
                key={bootcamp.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  localSelectedFormations.includes(bootcamp.id)
                    ? 'ring-2 ring-primary shadow-lg scale-105' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => handleFormationToggle(bootcamp.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${bootcamp.gradient} flex items-center justify-center text-white mx-auto mb-4`}>
                    {bootcamp.id === 1 && <Box className="h-8 w-8" />}
                    {bootcamp.id === 2 && <Palette className="h-8 w-8" />}
                    {bootcamp.id === 3 && <Lightbulb className="h-8 w-8" />}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {bootcamp.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {bootcamp.subtitle}
                  </CardDescription>
                  {localSelectedFormations.includes(bootcamp.id) && (
                    <Badge className="bg-primary text-primary-foreground">
                      {localSelectedFormations.length === 1 ? 'Formation sélectionnée' : 'Sélectionnée'}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {bootcamp.practical?.duree}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {bootcamp.practical?.format}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {bootcamp.practical?.rentree}
                    </div>
                  </div>
                  <Button 
                    className={`w-full mt-4 ${
                      localSelectedFormations.includes(bootcamp.id)
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFormationToggle(bootcamp.id);
                    }}
                  >
                    {localSelectedFormations.includes(bootcamp.id) 
                      ? (localSelectedFormations.length === 1 ? 'Formation sélectionnée' : 'Sélectionnée') 
                      : 'Sélectionner cette formation'
                    }
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              onClick={handleRegistrationClick}
            >
              {localSelectedFormations.length === 1 
                ? `S'inscrire à la Formation Sélectionnée` 
                : `S'inscrire aux ${localSelectedFormations.length} Formations Sélectionnées`
              }
            </Button>
            {localSelectedFormations.length > 1 && (
              <p className="text-sm text-gray-600 mt-2">
                Vous serez contacté pour organiser les formations multiples
              </p>
            )}
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
                    À l'issue du bootcamp, vous recevez un certificat exécutif de Supemir Marrakech Academy, attestant
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
            <div className="grid sm:grid-cols-2 gap-8 items-stretch">
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ce que vous obtenez</h4>
                <ul className="text-gray-700 grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    'Certificat Exécutif',
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
                  <ul className="text-gray-600 grid grid-cols-2 gap-3 list-none">
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
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Places limitées
            </span>
          </div>
          <Button size="sm" className="rounded-full px-5" onClick={handleRegistrationClick}>
            {localSelectedFormations.length === 1 
              ? `S'inscrire au ${currentBootcamp.title}` 
              : `S'inscrire (${localSelectedFormations.length} formations)`
            }
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <section id="inscription" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Prêt à Créer en 3D ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              {localSelectedFormations.length === 1 
                ? `Rejoignez le ${currentBootcamp.title} et maîtrisez les techniques professionnelles de création 3D.`
                : `Rejoignez nos ${localSelectedFormations.length} formations 3D et maîtrisez les techniques professionnelles de création 3D.`
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" onClick={handleRegistrationClick}>
                {localSelectedFormations.length === 1 
                  ? `S'inscrire au ${currentBootcamp.title}` 
                  : `S'inscrire aux ${localSelectedFormations.length} Formations`
                }
              </Button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contactez-nous pour plus d'informations</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center"><Mail className="h-5 w-5 text-primary mr-2" /><span className="text-gray-700">marrakech-academy@supemir.com</span></div>
                <div className="flex items-center"><Phone className="h-5 w-5 text-primary mr-2" /><span className="text-gray-700">+212 661497647</span></div>
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
          selectedFormations={localSelectedFormations.map(id => 
            bootcamps.find(b => b.id === id)?.formationId
          ).filter(Boolean) as string[]}
        />
      )}
    </div>
  );
};

export default Bootcamp3D;