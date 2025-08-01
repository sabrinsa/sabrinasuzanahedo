import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openChatbot = () => {
    // Trigger chatbot widget opening
    const chatbotButton = document.querySelector('#chatbot-widget button');
    if (chatbotButton) {
      (chatbotButton as HTMLElement).click();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-beige-200 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold text-navy-800">Sabrina Suzán</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-gray-600 hover:text-navy-800 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-navy-800 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("education")}
              className="text-gray-600 hover:text-navy-800 transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection("entrepreneurship")}
              className="text-gray-600 hover:text-navy-800 transition-colors"
            >
              Entrepreneurship
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-navy-800 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={openChatbot}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              CV Chatbot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-navy-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-beige-200 py-4">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-navy-800 hover:bg-beige-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-navy-800 hover:bg-beige-50"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("education")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-navy-800 hover:bg-beige-50"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection("entrepreneurship")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-navy-800 hover:bg-beige-50"
              >
                Entrepreneurship
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-navy-800 hover:bg-beige-50"
              >
                Contact
              </button>
              <button 
                onClick={openChatbot}
                className="block w-full text-left px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg mt-2 flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                CV Chatbot
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
