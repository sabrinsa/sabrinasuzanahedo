import { Briefcase, TrendingUp, Database, BarChart3, Users, Rocket, UserCheck, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Premiums & Operations Intern",
      company: "Assurant – Mexico City",
      period: "Jun 2024 – Jul 2025",
      type: "Finance",
      achievements: [
        {
          icon: TrendingUp,
          text: "Led Premium Debtor Project (Hyundai), helping recover over $50M MXN"
        },
        {
          icon: Database,
          text: "Processed 3,000+ accounting entries across 50+ client portfolios"
        },
        {
          icon: BarChart3,
          text: "Created Excel dashboards integrating 3 years of actuarial data"
        },
        {
          icon: Users,
          text: "Supervised 8 junior analysts, improving detection times by 15 days"
        }
      ]
    },
    {
      title: "Content Manager / Community Intern",
      company: "KPTA – Remote",
      period: "Jul 2020 – May 2022",
      type: "Marketing",
      achievements: [
        {
          icon: Rocket,
          text: "Executed 15+ digital campaigns, increasing lead conversion by 40%"
        },
        {
          icon: UserCheck,
          text: "Managed 5+ client accounts with proactive, data-driven content"
        },
        {
          icon: Wrench,
          text: "Trained in Meta Business Suite, CRM tools, and performance analytics"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-beige-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            <Briefcase className="inline mr-3 text-royal-blue" />
            Work Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Proven track record in finance, operations, and digital marketing with measurable results
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-neutral-50 rounded-xl p-8 shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">{experience.title}</h3>
                  <p className="text-lg text-royal-blue font-semibold mb-1">{experience.company}</p>
                  <p className="text-neutral-600">{experience.period}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge 
                    className={`px-4 py-2 text-sm font-medium ${
                      experience.type === 'Finance' 
                        ? 'bg-royal-blue text-white' 
                        : 'bg-neutral-700 text-white'
                    }`}
                  >
                    {experience.type}
                  </Badge>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start">
                    <achievement.icon className="text-royal-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      {achievement.text.split(/(\$50M MXN|\$50K\+ MXN|3,000\+|50\+|8 junior analysts|15 days|15\+|40%|5\+)/).map((part, partIndex) => {
                        if (/(\$50M MXN|\$50K\+ MXN|3,000\+|50\+|8 junior analysts|15 days|15\+|40%|5\+)/.test(part)) {
                          return <span key={partIndex} className="font-bold text-royal-blue">{part}</span>;
                        }
                        return part;
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
