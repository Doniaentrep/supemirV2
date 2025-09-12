import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/22bfe7cb-9525-46c0-8482-70745ca3bbfa.png" 
                alt="Supemir Marrakech Academy" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                À SUPÉMIR, nous réinventons l'éducation en mariant créativité, innovation et excellence, pour que chaque étudiant devienne un acteur du changement et un bâtisseur de futur.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Formations</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Licences Professionnelles</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Masters Professionnels</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Informatique & Développement</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cybersécurité & Cloud</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Management & Qualité</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Finance & Entrepreneuriat</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Stages et Emplois</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partenaires</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Actualités</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p>SUPEMIR MARRAKECH ACADEMY</p>
                  <p className="text-primary-foreground/80">Km 9 au sud de la route n°1 de Casablanca à Rabat, Ain Sebaa – Casablanca – Maroc</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span>+212 522 249 175</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span>infos@supemir.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Votre email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  variant="secondary" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => window.open('mailto:infos@supemir.com?subject=Inscription Newsletter', '_blank')}
                >
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-primary-foreground/70 mb-4 md:mb-0 text-center md:text-left">
              <p>© 2025 SUPEMIR. Tous droits réservés.</p>
              <p className="mt-2 italic text-xs">Nous ne transmettons pas seulement le savoir, nous façonnons l'avenir.</p>
              <p className="text-xs mt-1 text-supemir-magenta font-semibold">SUPEMIR = SUPER Motivation, Innovation & Révolution</p>
              <p className="text-xs italic text-supemir-blue">Là où la motivation nourrit l'innovation et inspire la révolution</p>
            </div>
            <div className="flex space-x-6 text-primary-foreground/70">
              <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-accent transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-accent transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;