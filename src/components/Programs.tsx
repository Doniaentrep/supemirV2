import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Shield, Users, TrendingUp, Zap, Database, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Programs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProgramType, setSelectedProgramType] = useState<'licence' | 'master' | null>(null);

  const handleProgramClick = (type: string, programSlug: string) => {
    navigate(`/programme/${type}/${programSlug}`);
  };

  const handleCategoryClick = (category: string, type: 'licence' | 'master') => {
    setSelectedCategory(category);
    setSelectedProgramType(type);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedProgramType(null);
  };
  const licencesCategories = [
    {
      name: "Développement Informatique",
      icon: Code,
      description: "Maîtrisez les technologies les plus demandées du marché",
      programs: [
        {
          title: "Développement Web Full Stack",
          description: "Formation complète en développement web front-end et back-end",
          duration: "3 ans",
          slug: "developpement-web-fullstack"
        },
        {
          title: "Développement Mobile",
          description: "Création d'applications mobiles iOS et Android",
          duration: "3 ans",
          slug: "developpement-mobile"
        },
        {
          title: "Intelligence Artificielle & Data Analytics",
          description: "Maîtrisez l'IA, le machine learning et l'analyse de données",
          duration: "3 ans",
          slug: "ia-data-analytics"
        }
      ]
    },
    {
      name: "Réseaux et Cybersécurité",
      icon: Shield,
      description: "Protégez les systèmes et infrastructures informatiques",
      programs: [
        {
          title: "Administration Réseaux",
          description: "Gestion et maintenance des infrastructures réseau",
          duration: "3 ans",
          slug: "administration-reseaux"
        },
        {
          title: "Cybersécurité",
          description: "Protection des systèmes contre les cyberattaques",
          duration: "3 ans",
          slug: "cybersecurite"
        },
        {
          title: "Cloud Computing",
          description: "Maîtrise des solutions cloud AWS, Azure, GCP",
          duration: "3 ans",
          slug: "cloud-computing"
        }
      ]
    },
    {
      name: "Entrepreneuriat, Audit et Finance",
      icon: TrendingUp,
      description: "Développez votre esprit entrepreneurial et financier",
      programs: [
        {
          title: "Gestion Financière",
          description: "Maîtrisez la gestion financière d'entreprise",
          duration: "3 ans",
          slug: "gestion-financiere"
        },
        {
          title: "Audit et Contrôle",
          description: "Techniques d'audit et de contrôle interne",
          duration: "3 ans",
          slug: "audit-controle"
        },
        {
          title: "Création d'Entreprise",
          description: "De l'idée à la création d'entreprise",
          duration: "3 ans",
          slug: "creation-entreprise"
        }
      ]
    },
    {
      name: "Développement Commercial et Marketing Digital",
      icon: Users,
      description: "Maîtrisez les stratégies commerciales modernes",
      programs: [
        {
          title: "Marketing Digital",
          description: "Stratégies digitales et réseaux sociaux",
          duration: "3 ans",
          slug: "marketing-digital"
        },
        {
          title: "E-Business",
          description: "Commerce électronique et vente en ligne",
          duration: "3 ans",
          slug: "e-business"
        },
        {
          title: "Développement Commercial",
          description: "Techniques de vente et relation client",
          duration: "3 ans",
          slug: "developpement-commercial"
        }
      ]
    },
    {
      name: "Électrotechnique & Systèmes",
      icon: Zap,
      description: "Technologies électriques et systèmes industriels",
      programs: [
        {
          title: "Automatisation Industrielle",
          description: "Systèmes automatisés et robotique",
          duration: "3 ans",
          slug: "automatisation-industrielle"
        },
        {
          title: "Énergies Renouvelables",
          description: "Technologies solaires, éoliennes et hydroélectriques",
          duration: "3 ans",
          slug: "energies-renouvelables"
        },
        {
          title: "Électrotechnique",
          description: "Installations électriques et maintenance",
          duration: "3 ans",
          slug: "electrotechnique"
        }
      ]
    },
    {
      name: "Domaine de Santé",
      icon: Award,
      description: "Formation professionnelle en secteur de la santé",
      programs: [
        {
          title: "Soins Infirmiers",
          description: "Formation professionnelle en soins infirmiers",
          duration: "3 ans",
          slug: "soins-infirmiers"
        },
        {
          title: "Techniques Médicales",
          description: "Techniques de laboratoire et imagerie médicale",
          duration: "3 ans",
          slug: "techniques-medicales"
        },
        {
          title: "Aide-Soignant",
          description: "Formation en aide et soins aux personnes",
          duration: "3 ans",
          slug: "aide-soignant"
        }
      ]
    }
  ];

  const mastersCategories = [
    {
      name: "Génie Informatique et Innovation",
      icon: Database,
      description: "Devenez expert en technologies de pointe",
      programs: [
        {
          title: "Intelligence Artificielle & Big Data",
          description: "Maîtrisez l'IA avancée et l'analyse de données massives",
          duration: "2 ans",
          slug: "ia-big-data"
        },
        {
          title: "Innovation Technologique",
          description: "Développez des solutions technologiques innovantes",
          duration: "2 ans",
          slug: "innovation-technologique"
        },
        {
          title: "Blockchain & Cryptomonnaies",
          description: "Technologies blockchain et systèmes décentralisés",
          duration: "2 ans",
          slug: "blockchain-cryptomonnaies"
        }
      ]
    },
    {
      name: "Cybersécurité et Transformation Digitale",
      icon: Shield,
      description: "Dirigez la transformation digitale sécurisée",
      programs: [
        {
          title: "Leadership en Cybersécurité",
          description: "Dirigez les stratégies de sécurité informatique",
          duration: "2 ans",
          slug: "leadership-cybersecurite"
        },
        {
          title: "Transformation Digitale",
          description: "Pilotez la transformation digitale des entreprises",
          duration: "2 ans",
          slug: "transformation-digitale"
        },
        {
          title: "Gouvernance IT",
          description: "Gouvernance et management des systèmes d'information",
          duration: "2 ans",
          slug: "gouvernance-it"
        }
      ]
    },
    {
      name: "Finance et Stratégie Entrepreneuriale",
      icon: TrendingUp,
      description: "Maîtrisez la finance et l'entrepreneuriat avancé",
      programs: [
        {
          title: "Finance d'Entreprise Avancée",
          description: "Expertise en finance d'entreprise et investissement",
          duration: "2 ans",
          slug: "finance-entreprise-avancee"
        },
        {
          title: "Stratégie Entrepreneuriale",
          description: "Développement et gestion de projets entrepreneuriaux",
          duration: "2 ans",
          slug: "strategie-entrepreneuriale"
        },
        {
          title: "Private Equity & Venture Capital",
          description: "Investissement et financement de l'innovation",
          duration: "2 ans",
          slug: "private-equity-venture-capital"
        }
      ]
    },
    {
      name: "Marketing Digital et E-Commerce",
      icon: Users,
      description: "Excellez dans le commerce et marketing digital",
      programs: [
        {
          title: "Marketing Digital Avancé",
          description: "Stratégies digitales avancées et analytics",
          duration: "2 ans",
          slug: "marketing-digital-avance"
        },
        {
          title: "E-Commerce & Omnicanal",
          description: "Gestion du commerce électronique et expérience client",
          duration: "2 ans",
          slug: "ecommerce-omnicanal"
        },
        {
          title: "Growth Hacking",
          description: "Techniques de croissance rapide et acquisition client",
          duration: "2 ans",
          slug: "growth-hacking"
        }
      ]
    },
    {
      name: "Management et Leadership",
      icon: Award,
      description: "Développez votre leadership et management",
      programs: [
        {
          title: "Management des Systèmes d'Information",
          description: "Dirigez les systèmes d'information d'entreprise",
          duration: "2 ans",
          slug: "management-systemes-information"
        },
        {
          title: "Leadership & Innovation",
          description: "Développez votre leadership et capacité d'innovation",
          duration: "2 ans",
          slug: "leadership-innovation"
        },
        {
          title: "Qualité, Sécurité & Développement Durable",
          description: "Pilotez la qualité, sécurité et durabilité",
          duration: "2 ans",
          slug: "qualite-securite-developpement-durable"
        }
      ]
    }
  ];

  // Function to render category cards
  const renderCategoryCards = (categories: any[], type: 'licence' | 'master') => {
    return categories.map((category, index) => {
      const IconComponent = category.icon;
      const isLicence = type === 'licence';
      return (
        <Card 
          key={index} 
          className={`group hover:shadow-xl transition-all duration-300 border-2 hover-lift animate-slide-up cursor-pointer ${
            isLicence 
              ? 'hover:border-accent/30' 
              : 'hover:border-primary/30 bg-gradient-to-br from-background to-muted/20'
          }`}
          style={{animationDelay: `${index * 0.1}s`}} 
          onClick={() => handleCategoryClick(category.name, type)}
        >
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <div className={`p-3 rounded-xl ${
                isLicence ? 'bg-accent/10' : 'bg-primary/10'
              }`}>
                <IconComponent className={`h-7 w-7 ${
                  isLicence ? 'text-accent' : 'text-primary'
                }`} />
              </div>
              <Badge className={`text-xs ${
                isLicence 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-primary text-primary-foreground'
              }`}>
                {type === 'licence' ? 'LICENCE PRO' : 'MASTER PRO'}
              </Badge>
            </div>
            <CardTitle className={`text-xl group-hover transition-colors leading-tight ${
              isLicence ? 'group-hover:text-accent' : 'group-hover:text-primary'
            }`}>
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className={`p-3 rounded-lg border ${
                isLicence 
                  ? 'bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20'
                  : 'bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20'
              }`}>
                <p className={`text-sm font-semibold mb-1 ${
                  isLicence ? 'text-accent' : 'text-primary'
                }`}>Programmes :</p>
                <p className="text-sm text-foreground">{category.programs.length} formations disponibles</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
            <Button 
              variant="outline" 
              className={`w-full mt-6 hover-scale ${
                isLicence 
                  ? 'group-hover:bg-accent group-hover:text-accent-foreground'
                  : 'group-hover:bg-primary group-hover:text-primary-foreground'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleCategoryClick(category.name, type);
              }}
            >
              Voir les programmes
            </Button>
          </CardContent>
        </Card>
      );
    });
  };

  // Function to render program cards for a selected category
  const renderProgramCards = (category: any, type: 'licence' | 'master') => {
    const isLicence = type === 'licence';
    return (
      <div className="space-y-6">
        {/* Back button and category header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            onClick={handleBackToCategories}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux catégories
          </Button>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.programs.map((program: any, index: number) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 border-2 hover-lift animate-slide-up cursor-pointer ${
                isLicence 
                  ? 'hover:border-accent/30' 
                  : 'hover:border-primary/30 bg-gradient-to-br from-background to-muted/20'
              }`}
              style={{animationDelay: `${index * 0.1}s`}} 
              onClick={() => {
                console.log('Program clicked:', type, program.slug);
                handleProgramClick(type, program.slug);
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl ${
                    isLicence ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Award className={`h-7 w-7 ${
                      isLicence ? 'text-accent' : 'text-primary'
                    }`} />
                  </div>
                  <Badge className={`text-xs ${
                    isLicence 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {program.duration}
                  </Badge>
                </div>
                <CardTitle className={`text-lg group-hover transition-colors leading-tight ${
                  isLicence ? 'group-hover:text-accent' : 'group-hover:text-primary'
                }`}>
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {program.description}
                </p>
                <Button 
                  className={`w-full hover-scale ${
                    isLicence 
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('En savoir plus clicked:', type, program.slug);
                    handleProgramClick(type, program.slug);
                  }}
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="programmes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {!selectedCategory ? (
          <>
            {/* Licences Pro Section */}
            <div className="mb-16">
              <div className="text-center mb-12 animate-fade-in">
                <Badge variant="secondary" className="mb-4">Formations d'Excellence</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-4">LICENCE PRO</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Des domaines passionnants qui ouvrent la voie vers un avenir brillant. Chaque chemin mène vers l'excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCategoryCards(licencesCategories, 'licence')}
              </div>
            </div>

            {/* Masters Pro Section */}
            <div>
              <div className="text-center mb-12 animate-fade-in">
                <Badge variant="secondary" className="mb-4">Leadership & Innovation</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-4">MASTER PRO</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Développez votre leadership et devenez un expert reconnu dans votre domaine
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCategoryCards(mastersCategories, 'master')}
              </div>
            </div>
          </>
        ) : (
          // Show programs for selected category
          selectedProgramType === 'licence' ? 
            renderProgramCards(licencesCategories.find(cat => cat.name === selectedCategory)!, 'licence') :
            renderProgramCards(mastersCategories.find(cat => cat.name === selectedCategory)!, 'master')
        )}
      </div>
    </section>
  );
};

export default Programs;