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
      id: "informatique-data-sciences",
      title: "Informatique, Data Sciences & Intelligence Artificielle",
      description: "Formation avancée en technologies de l'information et intelligence artificielle",
      duration: "2 ans",
      level: "Bac+5",
      icon: Database,
      color: "from-purple-500 to-indigo-500",
      programs: [
        {
          title: "Informatique, Data Sciences, Cloud, Cybersécurité & Intelligence Artificielle (DU IDCIA)",
          description: "Formation complète en technologies avancées et intelligence artificielle",
          slug: "informatique-data-sciences-cloud-cybersecurite-ia",
          modules: ["Data Science", "Cloud Computing", "Cybersécurité", "Intelligence Artificielle", "Machine Learning", "Big Data"],
          careers: ["Data Scientist", "Cloud Architect", "Cybersecurity Specialist", "AI Engineer", "ML Engineer"]
        },
        {
          title: "Big Data et Intelligence Artificielle",
          description: "Spécialisation en big data et intelligence artificielle",
          slug: "big-data-intelligence-artificielle",
          modules: ["Big Data Analytics", "Machine Learning", "Deep Learning", "Data Mining", "Predictive Analytics", "AI Applications"],
          careers: ["Big Data Engineer", "AI Specialist", "Data Analyst", "Machine Learning Engineer", "Business Intelligence Analyst"]
        },
        {
          title: "Génie Informatique et Innovation Technologique, Option Génie Logiciel",
          description: "Développement logiciel avancé et innovation technologique",
          slug: "genie-informatique-innovation-technologique-genie-logiciel",
          modules: ["Software Engineering", "System Design", "Agile Development", "Quality Assurance", "Software Architecture", "Innovation Management"],
          careers: ["Software Architect", "Senior Developer", "Technical Lead", "Software Engineering Manager", "Innovation Manager"]
        },
        {
          title: "Génie Informatique et Innovation Technologique, Option Intelligence Artificielle et Data Science",
          description: "Innovation technologique avec focus IA et data science",
          slug: "genie-informatique-innovation-technologique-ia-data-science",
          modules: ["AI Innovation", "Data Science", "Technology Transfer", "R&D", "Product Development", "Market Analysis"],
          careers: ["AI Innovation Manager", "R&D Engineer", "Technology Consultant", "Product Manager", "Data Science Lead"]
        }
      ]
    },
    {
      id: "cybersecurite-transformation-digitale",
      title: "Cybersécurité & Transformation Digitale",
      description: "Sécurité informatique et transformation digitale des organisations",
      duration: "2 ans",
      level: "Bac+5",
      icon: Target,
      color: "from-red-500 to-pink-500",
      programs: [
        {
          title: "Cybersécurité et Transformation Digitale, Option Systèmes de communication et Data center",
          description: "Cybersécurité spécialisée en systèmes de communication et data centers",
          slug: "cybersecurite-transformation-digitale-systemes-communication-data-center",
          modules: ["Cybersécurité", "Network Security", "Data Center Security", "Communication Systems", "Risk Management", "Incident Response"],
          careers: ["Cybersecurity Specialist", "Network Security Engineer", "Data Center Security Manager", "Security Consultant"]
        },
        {
          title: "Cybersécurité et Transformation Digitale, Option Management des Systèmes d'Information",
          description: "Gestion de la sécurité des systèmes d'information",
          slug: "cybersecurite-transformation-digitale-management-systemes-information",
          modules: ["Information Security Management", "Cybersécurité", "Risk Assessment", "Compliance", "Security Governance", "Digital Transformation"],
          careers: ["CISO", "Information Security Manager", "Security Governance Specialist", "Digital Transformation Manager"]
        }
      ]
    },
    {
      id: "management-systemes-information",
      title: "Management & Systèmes d'Information",
      description: "Gestion des systèmes d'information et transformation digitale",
      duration: "2 ans",
      level: "Bac+5",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      programs: [
        {
          title: "Management des Systèmes d'Information",
          description: "Gestion stratégique des systèmes d'information",
          slug: "management-systemes-information",
          modules: ["IT Management", "System Architecture", "Project Management", "Change Management", "Digital Strategy", "IT Governance"],
          careers: ["IT Manager", "System Administrator", "IT Director", "Digital Strategy Manager", "IT Consultant"]
        }
      ]
    },
    {
      id: "finance-audit-entrepreneuriat",
      title: "Finance, Audit & Entrepreneuriat",
      description: "Gestion financière, audit et création d'entreprise",
      duration: "2 ans",
      level: "Bac+5",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      programs: [
        {
          title: "Finance, Audit & Entrepreneuriat",
          description: "Spécialisation en finance, audit et entrepreneuriat",
          slug: "finance-audit-entrepreneuriat-master",
          modules: ["Corporate Finance", "Audit", "Risk Management", "Entrepreneurship", "Investment Analysis", "Financial Strategy"],
          careers: ["Financial Manager", "Auditor", "Risk Manager", "Entrepreneur", "Investment Analyst", "CFO"]
        }
      ]
    },
    {
      id: "marketing-digital-business",
      title: "Marketing Digital & Business",
      description: "Stratégies digitales et développement commercial",
      duration: "2 ans",
      level: "Bac+5",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      programs: [
        {
          title: "Développement Commercial et Marketing Digital",
          description: "Stratégies commerciales et marketing digital avancées",
          slug: "developpement-commercial-marketing-digital-master",
          modules: ["Digital Marketing", "Sales Strategy", "Customer Relationship Management", "E-commerce", "Analytics", "Business Development"],
          careers: ["Digital Marketing Manager", "Sales Director", "Business Development Manager", "E-commerce Manager", "Marketing Director"]
        }
      ]
    },
    {
      id: "qhse-performance-durable",
      title: "QHSE & Performance Durable",
      description: "Qualité, hygiène, sécurité, environnement et développement durable",
      duration: "2 ans",
      level: "Bac+5",
      icon: CheckCircle,
      color: "from-indigo-500 to-blue-500",
      programs: [
        {
          title: "QHSSE & Performance Durable",
          description: "Management de la qualité, sécurité et performance durable",
          slug: "qhsse-performance-durable",
          modules: ["Quality Management", "Health & Safety", "Environmental Management", "Sustainable Development", "Performance Management", "Compliance"],
          careers: ["QHSE Manager", "Sustainability Manager", "Environmental Consultant", "Quality Director", "Safety Manager"]
        }
      ]
    },
    {
      id: "achat-logistique-supply-chain",
      title: "Achat, Logistique & Supply Chain",
      description: "Gestion des achats, logistique et chaîne d'approvisionnement",
      duration: "2 ans",
      level: "Bac+5",
      icon: Building2,
      color: "from-teal-500 to-cyan-500",
      programs: [
        {
          title: "Achat, Logistique et Supply Chain Management",
          description: "Gestion stratégique des achats et de la chaîne d'approvisionnement",
          slug: "achat-logistique-supply-chain-management",
          modules: ["Procurement", "Supply Chain Management", "Logistics", "Vendor Management", "Inventory Management", "Strategic Sourcing"],
          careers: ["Procurement Manager", "Supply Chain Director", "Logistics Manager", "Vendor Manager", "Operations Director"]
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
              Formation Continue
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Le master professionnel de SUPEMIR en formation continue s'adresse aux étudiants et aux professionnels souhaitant renforcer leurs compétences et se spécialiser dans des domaines stratégiques. Parmi les filières proposées, on retrouve le génie informatique, la cybersécurité, le DevOps, la finance et le marketing digital. Chaque master professionnel proposé par SUPEMIR intègre des approches pédagogiques innovantes. Les participants bénéficient d'un enseignement qui allie rigueur académique, projets appliqués et immersion en entreprise. Cette combinaison permet de développer des compétences immédiatement exploitables sur le marché du travail. Grâce à des partenariats solides avec les principaux acteurs du secteur, SUPEMIR forme des experts hautement qualifiés. Les diplômés du master professionnel sont ainsi préparés à accompagner la transformation digitale et énergétique des organisations. Conçu pour s'adapter aux contraintes des professionnels en activité, le master professionnel chez SUPEMIR propose des horaires aménagés et des formats de cours flexibles, permettant de concilier formation et vie professionnelle.
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
