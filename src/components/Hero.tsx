import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";

const Hero = () => {

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-white relative z-10 text-center">
            <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white">Excellence Académique à Marrakech</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 flowy-text text-white" style={{ animationDelay: '0.2s' }}>
              🚀 Démarrez votre 
              <span className="text-accent"> carrière de rêve</span> avec SMA !
            </h1>
            
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-accent mb-2 sm:mb-3 flowy-text break-words" style={{ animationDelay: '0.4s' }}>SUPEMIR = SUPER Motivation, Innovation & Réussite</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium italic flowy-text" style={{ animationDelay: '0.6s' }}>Là où la motivation nourrit l'innovation et inspire la réussite</p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              <p className="flex items-center text-white">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Des formations qui éveillent votre potentiel
              </p>
              <p className="flex items-center text-white">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Une expérience d'apprentissage qui réussit
              </p>
              <p className="flex items-center text-white">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full mr-3 flex-shrink-0"></span>
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
                  padding: '12px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)',
                  transition: 'all 0.3s ease',
                  zIndex: 1000,
                  position: 'relative',
                  minHeight: '48px',
                  justifyContent: 'center'
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
                  padding: '12px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)',
                  transition: 'all 0.3s ease',
                  zIndex: 1000,
                  position: 'relative',
                  minHeight: '48px',
                  justifyContent: 'center'
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
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center">
              <div className="flex items-center">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-accent mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">300+</p>
                  <p className="text-xs sm:text-sm text-white opacity-90">Étudiants formés</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-accent mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">95%</p>
                  <p className="text-xs sm:text-sm text-white opacity-90">Taux d'emploi</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-accent mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">15+</p>
                  <p className="text-xs sm:text-sm text-white opacity-90">Années d'expérience</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;