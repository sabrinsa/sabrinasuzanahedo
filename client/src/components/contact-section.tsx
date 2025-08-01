import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-navy-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <Mail className="inline mr-3 text-royal-blue" />
            Get In Touch
          </h2>
          <p className="text-lg text-beige-100 max-w-2xl mx-auto">
            Ready to discuss opportunities in strategic finance, consulting, or venture capital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-navy-700 rounded-xl p-6 hover:bg-navy-600 transition-colors">
            <Mail className="text-royal-blue h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <div className="text-beige-100">
              <span>sabrina</span>
              <span className="text-royal-blue">.</span>
              <span>suzan</span>
              <span className="text-royal-blue">.</span>
              <span>ahedo</span>
              <span className="text-royal-blue">@</span>
              <span>protonmail</span>
              <span className="text-royal-blue">.</span>
              <span>com</span>
            </div>
          </div>

          <div className="bg-navy-700 rounded-xl p-6 hover:bg-navy-600 transition-colors">
            <Phone className="text-royal-blue h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-beige-100">(+52) 55 6706 1155</p>
            <p className="text-sm text-beige-200">Metropolitan Area, Mexico City</p>
          </div>

          <div className="bg-navy-700 rounded-xl p-6 hover:bg-navy-600 transition-colors">
            <Linkedin className="text-royal-blue h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/sabrinafinanceconsulting/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-beige-100 hover:text-royal-blue transition-colors"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
