import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, CheckCircle, Star, GraduationCap, Database, Building2, BarChart3, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Master = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Master programs data
  const masterPrograms = [
    {
      id: "technologie-avancee",
      title: "Technologie Avancée",
      description: "Recherche de pointe et solutions technologiques avancées",
      duration: "2 ans",
      level: "Bac+5",
      icon: Database,
      color: "from-purple-500 to-indigo-500",
      programs: [
        {
          title: "IA & Analyse de Données Avancée",
          description: "Machine learning avancé et big data pour l'entreprise",
          slug: "ia-data-analytics-avancee",
          modules: ["Deep Learning", "Big Data", "Computer Vision", "NLP", "MLOps", "Data Engineering"],
          careers: ["Senior Data Scientist", "ML Engineer", "AI Research", "Data Architect"]
        },
        {
          title: "Cybersécurité Avancée",
          description: "Architecture de sécurité avancée et gestion des risques",
          slug: "cybersecurite-avancee",
          modules: ["Security Architecture", "Risk Management", "Incident Response", "Forensics", "Compliance", "Security Operations"],
          careers: ["CISO", "Security Architect", "Penetration Tester", "Security Consultant"]
        }
      ]
    },
    {
      id: "leadership-ingenierie",
      title: "Leadership en Ingénierie",
      description: "Gestion d'ingénierie avancée et innovation",
      duration: "2 ans",
      level: "Bac+5",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      programs: [
        {
          title: "Génie Électrique Avancé",
          description: "Systèmes électriques avancés et réseaux intelligents",
          slug: "genie-electrique-avance",
          modules: ["Smart Grid", "IoT", "Énergies Renouvelables", "Automatisation", "Réseaux Intelligents", "Innovation"],
          careers: ["Ingénieur Senior", "Chef de Projet", "Innovation Manager", "Technical Lead"]
        },
        {
          title: "Automatisation Industrielle Avancée",
          description: "Automatisation avancée et Industrie 4.0",
          slug: "automatisation-industrielle-avancee",
          modules: ["Industrie 4.0", "IoT Industriel", "Digital Twin", "AI Industrielle", "Cybersécurité OT", "Lean Manufacturing"],
          careers: ["Industrial Engineer", "Digital Transformation", "Process Manager", "Innovation Leader"]
        }
      ]
    },
    {
      id: "leadership-commercial",
      title: "Leadership Commercial",
      description: "Leadership exécutif et gestion stratégique",
      duration: "2 ans",
      level: "Bac+5",
      icon: BarChart3,
      color: "from-emerald-500 to-green-500",
      programs: [
        {
          title: "Entrepreneuriat & Finance Avancé",
          description: "Stratégie d'entreprise avancée et finance",
          slug: "entrepreneuriat-finance-avance",
          modules: ["Strategic Management", "Corporate Finance", "Investment Analysis", "M&A", "Risk Management", "Innovation Strategy"],
          careers: ["CEO", "CFO", "Investment Manager", "Strategic Consultant"]
        },
        {
          title: "Marketing Digital Avancé",
          description: "Marketing digital avancé et analytics",
          slug: "marketing-digital-avance",
          modules: ["Digital Strategy", "Advanced Analytics", "Marketing Automation", "Customer Experience", "Growth Marketing", "Data-Driven Marketing"],
          careers: ["CMO", "Digital Marketing Director", "Growth Manager", "Marketing Analytics Lead"]
        }
      ]
    },
    {
      id: "gestion-sante",
      title: "Gestion de la Santé",
      description: "Administration avancée de la santé et politique",
      duration: "2 ans",
      level: "Bac+5",
      icon: Heart,
      color: "from-rose-500 to-red-500",
      programs: [
        {
          title: "Administration de la Santé",
          description: "Administration de la santé et politique",
          slug: "administration-sante",
          modules: ["Health Policy", "Healthcare Management", "Quality Management", "Health Economics", "Public Health", "Healthcare Innovation"],
          careers: ["Healthcare Administrator", "Health Policy Analyst", "Quality Manager", "Healthcare Consultant"]
        },
        {
          title: "Pratique Infirmière Avancée",
          description: "Pratique infirmière avancée et leadership",
          slug: "pratique-infirmiere-avancee",
          modules: ["Advanced Practice", "Clinical Leadership", "Research Methods", "Healthcare Innovation", "Patient Safety", "Interprofessional Care"],
          careers: ["Advanced Practice Nurse", "Clinical Nurse Specialist", "Nurse Manager", "Healthcare Educator"]
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
    navigate(`/diplome/master/${programSlug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
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
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" />
              Programmes Master
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Professionnel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Programmes avancés pour une expertise spécialisée et le leadership. 
              Développez vos compétences de haut niveau et devenez un expert dans votre domaine.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-500" />
                <span>2 ans de formation</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-green-500" />
                <span>Diplôme Master</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-500" />
                <span>Leadership & Expertise</span>
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
                {masterPrograms.map((category) => (
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
              const category = masterPrograms.find(cat => cat.id === selectedCategory);
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir un Master ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Développez votre expertise et accédez à des postes de leadership 
              avec nos programmes de master professionnel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise Avancée</h3>
              <p className="text-gray-600">
                Développez des compétences de haut niveau et une expertise spécialisée 
                dans votre domaine d'activité.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Leadership</h3>
              <p className="text-gray-600">
                Acquérez les compétences de leadership et de gestion nécessaires 
                pour diriger des équipes et des projets.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Carrière</h3>
              <p className="text-gray-600">
                Accédez à des postes de direction et des opportunités de carrière 
                à haut niveau dans votre secteur.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Devenir un Expert ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez nos programmes de master et développez l'expertise 
            et le leadership nécessaires pour exceller dans votre domaine.
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
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
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

export default Master;
