import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp } from "lucide-react";
import whatsapp from "../assets/whatsapp-removebg-preview.png";
import ContactModal from "../components/ContactPopup"; // Import modal component

interface FloatingButtonsProps {
  showBackToTop: boolean;
  scrollToTop: () => void;
}

const FloatingButtons = ({
  showBackToTop,
  scrollToTop,
}: FloatingButtonsProps) => {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-2 z-50">
        <a
          href="https://wa.me/7013196804?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="w-16 h-16 animate-float hover:scale-110 transition-all duration-800"
          />
        </a>
      </div>

      {/* Contact Button */}
      <div className="fixed bottom-64 right-5 z-50 transform -translate-y-1/2">
        <button
          onClick={() => setContactOpen(true)}
          className="bg-blue-600 text-white px-5 py-2 rotate-90 origin-right rounded-b-lg shadow-xl hover:bg-blue-700 transition-transform duration-300"
        >
          Contact us
        </button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 shadow-2xl z-50 transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default FloatingButtons;
