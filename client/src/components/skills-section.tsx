import { Settings, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const technicalSkills = [
    "Financial Modeling", "Data Analysis", "Power BI", "Excel", "Python", "CRM Tools", "Canva"
  ];

  const softSkills = [
    "Leadership", "Communication", "Strategic Thinking", "Creativity", "Time Management"
  ];

  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Native" },
    { name: "French", level: "Basic" }
  ];

  const tools = [
    "Notion", "Google Workspace", "Microsoft Office", "Meta Business Suite"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            <Settings className="inline mr-3 text-royal-blue" />
            Skills & Specialization
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
              <Settings className="mr-2 text-royal-blue h-5 w-5" />
              Technical
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <Badge key={index} className="bg-royal-blue text-white px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-neutral-800 mb-2">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="border-neutral-700 text-neutral-700 px-3 py-1 text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
              <Globe className="mr-2 text-royal-blue h-5 w-5" />
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-neutral-700">{language.name}</span>
                  <Badge 
                    className={`px-2 py-1 text-sm font-medium ${
                      language.level === 'Native' 
                        ? 'bg-royal-blue text-white' 
                        : 'bg-neutral-300 text-neutral-800'
                    }`}
                  >
                    {language.level}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
              <Users className="mr-2 text-royal-blue h-5 w-5" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge key={index} className="bg-neutral-700 text-white px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
