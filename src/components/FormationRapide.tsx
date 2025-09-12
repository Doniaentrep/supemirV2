import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormationRapide = () => {
  const navigate = useNavigate();

  const handleFormationClick = (formationSlug: string) => {
    navigate(`/formation-rapide/${formationSlug}`);
  };

  const formations = [
    {
      title: "Développement Web Express",
      duration: "3 mois",
      certification: "Accrédité par l'État",
      description: "Formation intensive en développement web front-end et back-end",
      modules: ["HTML/CSS/JavaScript", "React/Node.js", "Base de données", "Projet final"],
      price: "15,000 DH",
      level: "Débutant",
      slug: "developpement-web-express"
    },
    {
      title: "Marketing Digital Intensif",
      duration: "2 mois",
      certification: "Accrédité par l'État",
      description: "Maîtrisez les outils et stratégies du marketing digital moderne",
      modules: ["SEO/SEM", "Réseaux sociaux", "Google Analytics", "Campagnes publicitaires"],
      price: "12,000 DH",
      level: "Intermédiaire",
      slug: "marketing-digital-intensif"
    },
    {
      title: "Cybersécurité Pratique",
      duration: "4 mois",
      certification: "Accrédité par l'État",
      description: "Formation pratique en sécurité informatique et protection des systèmes",
      modules: ["Ethical Hacking", "Sécurité réseau", "Audit sécurité", "Incident Response"],
      price: "18,000 DH",
      level: "Avancé",
      slug: "cybersecurite-pratique"
    },
    {
      title: "Data Analytics Express",
      duration: "3 mois",
      certification: "Accrédité par l'État",
      description: "Analyse de données et business intelligence pour les entreprises",
      modules: ["Python/SQL", "Power BI", "Statistiques", "Machine Learning"],
      price: "16,000 DH",
      level: "Intermédiaire",
      slug: "data-analytics-express"
    },
    {
      title: "Management de Projet Agile",
      duration: "1.5 mois",
      certification: "Accrédité par l'État",
      description: "Méthodes agiles et gestion de projet moderne",
      modules: ["Scrum", "Kanban", "Jira", "Leadership"],
      price: "8,000 DH",
      level: "Tous niveaux",
      slug: "management-projet-agile"
    },
    {
      title: "Design UX/UI Intensif",
      duration: "2.5 mois",
      certification: "Accrédité par l'État",
      description: "Conception d'interfaces utilisateur modernes et ergonomiques",
      modules: ["Figma", "Photoshop", "Prototypage", "Tests utilisateurs"],
      price: "14,000 DH",
      level: "Débutant",
      slug: "design-ux-ui-intensif"
    },
    {
      title: "Domaine de Santé - Soins Infirmiers",
      duration: "4 mois",
      certification: "Accrédité par l'État",
      description: "Formation complète en soins infirmiers et techniques médicales",
      modules: ["Anatomie/Physiologie", "Soins de base", "Pharmacologie", "Stage pratique"],
      price: "20,000 DH",
      level: "Débutant",
      slug: "domaine-sante-soins-infirmiers"
    },
    {
      title: "Secourisme & Premiers Secours",
      duration: "3 jours",
      certification: "Certificat de Secourisme",
      description: "Formation intensive en secourisme et gestes de premiers secours",
      modules: ["RCP", "Hémorragies", "Traumatismes", "Urgences médicales"],
      price: "1,500 DH",
      level: "Tous niveaux",
      slug: "secourisme-premiers-secours"
    },
    {
      title: "Bureautique Express",
      duration: "4 jours",
      certification: "Certificat de Compétences",
      description: "Maîtrise complète des outils bureautiques essentiels",
      modules: ["Word", "Excel", "PowerPoint", "Outlook"],
      price: "2,000 DH",
      level: "Débutant",
      slug: "bureautique-express"
    },
    {
      title: "Gestion de Stress & Bien-être",
      duration: "7 jours",
      certification: "Certificat de Formation",
      description: "Techniques de gestion du stress et amélioration du bien-être professionnel",
      modules: ["Relaxation", "Mindfulness", "Communication", "Équilibre vie pro/perso"],
      price: "3,500 DH",
      level: "Tous niveaux",
      slug: "gestion-stress-bien-etre"
    },
    {
      title: "Domaine de Santé - Aide-Soignant",
      duration: "3 mois",
      certification: "Accrédité par l'État",
      description: "Formation professionnelle en aide-soignant et accompagnement des patients",
      modules: ["Hygiène hospitalière", "Aide aux soins", "Communication", "Éthique médicale"],
      price: "18,000 DH",
      level: "Débutant",
      slug: "domaine-sante-aide-soignant"
    },
    {
      title: "Formation Express - Comptabilité",
      duration: "7 jours",
      certification: "Certificat de Compétences",
      description: "Formation intensive en comptabilité générale et gestion financière",
      modules: ["Comptabilité générale", "Fiscalité", "Paie", "Logiciels comptables"],
      price: "4,000 DH",
      level: "Intermédiaire",
      slug: "formation-express-comptabilite"
    },
    {
      title: "Modélisation 3D & Animation",
      duration: "2 mois",
      certification: "Accrédité par l'État",
      description: "Formation complète en modélisation 3D, animation et rendu pour le cinéma, jeux vidéo et architecture",
      modules: ["Blender", "Maya", "3ds Max", "Animation", "Rendu", "Projet final"],
      price: "16,000 DH",
      level: "Débutant",
      slug: "modelisation-3d-animation"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <section id="formation-rapide" className="py-20 bg-gradient-to-br from-supemir-magenta/10 via-supemir-blue/10 to-supemir-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-supemir-orange text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse shadow-lg">
              ⚡ ACTUALITÉS FORMATIONS ⚡
            </div>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">🔥 NOUVELLES OPPORTUNITÉS EXCEPTIONNELLES</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>Saisissez ces opportunités uniques - Places limitées !</strong>
            <br />
            Des formations révolutionnaires qui transforment votre avenir professionnel
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center bg-background rounded-full px-6 py-3 shadow-sm animate-float">
              <Clock className="h-5 w-5 text-supemir-orange mr-2" />
              <span className="font-semibold">3 jours à 4 mois</span>
            </div>
            <div className="flex items-center bg-background rounded-full px-6 py-3 shadow-sm animate-float" style={{animationDelay: '0.5s'}}>
              <Award className="h-5 w-5 text-supemir-blue mr-2" />
              <span className="font-semibold">Accrédité par l'État</span>
            </div>
            <div className="flex items-center bg-background rounded-full px-6 py-3 shadow-sm animate-float" style={{animationDelay: '1s'}}>
              <Users className="h-5 w-5 text-supemir-red mr-2" />
              <span className="font-semibold">Classes réduites</span>
            </div>
            <div className="flex items-center bg-background rounded-full px-6 py-3 shadow-sm animate-float" style={{animationDelay: '1.5s'}}>
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <span className="font-semibold">Insertion rapide</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-supemir-orange/30 bg-background hover-lift animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${getLevelColor(formation.level)} text-xs font-medium`}>
                    {formation.level}
                  </Badge>
                  <div className="flex items-center text-sm text-supemir-orange font-semibold">
                    <Clock className="h-4 w-4 mr-1" />
                    {formation.duration}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-supemir-orange transition-colors leading-tight">
                  {formation.title}
                </CardTitle>
                
                <div className="flex items-center text-sm text-supemir-blue">
                  <Award className="h-4 w-4 mr-2" />
                  {formation.certification}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {formation.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Modules inclus:</h4>
                  <ul className="space-y-1">
                    {formation.modules.map((module, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <CheckCircle className="h-3 w-3 text-supemir-orange mt-0.5 mr-2 flex-shrink-0" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-to-r from-supemir-orange to-supemir-red text-white font-semibold hover-scale"
                    onClick={() => handleFormationClick(formation.slug)}
                  >
                    🚀 Découvrir cette opportunité !
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-gradient-to-r from-supemir-orange/10 to-supemir-red/10 rounded-2xl p-8 border border-supemir-orange/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pourquoi choisir nos formations rapides ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-supemir-orange">100%</div>
                <div className="text-sm text-muted-foreground">Pratique et projet réel</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-supemir-blue">90%</div>
                <div className="text-sm text-muted-foreground">Taux de réussite</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-supemir-red">85%</div>
                <div className="text-sm text-muted-foreground">Insertion professionnelle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationRapide;