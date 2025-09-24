import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Shield, 
  Users, 
  TrendingUp, 
  Zap, 
  Database, 
  Award, 
  ArrowLeft, 
  ChevronDown, 
  ChevronRight, 
  BarChart3, 
  Sparkles,
  GraduationCap,
  BookOpen,
  Building2,
  Heart,
  Briefcase,
  Lightbulb,
  Target,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Programs = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDegree, setSelectedDegree] = useState<'bachelor' | 'master' | null>(null);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const [programsRef, isProgramsVisible] = useScrollAnimation({ threshold: 0.2 });

  const handleProgramClick = (type: string, programSlug: string) => {
    if (type === 'licence') {
      navigate('/licence');
    } else if (type === 'master') {
      navigate('/master');
    } else {
    navigate(`/diplome/${type}/${programSlug}`);
    }
  };

  const handleDegreeSelect = (degree: 'bachelor' | 'master') => {
    // Navigate directly to the appropriate page
    if (degree === 'bachelor') {
      navigate('/licence');
    } else if (degree === 'master') {
      navigate('/master');
    }
  };

  const handleFieldSelect = (field: string) => {
    setSelectedField(field);
    setCurrentStep(3);
  };

  const handleProgramSelect = (programSlug: string) => {
    if (selectedDegree) {
      handleProgramClick(selectedDegree === 'bachelor' ? 'licence' : 'master', programSlug);
    }
  };

  const getProgramSlug = (field: string): string => {
    const slugMap: { [key: string]: string } = {
      "Web Development": "developpement-web-fullstack",
      "Mobile Development": "developpement-mobile",
      "AI & Data Analytics": "ia-data-analytics",
      "Cybersecurity": "cybersecurite-reseaux",
      "Electrical Engineering": "electrotechnique-systemes",
      "Industrial Automation": "automatisation-industrielle",
      "Civil Engineering": "genie-civil-conduite-travaux",
      "Industrial Engineering": "genie-industriel-maintenance",
      "Renewable Energy": "energies-renouvelables",
      "Entrepreneurship & Finance": "entrepreneuriat-audit-finance",
      "Digital Marketing": "developpement-commercial-marketing",
      "Healthcare": "domaine-sante",
      "Nursing": "domaine-sante-aide-soignant"
    };
    return slugMap[field] || field.toLowerCase().replace(/\s+/g, '-');
  };

  const handleBack = () => {
    if (currentStep === 3) {
      setCurrentStep(2);
      setSelectedField(null);
    } else if (currentStep === 2) {
      setCurrentStep(1);
      setSelectedDegree(null);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedDegree(null);
    setSelectedField(null);
  };


  // Degree types
  const degrees = {
    bachelor: {
      title: "Licence",
      description: "Formations professionnelles spécialisées pour une insertion rapide sur le marché du travail",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      duration: "1 an"
    },
    master: {
      title: "Master",
      description: "Programmes avancés pour une expertise spécialisée et le leadership",
      icon: Award,
      color: "from-orange-500 to-red-500",
      duration: "2 ans"
    }
  };

  // Fields of study
  const fieldsOfStudy = {
    bachelor: [
      {
        name: "Technologies de l'Information",
        icon: Code,
        description: "Maîtrisez les technologies de pointe et solutions numériques",
        color: "from-blue-500 to-indigo-500",
      programs: [
          { title: "Développement Web", description: "Applications web full-stack et frameworks modernes" },
          { title: "Développement Mobile", description: "Développement d'applications iOS et Android" },
          { title: "IA & Analyse de Données", description: "Machine learning et science des données" },
          { title: "Cybersécurité", description: "Sécurité réseau et hacking éthique" }
        ]
      },
      {
        name: "Ingénierie & Technologie",
      icon: Zap,
        description: "Solutions innovantes pour les défis d'ingénierie modernes",
        color: "from-yellow-500 to-orange-500",
      programs: [
          { title: "Génie Électrique", description: "Systèmes électriques et conception électrique" },
          { title: "Automatisation Industrielle", description: "Systèmes automatisés et robotique" },
          { title: "Énergies Renouvelables", description: "Technologies d'énergie durable" },
          { title: "Génie Civil", description: "Conduite de travaux, structures et chantier" },
          { title: "Génie Industriel", description: "Process, maintenance et qualité" }
        ]
      },
      {
        name: "Gestion & Management",
      icon: TrendingUp,
        description: "Développez vos compétences en leadership et entrepreneuriat",
        color: "from-green-500 to-teal-500",
      programs: [
          { title: "Entrepreneuriat & Finance", description: "Développement d'entreprise et gestion financière" },
          { title: "Marketing Digital", description: "Stratégies de marketing en ligne et analytics" }
        ]
      },
      {
        name: "Santé",
        icon: Heart,
        description: "Services professionnels de santé et médicaux",
        color: "from-red-500 to-pink-500",
      programs: [
          { title: "Santé", description: "Services généraux de santé et médicaux" },
          { title: "Soins Infirmiers", description: "Soins infirmiers professionnels et soins aux patients" }
        ]
      }
    ],
    master: [
      {
        name: "Technologie Avancée",
        icon: Database,
        description: "Recherche de pointe et solutions technologiques avancées",
        color: "from-purple-500 to-indigo-500",
      programs: [
          { title: "IA & Analyse de Données", description: "Machine learning avancé et big data" },
          { title: "Cybersécurité", description: "Architecture de sécurité avancée et gestion" }
        ]
      },
      {
        name: "Leadership en Ingénierie",
        icon: Building2,
        description: "Gestion d'ingénierie avancée et innovation",
        color: "from-blue-500 to-cyan-500",
      programs: [
          { title: "Génie Électrique", description: "Systèmes électriques avancés et réseaux intelligents" },
          { title: "Automatisation Industrielle", description: "Automatisation avancée et Industrie 4.0" }
        ]
      },
      {
        name: "Leadership Commercial",
      icon: BarChart3,
        description: "Leadership exécutif et gestion stratégique",
        color: "from-emerald-500 to-green-500",
      programs: [
          { title: "Entrepreneuriat & Finance", description: "Stratégie d'entreprise avancée et finance" },
          { title: "Marketing Digital", description: "Marketing digital avancé et analytics" }
        ]
      },
      {
        name: "Gestion de la Santé",
        icon: Award,
        description: "Administration avancée de la santé et politique",
        color: "from-rose-500 to-red-500",
        programs: [
          { title: "Santé", description: "Administration de la santé et politique" },
          { title: "Soins Infirmiers", description: "Pratique infirmière avancée et leadership" }
        ]
      }
    ]
  };

  const getCurrentFields = () => {
    if (selectedDegree) {
      return fieldsOfStudy[selectedDegree] || [];
    }
    return [];
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-3">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
              step <= currentStep 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {step}
                    </div>
            {step < 3 && (
              <div className={`w-8 h-0.5 mx-1 ${
                step < currentStep ? 'bg-primary' : 'bg-muted'
                      }`} />
            )}
                    </div>
                  ))}
                </div>
          </div>
      );

  const renderStepTitle = () => {
    const titles = {
      1: "Sélectionnez Votre Niveau d'Études",
      2: "Choisissez Votre Domaine d'Études",
      3: "Sélectionnez Votre Programme"
    };
    return (
      <div className="text-center mb-2">
        <h2 className="text-base font-bold text-foreground mb-1">
          {titles[currentStep as keyof typeof titles]}
        </h2>
        <p className="text-muted-foreground text-xs">
          {currentStep === 1 && "Choisissez entre Licence ou Master"}
          {currentStep === 2 && "Explorez les domaines d'études disponibles"}
          {currentStep === 3 && "Sélectionnez le programme qui vous intéresse"}
        </p>
      </div>
    );
  };

  return (
    <section id="programmes" className="py-4 pt-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div ref={programsRef as React.RefObject<HTMLDivElement>} className="text-center mb-2">
          <Badge className="mb-2 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 text-sm">
            <Sparkles className="h-3 w-3 mr-1" />
            Programmes Professionnels
          </Badge>
          <h1 className="text-lg md:text-xl font-bold text-foreground mb-1">
            Choisissez Votre{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Parcours Professionnel
            </span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Découvrez notre gamme complète de diplômes et domaines d'études spécialisés.
                </p>
        </div>

        {/* Quick links to Licence / Master / MBA */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Button size="sm" variant="outline" onClick={() => navigate('/licence')}>Licence</Button>
          <Button size="sm" variant="outline" onClick={() => navigate('/master')}>Master</Button>
          <Button size="sm" variant="outline" onClick={() => navigate('/mba')}>MBA</Button>
        </div>

              <div className="max-w-6xl mx-auto">
          {renderStepIndicator()}
          {renderStepTitle()}

          {/* Step 1: Choose Degree Level */}
          {currentStep === 1 && (
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(degrees).map(([key, degree]) => (
                <Card 
                  key={key}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/30 hover:-translate-y-2 ${
                    hoveredItem === key ? 'ring-2 ring-primary/20' : ''
                  }`}
                  onClick={() => handleDegreeSelect(key as 'bachelor' | 'master')}
                  onMouseEnter={() => setHoveredItem(key)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <CardHeader className="text-center pb-3">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${degree.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <degree.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                      {degree.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {degree.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="outline" className="mb-3 text-xs">
                      Durée: {degree.duration}
                    </Badge>
                    <div className="flex items-center justify-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      <span>Explorer les Programmes</span>
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Step 2: Choose Field of Study */}
          {currentStep === 2 && selectedDegree && (
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Button variant="outline" onClick={handleBack} className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour
                </Button>
                <div className="text-sm text-muted-foreground">
                  Sélectionné: <span className="font-semibold text-foreground">
                    {degrees[selectedDegree]?.title}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                {fieldsOfStudy[selectedDegree]?.map((field, index) => (
                  <Card 
                    key={index}
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/30 hover:-translate-y-2 ${
                      hoveredItem === field.name ? 'ring-2 ring-primary/20' : ''
                    }`}
                    onClick={() => handleFieldSelect(field.name)}
                    onMouseEnter={() => setHoveredItem(field.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${field.color} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          <field.icon className="h-4 w-4" />
                        </div>
                        <CardTitle className="text-sm font-bold group-hover:text-primary transition-colors">
                          {field.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-xs leading-relaxed">
                        {field.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="transition-all duration-300 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                        <div className="space-y-1 border-t pt-2">
                          {field.programs.map((program, programIndex) => (
                            <div key={programIndex} className="flex items-center text-xs text-muted-foreground">
                              <CheckCircle className="h-3 w-3 mr-2 text-primary" />
                              <div>
                                <div className="font-medium text-foreground">{program.title}</div>
                                <div className="text-xs">{program.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Choose Program */}
          {currentStep === 3 && selectedDegree && selectedField && (
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Button variant="outline" onClick={handleBack} className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour
                </Button>
                <div className="text-sm text-muted-foreground">
                  Sélectionné: <span className="font-semibold text-foreground">
                    {degrees[selectedDegree]?.title} - {selectedField}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {getCurrentFields()
                  .find(field => field.name === selectedField)
                  ?.programs.map((program, index) => (
                    <Card 
                      key={index}
                      className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/30 hover:-translate-y-2"
                      onClick={() => handleProgramSelect(getProgramSlug(program.title))}
                    >
                      <CardHeader className="text-center pb-3">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {program.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="flex items-center justify-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                          <span>En savoir plus</span>
                          <ChevronRight className="h-3 w-3 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {/* Reset Button */}
          {currentStep > 1 && (
            <div className="text-center mt-4">
              <Button variant="ghost" onClick={handleReset} className="text-muted-foreground hover:text-foreground text-sm">
                <Lightbulb className="h-3 w-3 mr-1" />
                Recommencer
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Programs;