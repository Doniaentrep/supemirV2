import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const StudentTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation({ threshold: 0.2 });

  // Real SUPEMIR testimonial videos from https://supemir.com/ "Ils parlent de SUPEMIR" section
  const testimonials = [
    {
      id: 1,
      name: "Étudiant International",
      program: "Formation SUPEMIR",
      origin: "International",
      image: "/placeholder.svg",
      quote: "Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR. Une expérience d'apprentissage exceptionnelle qui transforme les vies et ouvre les portes de l'avenir.",
      rating: 5,
      year: "2024",
      video: "Vidéo 1 Témoignage 2 Authentique",
      description: "Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR",
      videoUrl: "https://www.youtube.com/embed/uz_ZG0ceQC8"
    },
    {
      id: 2,
      name: "Étudiant SUPEMIR",
      program: "Formation SUPEMIR",
      origin: "International",
      image: "/placeholder.svg",
      quote: "Témoignage Authentique - Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR. Découvrez comment SUPEMIR transforme les rêves en réalité.",
      rating: 5,
      year: "2024",
      video: "Vidéo 2 Témoignage Authentique",
      description: "Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR",
      videoUrl: "https://www.youtube.com/embed/MLXZf2R1biE"
    },
    {
      id: 3,
      name: "Étudiant SUPEMIR",
      program: "Formation SUPEMIR",
      origin: "International",
      image: "/placeholder.svg",
      quote: "Témoignage Authentique - Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR. Une formation d'excellence qui prépare à l'avenir.",
      rating: 5,
      year: "2024",
      video: "Vidéo 3 Témoignage 3 Authentique",
      description: "Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR",
      videoUrl: "https://www.youtube.com/embed/wwaV-oDSH7w"
    },
    {
      id: 4,
      name: "Étudiant Subsaharien",
      program: "Formation SUPEMIR",
      origin: "Afrique Subsaharienne",
      image: "/placeholder.svg",
      quote: "Il est subsaharien, étudiant à SUPEMIR, et il témoigne ! Découvrez l'expérience unique d'un étudiant africain à SUPEMIR.",
      rating: 5,
      year: "2024",
      video: "Vidéo 4 Il est subsaharien",
      description: "Il est subsaharien, étudiant à SUPEMIR, et il témoigne !",
      videoUrl: "https://www.youtube.com/embed/vYOqfMz6BYw"
    },
    {
      id: 5,
      name: "Étudiante SUPEMIR",
      program: "Formation SUPEMIR",
      origin: "International",
      image: "/placeholder.svg",
      quote: "Elle est étudiante SUPEMIR et témoigne de son parcours exceptionnel. Une expérience qui change la vie et ouvre les horizons.",
      rating: 5,
      year: "2024",
      video: "Vidéo 5 Elle est étudiante SUPEMIR",
      description: "Elle est étudiante SUPEMIR et témoigne de son parcours",
      videoUrl: "https://www.youtube.com/embed/DLdanUSwgYU"
    },
    {
      id: 6,
      name: "Étudiant SUPEMIR",
      program: "Formation SUPEMIR",
      origin: "International",
      image: "/placeholder.svg",
      quote: "Témoignage Authentique - Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR. Une formation qui transforme les ambitions en succès.",
      rating: 5,
      year: "2024",
      video: "Vidéo 6 Témoignage 4 Authentique",
      description: "Le Parcours Inspirant de nos étudiants internationaux à SUPEMIR",
      videoUrl: "https://www.youtube.com/embed/5v8Kzb8HZEM"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={testimonialsRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isTestimonialsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
        }`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ils Parlent de SUPEMIR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Témoignages authentiques de nos étudiants internationaux et marocains
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Video Gallery - Moved to the top */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Témoignages Vidéo Authentiques
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => {
                // Convert embed URL to watch URL
                const watchUrl = testimonial.videoUrl.replace('/embed/', '/watch?v=');
                
                return (
                  <Card key={testimonial.id} className="group hover-lift transition-all duration-300 border-2 hover:border-accent/30">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        {testimonial.videoUrl.startsWith('REPLACE_WITH_REAL_VIDEO_URL') ? (
                          // Placeholder when no real video URL is provided
                          <div className="flex flex-col items-center justify-center text-center p-4">
                            <Play className="h-12 w-12 text-primary/60 mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Vidéo de témoignage SUPEMIR
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Remplacez par l'URL réelle
                            </p>
                          </div>
                        ) : (
                          // Real video embed without YouTube red play overlay (autoplay muted + loop)
                          (() => {
                            const videoId = testimonial.videoUrl.split('/embed/')[1] || '';
                            const params = `modestbranding=1&rel=0&showinfo=0&controls=1&disablekb=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${videoId}`;
                            const src = `${testimonial.videoUrl}?${params}`;
                            return (
                              <iframe
                                width="100%"
                                height="100%"
                                src={src}
                                title={testimonial.video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                              ></iframe>
                            );
                          })()
                        )}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{testimonial.video}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.description}
                      </p>
                      <div className="mt-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full hover-scale"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(watchUrl, '_blank');
                          }}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Regarder la vidéo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Main Testimonial Display */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[activeTestimonial].program} • {testimonials[activeTestimonial].origin}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Diplômé en {testimonials[activeTestimonial].year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>

            {/* Testimonial Grid */}
            <div className="grid grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className={`cursor-pointer transition-all duration-300 hover-lift ${
                    index === activeTestimonial 
                      ? 'border-2 border-primary bg-primary/5' 
                      : 'border hover:border-primary/30'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h5 className="font-semibold text-sm mb-1">{testimonial.name}</h5>
                      <p className="text-xs text-muted-foreground mb-2">{testimonial.program}</p>
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="hover-scale"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="hover-scale"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;


