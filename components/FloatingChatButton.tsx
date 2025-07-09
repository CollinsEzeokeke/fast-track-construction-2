"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingAIChat } from "./FloatingAIChat";

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("FloatingChatButton rendered, isOpen:", isOpen);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Button clicked, current state:", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button - Always visible */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleButtonClick}
          className="w-16 h-16 rounded-full shadow-2xl glass-effect-light border-2 border-construction-gold/30 hover:border-construction-gold hover:shadow-construction-gold/25 transition-all duration-300 bg-construction-gold/20 hover:bg-construction-gold/30"
          type="button"
        >
          {isOpen ? (
            <X className="h-8 w-8 text-construction-gold" />
          ) : (
            <MessageCircle className="h-8 w-8 text-construction-gold" />
          )}
        </Button>
        
        {/* Subtle Ring Animation */}
        <div className="absolute inset-0 rounded-full border-2 border-construction-gold/10 animate-ping"></div>
      </div>

      {/* AI Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <FloatingAIChat onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};
