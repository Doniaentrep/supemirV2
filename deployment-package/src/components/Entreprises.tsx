import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Target, TrendingUp, Users, Award, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const Entreprises = () => {
  const services = [
    {
      icon: Target,
      title: "Formation Sur Mesure",
      description: "Programmes personnalisés adaptés aux besoins spécifiques de votre entreprise",
      features: ["Audit des compétences", "Conception de parcours", "Formation en interne", "Suivi personnalisé"]
    },
    {
      icon: TrendingUp,
      title: "Amélioration Continue",
      description: "Accompagnement dans l'optimisation de vos processus et performances",
      features: ["Diagnostic organisationnel", "Stratégies d'amélioration", "Mise en œuvre", "Mesure des résultats"]
    },
    {
      icon: Lightbulb,
      title: "Transformation Créative",
      description: "Innovation et transformation digitale pour créer de la valeur",
      features: ["Innovation digitale", "Transformation culturelle", "Nouveaux business models", "Création de valeur"]
    },
    {
      icon: Users,
      title: "Développement des Talents",
      description: "Formation et développement des compétences de vos équipes",
      features: ["Leadership", "Management", "Compétences techniques", "Soft skills"]
    }
  ];

  const benefits = [
    "Amélioration des performances opérationnelles",
    "Développement des compétences clés",
    "Innovation et transformation digitale",
    "Accompagnement personnalisé",
    "Formation certifiante et reconnue",
    "Réseau d'experts et de partenaires"
  ];

  return (
    <section id="entreprises" className="py-20 pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <Building className="h-4 w-4 mr-2" />
            Solutions Entreprises
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Entreprises…
          </h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Vos Ambitions, Nos Objectifs !
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nous accompagnons nos clients dans leurs démarches d'amélioration continue de leurs performances 
            et conduisons les transformations créatives et créatrices de valeur.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover-lift animate-slide-up overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Solutions Entreprises
            </h3>
            <p className="text-muted-foreground">
              Des solutions complètes pour transformer votre organisation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <Award className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Transformer Votre Entreprise ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir 
              comment nous pouvons vous accompagner dans votre transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold hover-scale"
                onClick={() => {
                  const element = document.getElementById('footer');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Building className="h-5 w-5 mr-2" />
                Demander un Devis
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-green-600 text-white border-green-600 hover:bg-green-700 hover:text-white font-semibold hover-scale"
                onClick={() => {
                  const element = document.getElementById('formation-certifiee');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  border: '2px solid #16a34a',
                  fontWeight: '600'
                }}
              >
                <Users className="h-5 w-5 mr-2" />
                Voir nos Formations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entreprises;
