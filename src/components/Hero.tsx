import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const bookPages = [
    {
      title: "Notre Mission",
      content: "Nous nous engageons à offrir un environnement d'apprentissage dynamique, où chaque apprenant est au cœur de nos préoccupations. Notre mission est de cultiver la curiosité, la créativité et la confiance chez nos étudiants.",
      image: "🎯"
    },
    {
      title: "Notre Philosophie",
      content: "SUPEMIR = SUPER Motivation, Innovation & Réussit. Nous croyons que l'éducation doit éveiller le potentiel, nourrir l'innovation et inspirer la réussit dans chaque domaine.",
      image: "💭"
    },
    {
      title: "Notre Historique",
      content: "Depuis 2004, SUPEMIR est une école supérieure privée marocaine autorisée par le Ministère de l'Enseignement Supérieur. Dirigée par un groupe d'entrepreneurs visionnaires, SUPEMIR propose des cursus diplômants allant de bac+3 à bac+5.",
      image: "📜"
    },
    {
      title: "Nos Valeurs",
      content: "HUMANISME : Nous plaçons l'apprenant au cœur de nos préoccupations. ENTREPRENEURIAT : Nous encourageons l'innovation responsable. PROFESSIONNALISME : Nous visons l'excellence éducative et la collaboration.",
      image: "💎"
    },
    {
      title: "Notre Vision",
      content: "Nous aspirons à être un modèle d'excellence éducative, en combinant les meilleures pratiques avec une approche innovante. Notre vision est de former des citoyens du monde capables de penser de manière critique et de collaborer.",
      image: "🚀"
    },
    {
      title: "Nos Programmes",
      content: "Des formations en Informatique, Management, Cybersécurité, Finance, Marketing, Électrotechnique, Domaine de Santé et 3D, conçues pour répondre aux besoins du marché.",
      image: "📚"
    },
    {
      title: "Notre Approche",
      content: "Nous ne transmettons pas seulement le savoir, nous façonnons l'avenir. Notre approche pédagogique combine théorie et pratique pour une formation complète.",
      image: "🎓"
    },
    {
      title: "Nos Partenaires",
      content: "Plus de 50 partenaires entreprises et universités, incluant CNAM et des partenariats internationaux pour garantir l'excellence de nos formations.",
      image: "🤝"
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % bookPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + bookPages.length) % bookPages.length);
  };

  const scrollToPrograms = () => {
    console.log('Scroll to programs clicked');
    const element = document.getElementById('programmes');
    if (element) {
      console.log('Found programmes element, scrolling...');
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Programmes element not found');
    }
  };

  const scrollToFormationCertifiee = () => {
    console.log('Scroll to Certificat exécutif clicked');
    // Try multiple approaches to find the section
    let element = document.getElementById('formation-certifiee');
    
    if (!element) {
      console.log('formation-certifiee not found, trying alternatives...');
      // Try finding by class or other selectors
      element = document.querySelector('[id*="formation"]');
    }
    
    if (!element) {
      // Try finding by text content
      const sections = document.querySelectorAll('section');
      for (let section of sections) {
        if (section.textContent?.includes('Certificat exécutif') || section.textContent?.includes('Certificat exécutif')) {
          element = section;
          break;
        }
      }
    }
    
    if (element) {
      console.log('Found formation element, scrolling...');
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Formation element not found, falling back to programmes');
      // Final fallback: scroll to programs section
      const programsElement = document.getElementById('programmes');
      if (programsElement) {
        programsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="relative flex items-center overflow-hidden py-8 pt-16">
      {/* Background Image with blur effect */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px) brightness(0.7)'
        }}
      ></div>
      
      {/* Background Overlay - subtle and flowy */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-accent rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-accent/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-accent rounded-lg rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-white relative z-10">
            <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Award className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-white">Excellence Académique à Marrakech</span>
            </div>
            
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 flowy-text text-white" style={{ animationDelay: '0.2s' }}>
              🚀 Démarrez votre 
              <span className="text-accent"> carrière de rêve</span> avec SMA !
            </h1>
            
            <div className="mb-4">
              <p className="text-lg font-medium text-accent mb-2 flowy-text" style={{ animationDelay: '0.4s' }}>SUPEMIR = SUPER Motivation, Innovation & Réussit</p>
              <p className="text-base text-white font-medium italic flowy-text" style={{ animationDelay: '0.6s' }}>Là où la motivation nourrit l'innovation et inspire la réussit</p>
            </div>
            
            <div className="space-y-2 mb-6 text-base">
              <p className="flex items-center text-white">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Des formations qui éveillent votre potentiel
              </p>
              <p className="flex items-center text-white">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Une expérience d'apprentissage qui réussit
              </p>
              <p className="flex items-center text-white">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Votre futur commence ici
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div 
                onClick={() => {
                  const element = document.getElementById('programmes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    console.log('Programmes section not found');
                  }
                }}
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)',
                  transition: 'all 0.3s ease',
                  zIndex: 1000,
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.4)';
                }}
              >
                Explorez nos diplômes
                <ArrowRight style={{width: '20px', height: '20px'}} />
              </div>
              
              <div 
                onClick={() => {
                  const element = document.getElementById('formation-certifiee');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    console.log('Certificat exécutif section not found');
                  }
                }}
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)',
                  transition: 'all 0.3s ease',
                  zIndex: 1000,
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 197, 94, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.4)';
                }}
              >
                ⚡ Certificat exécutif
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-accent mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-white opacity-90">Étudiants formés</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-accent mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">95%</p>
                  <p className="text-sm text-white opacity-90">Taux d'emploi</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-8 w-8 text-accent mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">15+</p>
                  <p className="text-sm text-white opacity-90">Années d'expérience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Book */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            {!isBookOpen ? (
              /* Book Cover */
              <div 
                className="relative z-10 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover-lift cursor-pointer transition-all duration-500 hover:scale-105"
                onClick={() => setIsBookOpen(true)}
              >
                <div className="aspect-square rounded-xl bg-gradient-to-br from-accent to-accent/80 p-8 flex items-center justify-center animate-float shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent-foreground mb-4">SUPEMIR</div>
                  <div className="mt-6 text-accent-foreground/90">Nous ne transmettons pas seulement le savoir,</div>
                  <div className="text-lg text-accent-foreground/90 font-semibold">nous façonnons l'avenir.</div>
                    <div className="mt-4 text-accent-foreground/70 text-sm">📖 Cliquez pour ouvrir le livre</div>
                  </div>
                </div>
              </div>
            ) : (
              /* Open Book */
              <div className="relative z-10 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-accent to-accent/80 p-8 flex flex-col justify-between shadow-2xl">
                  {/* Close Button */}
                  <div className="flex justify-end mb-4">
                    <button 
                      onClick={() => setIsBookOpen(false)}
                      className="p-2 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors"
                    >
                      <X className="h-4 w-4 text-accent-foreground" />
                    </button>
                  </div>

                  {/* Book Content */}
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="text-4xl mb-4">{bookPages[currentPage].image}</div>
                    <h3 className="text-2xl font-bold text-accent-foreground mb-4">
                      {bookPages[currentPage].title}
                    </h3>
                    <p className="text-accent-foreground/90 text-sm leading-relaxed">
                      {bookPages[currentPage].content}
                    </p>
                  </div>

                  {/* Page Navigation */}
                  <div className="flex justify-between items-center mt-4">
                    <button 
                      onClick={prevPage}
                      className="p-2 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4 text-accent-foreground" />
                    </button>
                    
                    <div className="flex space-x-2">
                      {bookPages.map((_, index) => (
                        <div 
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentPage ? 'bg-accent-foreground' : 'bg-accent-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={nextPage}
                      className="p-2 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-accent-foreground" />
                    </button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;