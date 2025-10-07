import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import { useFormation } from "@/contexts/FormationContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const { selectedFormation, selectedProgramType, selectedProgram } = useFormation();

  // Testimonials for slideshow
  const testimonials = [
    "Excellence Académique à Marrakech",
    "95% de Taux d'Emploi Garanti",
    "Formations Professionnelles de Qualité",
    "Innovation et Créativité",
    "Votre Avenir Commence Ici"
  ];

  // Helper to ensure we are on home then scroll to a section
  const navigateAndScrollTo = (sectionId: string) => {
    const attemptScroll = () => scrollToSection(sectionId);

    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait until the section exists in the DOM, then scroll
      const startTime = Date.now();
      const maxWaitMs = 2500;
      const pollInterval = 60;
      const poll = setInterval(() => {
        const exists = document.getElementById(sectionId);
        const timedOut = Date.now() - startTime > maxWaitMs;
        if (exists || timedOut) {
          clearInterval(poll);
          attemptScroll();
        }
      }, pollInterval);
    } else {
      attemptScroll();
    }
  };

  // Dropdown menu data
  const dropdownMenus = {
    programmes: {
      title: "Programmes",
      items: [
        { label: "LICENCE", action: () => navigate('/licence') },
        { label: "MASTER", action: () => navigate('/master') },
        { label: "MBA", action: () => navigate('/mba') },
        { label: "DIPLÔME", action: () => navigateAndScrollTo('programs') },
        { label: "CERTIFICAT", action: () => navigateAndScrollTo('formation-rapide') },
        { label: "ENTREPRISE", action: () => navigate('/entreprise') }
      ]
    }
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownItemClick = (action: () => void) => {
    action();
    setActiveDropdown(null);
  };

  const scrollToSection = (sectionId: string) => {
    const container = document.querySelector('.scroll-snap-container') as HTMLElement | null;

    if (sectionId === 'hero') {
      // Scroll container to top
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // For other sections, find the element
      const element = document.getElementById(sectionId);
      if (element) {
        // Use scrollIntoView so it scrolls the nearest scrollable ancestor (our snap container)
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (container) {
        // Fallback: scroll container near the expected position
        const headerHeight = 120;
        const targetTop = 0;
        container.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleInscription = () => {
    setIsRegistrationOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Listen for custom event to open registration form
  useEffect(() => {
    const handleOpenRegistration = () => {
      setIsRegistrationOpen(true);
    };

    window.addEventListener('openRegistration', handleOpenRegistration);
    
    return () => {
      window.removeEventListener('openRegistration', handleOpenRegistration);
    };
  }, []);

  // Rotate testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-lg sticky top-0 z-[100] animate-fade-in">
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-white">
          <div className="flex items-center gap-2 sm:gap-4 text-white">
            <div className="flex items-center text-white hover:text-accent transition-colors">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="text-white text-xs sm:text-sm">+212 661497647</span>
            </div>
            <div className="hidden sm:flex items-center text-white hover:text-accent transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-white">marrakech-academy@supemir.com</span>
            </div>
          </div>
          <div className="text-xs min-w-[150px] sm:min-w-[200px] text-right text-white">
            <div 
              key={currentTestimonialIndex}
              className="animate-fade-in text-white"
              style={{
                animation: 'fadeIn 0.5s ease-in-out'
              }}
            >
              {testimonials[currentTestimonialIndex]}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-1 sm:py-0.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/22bfe7cb-9525-46c0-8482-70745ca3bbfa.png" 
              alt="Supemir Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => navigateAndScrollTo('hero')} className="header-text hover:text-supemir-magenta transition-colors duration-300">Accueil</button>
            
            {/* Programmes Dropdown */}
            <div className="relative dropdown-container">
              <button 
                onClick={() => handleDropdownToggle('programmes')}
                className="flex items-center header-text hover:text-supemir-magenta transition-colors duration-300"
              >
                {dropdownMenus.programmes.title}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'programmes' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'programmes' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-fade-in">
                  {dropdownMenus.programmes.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleDropdownItemClick(item.action)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-supemir-magenta transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('stats')} className="header-text hover:text-supemir-magenta transition-colors duration-300">À Propos</button>
            <button onClick={() => scrollToSection('footer')} className="header-text hover:text-supemir-magenta transition-colors duration-300">Contact</button>
            <Button 
              onClick={handleInscription}
              className="bg-gradient-to-r from-supemir-magenta to-supemir-green text-white font-semibold animate-glow hover-scale shadow-lg btn-text-clear"
            >
              🚀 Inscription
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:text-supemir-magenta transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            <button onClick={() => navigateAndScrollTo('hero')} className="block text-foreground hover:text-supemir-magenta transition-colors duration-300 text-left text-sm sm:text-base">Accueil</button>
            
            {/* Mobile Programmes Section */}
            <div className="space-y-2">
              <div className="text-foreground font-medium text-left text-sm sm:text-base">Programmes</div>
              {dropdownMenus.programmes.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="block text-foreground/80 hover:text-supemir-magenta transition-colors duration-300 text-left ml-4 text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button onClick={() => scrollToSection('stats')} className="block text-foreground hover:text-supemir-magenta transition-colors duration-300 text-left text-sm sm:text-base">À Propos</button>
            <button onClick={() => scrollToSection('footer')} className="block text-foreground hover:text-supemir-magenta transition-colors duration-300 text-left text-sm sm:text-base">Contact</button>
            <Button 
              onClick={handleInscription}
              className="w-full bg-gradient-to-r from-supemir-magenta to-supemir-green text-white font-semibold animate-glow mt-4 text-sm sm:text-base"
            >
              🚀 Inscription
            </Button>
          </nav>
        )}
      </div>

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)}
        preselectedFormation={selectedFormation}
        preselectedProgramType={selectedProgramType}
        preselectedProgram={selectedProgram}
      />
    </header>
  );
};

export default Header;