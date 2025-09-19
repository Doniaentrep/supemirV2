import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, Calendar, BookOpen, Trophy, Globe, Heart, GraduationCap, Briefcase, Users2, Award, Clock, Sparkles, Target, Lightbulb, Zap, Star, Shield, Rocket } from "lucide-react";
import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import StudentTestimonials from "./StudentTestimonials";

const CampusLife = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  
  const [eventsRef, isEventsVisible] = useScrollAnimation({ threshold: 0.2 });


  const campusEvents = [
    {
      id: 1,
      title: "YouDev - Concours de Coding",
      date: "Juin 2025",
      description: "Concours annuel de développement informatique qui connecte passion et innovation",
      image: "/placeholder.svg",
      type: "Compétition",
      participants: "150+ étudiants"
    },
    {
      id: 2,
      title: "Salon de l'Agroalimentaire",
      date: "Septembre 2025",
      description: "SUPEMIR dédie ses programmes aux professionnels de l'industrie agroalimentaire",
      image: "/placeholder.svg",
      type: "Salon Professionnel",
      participants: "200+ visiteurs"
    },
    {
      id: 3,
      title: "Journée Portes Ouvertes",
      date: "Mars 2025",
      description: "Découvrez nos formations et rencontrez nos équipes pédagogiques",
      image: "/placeholder.svg",
      type: "Événement",
      participants: "500+ visiteurs"
    },
    {
      id: 4,
      title: "Conférence Innovation & Entrepreneuriat",
      date: "Avril 2025",
      description: "Rencontres avec des entrepreneurs et experts du secteur",
      image: "/placeholder.svg",
      type: "Conférence",
      participants: "300+ participants"
    }
  ];



  const nextEvent = () => {
    setActiveEvent((prev) => (prev + 1) % campusEvents.length);
  };

  const prevEvent = () => {
    setActiveEvent((prev) => (prev - 1 + campusEvents.length) % campusEvents.length);
  };

  return (
    <section id="campus-life" className="py-20 pt-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        

        {/* Student Testimonials */}
        <StudentTestimonials />

        {/* Campus Events */}
        <div ref={eventsRef} className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isEventsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
          }`}>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Événements & Actualités
            </h3>
            <p className="text-lg text-muted-foreground">
              Découvrez les derniers événements et actualités de notre campus
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campusEvents.map((event, index) => (
                <Card key={event.id} className="group hover-lift transition-all duration-300 border-2 hover:border-primary/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {event.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{event.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {event.description}
                    </CardDescription>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {event.participants}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover-lift">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Votre Parcours d'Études ? Votre Projet Professionnel ?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            La réponse avec SUPEMIR !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
              <Play className="h-5 w-5 mr-2" />
              Regarder la Vidéo
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-scale">
              Découvrir nos Formations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
