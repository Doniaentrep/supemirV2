import { useState, useEffect } from "react";
import { Sparkles, Star, Award } from "lucide-react";

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-50 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-accent/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-accent/20 rounded-lg rotate-45 animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-accent/30 rounded-lg rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-10 right-10 animate-pulse">
          <Sparkles className="h-6 w-6 text-accent/60" />
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce" style={{animationDelay: '1s'}}>
          <Star className="h-5 w-5 text-accent/60" />
        </div>
        <div className="absolute top-1/2 left-10 animate-pulse" style={{animationDelay: '2s'}}>
          <Sparkles className="h-4 w-4 text-accent/40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center text-white z-10">
        <div className="mb-8">
          <div className="text-6xl font-bold mb-4 animate-bounce">
            SUPEMIR
          </div>
          <div className="text-xl opacity-90 animate-fade-in">
            Excellence Académique à Marrakech
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-accent h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm mt-2 opacity-80">
            {progress}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-sm opacity-70 animate-pulse">
          Chargement de votre expérience d'apprentissage...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;


