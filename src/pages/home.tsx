import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Globe, Menu, X, Clock, MapPin, Handshake, CheckCircle, GraduationCap, Briefcase, Rocket, Phone, Star, Award, TrendingUp, Users, Target, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    // Map navigation items to their corresponding section IDs
    const sectionMap: { [key: string]: string } = {
      'entrepreneurship': 'activities',
      'home': 'home',
      'about': 'about',
      'education': 'education',
      'experience': 'experience',
      'contact': 'contact'
    };
    
    const sectionId = sectionMap[targetId.toLowerCase()] || targetId.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sabrina.suzan.ahedo@protonmail.com";
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-primary">Sabrina</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Education", "Experience", "Entrepreneurship", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="nav-link text-muted-foreground hover:text-primary"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {["Home", "About", "Education", "Experience", "Entrepreneurship", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="block w-full text-left text-muted-foreground hover:text-primary"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <div className="fade-in">
            <img
              src="/src/assets/sabrina-profile.png"
              alt="Sabrina Suzán Ahedo - Professional headshot"
              className="profile-image w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl object-cover border-4 border-white"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="highlight-text">Sabrina Suzán Ahedo</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I bring an <span className="font-bold text-slate-700">uncommon blend</span> of academic excellence, <span className="font-bold text-slate-700">entrepreneurial leadership</span>, and hands-on business experience in <span className="font-bold text-slate-700">finance, operations, and marketing</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleNavClick("about")}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Learn More About Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavClick("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <div className="flex items-center justify-center mb-12">
              <Star className="text-yellow-500 mr-4 h-8 w-8 icon-bounce" />
              <h2 className="text-4xl font-bold text-center text-slate-900">About Me</h2>
              <Star className="text-yellow-500 ml-4 h-8 w-8 icon-bounce" />
            </div>
            <div className="section-divider"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I bring an <span className="font-bold text-blue-600">uncommon blend</span> of academic excellence, <span className="font-bold text-purple-600">entrepreneurial leadership</span>, and hands-on business experience in <span className="font-bold text-green-600">finance, operations, and marketing</span>. I bring <span className="font-bold text-orange-600">analytical rigor</span> and <span className="font-bold text-pink-600">creative execution</span> to high-performance, purpose-driven teams tackling real-world business challenges.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Currently pursuing my Bachelor's in <span className="font-bold text-blue-600">Business Administration and Finance</span> at Universidad Panamericana, with international experience at <span className="font-bold text-purple-600">UC Berkeley</span>. I've founded and scaled my own jewelry business to <span className="font-bold text-green-600">$50,000+ in revenue</span> while gaining valuable experience in finance and operations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-300">💰 Finance</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-300">🚀 Entrepreneurship</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300">⚙️ Operations</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-300">📈 Marketing</Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-300">📊 Data Analysis</Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="contact-gradient shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-slate-900">Core Values</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        Integrity and authenticity in all endeavors
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        Continuous learning and adaptation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        Making a positive impact on others
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        Excellence through collaboration
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <div className="flex items-center justify-center mb-12">
              <GraduationCap className="text-blue-600 mr-4 h-8 w-8 icon-bounce" />
              <h2 className="text-4xl font-bold text-center text-slate-900">Education</h2>
              <GraduationCap className="text-blue-600 ml-4 h-8 w-8 icon-bounce" />
            </div>
            <div className="section-divider"></div>
            <div className="space-y-6">
              <Accordion type="single" collapsible defaultValue="education-1">
                <AccordionItem value="education-1">
                  <Card className="card-hover">
                    <AccordionTrigger className="section-header p-6 hover:no-underline">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-left">
                          <h3 className="text-2xl font-semibold text-slate-900">Bachelor in Business Administration and Finance</h3>
                          <p className="text-primary font-medium">Universidad Panamericana</p>
                          <p className="text-muted-foreground text-sm">Aug 2022 - Dec 2026 • CDMX, México</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <Separator className="mb-6" />
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Program Details</h4>
                            <p className="text-muted-foreground mb-4">100% in English</p>
                            <h4 className="font-semibold text-slate-900 mb-3">GPA</h4>
                            <p className="text-muted-foreground">3.64/4.0</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Key Achievements</h4>
                            <ul className="text-muted-foreground space-y-2">
                              <li>• LEAD UP high-performing team member</li>
                              <li>• 2024 Amsterdam Case Competition participant</li>
                              <li>• 2025 SF International Business Ethics Case Competition: 1st Place Individual, 2nd Place Team</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>

                <AccordionItem value="education-2">
                  <Card className="card-hover">
                    <AccordionTrigger className="section-header p-6 hover:no-underline">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-left">
                          <h3 className="text-2xl font-semibold text-slate-900">Bachelor's Exchange Abroad</h3>
                          <p className="text-primary font-medium">UC Berkeley</p>
                          <p className="text-muted-foreground text-sm">Summer 2025 • CA, United States</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <Separator className="mb-6" />
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Focus Areas</h4>
                            <ul className="text-muted-foreground space-y-2">
                              <li>• Economy</li>
                              <li>• Politics</li>
                              <li>• Artificial Intelligence</li>
                              <li>• Data Analytics</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Program Type</h4>
                            <p className="text-muted-foreground">International exchange program focusing on cutting-edge business and technology topics</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>

                <AccordionItem value="education-3">
                  <Card className="card-hover">
                    <AccordionTrigger className="section-header p-6 hover:no-underline">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-left">
                          <h3 className="text-2xl font-semibold text-slate-900">Pre-collegiate Programs</h3>
                          <p className="text-primary font-medium">Stanford University & Yale University</p>
                          <p className="text-muted-foreground text-sm">2017-2018 • United States</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <Separator className="mb-6" />
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Stanford University</h4>
                            <p className="text-muted-foreground">Business Leadership program</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Yale University</h4>
                            <p className="text-muted-foreground">Humanities program</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <div className="flex items-center justify-center mb-12">
              <Briefcase className="text-purple-600 mr-4 h-8 w-8 icon-bounce" />
              <h2 className="text-4xl font-bold text-center text-slate-900">Professional Experience</h2>
              <Briefcase className="text-purple-600 ml-4 h-8 w-8 icon-bounce" />
            </div>
            <div className="section-divider"></div>
            <div className="space-y-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="experience-1">
                  <Card className="card-hover border">
                    <AccordionTrigger className="section-header p-6 hover:no-underline">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-left">
                          <h3 className="text-2xl font-semibold text-slate-900">Premiums & Operations Intern</h3>
                          <p className="text-primary font-medium">Assurant</p>
                          <p className="text-muted-foreground text-sm">June 2024 - June 2025</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <Separator className="mb-6" />
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Managed back-office operations and developed key financial projects, contributing to significant revenue recovery and operational improvements.
                          </p>
                          <h4 className="font-semibold text-slate-900">Key Responsibilities</h4>
                          <ul className="text-muted-foreground space-y-2 ml-4">
                            <li>• Managed 15+ client requests daily in back-office operations</li>
                            <li>• Developed Premium Debtor project for Hyundai</li>
                            <li>• Validated 3,000+ accounting entries for policies and auxiliaries</li>
                            <li>• Ensured regulatory compliance through monthly fraud detection reports</li>
                            <li>• Oversaw 8 junior data analysts and their deliverables</li>
                          </ul>
                          <h4 className="font-semibold text-slate-900 mt-4">Notable Achievements</h4>
                          <ul className="text-muted-foreground space-y-2 ml-4">
                            <li>• Helped recover <span className="font-bold text-green-600">$50M MXN</span> of uncollected accounts</li>
                            <li>• Developed advanced Dynamic Tables and Excel Reports integrating <span className="font-bold text-blue-600">50+ actuarial bases</span></li>
                            <li>• Improved early mistake-detection by <span className="font-bold text-orange-600">15 days</span></li>
                            <li>• Enhanced <span className="font-bold text-purple-600">decision-making speed</span> for senior stakeholders</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>

                <AccordionItem value="experience-2">
                  <Card className="card-hover border">
                    <AccordionTrigger className="section-header p-6 hover:no-underline">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-left">
                          <h3 className="text-2xl font-semibold text-slate-900">Content Manager / Community Manager Intern</h3>
                          <p className="text-primary font-medium">Kpta: Estrategia Educativa</p>
                          <p className="text-muted-foreground text-sm">July 2020 - May 2022</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <Separator className="mb-6" />
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Designed and executed digital campaigns while managing client relationships and strategic content development.
                          </p>
                          <h4 className="font-semibold text-slate-900">Key Responsibilities</h4>
                          <ul className="text-muted-foreground space-y-2 ml-4">
                            <li>• Designed and executed 10+ digital campaigns</li>
                            <li>• Managed portfolio of 20+ client accounts</li>
                            <li>• Developed strategic content and maintained proactive communication</li>
                            <li>• Utilized Meta Business Suite, CRM platforms, and performance analytics</li>
                          </ul>
                          <h4 className="font-semibold text-slate-900 mt-4">Notable Achievements</h4>
                          <ul className="text-muted-foreground space-y-2 ml-4">
                            <li>• Increased LEAD conversion by <span className="font-bold text-green-600">40%</span> within 6 months</li>
                            <li>• Improved <span className="font-bold text-blue-600">customer satisfaction</span> through strategic content</li>
                            <li>• Trained in <span className="font-bold text-purple-600">advanced digital marketing</span> tools and strategies</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      <section id="activities" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <div className="flex items-center justify-center mb-12">
              <Rocket className="text-orange-600 mr-4 h-8 w-8 icon-bounce" />
              <h2 className="text-4xl font-bold text-center text-slate-900">Entrepreneurship</h2>
              <Rocket className="text-orange-600 ml-4 h-8 w-8 icon-bounce" />
            </div>
            <div className="section-divider"></div>
            <div className="space-y-6">
              <Accordion type="single" collapsible defaultValue="entrepreneurship-1">
                <AccordionItem value="entrepreneurship-1">
                  <Card className="card-hover">
                    <AccordionTrigger className="section-header p-6 hover:no-underline">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-left">
                          <h3 className="text-2xl font-semibold text-slate-900">Founder & CEO</h3>
                          <p className="text-primary font-medium">Rosie JewelsCo</p>
                          <p className="text-muted-foreground text-sm">July 2021 - Present</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <Separator className="mb-6" />
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Scaled a business for handcrafted crystal jewelry, demonstrating entrepreneurial leadership and business acumen.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">Key Responsibilities</h4>
                              <ul className="text-muted-foreground space-y-2">
                                <li>• Managed inventory, budgeting, and pricing strategies</li>
                                <li>• Led team of 4 across production, marketing, and logistics</li>
                                <li>• Developed all operations logistics systems</li>
                                <li>• Secured integration as Liverpool official marketplace supplier</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">Business Achievements</h4>
                              <ul className="text-muted-foreground space-y-2">
                                <li>• Reached over <span className="font-bold text-green-600">$50,000 MXN</span> sales in the first year</li>
                                <li>• Achieved <span className="font-bold text-blue-600">20% year-over-year</span> revenue growth</li>
                                <li>• Boosted team productivity by <span className="font-bold text-orange-600">80%</span></li>
                                <li>• Reduced Cash Conversion Cycle by <span className="font-bold text-purple-600">50%</span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </Accordion>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-center mb-8 text-slate-900">Skills & Expertise</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-300">💼 Financial Modeling</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300">📊 Data Analysis</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-300">⚡ Power BI</Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-300">🐍 Python</Badge>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-300">🔧 CRM Tools</Badge>
                      <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 border-cyan-300">📱 Meta Business Suite</Badge>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Languages</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Spanish</span>
                        <Badge variant="outline">Native</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">English</span>
                        <Badge variant="outline">Native</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">French</span>
                        <Badge variant="outline">Basic</Badge>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-300">🚀 Entrepreneurship</Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-300">💰 Finance</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-300">💻 Technology</Badge>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-300">🤖 AI</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300">💼 Consulting</Badge>
                      <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 border-cyan-300">⚽ Sports</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <div className="flex items-center justify-center mb-12">
              <Mail className="text-green-600 mr-4 h-8 w-8 icon-bounce" />
              <h2 className="text-4xl font-bold text-center text-slate-900">Get In Touch</h2>
              <Mail className="text-green-600 ml-4 h-8 w-8 icon-bounce" />
            </div>
            <div className="section-divider"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Let's Connect</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always interested in <span className="font-bold text-blue-600">new opportunities</span>, <span className="font-bold text-purple-600">collaborations</span>, and <span className="font-bold text-green-600">meaningful conversations</span>. Whether you're looking to discuss a potential project, explore partnership opportunities, or simply connect, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-primary mr-4 h-5 w-5" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <button
                        onClick={handleEmailClick}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sabrina.suzan.ahedo@protonmail.com
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="text-primary mr-4 h-5 w-5" />
                    <div>
                      <p className="font-medium text-slate-900">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/sabrina-suzan-ahedo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/sabrina-suzan-ahedo
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-primary mr-4 h-5 w-5" />
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <span className="text-muted-foreground">+52 55 6706 1155</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-gradient p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-slate-900">Quick Message</h4>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out directly via email or connect with me on LinkedIn. I typically respond within 24 hours and look forward to our conversation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-3 text-primary h-4 w-4" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-3 text-primary h-4 w-4" />
                    <span>Based in CDMX, México</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Handshake className="mr-3 text-primary h-4 w-4" />
                    <span>Open to new opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-lg mb-4">Thank you for visiting my digital resume</p>
            <p className="text-slate-400">&copy; 2024 Sabrina Suzán Ahedo. All rights reserved.</p>
            <div className="mt-6 flex justify-center space-x-6">
              <button
                onClick={handleEmailClick}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
              <a
                href="https://linkedin.com/in/sabrina-suzan-ahedo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
