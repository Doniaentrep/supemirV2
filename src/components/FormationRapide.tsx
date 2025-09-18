import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, TrendingUp, CheckCircle, Code, Shield, Zap, Database, Heart, Palette, BarChart3, Building, GraduationCap, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const FormationRapide = () => {
  const navigate = useNavigate();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentFormationIndex, setCurrentFormationIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverStartX, setHoverStartX] = useState(0);
  const [lastHoverTime, setLastHoverTime] = useState(0);
  
  const [formationRef, isFormationVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, isStatsVisible] = useScrollAnimation({ threshold: 0.3 });

  const handleFormationClick = (formationSlug: string) => {
    if (formationSlug === 'bootcamp-marketing-digital') {
      navigate('/bootcamp-marketing-digital');
    } else {
      navigate(`/formation/${formationSlug}`);
    }
  };

  const handleRegistrationClick = (formationSlug: string) => {
    setSelectedFormation(formationSlug);
    setIsRegistrationOpen(true);
  };

  const handleBrochureDownload = (formation: any) => {
    // Create a simple brochure content
    const brochureContent = `
FORMATION: ${formation.title}
DURÉE: ${formation.duration}
PRIX: ${formation.price}
NIVEAU: ${formation.level}
CERTIFICATION: ${formation.certification}

DESCRIPTION:
${formation.description}

MODULES:
${formation.modules.map((module: string, index: number) => `${index + 1}. ${module}`).join('\n')}

CONTACT:
SUPEMIR - Marrakech
Email: info@supemir.ma
Téléphone: +212 5XX XXX XXX

---
Cette brochure a été générée automatiquement depuis notre site web.
    `;

    // Create and download the brochure
    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `brochure-${formation.slug}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
    setSelectedFormation("");
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentFormationIndex(0); // Reset to first formation when changing category
  };

  // Listen for entrepreneur formations filter event
  useEffect(() => {
    const handleEntrepreneurFormationsFilter = () => {
      // Filter to show only business/entrepreneur formations
      setSelectedCategory("business");
      setCurrentFormationIndex(0);
    };

    window.addEventListener('filterEntrepreneurFormations', handleEntrepreneurFormationsFilter);
    
    return () => {
      window.removeEventListener('filterEntrepreneurFormations', handleEntrepreneurFormationsFilter);
    };
  }, []);

  const nextFormation = () => {
    const filteredFormations = getFilteredFormations();
    if (currentFormationIndex < filteredFormations.length - 1) {
      setCurrentFormationIndex(currentFormationIndex + 1);
    } else {
      // Loop back to first formation
      setCurrentFormationIndex(0);
    }
  };

  const prevFormation = () => {
    const filteredFormations = getFilteredFormations();
    if (currentFormationIndex > 0) {
      setCurrentFormationIndex(currentFormationIndex - 1);
    } else {
      // Loop to last formation
      setCurrentFormationIndex(filteredFormations.length - 1);
    }
  };

  const handleMouseClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    if (x < width * 0.33) {
      // Clicked on left zone - previous formation
      prevFormation();
    } else if (x > width * 0.66) {
      // Clicked on right zone - next formation
      nextFormation();
    }
    // Center zone clicks don't trigger navigation
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setHoverStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    
    const touchX = e.touches[0].clientX;
    const deltaX = hoverStartX - touchX;
    const threshold = 100;
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swiping left - next formation
        nextFormation();
      } else {
        // Swiping right - previous formation
        prevFormation();
      }
      setHoverStartX(touchX);
    }
  };


  const categories = [
    {
      id: "all",
      name: "Toutes",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "tech",
      name: "Tech & IT",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "design",
      name: "Design",
      icon: Palette,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "business",
      name: "Business",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "health",
      name: "Santé",
      icon: Heart,
      color: "from-red-500 to-orange-500"
    }
  ];

  const formations = [
    {
      title: "Développement Web Express",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Devenez développeur web en 3 mois !",
      modules: ["Frontend", "Backend", "Bases de données", "Projet final"],
      price: "15,000 DH",
      level: "Débutant",
      slug: "developpement-web-express",
      image: "/dev.jpg",
      category: "tech"
    },
    {
      title: "Bootcamp Marketing Digital",
      duration: "5 jours",
      certification: "Double Certification",
      description: "Formation intensive avec intégration IA par SkillsUp AI",
      modules: ["Marketing Digital", "IA & Analytics", "Stratégies", "Certification"],
      price: "Sur demande",
      level: "Professionnel",
      slug: "bootcamp-marketing-digital",
      image: "/Marketing.jpg",
      category: "business",
      isSpecial: true
    },
    {
      title: "Cybersécurité Pratique",
      duration: "4 mois",
      certification: "Certification Professionnelle",
      description: "Devenez expert en cybersécurité !",
      modules: ["Ethical Hacking", "Sécurité réseau", "Audit sécurité", "Incident Response"],
      price: "18,000 DH",
      level: "Avancé",
      slug: "cybersecurite-pratique",
      image: "/cyber.jpg",
      category: "tech"
    },
    {
      title: "Data Analytics Express",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Transformez les données en insights !",
      modules: ["Python/SQL", "Power BI", "Statistiques", "Machine Learning"],
      price: "16,000 DH",
      level: "Intermédiaire",
      slug: "data-analytics-express",
      image: "/data.jpg",
      category: "tech"
    },
    {
      title: "Management de Projet Agile",
      duration: "1.5 mois",
      certification: "Certification Professionnelle",
      description: "Méthodes agiles en 6 semaines",
      modules: ["Scrum", "Kanban", "Jira", "Leadership"],
      price: "8,000 DH",
      level: "Tous niveaux",
      slug: "management-projet-agile",
      image: "/agile.jpg",
      category: "business"
    },
    {
      title: "Design UX/UI Intensif",
      duration: "2.5 mois",
      certification: "Certification Professionnelle",
      description: "Créez des interfaces exceptionnelles !",
      modules: ["Figma", "Photoshop", "Prototypage", "Tests utilisateurs"],
      price: "14,000 DH",
      level: "Débutant",
      slug: "design-ux-ui-intensif",
      image: "/UI UX.jpg",
      category: "design"
    },
    {
      title: "Domaine de Santé - Soins Infirmiers",
      duration: "4 mois",
      certification: "Certification Professionnelle",
      description: "Formation complète en soins infirmiers",
      modules: ["Anatomie", "Soins de base", "Pharmacologie", "Stage pratique"],
      price: "20,000 DH",
      level: "Débutant",
      slug: "domaine-sante-soins-infirmiers",
      image: "/frmliz.jpg",
      category: "health"
    },
    {
      title: "Secourisme & Premiers Secours",
      duration: "3 jours",
      certification: "Certificat de Secourisme",
      description: "Sauvez des vies en 3 jours !",
      modules: ["RCP", "Hémorragies", "Traumatismes", "Urgences"],
      price: "1,500 DH",
      level: "Tous niveaux",
      slug: "secourisme-premiers-secours",
      image: "/sos.jpg",
      category: "health"
    },
    {
      title: "Bureautique Express",
      duration: "4 jours",
      certification: "Certificat de Compétences",
      description: "Maîtrisez Office en 4 jours",
      modules: ["Word", "Excel", "PowerPoint", "Outlook"],
      price: "2,000 DH",
      level: "Débutant",
      slug: "bureautique-express",
      image: "/bureatiqur.jpg",
      category: "business"
    },
    {
      title: "Gestion de Stress & Bien-être",
      duration: "7 jours",
      certification: "Certificat de Formation",
      description: "Gérez votre stress efficacement !",
      modules: ["Relaxation", "Mindfulness", "Communication", "Équilibre vie pro/perso"],
      price: "3,500 DH",
      level: "Tous niveaux",
      slug: "gestion-stress-bien-etre",
      image: "/gestion-stress-bien-etre.jpg",
      category: "health"
    },
    {
      title: "Domaine de Santé - Aide-Soignant",
      duration: "3 mois",
      certification: "Certification Professionnelle",
      description: "Devenez aide-soignant en 3 mois",
      modules: ["Hygiène hospitalière", "Aide aux soins", "Communication", "Éthique médicale"],
      price: "18,000 DH",
      level: "Débutant",
      slug: "domaine-sante-aide-soignant",
      image: "/sante-aide-soignant.jpg",
      category: "health"
    },
    {
      title: "Formation Express - Comptabilité",
      duration: "7 jours",
      certification: "Certificat de Compétences",
      description: "Expert comptable en 7 jours",
      modules: ["Comptabilité générale", "Fiscalité", "Paie", "Logiciels comptables"],
      price: "4,000 DH",
      level: "Intermédiaire",
      slug: "formation-express-comptabilite",
      image: "/compta.jpg",
      category: "business"
    },
    {
      title: "Leadership & Management d'Équipe",
      duration: "1.5 mois",
      certification: "Certification Professionnelle",
      description: "Développez vos compétences de leader et manager",
      modules: ["Leadership situationnel", "Communication managériale", "Motivation d'équipe", "Gestion des conflits"],
      price: "8,500 DH",
      level: "Intermédiaire",
      slug: "leadership-management-equipe",
      image: "/agile.jpg",
      category: "business"
    },
    {
      title: "Cadre Juridique & Création d'Entreprise",
      duration: "1 mois",
      certification: "Certification Professionnelle",
      description: "Maîtrisez le droit des affaires et la création d'entreprise",
      modules: ["Droit des sociétés", "Statuts juridiques", "Fiscalité d'entreprise", "Contrats commerciaux"],
      price: "7,000 DH",
      level: "Débutant",
      slug: "cadre-juridique-creation-entreprise",
      image: "/compta.jpg",
      category: "business"
    },
    {
      title: "Stratégie d'Entreprise & Innovation",
      duration: "2 mois",
      certification: "Certification Professionnelle",
      description: "Développez votre vision stratégique et votre capacité d'innovation",
      modules: ["Analyse stratégique", "Business Model Canvas", "Innovation disruptive", "Plan de développement"],
      price: "11,000 DH",
      level: "Intermédiaire",
      slug: "strategie-entreprise-innovation",
      image: "/Marketing.jpg",
      category: "business"
    },
    {
      title: "Finance d'Entreprise & Levée de Fonds",
      duration: "1.5 mois",
      certification: "Certification Professionnelle",
      description: "Gérez la finance de votre entreprise et apprenez à lever des fonds",
      modules: ["Analyse financière", "Business Plan", "Pitch Deck", "Investisseurs & partenaires"],
      price: "9,500 DH",
      level: "Intermédiaire",
      slug: "finance-entreprise-levee-fonds",
      image: "/compta.jpg",
      category: "business"
    },
    {
      title: "Modélisation 3D & Animation",
      duration: "2 mois",
      certification: "Certification Professionnelle",
      description: "Créez des animations époustouflantes !",
      modules: ["Blender", "Maya", "3ds Max", "Animation", "Rendu", "Projet final"],
      price: "16,000 DH",
      level: "Débutant",
      slug: "modelisation-3d-animation",
      image: "/modelisation-3d-animation.jpg",
      category: "design"
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

  const getFilteredFormations = () => {
    return selectedCategory === "all" 
      ? formations 
      : formations.filter(formation => formation.category === selectedCategory);
  };

  const currentFormation = getFilteredFormations()[currentFormationIndex];
  const filteredFormations = getFilteredFormations();

  return (
    <section ref={formationRef} id="formation-certifiee" className="py-20 pt-24 bg-gradient-to-br from-supemir-magenta/10 via-supemir-blue/10 to-supemir-green/10">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isFormationVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-supemir-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ⚡ FORMATIONS CERTIFIÉES ⚡
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🔥 NOUVELLES OPPORTUNITÉS EXCEPTIONNELLES
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong>Saisissez ces opportunités uniques - Places limitées !</strong>
            <br />
            Des formations certifiées qui transforment votre avenir professionnel
          </p>
        </div>

        {/* Category Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:scale-105 ${
                  isSelected 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl` 
                    : 'bg-white text-gray-700 hover:shadow-lg border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isSelected ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    <IconComponent className={`h-4 w-4 transition-all duration-300 ${
                      isSelected ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'
                    }`} />
                  </div>
                  <span className={`font-semibold text-sm ${
                    isSelected ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {category.name}
                  </span>
                </div>
                
                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Hover-based Formation Display */}
        {currentFormation && (
          <div className="max-w-4xl mx-auto">
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in select-none relative cursor-pointer ${currentFormation.isSpecial ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}`}
              onClick={handleMouseClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >

              <div className="grid lg:grid-cols-2 gap-0 h-80">
                {/* Left side - Image */}
                <div className="relative h-80">
                  <img 
                    src={currentFormation.image} 
                    alt={currentFormation.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', currentFormation.image);
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', currentFormation.image);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Image overlay info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    {currentFormation.isSpecial && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold mb-2 animate-pulse">
                        ⭐ BOOTCAMP EXCLUSIF
                      </Badge>
                    )}
                    <Badge className={`${getLevelColor(currentFormation.level)} text-xs font-medium mb-2`}>
                      {currentFormation.level}
                    </Badge>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">
                      {currentFormation.title}
                    </h3>
                    <div className="flex items-center text-white/90">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold">{currentFormation.duration}</span>
                    </div>
                  </div>

                  {/* Price badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-bold text-gray-800">{currentFormation.price}</span>
                    </div>
                  </div>

                </div>

                {/* Right side - Content */}
                <div className="p-4 flex flex-col justify-between h-80">
                  <div>
                    <div className="flex items-center text-supemir-blue mb-2">
                      <Award className="h-3 w-3 mr-1" />
                      <span className="font-semibold text-xs">{currentFormation.certification}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-3 text-xs">
                      {currentFormation.description}
                    </p>
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-800 text-xs">Modules inclus:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {currentFormation.modules.slice(0, 4).map((module, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="h-2 w-2 text-supemir-orange mr-1 flex-shrink-0" />
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-1 pt-2">
                    <Button 
                      className="w-full bg-gradient-to-r from-supemir-orange to-supemir-red text-white font-semibold hover-scale py-1 text-xs"
                      onClick={() => handleFormationClick(currentFormation.slug)}
                    >
                      📚 En savoir plus
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-supemir-blue text-supemir-blue hover:bg-supemir-blue hover:text-white font-semibold hover-scale py-1 text-xs"
                      onClick={() => handleRegistrationClick(currentFormation.slug)}
                    >
                      ✍️ S'inscrire
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-supemir-green text-supemir-green hover:bg-supemir-green hover:text-white font-semibold hover-scale py-1 text-xs"
                      onClick={() => handleBrochureDownload(currentFormation)}
                    >
                      📄 Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Formation Counter */}
            <div className="text-center mt-4">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-xs text-gray-600">
                  {currentFormationIndex + 1} / {filteredFormations.length}
                </span>
                <div className="flex space-x-2">
                  {filteredFormations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFormationIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentFormationIndex 
                          ? 'bg-supemir-orange' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredFormations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <GraduationCap className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune formation trouvée</h3>
            <p className="text-gray-500">Aucune formation disponible dans cette catégorie pour le moment.</p>
          </div>
        )}
        
        <div ref={statsRef} className={`text-center mt-12 transition-all duration-1000 ${
          isStatsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="bg-gradient-to-r from-supemir-orange/10 to-supemir-red/10 rounded-2xl p-8 border border-supemir-orange/20 hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pourquoi choisir nos formations certifiées ?
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
      
      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={handleCloseRegistration}
      />
    </section>
  );
};

export default FormationRapide;