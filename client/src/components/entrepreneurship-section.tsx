import { Rocket, Gem, Users, Clock, Truck, Presentation, Lightbulb } from "lucide-react";

export default function EntrepreneurshipSection() {
  return (
    <section id="entrepreneurship" className="py-16 bg-beige-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
            <Rocket className="inline mr-3 text-gold" />
            Entrepreneurship
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building successful ventures from the ground up with measurable impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Rosie JewelsCo */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-beige-200">
            <div className="flex items-center mb-6">
              <div className="bg-gold p-3 rounded-lg mr-4">
                <Gem className="text-navy-800 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-800">Founder & CEO</h3>
                <p className="text-lg text-gold font-semibold">Rosie JewelsCo – Mexico City</p>
                <p className="text-gray-600">Jul 2021 – Present</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-beige-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-navy-800 mb-1">$50,000+ MXN</div>
                <div className="text-sm text-gray-600">First Year Revenue</div>
              </div>
              <div className="flex items-start">
                <Users className="text-gold mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <p className="text-gray-700">
                  Led a team of <span className="font-bold text-navy-800">4</span>, improved productivity by <span className="font-bold text-navy-800">80%</span>
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="text-gold mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <p className="text-gray-700">
                  Shortened cash cycle by <span className="font-bold text-navy-800">50%</span>
                </p>
              </div>
              <div className="flex items-start">
                <Truck className="text-gold mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <p className="text-gray-700">Developed all operations logistics for Liverpool Marketplace integration</p>
              </div>
            </div>
          </div>

          {/* Independent Projects */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-beige-200">
              <div className="flex items-center mb-4">
                <div className="bg-navy-800 p-2 rounded-lg mr-3">
                  <Presentation className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-800">Sabrina & Teachers</h4>
                  <p className="text-sm text-gray-600">2020 to Present</p>
                </div>
              </div>
              <p className="text-gray-700">Designed and taught tailored English lessons for kids and professionals, managing four teachers and all operations.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-beige-200">
              <div className="flex items-center mb-4">
                <div className="bg-navy-800 p-2 rounded-lg mr-3">
                  <Lightbulb className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-800">Luminaria Solutions</h4>
                  <p className="text-sm text-gray-600">2024 to Present</p>
                </div>
              </div>
              <p className="text-gray-700">Created marketing strategies and AI automations for small business clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
