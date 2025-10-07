import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Award, Building, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Stats = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, isStatsVisible] = useScrollAnimation({ threshold: 0.3 });
  const [partnershipRef, isPartnershipVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="stats" className="py-20 pt-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${
          isHeaderVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
        }`}>
          <Badge variant="secondary" className="mb-4">Excellence & Performance</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nos Résultats Parlent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            15 années d'expérience au service de l'excellence académique et professionnelle
          </p>
        </div>

        <div ref={statsRef} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
          isStatsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
        }`}>
            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Étudiants Formés</div>
              <div className="text-sm text-muted-foreground">Diplômés et certifiés</div>
            </div>

            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Taux d'Emploi</div>
              <div className="text-sm text-muted-foreground">Dans les 6 mois après diplôme</div>
            </div>

            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <Award className="h-8 w-8 text-supemir-blue mx-auto mb-3" />
              <div className="text-5xl font-bold text-supemir-blue mb-2">15+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Années d'Expérience</div>
              <div className="text-sm text-muted-foreground">Au service de l'éducation</div>
            </div>

            <div className="text-center p-8 bg-background rounded-xl shadow-sm hover-lift transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <Building className="h-8 w-8 text-supemir-red mx-auto mb-3" />
              <div className="text-5xl font-bold text-supemir-red mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Partenaires</div>
              <div className="text-sm text-muted-foreground">Entreprises et universités</div>
            </div>
        </div>

        <div ref={partnershipRef} className={`text-center mt-16 transition-all duration-1000 ${
          isPartnershipVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover-lift">
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