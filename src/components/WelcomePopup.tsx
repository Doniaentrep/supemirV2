import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShownPopup = sessionStorage.getItem('supemir-welcome-shown');
    
    if (!hasShownPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Mark as shown in session storage
        sessionStorage.setItem('supemir-welcome-shown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleExploreCourses = () => {
    // Navigate to courses page or scroll to programs section
    const element = document.getElementById('programmes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to Supemir Academy!
          </h2>

          {/* Message */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Your new platform for online learning. We provide high-quality courses to help you master new skills and achieve your professional goals. Start your journey today!
          </p>

          {/* Explore Courses Button */}
          <button 
            onClick={handleExploreCourses}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
