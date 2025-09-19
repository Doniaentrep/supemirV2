import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, CheckCircle, Star, GraduationCap, Code, Zap, TrendingUp, Heart, Building2, BarChart3, Settings, DollarSign, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Licence = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Licence programs data - Real SUPEMIR programs
  const licencePrograms = [
    {
      id: "developpement-informatique",
      title: "Développement Informatique",
      description: "Formation complète en développement informatique avec spécialisations avancées",
      duration: "1 an",
      level: "Bac+3",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      programs: [
        {
          title: "Développement Informatique Full Stack, Option Développement Mobile",
          description: "Développement d'applications mobiles et web complètes",
          slug: "developpement-fullstack-mobile",
          modules: ["Développement mobile (iOS/Android)", "Frontend (React, Vue)", "Backend (Node.js, Python)", "Bases de données", "API REST", "Déploiement"],
          careers: ["Développeur Mobile", "Développeur Full Stack", "Mobile App Developer", "Frontend Developer"]
        },
        {
          title: "Développement Informatique Full Stack, Option Intelligence Artificielle et Data Analytics",
          description: "Développement avec IA et analyse de données",
          slug: "developpement-fullstack-ia-data",
          modules: ["Machine Learning", "Data Science", "Python/R", "Deep Learning", "Big Data", "Analytics"],
          careers: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "AI Developer"]
        },
        {
          title: "Développement Informatique Full Stack, Option Développement JAVA JEE",
          description: "Développement d'entreprises avec Java et JEE",
          slug: "developpement-java-jee",
          modules: ["Java", "JEE", "Spring Framework", "Hibernate", "Web Services", "Architecture JEE"],
          careers: ["Développeur Java", "Développeur JEE", "Java Developer", "Enterprise Developer"]
        },
        {
          title: "Développement Informatique Full Stack, Option Développement Gaming et VR",
          description: "Développement de jeux vidéo et réalité virtuelle",
          slug: "developpement-gaming-vr",
          modules: ["Unity 3D", "Unreal Engine", "C#/C++", "VR/AR", "Game Design", "3D Modeling"],
          careers: ["Game Developer", "VR Developer", "Game Designer", "3D Artist"]
        }
      ]
    },
    {
      id: "administration-systemes-cybersecurite",
      title: "Administration Systèmes & Cybersécurité",
      description: "Gestion des systèmes informatiques et sécurité des données",
      duration: "1 an",
      level: "Bac+3",
      icon: Settings,
      color: "from-red-500 to-pink-500",
      programs: [
        {
          title: "Administration des Systèmes, Bases de Données, Cybersécurité et Cloud Computing",
          description: "Administration complète des systèmes et sécurité informatique",
          slug: "administration-systemes-cybersecurite-cloud",
          modules: ["Administration système", "Bases de données", "Cybersécurité", "Cloud Computing", "Réseaux", "Monitoring"],
          careers: ["Administrateur système", "Cloud Engineer", "Cybersécurité", "DBA"]
        },
        {
          title: "Réseaux et Cybersécurité, Option Administration des Systèmes et Cloud Computing",
          description: "Spécialisation en réseaux et sécurité cloud",
          slug: "reseaux-cybersecurite-cloud",
          modules: ["Réseaux", "Cybersécurité", "Cloud Security", "Firewall", "VPN", "Monitoring"],
          careers: ["Network Administrator", "Cybersecurity Specialist", "Cloud Security Engineer", "Network Engineer"]
        }
      ]
    },
    {
      id: "marketing-digital-business",
      title: "Marketing Digital & Business",
      description: "Stratégies digitales et développement commercial",
      duration: "1 an",
      level: "Bac+3",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      programs: [
        {
          title: "Marketing Digital et E-Business",
          description: "Stratégies marketing digital et commerce électronique",
          slug: "marketing-digital-ebusiness",
          modules: ["Marketing digital", "E-commerce", "SEO/SEA", "Social Media", "Analytics", "Conversion"],
          careers: ["Digital Marketing Manager", "E-commerce Manager", "Growth Hacker", "Social Media Manager"]
        },
        {
          title: "Développement Commercial et Marketing Digital",
          description: "Développement commercial avec outils digitaux",
          slug: "developpement-commercial-marketing-digital",
          modules: ["Techniques de vente", "Marketing digital", "CRM", "Prospection", "Négociation", "Analytics"],
          careers: ["Commercial", "Business Developer", "Account Manager", "Sales Manager"]
        }
      ]
    },
    {
      id: "finance-qualite-gestion",
      title: "Finance, Qualité & Gestion",
      description: "Gestion financière, qualité et entrepreneuriat",
      duration: "1 an",
      level: "Bac+3",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
      programs: [
        {
          title: "Finance, Audit & Entrepreneuriat",
          description: "Gestion financière, audit et création d'entreprise",
          slug: "finance-audit-entrepreneuriat",
          modules: ["Finance d'entreprise", "Audit", "Comptabilité", "Création d'entreprise", "Gestion de projet", "Fiscalité"],
          careers: ["Analyste financier", "Auditeur", "Contrôleur de gestion", "Entrepreneur"]
        },
        {
          title: "Gestion de la Qualité",
          description: "Management de la qualité et amélioration continue",
          slug: "gestion-qualite",
          modules: ["ISO 9001", "Qualité", "Amélioration continue", "Audit qualité", "Processus", "Certification"],
          careers: ["Responsable qualité", "Auditeur qualité", "Consultant qualité", "Coordinateur qualité"]
        }
      ]
    },
    {
      id: "tests-logiciels",
      title: "Tests Logiciels",
      description: "Spécialisation en tests et assurance qualité logicielle",
      duration: "1 an",
      level: "Bac+3",
      icon: Target,
      color: "from-purple-500 to-indigo-500",
      programs: [
        {
          title: "Tests Logiciels avec Tests Automatisés",
          description: "Tests automatisés et assurance qualité logicielle",
          slug: "tests-logiciels-automatises",
          modules: ["Tests manuels", "Tests automatisés", "Selenium", "Jest", "Cypress", "CI/CD"],
          careers: ["Testeur logiciel", "QA Engineer", "Test Automation Engineer", "Quality Assurance"]
        }
      ]
    },
    {
      id: "cnam-programmes",
      title: "Programmes CNAM",
      description: "Formations en partenariat avec le Conservatoire National des Arts et Métiers",
      duration: "1 an",
      level: "Bac+3",
      icon: GraduationCap,
      color: "from-indigo-500 to-blue-500",
      programs: [
        {
          title: "Management et Conduite de Travaux – Cnam",
          description: "Gestion et pilotage de projets de construction",
          slug: "management-conduite-travaux-cnam",
          modules: ["Management de projet", "Conduite de travaux", "Gestion de chantier", "Planification", "Contrôle qualité", "Sécurité"],
          careers: ["Chef de projet", "Conducteur de travaux", "Gestionnaire de chantier", "Coordinateur"]
        },
        {
          title: "Electrotechnique et systèmes – Cnam",
          description: "Électrotechnique et systèmes électriques",
          slug: "electrotechnique-systemes-cnam",
          modules: ["Électrotechnique", "Systèmes électriques", "Automatisme", "Électronique", "Réseaux", "Maintenance"],
          careers: ["Électrotechnicien", "Technicien électricien", "Maintenancier", "Automaticien"]
        },
        {
          title: "Informatique – Cnam",
          description: "Formation informatique généraliste",
          slug: "informatique-cnam",
          modules: ["Programmation", "Bases de données", "Réseaux", "Systèmes", "Développement", "Maintenance"],
          careers: ["Développeur", "Technicien informatique", "Administrateur", "Support technique"]
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const handleProgramClick = (programSlug: string) => {
    navigate(`/diplome/licence/${programSlug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
            
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" />
              Programmes Licence
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Formation Continue
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Chaque <strong>licence professionnelle</strong> en formation continue proposée par SUPEMIR est conçue pour former des spécialistes opérationnels dans des secteurs porteurs tels que le développement informatique, la cybersécurité, la finance ou encore le marketing digital. Grâce à une approche pédagogique innovante, alliant théorie et pratique, chaque <strong>licence professionnelle</strong> permet aux étudiants de développer des compétences techniques solides. En partenariat avec des entreprises reconnues, nos <strong>licences professionnelles</strong> favorisent l'insertion rapide sur le marché du travail et l'évolution de carrière.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-500" />
                <span>1 an de formation</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-green-500" />
                <span>Diplôme reconnu</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-purple-500" />
                <span>Formation pratique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {!selectedCategory ? (
            // Category Selection View
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Choisissez votre Domaine d'Étude
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Sélectionnez le domaine qui correspond à vos aspirations professionnelles.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {licencePrograms.map((category) => (
                  <Card 
                    key={category.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge variant="secondary" className="text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          {category.duration}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          <Award className="h-4 w-4 mr-2" />
                          {category.level}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          <BookOpen className="h-4 w-4 mr-2" />
                          {category.programs.length} programmes
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-700 mb-3">Programmes disponibles:</h5>
                        <div className="space-y-2">
                          {category.programs.map((program, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <h6 className="font-medium text-gray-900">{program.title}</h6>
                                <p className="text-sm text-gray-600">{program.description}</p>
                              </div>
                              <ArrowLeft className="h-4 w-4 text-gray-400 rotate-180" />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">Explorer cette catégorie</span>
                          <ArrowLeft className="h-4 w-4 text-primary rotate-180 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            // Detailed Program View
            (() => {
              const category = licencePrograms.find(cat => cat.id === selectedCategory);
              if (!category) return null;
              
              return (
                <>
                  <div className="mb-8">
                    <Button 
                      variant="outline" 
                      onClick={handleBackToCategories}
                      className="mb-4"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Retour aux catégories
                    </Button>
                    
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-6`}>
                        <category.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                          {category.title}
                        </h2>
                        <p className="text-lg text-gray-600">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {category.programs.map((program, index) => (
                      <Card 
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer"
                        onClick={() => handleProgramClick(program.slug)}
                      >
                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors mb-3">
                            {program.title}
                          </CardTitle>
                          <CardDescription className="text-base mb-4">
                            {program.description}
                          </CardDescription>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary" className="text-sm">
                              <Clock className="h-3 w-3 mr-1" />
                              {category.duration}
                            </Badge>
                            <Badge variant="outline" className="text-sm">
                              <Award className="h-3 w-3 mr-1" />
                              {category.level}
                            </Badge>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-gray-700 mb-3">Modules principaux:</h5>
                              <div className="flex flex-wrap gap-2">
                                {program.modules.map((module, moduleIndex) => (
                                  <Badge key={moduleIndex} variant="outline" className="text-sm">
                                    {module}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-semibold text-gray-700 mb-3">Débouchés professionnels:</h5>
                              <div className="flex flex-wrap gap-2">
                                {program.careers.map((career, careerIndex) => (
                                  <Badge key={careerIndex} variant="secondary" className="text-sm">
                                    {career}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-4 border-t">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-primary">En savoir plus</span>
                              <ArrowLeft className="h-4 w-4 text-primary rotate-180 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              );
            })()
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Commencer Votre Licence ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez nos programmes de licence et développez les compétences 
            nécessaires pour réussir dans votre domaine d'expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-4"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              S'inscrire Maintenant
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/')}
              className="text-lg px-8 py-4 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:text-white font-bold shadow-lg"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: '2px solid #2563eb',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour à l'Accueil
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Licence;
