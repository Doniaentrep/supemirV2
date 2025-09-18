import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, CheckCircle, Star, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFormation } from "@/contexts/FormationContext";

const ProgramDetail = () => {
  const { type, program } = useParams();
  const navigate = useNavigate();
  const { setSelectedProgramType, setSelectedProgram, setSelectedFormation } = useFormation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Program data
  const programsData = {
    licence: {
      "developpement-web-fullstack": {
        title: "Développement Web Full Stack",
        description: "Formation complète en développement web front-end et back-end avec les technologies les plus demandées du marché",
        detailedDescription: "Cette formation vous permet de maîtriser toutes les technologies nécessaires pour créer des applications web modernes. Vous apprendrez à développer des interfaces utilisateur attrayantes, des APIs robustes et à gérer des bases de données. Formation pratique avec de nombreux projets concrets.",
        duration: "1 ans",
        level: "Bac+3",
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
        careers: [
          "Développeur Web Full Stack",
          "Développeur Frontend",
          "Développeur Backend",
          "Intégrateur Web",
          "Freelance Web Developer",
          "Chef de projet web"
        ],
        skills: [
          "Développement frontend moderne",
          "Création d'APIs REST",
          "Gestion de bases de données",
          "Déploiement d'applications web",
          "Travail en équipe avec Git",
          "Résolution de problèmes techniques"
        ],
        admission: "Baccalauréat ou équivalent + Entretien + Test technique",
        certification: "Diplôme Professionnel reconnu",
        price: "45,000 DH",
        prerequisites: "Bases en informatique recommandées",
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
      "developpement-mobile": {
        title: "Développement Mobile",
        description: "Création d'applications mobiles iOS et Android avec les technologies modernes",
        detailedDescription: "Cette formation vous transforme en développeur mobile professionnel. Vous apprendrez à créer des applications natives et cross-platform pour iOS et Android. Formation pratique avec des projets réels et publication sur les stores.",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Swift et développement iOS",
          "Kotlin et développement Android",
          "React Native pour le cross-platform",
          "Flutter et Dart",
          "APIs et intégration backend",
          "Design mobile et UX",
          "Publication sur les stores",
          "Projet d'application complète"
        ],
        careers: [
          "Développeur iOS",
          "Développeur Android",
          "Développeur Mobile Cross-platform",
          "Freelance Mobile Developer",
          "Chef de produit mobile",
          "Consultant mobile"
        ],
        skills: [
          "Développement natif iOS/Android",
          "Développement cross-platform",
          "Design mobile et UX",
          "Intégration d'APIs",
          "Publication sur stores",
          "Optimisation des performances"
        ],
        admission: "Baccalauréat ou équivalent + Entretien",
        certification: "Diplôme Professionnel reconnu",
        price: "45,000 DH",
        prerequisites: "Bases en programmation recommandées",
        schedule: "Lundi au Vendredi, 9h-17h",
        location: "Campus SUPEMIR Casablanca",
        startDate: "Prochaine session : 20 Janvier 2025",
        features: [
          "Développement natif et cross-platform",
          "Projets d'applications réelles",
          "Publication sur stores",
          "Certification reconnue",
          "Accompagnement personnalisé",
          "Réseau professionnel"
        ]
      },
      "ia-data-analytics": {
        title: "Intelligence Artificielle & Data Analytics",
        description: "Maîtrisez l'IA, le machine learning et l'analyse de données pour les entreprises modernes",
        detailedDescription: "Cette formation vous donne toutes les compétences pour devenir un expert en intelligence artificielle et analyse de données. Vous apprendrez à créer des modèles prédictifs, analyser des données massives et développer des solutions IA. Formation pratique avec des datasets réels.",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Python pour l'IA et la data science",
          "Machine Learning et Deep Learning",
          "Traitement et analyse de données",
          "Visualisation avec Python et R",
          "Big Data et technologies Hadoop",
          "Intelligence artificielle éthique",
          "Projets IA concrets",
          "Stage en entreprise"
        ],
        careers: [
          "Data Scientist",
          "Analyste de données",
          "Ingénieur IA",
          "Consultant en data science",
          "Freelance data analyst",
          "Chef de projet IA"
        ],
        skills: [
          "Machine Learning et Deep Learning",
          "Analyse de données avec Python/R",
          "Visualisation de données",
          "Big Data et technologies cloud",
          "Intelligence artificielle",
          "Communication des insights"
        ],
        admission: "Baccalauréat scientifique + Entretien",
        certification: "Diplôme Professionnel reconnu",
        price: "45,000 DH",
        prerequisites: "Bases en mathématiques et logique",
        schedule: "Lundi au Vendredi, 9h-17h",
        location: "Campus SUPEMIR Casablanca",
        startDate: "Prochaine session : 25 Janvier 2025",
        features: [
          "Datasets réels d'entreprises",
          "Projets IA concrets",
          "Certification reconnue",
          "Accompagnement expert",
          "Aide à l'insertion",
          "Réseau professionnel"
        ]
      },
      "cybersecurite-reseaux": {
        title: "Licence Pro - Réseaux et Cybersécurité",
        description: "Expertise en sécurité informatique, administration réseaux et cloud computing",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Administration systèmes (Linux, Windows Server)",
          "Sécurité des réseaux et protocoles",
          "Cryptographie et sécurité des données",
          "Cloud Computing (AWS, Azure, Google Cloud)",
          "Audit et tests de pénétration",
          "Gouvernance et conformité (ISO 27001, RGPD)",
          "Incident Response et forensique",
          "Sécurité des applications web",
          "Projet sécurité et stage en entreprise"
        ],
        careers: [
          "Administrateur sécurité",
          "Consultant cybersécurité",
          "Architecte cloud",
          "Auditeur sécurité",
          "Responsable SOC",
          "Expert forensique",
          "Analyste en sécurité"
        ],
        skills: [
          "Sécurisation des infrastructures IT",
          "Administration cloud et virtualisation",
          "Analyse des menaces et vulnérabilités",
          "Audit de sécurité et conformité",
          "Gestion des incidents de sécurité",
          "Mise en place de politiques de sécurité"
        ],
        admission: "Baccalauréat scientifique ou technique + Entretien",
        certification: "Diplôme d'État reconnu par le Ministère de l'Enseignement Supérieur"
      },
      "entrepreneuriat-audit-finance": {
        title: "Licence Pro - Entrepreneuriat, Audit et Finance",
        description: "Formation en gestion financière, audit et développement entrepreneurial",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Comptabilité générale et analytique",
          "Audit et contrôle de gestion",
          "Finance d'entreprise et investissement",
          "Entrepreneuriat et création d'entreprise",
          "Marketing et stratégie commerciale",
          "Droit des affaires et fiscalité",
          "Gestion des risques financiers",
          "Projet entrepreneurial et stage"
        ],
        careers: [
          "Contrôleur de gestion",
          "Auditeur interne",
          "Analyste financier",
          "Entrepreneur",
          "Conseiller en création d'entreprise",
          "Responsable financier"
        ],
        skills: [
          "Analyse financière et comptable",
          "Audit et contrôle interne",
          "Gestion de projet entrepreneurial",
          "Évaluation des investissements",
          "Stratégie d'entreprise",
          "Communication financière"
        ],
        admission: "Baccalauréat + Entretien",
        certification: "Diplôme d'État reconnu par le Ministère de l'Enseignement Supérieur"
      },
      "developpement-commercial-marketing": {
        title: "Licence Pro - Développement Commercial et Marketing Digital",
        description: "Formation en stratégies commerciales et marketing digital",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Marketing digital et e-commerce",
          "Stratégies commerciales et vente",
          "Communication digitale et réseaux sociaux",
          "Analytics et mesure de performance",
          "SEO/SEA et publicité en ligne",
          "Gestion de la relation client (CRM)",
          "Stratégie de contenu et storytelling",
          "Projet marketing et stage"
        ],
        careers: [
          "Chef de produit digital",
          "Responsable marketing digital",
          "Développeur commercial",
          "Community manager",
          "Analyste marketing",
          "Consultant en transformation digitale"
        ],
        skills: [
          "Stratégie marketing digital",
          "Gestion de campagnes publicitaires",
          "Analyse de données marketing",
          "Communication digitale",
          "E-commerce et vente en ligne",
          "Gestion de marque"
        ],
        admission: "Baccalauréat + Entretien",
        certification: "Diplôme d'État reconnu par le Ministère de l'Enseignement Supérieur"
      },
      "electrotechnique-systemes": {
        title: "Licence Pro - Électrotechnique & Systèmes",
        description: "Formation en électricité industrielle, automatisation et systèmes électriques",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Électricité industrielle et distribution",
          "Automatisation et contrôle-commande",
          "Énergies renouvelables",
          "Maintenance industrielle",
          "Sécurité électrique",
          "Informatique industrielle",
          "Projet technique et stage"
        ],
        careers: [
          "Technicien électricien industriel",
          "Automaticien",
          "Maintenancier industriel",
          "Technicien en énergies renouvelables",
          "Chef d'équipe maintenance",
          "Responsable installation électrique"
        ],
        skills: [
          "Installation et maintenance électrique",
          "Automatisation industrielle",
          "Gestion des énergies renouvelables",
          "Maintenance préventive et corrective",
          "Sécurité au travail",
          "Lecture de plans techniques"
        ],
        admission: "Baccalauréat technique + Entretien",
        certification: "Diplôme d'État reconnu par le Ministère de l'Enseignement Supérieur"
      },
      "domaine-sante": {
        title: "Licence Pro - Domaine de Santé",
        description: "Formation en soins infirmiers et techniques de laboratoire",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Soins infirmiers fondamentaux",
          "Anatomie et physiologie",
          "Pharmacologie et thérapeutique",
          "Techniques de laboratoire",
          "Éthique et déontologie",
          "Communication en santé",
          "Stage clinique et projet"
        ],
        careers: [
          "Infirmier diplômé d'État",
          "Aide-soignant",
          "Technicien de laboratoire",
          "Assistant médical",
          "Coordinateur de soins",
          "Formateur en santé"
        ],
        skills: [
          "Soins infirmiers et techniques de base",
          "Analyse et interprétation des résultats",
          "Communication avec les patients",
          "Gestion des urgences",
          "Travail en équipe pluridisciplinaire",
          "Respect des protocoles de sécurité"
        ],
        admission: "Baccalauréat + Entretien + Test d'aptitude",
        certification: "Diplôme d'État reconnu par le Ministère de l'Enseignement Supérieur"
      },
      "domaine-sante-aide-soignant": {
        title: "Licence Pro - Domaine de Santé - Aide-Soignant",
        description: "Formation professionnelle spécialisée pour devenir aide-soignant qualifié",
        detailedDescription: "Cette formation vous prépare à exercer le métier d'aide-soignant dans différents établissements de santé. Vous apprendrez les techniques de soins de base, l'accompagnement des patients, et les protocoles de sécurité. Formation pratique avec stages en milieu hospitalier et extra-hospitalier.",
        duration: "1 an",
        level: "Bac+3",
        image: "/sante-aide-soignant.jpg",
        modules: [
          "Soins de base et hygiène",
          "Anatomie et physiologie humaine",
          "Techniques de mobilisation et transfert",
          "Aide à la toilette et confort du patient",
          "Surveillance et observation clinique",
          "Communication et relation d'aide",
          "Éthique et déontologie professionnelle",
          "Sécurité et prévention des risques",
          "Stage clinique en établissement de santé"
        ],
        careers: [
          "Aide-soignant en hôpital",
          "Aide-soignant en EHPAD",
          "Aide-soignant à domicile",
          "Auxiliaire de puériculture",
          "Agent de service hospitalier",
          "Coordinateur d'équipe de soins"
        ],
        skills: [
          "Techniques de soins de base",
          "Aide à la mobilité et au confort",
          "Surveillance et observation",
          "Communication avec les patients et familles",
          "Respect des protocoles d'hygiène",
          "Travail en équipe pluridisciplinaire",
          "Gestion du stress et des situations d'urgence"
        ],
        admission: "Baccalauréat + Entretien + Test d'aptitude + Certificat médical",
        certification: "Diplôme d'État d'Aide-Soignant reconnu par le Ministère de la Santé",
        price: "35,000 DH",
        prerequisites: "Aptitude physique et psychologique pour les soins",
        schedule: "Lundi au Vendredi, 8h-16h + Stages",
        location: "Campus SUPEMIR Casablanca + Centres de stage",
        startDate: "Prochaine session : 15 Janvier 2025",
        features: [
          "Formation 70% pratique et 30% théorique",
          "Stages en établissements de santé partenaires",
          "Encadrement par des professionnels de santé",
          "Préparation aux concours d'entrée",
          "Suivi personnalisé et accompagnement",
          "Certification professionnelle reconnue"
        ]
      },
      "automatisation-industrielle": {
        title: "Licence Pro - Automatisation Industrielle",
        description: "Formation en systèmes automatisés et robotique industrielle",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Automatisation et contrôle-commande",
          "Robotique industrielle",
          "Programmation des automates",
          "Systèmes de supervision (SCADA)",
          "Maintenance préventive et corrective",
          "Sécurité des installations",
          "Projet technique et stage"
        ],
        careers: [
          "Automaticien",
          "Technicien en robotique",
          "Maintenancier industriel",
          "Chef d'équipe maintenance",
          "Responsable d'installation",
          "Technicien de production"
        ],
        skills: [
          "Programmation d'automates",
          "Installation et maintenance robotique",
          "Gestion des systèmes automatisés",
          "Maintenance préventive",
          "Sécurité au travail",
          "Lecture de plans techniques"
        ],
        admission: "Baccalauréat technique + Entretien",
        certification: "Diplôme d'État reconnu par le Ministère de l'Enseignement Supérieur"
      },
      "energies-renouvelables": {
        title: "Licence Pro - Énergies Renouvelables",
        description: "Formation en technologies solaires, éoliennes et hydroélectriques",
        duration: "1 an",
        level: "Bac+3",
        modules: [
          "Technologies solaires photovoltaïques",
          "Énergie éolienne",
          "Hydroélectricité",
          "Énergies marines",
          "Stockage d'énergie",
          "Réseaux intelligents",
          "Projet technique et stage"
        ],
        careers: [
          "Technicien en énergies renouvelables",
          "Installateur photovoltaïque",
          "Maintenancier éolien",
          "Chef de projet énergies vertes",
          "Conseiller en efficacité énergétique",
          "Technicien de maintenance"
        ],
        skills: [
          "Installation de panneaux solaires",
          "Maintenance d'éoliennes",
          "Gestion des réseaux intelligents",
          "Audit énergétique",
          "Sécurité des installations",
          "Communication technique"
        ],
        admission: "Baccalauréat technique + Entretien",
        certification: "Diplôme d'État reconnu par le Ministère de l'Enseignement Supérieur"
      }
    },
    master: {
      "informatique-data-ia": {
        title: "Master Pro - Génie Informatique et Innovation Technologique",
        description: "Formation avancée en intelligence artificielle, big data et innovation technologique",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Machine Learning et Deep Learning (TensorFlow, PyTorch)",
          "Big Data et technologies Hadoop/Spark/Kafka",
          "Traitement du langage naturel (NLP)",
          "Computer Vision et reconnaissance d'images",
          "Data Mining et visualisation avancée",
          "Intelligence artificielle éthique et responsable",
          "Innovation technologique et R&D",
          "Projet recherche et développement",
          "Stage en entreprise (6 mois)"
        ],
        careers: [
          "Data Scientist",
          "Ingénieur IA",
          "Architecte Big Data",
          "Consultant en transformation digitale",
          "Chercheur en IA",
          "Product Manager IA",
          "Chief Technology Officer (CTO)"
        ],
        skills: [
          "Modélisation prédictive et algorithmes avancés",
          "Analyse de données massives (Big Data)",
          "Développement d'algorithmes IA et ML",
          "Visualisation de données et storytelling",
          "Recherche et innovation technologique",
          "Leadership technique et management d'équipe"
        ],
        admission: "Licence en informatique + Dossier académique + Entretien",
        certification: "Master Professionnel reconnu"
      },
      "cybersecurite-transformation": {
        title: "Master Pro - Cyber Sécurité et Transformation Digitale",
        description: "Leadership en sécurité informatique et accompagnement de la transformation numérique",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Stratégie cybersécurité d'entreprise",
          "Gouvernance et risk management",
          "Sécurité dans le cloud (AWS, Azure, GCP)",
          "IoT et sécurité des objets connectés",
          "Blockchain et cryptomonnaies",
          "Management d'équipes sécurité",
          "Conformité réglementaire (RGPD, ISO 27001)",
          "Transformation digitale et innovation",
          "Thèse professionnelle"
        ],
        careers: [
          "CISO (Chief Information Security Officer)",
          "Consultant senior cybersécurité",
          "Directeur transformation digitale",
          "Expert en gouvernance IT",
          "Auditeur senior",
          "Entrepreneur cybersécurité",
          "Responsable sécurité des systèmes d'information"
        ],
        skills: [
          "Leadership en sécurité et management",
          "Stratégie d'entreprise et gouvernance",
          "Gestion des risques et conformité",
          "Transformation digitale et innovation",
          "Management d'équipe et communication",
          "Audit et évaluation des risques"
        ],
        admission: "Licence en informatique/sécurité + 3 ans d'expérience + Entretien",
        certification: "Master Professionnel reconnu"
      },
      "finance-strategie-entrepreneuriale": {
        title: "Master Pro - Finance et Stratégie Entrepreneuriale",
        description: "Formation avancée en finance d'entreprise et stratégie entrepreneuriale",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Finance d'entreprise avancée",
          "Stratégie d'entreprise et innovation",
          "Entrepreneuriat et création d'entreprise",
          "Gestion des risques financiers",
          "Investissement et capital-risque",
          "Marketing stratégique et digital",
          "Leadership et management d'équipe",
          "Projet entrepreneurial et stage"
        ],
        careers: [
          "Directeur financier (CFO)",
          "Consultant en stratégie",
          "Entrepreneur",
          "Analyste financier senior",
          "Responsable de portefeuille",
          "Conseiller en investissement"
        ],
        skills: [
          "Analyse financière avancée",
          "Stratégie d'entreprise",
          "Gestion de projet entrepreneurial",
          "Évaluation d'investissements",
          "Leadership et management",
          "Communication financière"
        ],
        admission: "Licence en gestion/finance + Entretien",
        certification: "Master Professionnel reconnu"
      },
      "developpement-commercial-marketing-digital": {
        title: "Master Pro - Développement Commercial et Marketing Digital",
        description: "Expertise en stratégies commerciales avancées et marketing digital",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Stratégie marketing digital avancée",
          "E-commerce et transformation digitale",
          "Analytics et intelligence artificielle marketing",
          "Communication digitale et influence",
          "Gestion de la relation client (CRM)",
          "Innovation et nouveaux business models",
          "Leadership commercial et management",
          "Projet marketing et stage"
        ],
        careers: [
          "Directeur marketing digital",
          "Chef de produit senior",
          "Directeur commercial",
          "Consultant en transformation digitale",
          "Entrepreneur digital",
          "Responsable innovation"
        ],
        skills: [
          "Stratégie marketing digitale avancée",
          "Innovation et transformation digitale",
          "Analytics et data-driven marketing",
          "Leadership et management d'équipe",
          "E-commerce et nouveaux modèles",
          "Communication et influence digitale"
        ],
        admission: "Licence en marketing/gestion + Entretien",
        certification: "Master Professionnel reconnu"
      },
      "management-systemes-information": {
        title: "Master Pro - Management des Systèmes d'Information",
        description: "Gestion stratégique des systèmes d'information et transformation digitale",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Stratégie des systèmes d'information",
          "Gouvernance IT et management",
          "Transformation digitale",
          "Gestion de projet IT",
          "Sécurité des systèmes d'information",
          "Innovation technologique",
          "Leadership et communication",
          "Mémoire professionnel"
        ],
        careers: [
          "Directeur des systèmes d'information (DSI)",
          "Chef de projet IT",
          "Consultant en transformation digitale",
          "Responsable innovation",
          "Directeur technique",
          "Entrepreneur tech"
        ],
        skills: [
          "Stratégie et gouvernance IT",
          "Management de projet",
          "Transformation digitale",
          "Leadership et communication",
          "Innovation et veille technologique",
          "Gestion d'équipe"
        ],
        admission: "Licence en informatique/gestion + Entretien",
        certification: "Master Professionnel reconnu"
      },
      "qualite-securite-developpement-durable": {
        title: "Master Pro - Qualité, Sécurité & Développement Durable",
        description: "Approche intégrée qualité-sécurité-environnement et développement durable",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Management de la qualité (ISO 9001)",
          "Sécurité au travail et prévention",
          "Développement durable et RSE",
          "Audit et certification",
          "Gestion des risques",
          "Innovation et éco-conception",
          "Communication et sensibilisation",
          "Projet intégré et stage"
        ],
        careers: [
          "Responsable qualité",
          "Responsable sécurité",
          "Consultant RSE",
          "Auditeur qualité/sécurité",
          "Responsable développement durable",
          "Coordinateur QSE"
        ],
        skills: [
          "Management de la qualité",
          "Prévention des risques",
          "Développement durable",
          "Audit et certification",
          "Gestion de projet",
          "Communication et formation"
        ],
        admission: "Licence technique/gestion + Entretien",
        certification: "Master Professionnel reconnu"
      },
      "management-leadership-sante": {
        title: "Master Pro - Management et Leadership en Santé",
        description: "Formation avancée en management des établissements de santé",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Management des établissements de santé",
          "Gestion financière et comptable",
          "Qualité et sécurité des soins",
          "Ressources humaines en santé",
          "Innovation et transformation digitale",
          "Leadership et communication",
          "Éthique et déontologie",
          "Mémoire professionnel et stage"
        ],
        careers: [
          "Directeur d'établissement de santé",
          "Responsable qualité et sécurité",
          "Coordinateur de soins",
          "Consultant en management de santé",
          "Responsable des ressources humaines",
          "Chef de projet innovation santé"
        ],
        skills: [
          "Management d'équipes de soins",
          "Gestion financière et comptable",
          "Qualité et sécurité des soins",
          "Leadership et communication",
          "Innovation en santé",
          "Gestion des ressources humaines"
        ],
        admission: "Licence en santé/gestion + Entretien",
        certification: "Master Professionnel reconnu"
      }
    },
    mba: {
      "mba-management-projets": {
        title: "MBA - Management de Projets",
        description: "Formation de leaders capables de relever les défis du monde des affaires",
        detailedDescription: "Ce MBA vous prépare à devenir un leader dans la gestion de projets complexes. Vous développerez des compétences en pilotage de projets, stratégie d'entreprise et innovation. Formation pratique avec des cas d'études réels et des projets d'entreprise.",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Performance & Pilotage de projets",
          "Stratégie et Environnement géopolitique",
          "Environnement économique et juridique",
          "Innovations et transformation digitale",
          "Leadership et management d'équipe",
          "Gestion des risques et qualité",
          "Communication et négociation",
          "Mémoire professionnel et stage"
        ],
        careers: [
          "Directeur de projet",
          "Chef de projet senior",
          "Consultant en management",
          "Directeur d'opérations",
          "Entrepreneur",
          "Responsable innovation"
        ],
        skills: [
          "Pilotage de projets complexes",
          "Stratégie d'entreprise",
          "Leadership et management",
          "Innovation et transformation",
          "Gestion des risques",
          "Communication interculturelle"
        ],
        admission: "Bac+3 + 3 ans d'expérience + Entretien",
        certification: "MBA reconnu internationalement"
      },
      "mba-business-management-transformation-digitale": {
        title: "MBA - Business Management et Transformation Digitale",
        description: "Leadership et transformation digitale pour les entreprises modernes",
        detailedDescription: "Ce MBA vous forme aux enjeux de la transformation digitale et du management moderne. Vous maîtriserez l'architecture des systèmes d'information, la stratégie digitale et le diagnostic organisationnel. Formation avec des experts du secteur et des projets concrets.",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Architecture des Systèmes d'information",
          "Transformation Digitale",
          "Diagnostic stratégique",
          "Management du changement",
          "Data Analytics et Business Intelligence",
          "Cybersécurité et gouvernance IT",
          "Innovation et nouveaux business models",
          "Mémoire professionnel et stage"
        ],
        careers: [
          "Directeur de la transformation digitale",
          "Chief Digital Officer (CDO)",
          "Directeur des systèmes d'information",
          "Consultant en transformation",
          "Entrepreneur digital",
          "Responsable innovation"
        ],
        skills: [
          "Stratégie de transformation digitale",
          "Architecture des systèmes d'information",
          "Management du changement",
          "Data Analytics et BI",
          "Cybersécurité et gouvernance",
          "Innovation et leadership"
        ],
        admission: "Bac+3 + 3 ans d'expérience + Entretien",
        certification: "MBA reconnu internationalement"
      },
      "mba-finance-banques-assurances": {
        title: "MBA - Finance, Banques et Assurances",
        description: "Expertise avancée en finance internationale et Fintech",
        detailedDescription: "Ce MBA vous prépare aux métiers de la finance moderne, des banques et des assurances. Vous maîtriserez la finance internationale, la Fintech, le management stratégique et la gestion de patrimoine. Formation avec des professionnels du secteur financier.",
        duration: "2 ans",
        level: "Bac+5",
        modules: [
          "Finance international et Fintech",
          "Management Stratégique",
          "Gestion de Patrimoine et Private Banking",
          "Réglementation bancaire et assurance",
          "Analyse financière avancée",
          "Gestion des risques financiers",
          "Innovation financière et blockchain",
          "Mémoire professionnel et stage"
        ],
        careers: [
          "Directeur financier (CFO)",
          "Directeur de banque",
          "Gestionnaire de patrimoine",
          "Analyste financier senior",
          "Consultant en finance",
          "Entrepreneur Fintech"
        ],
        skills: [
          "Finance internationale et Fintech",
          "Management stratégique",
          "Gestion de patrimoine",
          "Analyse financière avancée",
          "Gestion des risques",
          "Innovation financière"
        ],
        admission: "Bac+3 + 3 ans d'expérience + Entretien",
        certification: "MBA reconnu internationalement"
      }
    }
  };

  const currentProgram = programsData[type as keyof typeof programsData]?.[program as string];

  // Set the selected program when component mounts
  useEffect(() => {
    if (type && program) {
      // Clear any previous formation selections
      setSelectedFormation(null);
      // Set the current program
      setSelectedProgramType(type);
      setSelectedProgram(program);
    }
    
    // Clean up when component unmounts
    return () => {
      setSelectedProgramType(null);
      setSelectedProgram(null);
    };
  }, [type, program, setSelectedProgramType, setSelectedProgram, setSelectedFormation]);

  if (!currentProgram) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Programme non trouvé</h1>
          <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
        </div>
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
          Retour aux programmes
        </Button>

        <div className="animate-fade-in">
          {/* Header Section */}
          <div className={`bg-gradient-to-r rounded-2xl p-8 mb-8 ${
            type === 'licence' 
              ? 'from-accent to-accent/80 text-accent-foreground' 
              : 'from-primary to-primary/80 text-primary-foreground'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <Badge className={`${
                type === 'licence' 
                  ? 'bg-accent-foreground text-accent' 
                  : 'bg-primary-foreground text-primary'
              }`}>
                {currentProgram.level}
              </Badge>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2" />
                {currentProgram.duration}
              </div>
              <div className="flex items-center text-sm">
                <Award className="h-4 w-4 mr-2" />
                {currentProgram.certification}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{currentProgram.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl mb-6">{currentProgram.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className={`animate-glow ${
                  type === 'licence'
                    ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/90'
                    : 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                }`}
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
              {currentProgram.detailedDescription && (
                <Card className="animate-slide-up">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-supemir-orange" />
                      À propos de cette formation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentProgram.detailedDescription}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Program Image */}
              {currentProgram.image && (
                <Card className="animate-slide-up" style={{animationDelay: '0.05s'}}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={currentProgram.image} 
                        alt={currentProgram.title}
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
                    {currentProgram.modules.map((module, index) => (
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
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Compétences développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentProgram.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Careers */}
              <Card className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Débouchés professionnels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentProgram.careers.map((career, index) => (
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
                    <span className="font-semibold">{currentProgram.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Niveau</span>
                    <Badge variant="outline">{currentProgram.level}</Badge>
                  </div>
                  {currentProgram.price && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Prix</span>
                      <span className="font-semibold text-supemir-orange">{currentProgram.price}</span>
                    </div>
                  )}
                  {currentProgram.schedule && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Horaires</span>
                      <span className="font-semibold text-sm">{currentProgram.schedule}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Prerequisites */}
              {currentProgram.prerequisites && (
                <Card className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <CardHeader>
                    <CardTitle className="text-lg">Prérequis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{currentProgram.prerequisites}</p>
                  </CardContent>
                </Card>
              )}

              {/* Features */}
              {currentProgram.features && (
                <Card className="animate-slide-up" style={{animationDelay: '0.3s'}}>
                  <CardHeader>
                    <CardTitle className="text-lg">Ce qui est inclus</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {currentProgram.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-supemir-orange" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Admission */}
              <Card className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <CardTitle className="text-lg">Conditions d'admission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{currentProgram.admission}</p>
                  <Button 
                    className={`w-full mt-4 ${
                      type === 'licence'
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                    onClick={() => scrollToSection('footer')}
                  >
                    Postuler maintenant
                  </Button>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="animate-slide-up" style={{animationDelay: '0.5s'}}>
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
                    onClick={() => window.open('mailto:infos@supemir.com?subject=Rendez-vous - ' + currentProgram.title, '_blank')}
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

export default ProgramDetail;