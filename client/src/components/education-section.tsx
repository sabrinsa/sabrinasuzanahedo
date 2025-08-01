import { GraduationCap, Trophy, Medal, Users, Book, University } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            <GraduationCap className="inline mr-3 text-royal-blue" />
            Education
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            International academic experience with proven academic excellence
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Degree */}
          <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">Bachelor's in Business Administration & Finance</h3>
                <p className="text-lg text-royal-blue font-semibold mb-1">Universidad Panamericana – Mexico City</p>
                <p className="text-neutral-600">Aug 2022 – Dec 2026</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <Badge className="bg-royal-blue text-white px-4 py-2 text-sm font-medium">
                  GPA: 3.64
                </Badge>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Trophy className="text-royal-blue mr-3 h-5 w-5" />
                  <span><span className="font-semibold text-royal-blue">1st Place Individual</span> at IBECC 2025</span>
                </div>
                <div className="flex items-center">
                  <Medal className="text-royal-blue mr-3 h-5 w-5" />
                  <span><span className="font-semibold text-royal-blue">Amsterdam Case Competition</span> 2024</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="text-royal-blue mr-3 h-5 w-5" />
                  <span>Member of <span className="font-semibold text-royal-blue ml-1">LEAD UP</span> (high performance consulting team)</span>
                </div>
              </div>
            </div>
          </div>

          {/* UC Berkeley Exchange */}
          <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">Exchange Abroad: Summer Program</h3>
                <p className="text-lg text-royal-blue font-semibold mb-1">University of California, Berkeley – California, USA</p>
                <p className="text-neutral-600">Summer 2025</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <Badge className="bg-neutral-700 text-white px-4 py-2 text-sm font-medium">International</Badge>
              </div>
            </div>
            <div className="flex items-center">
              <Book className="text-royal-blue mr-3 h-5 w-5" />
              <p className="text-neutral-700">Courses: Economy, Politics, AI, and Data</p>
            </div>
          </div>

          {/* Pre-Collegiate Programs */}
          <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Pre-Collegiate Programs</h3>
            <p className="text-neutral-600 mb-4">Summer 2017-2018</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <University className="text-royal-blue mr-3 h-5 w-5" />
                <div>
                  <p className="font-semibold text-royal-blue">Stanford University</p>
                  <p className="text-neutral-600 text-sm">Business Leadership</p>
                </div>
              </div>
              <div className="flex items-center">
                <University className="text-royal-blue mr-3 h-5 w-5" />
                <div>
                  <p className="font-semibold text-royal-blue">Yale University</p>
                  <p className="text-neutral-600 text-sm">Humanities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
