import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, MessageCircle, Phone, Mail, Sparkles, MessageSquare } from "lucide-react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.scroll-snap-container') as HTMLElement | null;
    const programsSection = document.getElementById('programs');

    const computeVisibility = () => {
      if (container && programsSection) {
        const containerTop = container.getBoundingClientRect().top;
        const programsTop = programsSection.getBoundingClientRect().top;
        const shouldShow = (programsTop - containerTop) <= 10; // when programs reaches top of container
        setIsVisible(shouldShow);
        if (!shouldShow) setShowContactOptions(false);
        return;
      }

      // Fallback to window scroll
      const heroSection = document.getElementById('hero');
      const programsTopWindow = programsSection?.getBoundingClientRect().top ?? Infinity;
      const heroBottom = heroSection ? (heroSection.offsetTop + heroSection.offsetHeight) : 300;
      const shouldShowFallback = window.pageYOffset > heroBottom || programsTopWindow <= 60;
      setIsVisible(shouldShowFallback);
      if (!shouldShowFallback) {
        setShowContactOptions(false);
      }
    };

    // Initial check
    computeVisibility();

    const target = container ?? window;
    target.addEventListener('scroll', computeVisibility);
    return () => target.removeEventListener('scroll', computeVisibility);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector('.scroll-snap-container') as HTMLElement | null;
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setShowContactOptions(!showContactOptions);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "212661497647"; // Remove the + for WhatsApp
    const message = "Bonjour, je souhaite obtenir des informations sur SUPEMIR Marrakech Academy.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4">
      {/* Contact Options */}
      {isVisible && showContactOptions && (
        <div className="space-y-3">
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover-scale"
            onClick={() => window.open('tel:+212661497647', '_self')}
          >
            <Phone className="h-5 w-5" />
          </Button>
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover-scale"
            style={{animationDelay: '0.1s'}}
            onClick={() => window.open('mailto:marrakech-academy@supemir.com', '_self')}
          >
            <Mail className="h-5 w-5" />
          </Button>
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover-scale"
            style={{animationDelay: '0.2s'}}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover-scale"
            style={{animationDelay: '0.3s'}}
            onClick={handleWhatsApp}
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Floating Buttons - Only visible after hero section */}
      {isVisible && (
        <div className="flex flex-col items-end space-y-3">
          {/* Pink Star Button */}
          <Button
            size="sm"
            className="w-14 h-14 rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-xl hover-scale"
            onClick={handleContactClick}
            style={{
              backgroundColor: '#ec4899',
              boxShadow: '0 8px 25px rgba(236, 72, 153, 0.3)'
            }}
          >
            <Sparkles className="h-6 w-6" />
          </Button>
          
          {/* Blue Arrow Button */}
          <Button
            size="sm"
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover-scale"
            onClick={scrollToTop}
            style={{
              backgroundColor: '#2563eb',
              boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)'
            }}
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
