import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Award, Users, Target, CheckCircle, Star, Calendar, MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFormation } from "@/contexts/FormationContext";

const FormationRapideDetail = () => {
  const { formation } = useParams();
  const navigate = useNavigate();
  const { setSelectedFormation } = useFormation();

  // Debug: Log the formation parameter
  console.log('Formation parameter:', formation);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Formation data
  const formationsData = {
    "developpement-web-express": {
      title: "Développement Web Express",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Formation intensive en développement web front-end et back-end avec les technologies les plus demandées du marché",
      detailedDescription: "Cette Certificat exécutif vous permet de maîtriser les technologies web essentielles. Vous apprendrez à créer des sites web modernes, des applications web dynamiques et à gérer des bases de données. La formation combine théorie et pratique avec de nombreux projets concrets.",
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
      price: "15,000 DH",
      level: "Débutant",
      prerequisites: "Aucun prérequis technique requis. Motivation et envie d'apprendre suffisent !",
      schedule: "Lundi au Vendredi, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Prochaine session : 15 Janvier 2025",
      features: [
        "Formation 100% pratique",
        "Projets réels d'entreprises",
        "Accompagnement personnalisé",
        "Certification reconnue",
        "Aide à l'insertion professionnelle",
        "Accès à vie aux ressources"
      ]
    },
    "marketing-digital-intensif": {
      title: "Marketing Digital Intensif",
      duration: "2 mois",
      certification: "Certification Professionnelle",
      description: "Maîtrisez les outils et stratégies du marketing digital moderne pour booster votre carrière",
      detailedDescription: "Cette formation intensive vous donne toutes les clés pour réussir dans le marketing digital. Vous apprendrez à créer des campagnes efficaces, analyser les performances et optimiser votre présence en ligne. Formation pratique avec des cas réels d'entreprises.",
      modules: [
        "Stratégie marketing digital",
        "SEO et référencement naturel",
        "Google Ads et publicité payante",
        "Réseaux sociaux et community management",
        "Email marketing et automation",
        "Google Analytics et data analysis",
        "Content marketing et storytelling",
        "Projet de campagne complète"
      ],
      skills: [
        "Création de stratégies digitales",
        "Gestion de campagnes publicitaires",
        "Analyse de données marketing",
        "Community management",
        "Content marketing",
        "ROI et performance marketing"
      ],
      careers: [
        "Chef de projet marketing digital",
        "Responsable SEO/SEA",
        "Community manager",
        "Analyste marketing",
        "Consultant digital",
        "Freelance marketing"
      ],
      price: "12,000 DH",
      level: "Intermédiaire",
      prerequisites: "Bases en marketing ou expérience professionnelle recommandées",
      schedule: "Lundi au Vendredi, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Prochaine session : 20 Janvier 2025",
      features: [
        "Cas pratiques d'entreprises",
        "Outils professionnels inclus",
        "Certification Google Ads",
        "Réseau professionnel",
        "Suivi post-formation",
        "Portfolio de projets"
      ]
    },
    "cybersecurite-pratique": {
      title: "Cybersécurité Pratique",
      duration: "4 mois",
      certification: "Certification Professionnelle",
      description: "Formation pratique en sécurité informatique et protection des systèmes pour devenir expert cybersécurité",
      detailedDescription: "Cette formation vous prépare aux défis de la cybersécurité moderne. Vous apprendrez les techniques d'attaque et de défense, l'audit de sécurité, et la gestion des incidents. Formation très pratique avec des laboratoires de sécurité réels.",
      image: "/cyber.jpg",
      modules: [
        "Fondamentaux de la cybersécurité",
        "Ethical hacking et penetration testing",
        "Sécurité des réseaux et systèmes",
        "Cryptographie et sécurité des données",
        "Audit de sécurité et conformité",
        "Incident response et forensique",
        "Sécurité des applications web",
        "Projet de sécurité complet"
      ],
      skills: [
        "Tests de pénétration",
        "Audit de sécurité",
        "Gestion des incidents",
        "Analyse forensique",
        "Sécurisation des systèmes",
        "Conformité et réglementation"
      ],
      careers: [
        "Analyste en cybersécurité",
        "Penetration tester",
        "Auditeur sécurité",
        "Consultant cybersécurité",
        "Responsable SOC",
        "Expert forensique"
      ],
      price: "18,000 DH",
      level: "Avancé",
      prerequisites: "Bases en informatique et réseaux requises",
      schedule: "Lundi au Vendredi, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Prochaine session : 10 Février 2025",
      features: [
        "Laboratoires de sécurité",
        "Certifications professionnelles",
        "Simulations d'attaques",
        "Outils professionnels",
        "Mentorat expert",
        "Projets réels"
      ]
    },
    "data-analytics-express": {
      title: "Data Analytics Express",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Analyse de données et business intelligence pour les entreprises modernes",
      detailedDescription: "Cette formation vous transforme en expert de l'analyse de données. Vous apprendrez à collecter, traiter et analyser des données pour prendre des décisions éclairées. Formation pratique avec des datasets réels d'entreprises.",
      modules: [
        "Python pour l'analyse de données",
        "SQL et bases de données",
        "Statistiques et probabilités",
        "Visualisation avec Power BI",
        "Machine Learning basique",
        "Big Data et Hadoop",
        "Business Intelligence",
        "Projet d'analyse complet"
      ],
      skills: [
        "Analyse statistique",
        "Programmation Python/R",
        "Visualisation de données",
        "Machine Learning",
        "Business Intelligence",
        "Communication des insights"
      ],
      careers: [
        "Data Analyst",
        "Business Analyst",
        "Data Scientist junior",
        "Consultant BI",
        "Analyste marketing",
        "Freelance data"
      ],
      price: "16,000 DH",
      level: "Intermédiaire",
      prerequisites: "Bases en mathématiques et logique",
      schedule: "Lundi au Vendredi, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Prochaine session : 25 Janvier 2025",
      features: [
        "Datasets réels d'entreprises",
        "Outils professionnels",
        "Certification Microsoft",
        "Projets concrets",
        "Mentorat data expert",
        "Portfolio d'analyses"
      ]
    },
    "management-projet-agile": {
      title: "Management de Projet Agile",
      duration: "1.5 mois",
      certification: "Certification Professionnelle",
      description: "Méthodes agiles et gestion de projet moderne pour les professionnels",
      detailedDescription: "Cette formation vous donne toutes les compétences pour gérer des projets avec les méthodes agiles. Vous apprendrez Scrum, Kanban, et les outils modernes de gestion de projet. Formation très pratique avec des simulations de projets réels.",
      modules: [
        "Fondamentaux du management de projet",
        "Méthodologie Scrum",
        "Kanban et flux de travail",
        "Outils de gestion (Jira, Trello)",
        "Leadership et communication",
        "Gestion des équipes",
        "Agile dans différents contextes",
        "Simulation de projet complet"
      ],
      skills: [
        "Gestion de projet agile",
        "Leadership d'équipe",
        "Communication efficace",
        "Outils de collaboration",
        "Gestion des risques",
        "Optimisation des processus"
      ],
      careers: [
        "Chef de projet",
        "Scrum Master",
        "Product Owner",
        "Responsable d'équipe",
        "Consultant agile",
        "Manager de projet"
      ],
      price: "8,000 DH",
      level: "Tous niveaux",
      prerequisites: "Expérience professionnelle recommandée",
      schedule: "Lundi au Vendredi, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Prochaine session : 5 Février 2025",
      features: [
        "Simulations de projets",
        "Certification Scrum",
        "Outils professionnels",
        "Réseau de professionnels",
        "Suivi post-formation",
        "Mentorat expert"
      ]
    },
    "design-ux-ui-intensif": {
      title: "Design UX/UI Intensif",
      duration: "2.5 mois",
      certification: "Certification Professionnelle",
      description: "Conception d'interfaces utilisateur modernes et ergonomiques",
      detailedDescription: "Cette formation vous transforme en designer UX/UI professionnel. Vous apprendrez à créer des interfaces intuitives, à mener des recherches utilisateur et à prototyper vos idées. Formation pratique avec des projets réels.",
      modules: [
        "Fondamentaux du design UX/UI",
        "Recherche utilisateur",
        "Wireframing et prototypage",
        "Design system et composants",
        "Figma et outils de design",
        "Tests utilisateurs",
        "Accessibilité et inclusivité",
        "Projet de design complet"
      ],
      skills: [
        "Design thinking",
        "Prototypage interactif",
        "Recherche utilisateur",
        "Design system",
        "Tests d'utilisabilité",
        "Collaboration avec développeurs"
      ],
      careers: [
        "UX/UI Designer",
        "Product Designer",
        "Designer d'interface",
        "Freelance designer",
        "Consultant UX",
        "Designer de produits"
      ],
      price: "14,000 DH",
      level: "Débutant",
      prerequisites: "Créativité et sens esthétique",
      schedule: "Lundi au Vendredi, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Prochaine session : 30 Janvier 2025",
      features: [
        "Projets de design réels",
        "Outils professionnels",
        "Portfolio de projets",
        "Mentorat designer",
        "Réseau créatif",
        "Certification design"
      ]
    },
    "domaine-sante-soins-infirmiers": {
      title: "Domaine de Santé - Soins Infirmiers",
      duration: "4 mois",
      certification: "Certification Professionnelle",
      description: "Formation complète en soins infirmiers et techniques médicales",
      detailedDescription: "Cette formation vous prépare à exercer le métier d'infirmier avec toutes les compétences nécessaires. Vous apprendrez les soins de base, la pharmacologie, l'anatomie et la physiologie. Formation pratique avec des stages en milieu hospitalier.",
      modules: [
        "Anatomie et physiologie humaine",
        "Soins infirmiers fondamentaux",
        "Pharmacologie et thérapeutique",
        "Hygiène et asepsie",
        "Communication et relation d'aide",
        "Éthique et déontologie",
        "Urgences et soins critiques",
        "Stage pratique en milieu hospitalier"
      ],
      skills: [
        "Soins infirmiers de base",
        "Administration de médicaments",
        "Techniques d'hygiène",
        "Communication avec les patients",
        "Gestion des urgences",
        "Travail en équipe pluridisciplinaire"
      ],
      careers: [
        "Infirmier diplômé professionnel",
        "Infirmier en service hospitalier",
        "Infirmier libéral",
        "Infirmier en entreprise",
        "Coordinateur de soins",
        "Formateur en santé"
      ],
      price: "20,000 DH",
      level: "Débutant",
      prerequisites: "Baccalauréat + Test d'aptitude + Entretien",
      schedule: "Lundi au Vendredi, 8h-16h",
      location: "Campus SUPEMIR Casablanca + Hôpitaux partenaires",
      startDate: "Prochaine session : 15 Février 2025",
      features: [
        "Stages en hôpitaux",
        "Formation pratique intensive",
        "Certification Professionnelle",
        "Accompagnement personnalisé",
        "Réseau professionnel santé",
        "Aide à l'insertion"
      ]
    },
    "secourisme-premiers-secours": {
      title: "Secourisme & Premiers Secours",
      duration: "3 jours",
      certification: "Certificat de Secourisme",
      description: "Formation intensive en secourisme et gestes de premiers secours",
      detailedDescription: "Cette formation vous donne les compétences essentielles pour sauver des vies. Vous apprendrez les gestes de premiers secours, la réanimation cardio-pulmonaire et la gestion des urgences. Formation pratique avec des mannequins et simulations.",
      modules: [
        "Protection et alerte",
        "Réanimation cardio-pulmonaire (RCP)",
        "Gestion des hémorragies",
        "Traumatismes et fractures",
        "Urgences médicales",
        "Utilisation du défibrillateur",
        "Simulations d'urgence",
        "Évaluation pratique"
      ],
      skills: [
        "Réanimation cardio-pulmonaire",
        "Gestion des hémorragies",
        "Immobilisation des traumatismes",
        "Utilisation du défibrillateur",
        "Gestion du stress en urgence",
        "Communication avec les secours"
      ],
      careers: [
        "Secouriste en entreprise",
        "Formateur en secourisme",
        "Agent de sécurité",
        "Pompier volontaire",
        "Animateur sportif",
        "Particulier formé"
      ],
      price: "1,500 DH",
      level: "Tous niveaux",
      prerequisites: "Aucun prérequis",
      schedule: "3 jours consécutifs, 8h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Sessions hebdomadaires disponibles",
      features: [
        "Formation pratique intensive",
        "Mannequins de formation",
        "Certificat reconnu",
        "Formateurs qualifiés",
        "Simulations réalistes",
        "Mise à jour des connaissances"
      ]
    },
    "bureautique-express": {
      title: "Bureautique Express",
      duration: "4 jours",
      certification: "Certificat de Compétences",
      description: "Maîtrise complète des outils bureautiques essentiels",
      detailedDescription: "Cette formation vous donne une maîtrise complète des outils bureautiques indispensables en entreprise. Vous apprendrez à utiliser efficacement Word, Excel, PowerPoint et Outlook pour optimiser votre productivité professionnelle.",
      modules: [
        "Microsoft Word - Rédaction professionnelle",
        "Microsoft Excel - Tableaux et calculs",
        "Microsoft PowerPoint - Présentations",
        "Microsoft Outlook - Gestion email",
        "Trucs et astuces avancés",
        "Automatisation des tâches",
        "Collaboration en ligne",
        "Projet pratique final"
      ],
      skills: [
        "Rédaction de documents professionnels",
        "Création de tableaux et graphiques",
        "Présentations dynamiques",
        "Gestion d'emails efficace",
        "Automatisation des tâches",
        "Collaboration numérique"
      ],
      careers: [
        "Assistant administratif",
        "Secrétaire de direction",
        "Gestionnaire de données",
        "Chargé de communication",
        "Freelance bureautique",
        "Tout poste administratif"
      ],
      price: "2,000 DH",
      level: "Débutant",
      prerequisites: "Bases en informatique",
      schedule: "4 jours consécutifs, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Sessions hebdomadaires disponibles",
      features: [
        "Formation pratique intensive",
        "Exercices concrets",
        "Certificat de compétences",
        "Support de cours inclus",
        "Suivi post-formation",
        "Mise à jour des versions"
      ]
    },
    "gestion-stress-bien-etre": {
      title: "Gestion de Stress & Bien-être",
      duration: "7 jours",
      certification: "Certificat de Formation",
      description: "Techniques de gestion du stress et amélioration du bien-être professionnel",
      detailedDescription: "Cette formation vous donne des outils concrets pour gérer le stress et améliorer votre bien-être au travail. Vous apprendrez des techniques de relaxation, de mindfulness et de communication pour un équilibre vie professionnelle/personnelle optimal.",
      image: "/gestion-stress-bien-etre.jpg",
      modules: [
        "Comprendre le stress et ses mécanismes",
        "Techniques de relaxation et respiration",
        "Mindfulness et méditation",
        "Communication non-violente",
        "Gestion du temps et priorités",
        "Équilibre vie pro/perso",
        "Techniques de motivation",
        "Plan d'action personnel"
      ],
      skills: [
        "Gestion du stress",
        "Techniques de relaxation",
        "Mindfulness et méditation",
        "Communication efficace",
        "Gestion du temps",
        "Équilibre de vie"
      ],
      careers: [
        "Manager et dirigeant",
        "Formateur en bien-être",
        "Coach personnel",
        "Consultant RH",
        "Tout professionnel",
        "Particulier"
      ],
      price: "3,500 DH",
      level: "Tous niveaux",
      prerequisites: "Aucun prérequis",
      schedule: "7 jours, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Sessions mensuelles disponibles",
      features: [
        "Techniques pratiques",
        "Exercices de relaxation",
        "Suivi personnalisé",
        "Certificat de formation",
        "Ressources complémentaires",
        "Groupe de soutien"
      ]
    },
    "domaine-sante-aide-soignant": {
      title: "Domaine de Santé - Aide-Soignant",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Formation professionnelle en aide-soignant et accompagnement des patients",
      detailedDescription: "Cette formation vous prépare au métier d'aide-soignant avec toutes les compétences nécessaires pour accompagner les patients. Vous apprendrez les soins de base, l'hygiène hospitalière et la communication avec les patients et leurs familles.",
      image: "/sante-aide-soignant.jpg",
      modules: [
        "Hygiène hospitalière et asepsie",
        "Aide aux soins de base",
        "Communication et relation d'aide",
        "Éthique et déontologie médicale",
        "Anatomie et physiologie",
        "Gestion des urgences",
        "Travail en équipe",
        "Stage pratique en établissement"
      ],
      skills: [
        "Soins d'hygiène et de confort",
        "Aide aux soins médicaux",
        "Communication avec les patients",
        "Respect des protocoles",
        "Travail en équipe",
        "Gestion des situations d'urgence"
      ],
      careers: [
        "Aide-soignant en hôpital",
        "Aide-soignant en EHPAD",
        "Aide-soignant à domicile",
        "Assistant médical",
        "Coordinateur de soins",
        "Formateur en santé"
      ],
      price: "18,000 DH",
      level: "Débutant",
      prerequisites: "Baccalauréat + Test d'aptitude",
      schedule: "Lundi au Vendredi, 8h-16h",
      location: "Campus SUPEMIR + Établissements de santé",
      startDate: "Prochaine session : 20 Février 2025",
      features: [
        "Stages en établissements",
        "Formation pratique intensive",
        "Certification Professionnelle",
        "Accompagnement personnalisé",
        "Réseau professionnel",
        "Aide à l'insertion"
      ]
    },
    "formation-express-comptabilite": {
      title: "Formation Express - Comptabilité",
      duration: "7 jours",
      certification: "Certificat de Compétences",
      description: "Formation intensive en comptabilité générale et gestion financière",
      detailedDescription: "Cette formation express vous donne les bases essentielles de la comptabilité générale. Vous apprendrez à tenir une comptabilité, gérer la fiscalité et utiliser les logiciels comptables. Formation pratique avec des cas concrets d'entreprises.",
      modules: [
        "Fondamentaux de la comptabilité",
        "Comptabilité générale",
        "Fiscalité de base",
        "Gestion de la paie",
        "Logiciels comptables",
        "États financiers",
        "Contrôle de gestion",
        "Cas pratique complet"
      ],
      skills: [
        "Tenue de comptabilité",
        "Gestion fiscale",
        "Calcul de paie",
        "Utilisation de logiciels",
        "Analyse financière",
        "Contrôle de gestion"
      ],
      careers: [
        "Comptable",
        "Assistant comptable",
        "Gestionnaire de paie",
        "Responsable administratif",
        "Freelance comptable",
        "Créateur d'entreprise"
      ],
      price: "4,000 DH",
      level: "Intermédiaire",
      prerequisites: "Bases en mathématiques",
      schedule: "7 jours, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Sessions mensuelles disponibles",
      features: [
        "Formation pratique intensive",
        "Logiciels professionnels",
        "Cas d'entreprises réels",
        "Certificat de compétences",
        "Support de cours",
        "Suivi post-formation"
      ]
    },
    "modelisation-3d-animation": {
      title: "Modélisation 3D & Animation",
      duration: "2 mois",
      certification: "Certification Professionnelle",
      description: "Formation complète en modélisation 3D, animation et rendu",
      detailedDescription: "Cette formation vous transforme en artiste 3D professionnel. Vous apprendrez à créer des modèles 3D, des animations et des rendus de qualité professionnelle pour le cinéma, les jeux vidéo, l'architecture et la publicité.",
      image: "/modelisation-3d-animation.jpg",
      modules: [
        "Fondamentaux de la 3D",
        "Modélisation avec Blender",
        "Texturing et matériaux",
        "Éclairage et rendu",
        "Animation 3D",
        "Compositing et post-production",
        "Workflow professionnel",
        "Projet final complet"
      ],
      skills: [
        "Modélisation 3D",
        "Texturing et shading",
        "Animation 3D",
        "Éclairage et rendu",
        "Compositing",
        "Workflow professionnel"
      ],
      careers: [
        "Modeleur 3D",
        "Animateur 3D",
        "Artiste de rendu",
        "Freelance 3D",
        "Concept artist",
        "Directeur artistique"
      ],
      price: "16,000 DH",
      level: "Débutant",
      prerequisites: "Créativité et sens artistique",
      schedule: "Lundi au Vendredi, 9h-17h",
      location: "Campus SUPEMIR Casablanca",
      startDate: "Prochaine session : 10 Mars 2025",
      features: [
        "Logiciels professionnels",
        "Projets créatifs",
        "Portfolio de projets",
        "Mentorat artistique",
        "Réseau créatif",
        "Certification reconnue"
      ]
    }
  };

  const currentFormation = formation ? formationsData[formation as keyof typeof formationsData] : null;

  // Set the selected formation when component mounts
  useEffect(() => {
    if (formation) {
      // Clear any previous program selections
      setSelectedProgramType(null);
      setSelectedProgram(null);
      // Set the current formation
      setSelectedFormation(formation);
    }
    
    // Clean up when component unmounts
    return () => {
      setSelectedFormation(null);
    };
  }, [formation, setSelectedFormation, setSelectedProgramType, setSelectedProgram]);

  // If formation not found, show error message
  if (!formation || !currentFormation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
            <p className="text-lg text-gray-600 mb-8">
              La formation que vous recherchez n'existe pas ou a été supprimée.
            </p>
            <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
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
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover-lift"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux formations certifiées
        </Button>

        <div className="animate-fade-in">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-supemir-orange to-supemir-red text-white rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-white text-supemir-orange">
                {currentFormation.level}
              </Badge>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2" />
                {currentFormation.duration}
              </div>
              <div className="flex items-center text-sm">
                <Award className="h-4 w-4 mr-2" />
                {currentFormation.certification}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{currentFormation.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl mb-6">{currentFormation.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-supemir-orange hover:bg-white/90 animate-glow"
                onClick={() => {
                  // Trigger the registration form to open
                  const event = new CustomEvent('openRegistration');
                  window.dispatchEvent(event);
                }}
              >
                🚀 S'inscrire maintenant
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description détaillée */}
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-supemir-orange" />
                    À propos de cette formation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentFormation.detailedDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Formation Image */}
              {currentFormation.image && (
                <Card className="animate-slide-up" style={{animationDelay: '0.05s'}}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={currentFormation.image} 
                        alt={currentFormation.title}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Modules */}
              <Card className="animate-slide-up" style={{animationDelay: '0.1s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-supemir-orange" />
                    Programme de formation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {currentFormation.modules.map((module, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-supemir-orange mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-supemir-orange" />
                    Compétences développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentFormation.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Careers */}
              <Card className="animate-slide-up" style={{animationDelay: '0.3s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-supemir-orange" />
                    Débouchés professionnels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentFormation.careers.map((career, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-lg bg-muted/20">
                        <Award className="h-4 w-4 text-supemir-orange" />
                        <span className="text-sm font-medium">{career}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="animate-slide-up" style={{animationDelay: '0.1s'}}>
                <CardHeader>
                  <CardTitle className="text-lg">Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Durée</span>
                    <span className="font-semibold">{currentFormation.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Niveau</span>
                    <Badge variant="outline">{currentFormation.level}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Prix</span>
                    <span className="font-semibold text-supemir-orange">{currentFormation.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Horaires</span>
                    <span className="font-semibold text-sm">{currentFormation.schedule}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle className="text-lg">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{currentFormation.prerequisites}</p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="animate-slide-up" style={{animationDelay: '0.3s'}}>
                <CardHeader>
                  <CardTitle className="text-lg">Ce qui est inclus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {currentFormation.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-supemir-orange" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <CardTitle className="text-lg">Besoin d'informations ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Contactez nos conseillers pédagogiques
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('mailto:infos@supemir.com?subject=Rendez-vous - ' + currentFormation.title, '_blank')}
                  >
                    Prendre rendez-vous
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center mb-1">
                      <Phone className="h-4 w-4 mr-1" />
                      +212 522 249 175
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-1" />
                      infos@supemir.com
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FormationRapideDetail;
