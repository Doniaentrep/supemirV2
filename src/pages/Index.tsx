import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import FormationRapide from "@/components/FormationRapide";
import CampusLife from "@/components/CampusLife";
import Entreprises from "@/components/Entreprises";
import Stats from "@/components/Stats";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Building, GraduationCap, Trophy, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useFormation } from "@/contexts/FormationContext";

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState(0);
  const { setSelectedFormation, setSelectedProgramType, setSelectedProgram } = useFormation();

  // Clear all selections when on the home page
  useEffect(() => {
    setSelectedFormation(null);
    setSelectedProgramType(null);
    setSelectedProgram(null);
  }, [setSelectedFormation, setSelectedProgramType, setSelectedProgram]);

  const portfolioCards = [
    {
      id: 1,
      type: "actualite",
      title: "Nouvelle Formation en IA",
      description: "Découvrez notre nouveau programme en Intelligence Artificielle et Machine Learning",
      image: "/placeholder.svg",
      date: "15 Janvier 2025",
      category: "Formation",
      badge: "Nouveau"
    },
    {
      id: 2,
      type: "offre-emploi",
      title: "Développeur Full Stack",
      description: "Rejoignez notre équipe pédagogique pour enseigner les technologies web modernes",
      image: "/placeholder.svg",
      date: "10 Janvier 2025",
      category: "Emploi",
      badge: "Urgent"
    },
    {
      id: 3,
      type: "publicite",
      title: "Inscription Ouverte 2025",
      description: "Les inscriptions pour l'année académique 2025-2026 sont maintenant ouvertes",
      image: "/placeholder.svg",
      date: "5 Janvier 2025",
      category: "Admission",
      badge: "Important"
    },
    {
      id: 4,
      type: "actualite",
      title: "Partenariat avec Google",
      description: "SUPEMIR signe un partenariat stratégique avec Google Cloud pour nos formations",
      image: "/placeholder.svg",
      date: "1 Janvier 2025",
      category: "Partenariat",
      badge: "Exclusif"
    },
    {
      id: 5,
      type: "offre-emploi",
      title: "Formateur Cybersécurité",
      description: "Nous recherchons un expert en cybersécurité pour nos programmes spécialisés",
      image: "/placeholder.svg",
      date: "28 Décembre 2024",
      category: "Emploi",
      badge: "Recrutement"
    },
    {
      id: 6,
      type: "publicite",
      title: "Bourse d'Excellence 2025",
      description: "Candidaturez pour notre programme de bourses d'excellence destiné aux meilleurs étudiants",
      image: "/placeholder.svg",
      date: "25 Décembre 2024",
      category: "Bourse",
      badge: "Opportunité"
    }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "actualite": return "bg-accent text-accent-foreground";
      case "offre-emploi": return "bg-supemir-green text-white";
      case "publicite": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "actualite": return "📰";
      case "offre-emploi": return "💼";
      case "publicite": return "📢";
      default: return "📄";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Portfolio & Actualités</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ACTUALITÉS & OPPORTUNITÉS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos dernières actualités, offres d'emploi, et opportunités d'apprentissage
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeCard === 0 ? "default" : "outline"}
            onClick={() => setActiveCard(0)}
            className={`transition-all duration-300 ${
              activeCard === 0 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-primary/10"
            }`}
          >
            📰 Actualités
          </Button>
          <Button
            variant={activeCard === 1 ? "default" : "outline"}
            onClick={() => setActiveCard(1)}
            className={`transition-all duration-300 ${
              activeCard === 1 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-primary/10"
            }`}
          >
            💼 Emplois
          </Button>
          <Button
            variant={activeCard === 2 ? "default" : "outline"}
            onClick={() => setActiveCard(2)}
            className={`transition-all duration-300 ${
              activeCard === 2 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-primary/10"
            }`}
          >
            📢 Publicités
          </Button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioCards
            .filter(card => {
              if (activeCard === 0) return card.type === "actualite";
              if (activeCard === 1) return card.type === "offre-emploi";
              if (activeCard === 2) return card.type === "publicite";
              return true;
            })
            .map((card, index) => (
            <Card key={card.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{getTypeIcon(card.type)}</span>
                    <Badge className={getBadgeColor(card.type)}>
                      {card.badge}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{card.date}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors leading-tight">
                  {card.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit text-xs">
                  {card.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
                
                {/* Image Placeholder */}
                <div className="aspect-video rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 p-4 flex items-center justify-center border-2 border-dashed border-accent/30 mb-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">{getTypeIcon(card.type)}</div>
                    <p className="text-muted-foreground text-xs">
                      Image {card.type}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Ajoutez votre image ici
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 hover-scale"
                  size="sm"
                >
                  Voir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">12+</div>
            <div className="text-sm font-semibold text-foreground mb-1">Actualités</div>
            <div className="text-xs text-muted-foreground">Ce mois</div>
          </div>
          
          <div className="text-center p-6 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300" style={{animationDelay: '0.1s'}}>
            <div className="text-3xl font-bold text-supemir-green mb-2">8+</div>
            <div className="text-sm font-semibold text-foreground mb-1">Offres d'emploi</div>
            <div className="text-xs text-muted-foreground">Actives</div>
          </div>
          
          <div className="text-center p-6 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm font-semibold text-foreground mb-1">Publicités</div>
            <div className="text-xs text-muted-foreground">En cours</div>
          </div>
          
          <div className="text-center p-6 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300" style={{animationDelay: '0.3s'}}>
            <div className="text-3xl font-bold text-supemir-magenta mb-2">25+</div>
            <div className="text-sm font-semibold text-foreground mb-1">Total</div>
            <div className="text-xs text-muted-foreground">Publications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="relative scroll-snap-container">
      <Header />
      <section id="hero" className="scroll-snap-section">
        <Hero />
      </section>
      <section id="programs" className="scroll-snap-section">
        <Programs />
      </section>
      <section id="formation-rapide" className="scroll-snap-section">
        <FormationRapide />
      </section>
      <section id="campus-life" className="scroll-snap-section">
        <CampusLife />
      </section>
      <section id="entreprises" className="scroll-snap-section">
        <Entreprises />
      </section>
      <section id="stats" className="scroll-snap-section">
        <Stats />
      </section>
      <section id="map" className="scroll-snap-section">
        <MapSection />
      </section>
      <section id="footer" className="scroll-snap-section">
        <Footer />
      </section>
      <FloatingActionButton />
    </div>
  );
};

export default Index;
