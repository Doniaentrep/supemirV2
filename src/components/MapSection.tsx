import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Navigation, Clock, MessageCircle } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const MapSection = () => {
  const [mapRef, isMapVisible] = useScrollAnimation({ threshold: 0.2 });

  const handleGetDirections = () => {
    const address = "Km 9 au sud de la route n°1 de Casablanca à Rabat, Ain Sebaa, Casablanca, Maroc";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const handleOpenInMaps = () => {
    window.open('https://maps.app.goo.gl/bkifSmSXEw1aLgMt7', '_blank');
  };

  const handleWhatsApp = () => {
    // Use validated Moroccan mobile in E.164 without leading + for wa.me
    const phoneNumber = "212661497647";
    const message = "Bonjour, je souhaite obtenir des informations sur SUPEMIR Marrakech Academy.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section ref={mapRef} id="location" className="py-12 pt-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isMapVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
        }`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            📍 Notre Localisation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Venez nous rendre visite dans notre campus moderne situé à Casablanca
          </p>
        </div>

        {/* Map Card */}
        <div className={`max-w-4xl mx-auto mb-8 transition-all duration-1000 ${
          isMapVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[30px]'
        }`} style={{animationDelay: '0.2s'}}>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-64 lg:h-80 min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.7384412457197!2d-7.614086941709438!3d33.57311097335495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd7c2f9e15db%3A0x40c0a9cf0e77b00!2sSUPeMIR%20Marrakech%20Academy!5e0!3m2!1sen!2sma!4v1727453584425!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SUPEMIR Marrakech Academy Location"
                  className="rounded-lg"
                />
                
                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-supemir-magenta rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">SUPEMIR Academy</span>
                  </div>
                </div>

                {/* Quick Action Buttons on Map */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <Button 
                    onClick={handleGetDirections}
                    size="sm"
                    className="bg-gradient-to-r from-supemir-magenta to-supemir-green text-white font-semibold hover-scale shadow-lg"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Itinéraire
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={handleOpenInMaps}
                    size="sm"
                    className="bg-white/90 backdrop-blur-sm border-2 border-supemir-magenta text-supemir-magenta hover:bg-supemir-magenta hover:text-white shadow-lg"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information Card */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${
          isMapVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[30px]'
        }`} style={{animationDelay: '0.4s'}}>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center">
                <MapPin className="h-6 w-6 text-supemir-magenta mr-3" />
                Contactez-nous
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {/* Address */}
                <div className="space-y-2">
                  <MapPin className="h-8 w-8 text-supemir-magenta mx-auto" />
                  <h4 className="font-semibold text-foreground">Adresse</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Km 9 au sud de la route n°1<br />
                    Casablanca à Rabat<br />
                    Ain Sebaa – Casablanca
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Phone className="h-8 w-8 text-supemir-magenta mx-auto" />
                  <h4 className="font-semibold text-foreground">Téléphone</h4>
                  <p className="text-sm text-muted-foreground">+212 661497647</p>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('tel:+212661497647', '_self')}
                    className="border-2 border-supemir-magenta text-supemir-magenta hover:bg-supemir-magenta hover:text-white"
                  >
                    Appeler
                  </Button>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Mail className="h-8 w-8 text-supemir-magenta mx-auto" />
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">marrakech-academy@supemir.com</p>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('mailto:marrakech-academy@supemir.com', '_blank')}
                    className="border-2 border-supemir-magenta text-supemir-magenta hover:bg-supemir-magenta hover:text-white"
                  >
                    Écrire
                  </Button>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6 text-center">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover-scale shadow-lg"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contacter via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
