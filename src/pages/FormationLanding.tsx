import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Award, Users, Target, CheckCircle, Star, Calendar, MapPin, Phone, Mail, BookOpen, Play, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFormation } from "@/contexts/FormationContext";

const FormationLanding = () => {
  const { formationSlug } = useParams();
  const navigate = useNavigate();
  const { setSelectedFormation } = useFormation();

  // Debug: Log the formation parameter
  console.log('Formation slug:', formationSlug);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Complete formations data with detailed information
  const formationsData = {
    "developpement-web-express": {
      title: "Développement Web Express",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Devenez développeur web en 3 mois !",
      detailedDescription: "Cette formation intensive vous permet de maîtriser le développement web moderne en seulement 3 mois. Vous apprendrez les technologies les plus demandées du marché et créerez des projets concrets pour votre portfolio.",
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
      image: "/dev.jpg",
      category: "tech",
      requirements: [
        "Baccalauréat ou équivalent",
        "Connaissances de base en informatique",
        "Motivation et assiduité",
        "Accès à un ordinateur personnel"
      ],
      benefits: [
        "Formation intensive et pratique",
        "Projets concrets pour le portfolio",
        "Accompagnement personnalisé",
        "Certification reconnue",
        "Support emploi et stage"
      ],
      schedule: "Cours du soir et weekends",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Mars 2024",
      instructor: "Ahmed Benali - Expert Full Stack",
      studentsCount: "25 étudiants max",
      language: "Français"
    },
    "marketing-digital-intensif": {
      title: "Marketing Digital Intensif",
      duration: "2 mois",
      certification: "Certification Professionnelle",
      description: "Maîtrisez le marketing digital en 2 mois",
      detailedDescription: "Formation complète en marketing digital qui vous permet de maîtriser toutes les stratégies et outils nécessaires pour réussir dans le marketing en ligne. Formation pratique avec de vrais projets clients.",
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
      price: "12,000 DH",
      level: "Intermédiaire",
      image: "/Marketing.jpg",
      category: "business",
      requirements: [
        "Baccalauréat ou équivalent",
        "Intérêt pour le digital",
        "Créativité et sens du marketing",
        "Maîtrise des outils informatiques de base"
      ],
      benefits: [
        "Formation intensive et pratique",
        "Projets réels avec entreprises",
        "Réseau professionnel",
        "Outils et licences inclus",
        "Suivi post-formation"
      ],
      schedule: "Cours du soir",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Avril 2024",
      instructor: "Fatima Alami - Expert Marketing Digital",
      studentsCount: "20 étudiants max",
      language: "Français"
    },
    "cybersecurite-pratique": {
      title: "Cybersécurité Pratique",
      duration: "4 mois",
      certification: "Certification Professionnelle",
      description: "Devenez expert en cybersécurité !",
      detailedDescription: "Formation avancée en cybersécurité qui vous prépare aux défis de sécurité informatique modernes. Apprenez les techniques d'ethical hacking et de protection des systèmes.",
      modules: [
        "Ethical Hacking et penetration testing",
        "Sécurité des réseaux et systèmes",
        "Audit de sécurité et vulnérabilités",
        "Incident Response et forensique",
        "Sécurité des applications web",
        "Cryptographie et authentification",
        "Conformité et réglementation",
        "Projet de sécurité complet"
      ],
      skills: [
        "Ethical hacking",
        "Audit de sécurité",
        "Analyse de vulnérabilités",
        "Incident response",
        "Sécurité des réseaux",
        "Forensique numérique"
      ],
      careers: [
        "Analyste en cybersécurité",
        "Ethical Hacker",
        "Auditeur de sécurité",
        "Consultant en sécurité",
        "Incident Response Specialist",
        "Security Architect"
      ],
      price: "18,000 DH",
      level: "Avancé",
      image: "/cyber.jpg",
      category: "tech",
      requirements: [
        "Bac+2 en informatique ou équivalent",
        "Connaissances en réseaux",
        "Expérience en programmation recommandée",
        "Sens de l'éthique et de la confidentialité"
      ],
      benefits: [
        "Formation de niveau expert",
        "Laboratoire de sécurité dédié",
        "Certifications reconnues",
        "Projets réels d'audit",
        "Réseau de professionnels"
      ],
      schedule: "Cours du soir et weekends",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Mai 2024",
      instructor: "Youssef Tazi - Expert Cybersécurité",
      studentsCount: "15 étudiants max",
      language: "Français"
    },
    "data-analytics-express": {
      title: "Data Analytics Express",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Transformez les données en insights !",
      detailedDescription: "Formation complète en analyse de données qui vous permet de maîtriser les outils et techniques d'analyse de données pour prendre des décisions éclairées basées sur les données.",
      modules: [
        "Python pour l'analyse de données",
        "SQL et bases de données",
        "Power BI et visualisation",
        "Statistiques et probabilités",
        "Machine Learning de base",
        "Analyse prédictive",
        "Big Data et outils cloud",
        "Projet d'analyse complet"
      ],
      skills: [
        "Analyse de données avec Python",
        "Visualisation de données",
        "Machine Learning",
        "Statistiques avancées",
        "SQL et bases de données",
        "Outils de BI"
      ],
      careers: [
        "Data Analyst",
        "Business Intelligence Analyst",
        "Data Scientist",
        "Analyste de performance",
        "Consultant en données",
        "Product Analyst"
      ],
      price: "16,000 DH",
      level: "Intermédiaire",
      image: "/data.jpg",
      category: "tech",
      requirements: [
        "Baccalauréat ou équivalent",
        "Connaissances en mathématiques",
        "Logique analytique",
        "Maîtrise des outils informatiques"
      ],
      benefits: [
        "Formation pratique avec vrais datasets",
        "Outils professionnels inclus",
        "Projets d'entreprise",
        "Certification reconnue",
        "Support emploi"
      ],
      schedule: "Cours du soir",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Avril 2024",
      instructor: "Karim Idrissi - Expert Data Science",
      studentsCount: "20 étudiants max",
      language: "Français"
    },
    "management-projet-agile": {
      title: "Management de Projet Agile",
      duration: "1.5 mois",
      certification: "Certification Professionnelle",
      description: "Méthodes agiles en 6 semaines",
      detailedDescription: "Formation intensive en gestion de projet agile qui vous permet de maîtriser les méthodologies agiles les plus utilisées dans l'industrie tech et digitale.",
      modules: [
        "Méthodologies agiles (Scrum, Kanban)",
        "Planification et estimation",
        "Gestion d'équipe et leadership",
        "Outils de gestion (Jira, Trello)",
        "Communication et reporting",
        "Gestion des risques",
        "Qualité et tests",
        "Projet agile complet"
      ],
      skills: [
        "Gestion de projet agile",
        "Leadership d'équipe",
        "Communication efficace",
        "Outils de gestion",
        "Résolution de problèmes",
        "Gestion des risques"
      ],
      careers: [
        "Chef de projet agile",
        "Scrum Master",
        "Product Owner",
        "Project Manager",
        "Agile Coach",
        "Coordinateur de projet"
      ],
      price: "8,000 DH",
      level: "Tous niveaux",
      image: "/agile.jpg",
      category: "business",
      requirements: [
        "Baccalauréat ou équivalent",
        "Expérience professionnelle recommandée",
        "Leadership et communication",
        "Intérêt pour la gestion"
      ],
      benefits: [
        "Formation intensive et pratique",
        "Certification agile reconnue",
        "Simulation de projets réels",
        "Réseau de professionnels",
        "Accompagnement carrière"
      ],
      schedule: "Weekends",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Mars 2024",
      instructor: "Nadia El Fassi - Expert Agile",
      studentsCount: "18 étudiants max",
      language: "Français"
    },
    "design-ux-ui-intensif": {
      title: "Design UX/UI Intensif",
      duration: "2.5 mois",
      certification: "Certification Professionnelle",
      description: "Créez des interfaces exceptionnelles !",
      detailedDescription: "Formation complète en design UX/UI qui vous permet de créer des interfaces utilisateur exceptionnelles et des expériences utilisateur mémorables.",
      modules: [
        "Design thinking et recherche utilisateur",
        "Wireframing et prototypage",
        "Design d'interface (Figma, Adobe XD)",
        "Photoshop et Illustrator",
        "Tests utilisateurs et itération",
        "Design system et guidelines",
        "Responsive design",
        "Projet de design complet"
      ],
      skills: [
        "Design thinking",
        "Prototypage et wireframing",
        "Design d'interface",
        "Tests utilisateurs",
        "Outils de design",
        "Design system"
      ],
      careers: [
        "UX/UI Designer",
        "Product Designer",
        "Interface Designer",
        "Designer d'expérience",
        "Freelance Designer",
        "Design Lead"
      ],
      price: "14,000 DH",
      level: "Débutant",
      image: "/UI UX.jpg",
      category: "design",
      requirements: [
        "Baccalauréat ou équivalent",
        "Sens artistique et créativité",
        "Maîtrise des outils informatiques",
        "Portfolio créatif (optionnel)"
      ],
      benefits: [
        "Formation créative et pratique",
        "Portfolio professionnel",
        "Outils de design inclus",
        "Projets réels",
        "Réseau créatif"
      ],
      schedule: "Cours du soir",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Avril 2024",
      instructor: "Sara Benkirane - Expert UX/UI",
      studentsCount: "16 étudiants max",
      language: "Français"
    },
    "domaine-sante-soins-infirmiers": {
      title: "Domaine de Santé - Soins Infirmiers",
      duration: "4 mois",
      certification: "Certification Professionnelle",
      description: "Formation complète en soins infirmiers",
      detailedDescription: "Formation professionnelle en soins infirmiers qui vous prépare aux défis du secteur de la santé avec une approche pratique et théorique complète.",
      modules: [
        "Anatomie et physiologie",
        "Soins de base et techniques",
        "Pharmacologie et médicaments",
        "Urgences et premiers secours",
        "Éthique et déontologie",
        "Communication avec les patients",
        "Stage pratique en milieu hospitalier",
        "Évaluation et certification"
      ],
      skills: [
        "Soins de base",
        "Techniques infirmières",
        "Pharmacologie",
        "Communication thérapeutique",
        "Gestion des urgences",
        "Éthique professionnelle"
      ],
      careers: [
        "Infirmier(ère)",
        "Aide-soignant(e)",
        "Technicien(ne) de santé",
        "Coordinateur de soins",
        "Formateur en santé",
        "Consultant en santé"
      ],
      price: "20,000 DH",
      level: "Débutant",
      image: "/frmliz.jpg",
      category: "health",
      requirements: [
        "Baccalauréat ou équivalent",
        "Sens de l'empathie",
        "Résistance physique et mentale",
        "Engagement envers les soins"
      ],
      benefits: [
        "Formation pratique en milieu hospitalier",
        "Certification reconnue",
        "Stage d'immersion",
        "Accompagnement personnalisé",
        "Débouchés garantis"
      ],
      schedule: "Cours du jour et stage",
      location: "Campus SUPEMIR + Hôpitaux partenaires",
      startDate: "Prochaine session: Mars 2024",
      instructor: "Dr. Amina El Mansouri - Infirmière cadre",
      studentsCount: "20 étudiants max",
      language: "Français"
    },
    "secourisme-premiers-secours": {
      title: "Secourisme & Premiers Secours",
      duration: "3 jours",
      certification: "Certificat de Secourisme",
      description: "Sauvez des vies en 3 jours !",
      detailedDescription: "Formation intensive en secourisme qui vous permet d'acquérir les gestes qui sauvent et de réagir efficacement en cas d'urgence.",
      modules: [
        "RCP et réanimation cardio-pulmonaire",
        "Gestion des hémorragies",
        "Traumatismes et fractures",
        "Urgences médicales",
        "Étouffement et obstruction",
        "Brûlures et intoxications",
        "Mise en position de sécurité",
        "Évaluation pratique"
      ],
      skills: [
        "RCP et réanimation",
        "Gestion des urgences",
        "Premiers secours",
        "Évaluation des situations",
        "Communication d'urgence",
        "Gestes de survie"
      ],
      careers: [
        "Secouriste",
        "Sapeur-pompier volontaire",
        "Agent de sécurité",
        "Formateur en secourisme",
        "Coordinateur de sécurité",
        "Intervenant d'urgence"
      ],
      price: "1,500 DH",
      level: "Tous niveaux",
      image: "/sos.jpg",
      category: "health",
      requirements: [
        "Aucun prérequis",
        "Motivation et engagement",
        "Capacité physique normale",
        "Sens de la responsabilité"
      ],
      benefits: [
        "Formation intensive et pratique",
        "Certification officielle",
        "Gestes qui sauvent",
        "Confiance en situation d'urgence",
        "Valorisation personnelle"
      ],
      schedule: "3 jours consécutifs",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Sessions régulières",
      instructor: "Commandant Hassan - Formateur agréé",
      studentsCount: "12 participants max",
      language: "Français"
    },
    "bootcamp-marketing-digital": {
      title: "Bootcamp Marketing Digital",
      description: "Formation intensive avec intégration IA par SkillsUp AI",
      detailedDescription: "Dans un monde où le digital évolue à une vitesse fulgurante, maîtriser les stratégies de marketing numérique n'est plus une option, mais une nécessité. Le Bootcamp Marketing Digital de Supemir Marrakech Academy est une formation intensive et immersive, spécialement conçue pour les professionnels désireux de propulser leur carrière et de devenir des leaders dans l'économie numérique.",
      duration: "5 jours",
      level: "Professionnel",
      certification: "Double Certification",
      modules: [
        "Fondamentaux du Marketing Digital",
        "Stratégies de Contenu et Branding",
        "Analyse de Données et Web Analytics",
        "Marketing Automation et CRM",
        "Intelligence Artificielle pour le Marketing"
      ],
      skills: [
        "Maîtrise du Marketing Numérique",
        "Élaboration de Stratégies Marketing Efficaces",
        "Analyse des Données pour la Prise de Décision",
        "Intégration de l'IA dans le Marketing",
        "Certification Reconnue"
      ],
      careers: [
        "Digital Marketing Manager",
        "Marketing Automation Specialist",
        "Data Marketing Analyst",
        "AI Marketing Consultant",
        "Growth Hacker",
        "Digital Strategy Director"
      ],
      price: "Sur demande",
      image: "/Marketing.jpg",
      category: "business",
      requirements: [
        "Baccalauréat ou équivalent",
        "Expérience professionnelle recommandée",
        "Intérêt pour le marketing digital",
        "Motivation et engagement"
      ],
      benefits: [
        "Intégration de l'Intelligence Artificielle avec SkillsUp AI",
        "Certification Supemir Marrakech Academy",
        "Ressources Exclusives et à jour",
        "Formation intensive et immersive",
        "Accompagnement personnalisé"
      ],
      schedule: "Cours du soir, 5 jours par semaine",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Prochaine session: Octobre 2025",
      instructor: "SkillsUp AI + Experts SUPEMIR",
      studentsCount: "20 participants max",
      language: "Français"
    },
    "bureautique-express": {
      title: "Bureautique Express",
      duration: "4 jours",
      certification: "Certificat de Compétences",
      description: "Maîtrisez Office en 4 jours",
      detailedDescription: "Formation accélérée en bureautique qui vous permet de maîtriser les outils Microsoft Office essentiels pour le travail de bureau moderne.",
      modules: [
        "Word - Traitement de texte avancé",
        "Excel - Tableaux et calculs",
        "PowerPoint - Présentations professionnelles",
        "Outlook - Gestion email et agenda",
        "OneDrive et collaboration",
        "Trucs et astuces professionnels",
        "Automatisation des tâches",
        "Évaluation pratique"
      ],
      skills: [
        "Maîtrise de Microsoft Office",
        "Traitement de texte avancé",
        "Calculs et tableaux",
        "Présentations professionnelles",
        "Gestion email et agenda",
        "Collaboration en ligne"
      ],
      careers: [
        "Assistant(e) de direction",
        "Secrétaire",
        "Comptable",
        "Gestionnaire administratif",
        "Freelance bureautique",
        "Formateur bureautique"
      ],
      price: "2,000 DH",
      level: "Tous niveaux",
      image: "/office.jpg",
      category: "business",
      requirements: [
        "Aucun prérequis",
        "Maîtrise de base de l'ordinateur",
        "Motivation d'apprendre",
        "Accès à un ordinateur"
      ],
      benefits: [
        "Formation intensive et pratique",
        "Certification de compétences",
        "Trucs et astuces professionnels",
        "Support post-formation",
        "Amélioration immédiate de productivité"
      ],
      schedule: "4 jours consécutifs",
      location: "Campus SUPEMIR, Marrakech",
      startDate: "Sessions régulières",
      instructor: "Khadija Alami - Expert bureautique",
      studentsCount: "15 participants max",
      language: "Français"
    }
  };

  const currentFormation = formationSlug ? formationsData[formationSlug as keyof typeof formationsData] : null;


  // Set the selected formation when component mounts
  useEffect(() => {
    if (formationSlug) {
      setSelectedFormation(formationSlug);
    }
    
    // Clean up when component unmounts
    return () => {
      setSelectedFormation(null);
    };
  }, [formationSlug, setSelectedFormation]);

  // If formation not found, show error message
  if (!formationSlug || !currentFormation) {
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
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate('/')} 
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary mr-3">
                {currentFormation.category.toUpperCase()}
              </Badge>
              <Badge variant="outline">
                {currentFormation.level}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentFormation.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {currentFormation.description}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {currentFormation.detailedDescription}
            </p>
            
            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentFormation.duration}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentFormation.startDate}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentFormation.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{currentFormation.studentsCount}</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="bg-primary/5 rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {currentFormation.price}
              </div>
              <p className="text-gray-600 mb-4">Prix total de la formation</p>
              <div className="flex gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 flex-1">
                  S'inscrire maintenant
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi choisir cette formation ?</h3>
              <div className="space-y-3">
                {currentFormation.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-3">Formateur</h4>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{currentFormation.instructor}</p>
                    <p className="text-sm text-gray-600">Expert certifié</p>
                  </div>
                </div>
              </div>
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
              Découvrez tous les modules de cette formation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {currentFormation.modules.map((module, index) => (
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
                {currentFormation.skills.map((skill, index) => (
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
                {currentFormation.careers.map((career, index) => (
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
              Conditions d'accès à cette formation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {currentFormation.requirements.map((requirement, index) => (
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
            Prêt à commencer votre formation ?
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
              onClick={() => navigate('/')}
            >
              Voir autres formations
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FormationLanding;
