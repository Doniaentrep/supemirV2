import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, Calendar, BookOpen, Trophy, Globe, Heart, GraduationCap, Briefcase, Users2, Award, Clock, Sparkles, Target, Lightbulb, Zap, Star, Shield, Rocket, Building2, UserCheck, Globe2, BadgeCheck, Timer, PartyPopper } from "lucide-react";
import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import StudentTestimonials from "./StudentTestimonials";

const CampusLife = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  
  const [eventsRef, isEventsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [activitiesRef, isActivitiesVisible] = useScrollAnimation({ threshold: 0.2 });

  const getIconGradient = (id: number) => {
    switch (id) {
      case 1: return "from-orange-400 via-red-500 to-pink-500";
      case 2: return "from-blue-400 via-cyan-500 to-teal-500";
      case 3: return "from-green-400 via-emerald-500 to-teal-500";
      case 4: return "from-purple-400 via-indigo-500 to-blue-500";
      case 5: return "from-emerald-400 via-green-500 to-lime-500";
      case 6: return "from-pink-400 via-violet-500 to-purple-500";
      default: return "from-gray-400 to-gray-500";
    }
  };


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

  const campusActivities = [
    {
      id: 1,
      title: "🚀 SUP'Factory - Incubateur",
      description: "Un incubateur de startups directement sur le campus pour accompagner les projets entrepreneuriaux",
      icon: Building2,
      color: "text-orange-500"
    },
    {
      id: 2,
      title: "💼 Centre de Carrière",
      description: "Accompagnement personnalisé pour l'insertion professionnelle et le développement des soft skills",
      icon: UserCheck,
      color: "text-cyan-500"
    },
    {
      id: 3,
      title: "🌍 Intégration Étudiants Internationaux",
      description: "Accueil et assistance personnalisée pour réussir son intégration au Maroc",
      icon: Globe2,
      color: "text-green-500"
    },
    {
      id: 4,
      title: "🛡️ Certifications Professionnelles",
      description: "Validation des compétences avec des certificats reconnus mondialement",
      icon: BadgeCheck,
      color: "text-indigo-500"
    },
    {
      id: 5,
      title: "⏰ Formation en Alternance",
      description: "Formation en alternance dès la 3ème année pour une étape décisive vers l'emploi",
      icon: Timer,
      color: "text-emerald-500"
    },
    {
      id: 6,
      title: "✨ Vie Associative",
      description: "Clubs étudiants, associations et activités extra-scolaires pour un épanouissement complet",
      icon: PartyPopper,
      color: "text-violet-500"
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
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Vie au Campus</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Découvrez la Vie Étudiante à SUPEMIR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une expérience enrichissante qui va bien au-delà des cours. Découvrez les témoignages de nos étudiants et la vie dynamique de notre campus.
          </p>
        </div>

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

        {/* Campus Activities */}
        <div ref={activitiesRef} className="mb-16">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isActivitiesVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
          }`}>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Vie de Campus
            </h3>
            <p className="text-lg text-muted-foreground">
              Des activités enrichissantes qui complètent votre formation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campusActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <Card key={activity.id} className="group hover-lift transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm hover:shadow-2xl hover:scale-105 hover:border-accent/20 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${getIconGradient(activity.id)} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:shadow-3xl group-hover:rotate-3`}>
                        <IconComponent className={`h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`} />
                      </div>
                      <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {activity.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {activity.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
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
