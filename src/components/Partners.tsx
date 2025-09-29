import { useEffect, useRef } from "react";

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Partner institutions data - hotlinked from SUPEMIR Institutions
  const partners = [
    // Set A
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner1.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner2.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner3.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner4.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner5.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner6.png", alt: "Institution Partner" },

    // Set B (previously added)
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner7.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner8.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner9.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner10.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/ipm.png", alt: "Institution Partner" },

    // Set C
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner11.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner13.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner15.png", alt: "Institution Partner" },
    { name: "Institution", logo: "https://supemir.com/supemir/wp-content/uploads/2025/05/partner16.png", alt: "Institution Partner" }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 1.0; // pixels per frame - slowed down from 3.5

    const animate = () => {
      position -= speed;
      
      // Reset position when one full cycle is complete
      if (position <= -container.scrollWidth / 3) {
        position = 0;
      }
      
      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Nos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Partenaires</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous sommes fiers de nos certifications ISO et de nos partenariats avec des organismes reconnus pour garantir l'excellence de nos formations
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Moving logos container */}
          <div 
            ref={containerRef}
            className="flex items-center space-x-12 py-4"
            style={{ width: 'fit-content' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partner categories */}
        <div className="text-center mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Certifications ISO</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Partenaires Officiels</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Organismes Reconnus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
