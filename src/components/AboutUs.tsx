import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Award, Users, TrendingUp, Heart, Lightbulb, Target, BookOpen, GraduationCap } from "lucide-react";

const AboutUs = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const bookPages = [
    {
      title: "Notre Mission",
      content: "Nous nous engageons à offrir un environnement d'apprentissage dynamique, où chaque apprenant est au cœur de nos préoccupations. Notre mission est de cultiver la curiosité, la créativité et la confiance chez nos étudiants.",
      image: "🎯",
      icon: Target
    },
    {
      title: "Notre Philosophie",
      content: "SUPEMIR = SUPER Motivation, Innovation & Réussite. Nous croyons que l'éducation doit éveiller le potentiel, nourrir l'innovation et inspirer la réussite dans chaque domaine.",
      image: "💭",
      icon: Lightbulb
    },
    {
      title: "Notre Historique",
      content: "Depuis 2004, SUPEMIR est une école supérieure privée marocaine autorisée par le Ministère de l'Enseignement Supérieur. Dirigée par un groupe d'entrepreneurs visionnaires, SUPEMIR propose des cursus diplômants allant de bac+3 à bac+5.",
      image: "📜",
      icon: BookOpen
    },
    {
      title: "Nos Valeurs",
      content: "HUMANISME : Nous plaçons l'apprenant au cœur de nos préoccupations. ENTREPRENEURIAT : Nous encourageons l'innovation responsable. PROFESSIONNALISME : Nous visons l'excellence éducative et la collaboration.",
      image: "💎",
      icon: Heart
    },
    {
      title: "Notre Vision",
      content: "Nous aspirons à être un modèle d'excellence éducative, en combinant les meilleures pratiques avec une approche innovante. Notre vision est de former des citoyens du monde capables de penser de manière critique et de collaborer.",
      image: "🚀",
      icon: TrendingUp
    },
    {
      title: "Nos Programmes",
      content: "Des formations en Informatique, Management, Cybersécurité, Finance, Marketing, Électrotechnique, Domaine de Santé et 3D, conçues pour répondre aux besoins du marché.",
      image: "📚",
      icon: GraduationCap
    },
    {
      title: "Notre Approche",
      content: "Nous ne transmettons pas seulement le savoir, nous façonnons l'avenir. Notre approche pédagogique combine théorie et pratique pour une formation complète.",
      image: "🎓",
      icon: Award
    },
    {
      title: "Nos Partenaires",
      content: "Plus de 50 partenaires entreprises et universités, incluant CNAM et des partenariats internationaux pour garantir l'excellence de nos formations.",
      image: "🤝",
      icon: Users
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % bookPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + bookPages.length) % bookPages.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-accent rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-accent/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-accent rounded-lg rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Award className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium text-gray-700">À Propos de SUPEMIR</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Découvrez Notre 
            <span className="text-accent block sm:inline"> Histoire & Nos Valeurs</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis 2004, SUPEMIR façonne l'avenir de l'éducation au Maroc avec passion, innovation et excellence.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Interactive Book */}
          <div className="relative animate-slide-up flex justify-center">
            {!isBookOpen ? (
              /* Book Cover */
              <div 
                className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-2xl bg-gradient-to-br from-accent to-accent/80 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex items-center justify-center animate-float shadow-2xl hover:shadow-3xl transition-shadow duration-300 cursor-pointer hover:scale-105 transition-all duration-500 max-w-fit mx-auto"
                onClick={() => setIsBookOpen(true)}
              >
                <div className="text-center space-y-1 sm:space-y-2">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent-foreground leading-tight">SUPEMIR</div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent-foreground/90 leading-tight font-medium">Nous façonnons l'avenir</div>
                  <div className="mt-1 sm:mt-2 md:mt-3 text-accent-foreground/70 text-xs sm:text-sm md:text-base lg:text-lg font-medium">📖 Découvrir</div>
                </div>
              </div>
            ) : (
              /* Open Book */
              <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto aspect-square rounded-2xl bg-gradient-to-br from-accent to-accent/80 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between shadow-2xl min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[480px] xl:min-h-[560px]">
                  {/* Close Button */}
                  <div className="flex justify-end mb-2 sm:mb-4 md:mb-6">
                    <button 
                      onClick={() => setIsBookOpen(false)}
                      className="p-2 sm:p-3 md:p-4 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] md:min-w-[48px] md:min-h-[48px] flex items-center justify-center"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent-foreground" />
                    </button>
                  </div>

                  {/* Book Content */}
                  <div className="flex-1 flex flex-col justify-center text-center overflow-hidden">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4 lg:mb-6">{bookPages[currentPage].image}</div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-accent-foreground mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight px-1">
                      {bookPages[currentPage].title}
                    </h3>
                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                      <p className="text-accent-foreground/90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed px-1 sm:px-2 md:px-3 lg:px-4 overflow-y-auto max-h-full">
                        {bookPages[currentPage].content}
                      </p>
                    </div>
                  </div>

                  {/* Page Navigation */}
                  <div className="flex justify-between items-center mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                    <button 
                      onClick={prevPage}
                      className="p-2 sm:p-3 md:p-4 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] md:min-w-[44px] md:min-h-[44px] lg:min-w-[48px] lg:min-h-[48px] flex items-center justify-center flex-shrink-0"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent-foreground" />
                    </button>
                    
                    <div className="flex space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0">
                      {bookPages.map((_, index) => (
                        <div 
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                            index === currentPage ? 'bg-accent-foreground' : 'bg-accent-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={nextPage}
                      className="p-2 sm:p-3 md:p-4 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] md:min-w-[44px] md:min-h-[44px] lg:min-w-[48px] lg:min-h-[48px] flex items-center justify-center flex-shrink-0"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
