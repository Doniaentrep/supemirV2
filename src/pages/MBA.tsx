import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, CheckCircle, GraduationCap, Briefcase, Brain, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MBA = () => {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // MBA page content aligned with existing site context (placeholders pending verified copy)
  const mbaTracks = [
    {
      id: "mba-marketing-digital",
      title: "MBA Marketing Digital & Stratégie",
      description: "Leadership digital, stratégie omnicanale, data et performance",
      duration: "12 à 18 mois",
      level: "Bac+5 / Expérience",
      color: "from-green-500 to-emerald-500",
      modules: [
        "Stratégie marketing omnicanale",
        "Data marketing & analytics",
        "Branding & content",
        "E-commerce & CRM",
        "Growth & performance",
        "Projet capstone"
      ],
      careers: [
        "Head of Digital",
        "Digital Marketing Manager",
        "E-commerce Manager",
        "Growth Lead"
      ]
    },
    {
      id: "mba-management-projets",
      title: "MBA Management de Projets",
      description: "Pilotage de projets, stratégie, innovation et performance",
      duration: "12 à 18 mois",
      level: "Bac+5 / Expérience",
      color: "from-amber-500 to-orange-500",
      modules: [
        "Performance & pilotage",
        "Stratégie & environnement",
        "Économie & juridique",
        "Innovation & transformation",
        "Leadership & management",
        "Mémoire professionnel"
      ],
      careers: [
        "Directeur de projets",
        "Chef de projet senior",
        "Consultant management",
        "Responsable opérations"
      ]
    },
    {
      id: "mba-management-si",
      title: "MBA Management des Systèmes d'Information",
      description: "Pilotage SI, gouvernance IT, transformation digitale",
      duration: "12 à 18 mois",
      level: "Bac+5 / Expérience",
      color: "from-blue-500 to-cyan-500",
      modules: [
        "Gouvernance et stratégie SI",
        "Architecture & cloud",
        "Cybersécurité & risques",
        "Data & BI",
        "Conduite du changement",
        "Projet capstone"
      ],
      careers: [
        "IT Manager",
        "Chief Digital Officer",
        "Product/Program Manager",
        "Consultant Transformation"
      ]
    },
    {
      id: "mba-cyber",
      title: "MBA Cybersécurité & Risques Numériques",
      description: "Stratégie de sécurité, conformité, résilience",
      duration: "12 à 18 mois",
      level: "Bac+5 / Expérience",
      color: "from-red-500 to-pink-500",
      modules: [
        "Risk management & conformité",
        "Sécurité réseau & cloud",
        "Sécurité applicative",
        "Incident response",
        "Audit & gouvernance",
        "Projet capstone"
      ],
      careers: [
        "Cybersecurity Manager",
        "GRC Specialist",
        "Security Architect",
        "Consultant Cyber"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      <section className="py-20 pt-32 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')} 
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>

            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" />
              Programmes MBA
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leadership & Transformation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Parcours MBA professionnalisants axés sur la stratégie, le digital et la performance.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-amber-500" />
                <span>12 à 18 mois</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-green-600" />
                <span>Diplôme MBA</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-rose-500" />
                <span>Format compatible activité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation (consistent with bootcamp) */}
      <nav aria-label="Sous navigation" className="sticky top-16 z-30 bg-white/70 backdrop-blur border-y border-gray-100">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center gap-3 py-3 text-sm">
            {[
              {id:'programme', label:'Programme'},
              {id:'diplome', label:'Diplôme & Certifs'},
              {id:'carriere', label:'Carrière'},
            ].map(link => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(link.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="programme" className="py-20">
        <div className="container mx-auto px-4">
          {!selectedTrack ? (
            <>
              <div className="max-w-3xl mx-auto mb-6">
                <div className="relative">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Rechercher une spécialité MBA..."
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔎</div>
                </div>
              </div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Choisissez votre Parcours MBA
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Sélectionnez le parcours qui correspond à vos objectifs de carrière.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {mbaTracks
                  .filter((track) => {
                    if (!query.trim()) return true;
                    const q = query.toLowerCase();
                    return `${track.title} ${track.description}`.toLowerCase().includes(q) || track.modules.some(m => m.toLowerCase().includes(q));
                  })
                  .map((track) => (
                  <Card 
                    key={track.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer rounded-2xl bg-white/80 backdrop-blur-sm supports-[backdrop-filter]:bg-white/60 shadow-md hover:-translate-y-1"
                    onClick={() => setSelectedTrack(track.id)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${track.color} flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Briefcase className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                            {track.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {track.description}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge variant="secondary" className="text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          {track.duration}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          <Award className="h-4 w-4 mr-2" />
                          {track.level}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          <BookOpen className="h-4 w-4 mr-2" />
                          6 modules
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-700 mb-3">Compétences clés:</h5>
                        <div className="flex flex-wrap gap-2">
                          {track.modules.slice(0, 3).map((m, i) => (
                            <Badge key={i} variant="outline" className="text-sm">{m}</Badge>
                          ))}
                          <Badge variant="outline" className="text-sm">+3</Badge>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">Explorer ce parcours</span>
                          <ArrowLeft className="h-4 w-4 text-primary rotate-180 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            (() => {
              const track = mbaTracks.find(t => t.id === selectedTrack);
              if (!track) return null;
              return (
                <>
                  <div className="mb-8">
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedTrack(null)} 
                      className="mb-4"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Retour aux parcours
                    </Button>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${track.color} flex items-center justify-center text-white mr-6`}>
                        <Briefcase className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{track.title}</h2>
                        <p className="text-lg text-gray-600">{track.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold">Programme</CardTitle>
                        <CardDescription>Modules principaux</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {track.modules.map((module, index) => (
                            <Badge key={index} variant="outline" className="text-sm">{module}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold">Débouchés</CardTitle>
                        <CardDescription>Carrières visées</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {track.careers.map((career, index) => (
                            <Badge key={index} variant="secondary" className="text-sm">{career}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-10 text-center bg-primary/5 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Prérequis & Admission</h3>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                      Admission sur dossier et entretien. Public cible: cadres et professionnels souhaitant accélérer leur carrière.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center mb-6">
                      <Badge variant="outline" className="text-sm">Bac+5 recommandé</Badge>
                      <Badge variant="outline" className="text-sm">Expérience professionnelle</Badge>
                      <Badge variant="outline" className="text-sm">Disponibilité soirs/weekends</Badge>
                    </div>
                    <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                      S'inscrire maintenant
                    </Button>
                  </div>
                </>
              );
            })()
          )}
        </div>
      </section>

      {/* Diplôme & Certifications (consistent with bootcamp) */}
      <section id="diplome" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Diplôme et Certifications</h2>
            <p className="text-xl text-gray-600">Diplôme MBA reconnu + valorisation de compétences clés</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-primary/10 via-white to-accent/10 p-8 shadow-sm transition-all hover:shadow-xl">
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white flex items-center justify-center shadow-md shrink-0">
                  <Award className="h-9 w-9" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">Officiel</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">Diplôme MBA</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Diplôme MBA Supemir</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Validation académique de haut niveau, axée sur des compétences stratégiques, data et leadership.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[{label:'Format', value:'Compatible activité'}, {label:'Durée', value:'12-18 mois'}, {label:'Langue', value:'Français'}].map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/80 backdrop-blur border border-gray-100 p-3 text-center">
                        <div className="text-base font-bold text-gray-900">{s.value}</div>
                        <div className="text-xs text-gray-600">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ce que vous obtenez</h4>
                <ul className="space-y-3 text-gray-700">
                  {['Diplôme MBA', 'Projet capstone', 'Accès ressources & réseau', 'Validation compétences clés'].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Reconnaissance</h4>
                <p className="text-gray-700 mb-4">Certificat partageable et valorisable sur LinkedIn et votre CV.</p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Share2 className="h-4 w-4 text-primary" />
                  Ajoutez votre diplôme à votre profil en un clic.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes quick section */}
      <section id="carriere" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Débouchés & Carrières</h2>
            <p className="text-xl text-gray-600">Des postes à forte responsabilité</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {title:'Head of Digital', stat:'+20% croissance'},
              {title:'E-commerce Manager', stat:'ROAS x1.6'},
              {title:'Directeur de Projets', stat:'NPS +15'}
            ].map((item) => (
              <div key={item.title} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center mb-4 font-bold">{item.stat.split(' ')[0]}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">Objectif type: {item.stat} sous 6 à 12 mois.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MBA;


