import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNewsletterSubscribe = () => {
    window.open('mailto:marrakech-academy@supemir.com?subject=Inscription Newsletter', '_blank');
  };

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/22bfe7cb-9525-46c0-8482-70745ca3bbfa.png" 
                alt="Supemir Marrakech Academy" 
                className="h-10 w-auto mb-3 brightness-0 invert"
              />
              <p className="text-white text-sm leading-relaxed">
                À SUPÉMIR, nous réinventons l'éducation en mariant créativité, innovation et excellence, pour que chaque étudiant devienne un acteur du changement et un bâtisseur de futur.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-5 w-5 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Twitter className="h-5 w-5 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Linkedin className="h-5 w-5 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 footer-text">Nos Formations</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/licence')} className="text-white hover:text-accent transition-colors text-left">Licences Professionnelles</button></li>
              <li><button onClick={() => navigate('/master')} className="text-white hover:text-accent transition-colors text-left">Masters Professionnels</button></li>
              <li><button onClick={() => navigate('/mba')} className="text-white hover:text-accent transition-colors text-left">MBA</button></li>
              <li><button onClick={() => navigate('/certificat')} className="text-white hover:text-accent transition-colors text-left">Certificats</button></li>
              <li><button onClick={() => navigate('/bootcamp-marketing-digital')} className="text-white hover:text-accent transition-colors text-left">Bootcamp Marketing Digital</button></li>
              <li><button onClick={() => navigate('/bootcamp-3d')} className="text-white hover:text-accent transition-colors text-left">Bootcamp 3D</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 footer-text">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">À propos</button></li>
              <li><button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">Admissions</button></li>
              <li><button onClick={() => navigate('/entreprise')} className="text-white hover:text-accent transition-colors text-left">Stages et Emplois</button></li>
              <li><button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">Partenaires</button></li>
              <li><button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">Actualités</button></li>
              <li><button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 footer-text">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">SUPEMIR MARRAKECH ACADEMY</p>
                  <a 
                    href="https://maps.app.goo.gl/bkifSmSXEw1aLgMt7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors underline"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white">+212 661497647</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white">marrakech-academy@supemir.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Votre email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  variant="secondary" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={handleNewsletterSubscribe}
                >
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-white">
              <div className="text-white">
                &copy; 2025 SUPEMIR Marrakech Academy. Tous droits réservés.
              </div>
              <div className="flex space-x-6">
                <button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">Politique de confidentialité</button>
                <button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">Conditions d'utilisation</button>
                <button onClick={() => navigate('/')} className="text-white hover:text-accent transition-colors text-left">Mentions légales</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;