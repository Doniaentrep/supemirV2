import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Award, Building } from "lucide-react";

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Excellence & Performance</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Résultats Parlent</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            15 années d'expérience au service de l'excellence académique et professionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Étudiants Formés</div>
              <div className="text-sm text-muted-foreground">Diplômés et certifiés</div>
            </div>

            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Taux d'Emploi</div>
              <div className="text-sm text-muted-foreground">Dans les 6 mois après diplôme</div>
            </div>

            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold text-supemir-blue mb-2">15+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Années d'Expérience</div>
              <div className="text-sm text-muted-foreground">Au service de l'éducation</div>
            </div>

            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl font-bold text-supemir-red mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Partenaires</div>
              <div className="text-sm text-muted-foreground">Entreprises et universités</div>
            </div>
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Partenariats Académiques</h3>
            </div>
            <p className="text-muted-foreground">
              CNAM, Universités internationales, et plus de 50 entreprises partenaires
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;