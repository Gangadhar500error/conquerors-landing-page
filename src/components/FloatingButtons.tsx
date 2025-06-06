
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp } from 'lucide-react';
import whatsapp from '../assets/whatsapp-removebg-preview.png';

interface FloatingButtonsProps {
  showBackToTop: boolean;
  scrollToTop: () => void;
}

const FloatingButtons = ({ showBackToTop, scrollToTop }: FloatingButtonsProps) => {
  return (
    <>
      {/* Floating WhatsApp Button */}
       <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/7013196804?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsapp} // 👈 Place this image in the public folder
            alt="WhatsApp"
            className="w-20 h-20  animate-float hover:scale-110 transition-all duration-800"
          />
        </a>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 shadow-2xl z-50 transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </Button>
      )}
    </>
  );
};

export default FloatingButtons;
