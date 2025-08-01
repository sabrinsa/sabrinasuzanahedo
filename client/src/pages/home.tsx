import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MetricsHighlight from "@/components/metrics-highlight";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import EntrepreneurshipSection from "@/components/entrepreneurship-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import ChatbotWidget from "@/components/chatbot-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />
      <HeroSection />
      <MetricsHighlight />
      <ExperienceSection />
      <EducationSection />
      <EntrepreneurshipSection />
      <SkillsSection />
      <ContactSection />
      <ChatbotWidget />
      
      {/* Footer */}
      <footer className="bg-navy-800 text-beige-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Sabrina Suzán Ahedo. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <p className="text-sm">Interests: Entrepreneurship • Consulting • AI & Tech • Fashion • Yoga • Tennis • Education • Social Impact</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
