import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const widget = document.getElementById('chatbot-widget');
      if (widget && !widget.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div id="chatbot-widget" className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-royal-blue hover:bg-royal-blue-dark text-white p-4 rounded-full shadow-lg"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl border border-neutral-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-neutral-800">Ask about Sabrina's CV</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-neutral-100 p-3 rounded-lg mb-4">
            <p className="text-sm text-neutral-700">
              Hi! I'm here to answer questions about Sabrina's experience and qualifications.
            </p>
          </div>
          
          {/* Chatbase Integration */}
          <div className="text-center">
            <button
              onClick={() => {
                // Trigger Chatbase chatbot
                if ((window as any).chatbase) {
                  (window as any).chatbase('open');
                }
                setIsOpen(false);
              }}
              className="w-full bg-royal-blue hover:bg-royal-blue-dark text-white p-3 rounded-lg text-sm font-medium transition-colors"
            >
              💬 Start CV Chat
            </button>
            <p className="text-xs text-neutral-500 mt-2">
              Ask me about Sabrina's experience, education, or achievements!
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
