import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, CheckCircle, Star, GraduationCap, Code, Zap, TrendingUp, Heart } from "lucide-react";
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

  // Licence programs data
  const licencePrograms = [
    {
      id: "technologies-information",
      title: "Technologies de l'Information",
      description: "Maîtrisez les technologies de pointe et solutions numériques",
      duration: "3 ans",
      level: "Bac+3",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      programs: [
        {
          title: "Développement Web Full Stack",
          description: "Applications web complètes avec technologies modernes",
          slug: "developpement-web-fullstack",
          modules: ["HTML5/CSS3", "JavaScript ES6+", "React.js", "Node.js", "Bases de données", "API REST"],
          careers: ["Développeur Web", "Full Stack Developer", "Frontend Developer", "Backend Developer"]
        },
        {
          title: "Développement Mobile",
          description: "Applications mobiles iOS et Android",
          slug: "developpement-mobile",
          modules: ["React Native", "Flutter", "Swift", "Kotlin", "UI/UX Mobile", "APIs mobiles"],
          careers: ["Développeur Mobile", "Mobile App Developer", "iOS Developer", "Android Developer"]
        },
        {
          title: "IA & Analyse de Données",
          description: "Intelligence artificielle et science des données",
          slug: "ia-data-analytics",
          modules: ["Python", "Machine Learning", "Deep Learning", "Data Visualization", "Big Data", "Statistiques"],
          careers: ["Data Scientist", "Data Analyst", "ML Engineer", "AI Specialist"]
        },
        {
          title: "Cybersécurité",
          description: "Sécurité réseau et hacking éthique",
          slug: "cybersecurite-reseaux",
          modules: ["Sécurité réseau", "Ethical Hacking", "Forensique", "Cryptographie", "Audit sécurité", "Incident Response"],
          careers: ["Cybersécurité", "Penetration Tester", "Security Analyst", "Incident Responder"]
        }
      ]
    },
    {
      id: "ingenierie-technologie",
      title: "Ingénierie & Technologie",
      description: "Solutions innovantes pour les défis d'ingénierie modernes",
      duration: "3 ans",
      level: "Bac+3",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      programs: [
        {
          title: "Génie Électrique",
          description: "Systèmes électriques et conception électrique",
          slug: "electrotechnique-systemes",
          modules: ["Circuits électriques", "Électronique", "Automatique", "Énergies renouvelables", "Réseaux électriques", "Contrôle"],
          careers: ["Ingénieur Électrique", "Électrotechnicien", "Concepteur Électrique", "Maintenance Électrique"]
        },
        {
          title: "Automatisation Industrielle",
          description: "Systèmes automatisés et robotique",
          slug: "automatisation-industrielle",
          modules: ["PLC", "Robotique", "Capteurs", "Actionneurs", "Réseaux industriels", "Supervision"],
          careers: ["Automaticien", "Roboticien", "Ingénieur Process", "Technicien Maintenance"]
        },
        {
          title: "Énergies Renouvelables",
          description: "Technologies d'énergie durable",
          slug: "energies-renouvelables",
          modules: ["Solaire", "Éolien", "Hydraulique", "Biomasse", "Stockage énergie", "Smart Grid"],
          careers: ["Ingénieur Énergies", "Technicien Solaire", "Éolien", "Énergéticien"]
        }
      ]
    },
    {
      id: "gestion-management",
      title: "Gestion & Management",
      description: "Développez vos compétences en leadership et entrepreneuriat",
      duration: "3 ans",
      level: "Bac+3",
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      programs: [
        {
          title: "Entrepreneuriat & Finance",
          description: "Développement d'entreprise et gestion financière",
          slug: "entrepreneuriat-finance",
          modules: ["Business Plan", "Finance d'entreprise", "Marketing", "Gestion RH", "Stratégie", "Innovation"],
          careers: ["Entrepreneur", "Chef de Projet", "Analyste Financier", "Business Developer"]
        },
        {
          title: "Marketing Digital",
          description: "Stratégies de marketing en ligne et analytics",
          slug: "marketing-digital",
          modules: ["SEO/SEA", "Social Media", "Content Marketing", "Analytics", "E-commerce", "Growth Hacking"],
          careers: ["Digital Marketer", "Social Media Manager", "SEO Specialist", "Growth Hacker"]
        }
      ]
    },
    {
      id: "sante",
      title: "Santé",
      description: "Services professionnels de santé et médicaux",
      duration: "3 ans",
      level: "Bac+3",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      programs: [
        {
          title: "Santé Générale",
          description: "Services généraux de santé et médicaux",
          slug: "sante-generale",
          modules: ["Anatomie", "Physiologie", "Pathologie", "Pharmacologie", "Soins", "Éthique médicale"],
          careers: ["Aide-Soignant", "Technicien Santé", "Assistant Médical", "Coordinateur Santé"]
        },
        {
          title: "Soins Infirmiers",
          description: "Soins infirmiers professionnels et soins aux patients",
          slug: "soins-infirmiers",
          modules: ["Soins de base", "Médicaments", "Urgences", "Chirurgie", "Pédiatrie", "Gériatrie"],
          careers: ["Infirmier", "Infirmier Spécialisé", "Coordinateur Soins", "Formateur Santé"]
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
              Licence Professionnelle
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Formations de premier cycle offrant des connaissances et compétences fondamentales 
              pour votre réussite professionnelle. Développez votre expertise dans votre domaine de prédilection.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-500" />
                <span>3 ans de formation</span>
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
