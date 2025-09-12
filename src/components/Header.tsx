import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Found element, scrolling...');
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Element not found:', sectionId);
    }
    setIsMenuOpen(false);
  };

  const handleInscription = () => {
    console.log('Inscription button clicked');
    setIsRegistrationOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50 animate-fade-in">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center hover:text-accent transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span>+212 522 249 175</span>
            </div>
            <div className="flex items-center hover:text-accent transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <span>infos@supemir.com</span>
            </div>
          </div>
          <div className="text-xs animate-float">
            Excellence Académique à Marrakech
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-0.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover-scale">
            <img 
              src="/lovable-uploads/22bfe7cb-9525-46c0-8482-70745ca3bbfa.png" 
              alt="Supemir Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">Accueil</button>
            <button onClick={() => scrollToSection('programmes')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">Programmes</button>
            <button onClick={() => scrollToSection('formation-rapide')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">Formation Rapide</button>
            <button onClick={() => scrollToSection('stats')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">À Propos</button>
            <button onClick={() => scrollToSection('footer')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">Contact</button>
            <button onClick={() => scrollToSection('formation-rapide')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">ENTREPRISE</button>
            <button onClick={() => scrollToSection('programmes')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">DIPLÔME</button>
            <button onClick={() => scrollToSection('formation-rapide')} className="text-foreground hover:text-primary transition-all duration-300 hover-lift">CERTIFICAT</button>
            <Button 
              onClick={() => {
                console.log('Header inscription clicked');
                handleInscription();
              }}
              className="bg-gradient-to-r from-supemir-magenta to-supemir-green text-white font-semibold animate-glow hover-scale shadow-lg"
            >
              🚀 Inscription
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover-scale"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-4 animate-slide-up">
            <button onClick={() => scrollToSection('hero')} className="block text-foreground hover:text-primary transition-colors">Accueil</button>
            <button onClick={() => scrollToSection('programmes')} className="block text-foreground hover:text-primary transition-colors">Programmes</button>
            <button onClick={() => scrollToSection('formation-rapide')} className="block text-foreground hover:text-primary transition-colors">Formation Rapide</button>
            <button onClick={() => scrollToSection('stats')} className="block text-foreground hover:text-primary transition-colors">À Propos</button>
            <button onClick={() => scrollToSection('footer')} className="block text-foreground hover:text-primary transition-colors">Contact</button>
            <Button 
              onClick={() => {
                console.log('Mobile inscription clicked');
                handleInscription();
              }}
              className="w-full bg-gradient-to-r from-supemir-magenta to-supemir-green text-white font-semibold animate-glow mt-4"
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
      />
    </header>
  );
};

export default Header;