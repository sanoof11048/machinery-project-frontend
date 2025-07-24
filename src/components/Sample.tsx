import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Settings, 
  Target, 
  Eye, 
  Wrench,
  Zap,
  Cog,
  Shield,
  Menu,
  X
} from 'lucide-react';

const OruxWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whyChooseUs = [
    'Extensive inventory of quality-tested machinery',
    'Expert technical support and consultation', 
    'Comprehensive retrofitting and upgrade services',
    'On-site demonstrations and training',
    'Competitive pricing with flexible terms',
    'Pan-India delivery and installation support'
  ];

  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Hands-on industry experience with skilled technicians who ensure every machine meets rigorous quality standards.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Assurance', 
      description: 'Thorough inspection and testing of all machinery with on-site demonstration in running condition.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'PLC Retrofitting',
      description: 'Advanced PLC retrofit solutions to extend machine life and enhance automation efficiency.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Perfect Match',
      description: 'We help you find the right machine that suits your production needs and budget.'
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Complete Support',
      description: 'Comprehensive repair, maintenance services, spare parts supply, and training support.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Efficient',
      description: 'Energy-efficient models with various tonnages to optimize production costs.'
    }
  ];

  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ORIX INTERNATIONAL
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('machines')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Machines
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('machines')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                  Machines
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Orix International Group
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in industrial machinery solutions, delivering excellence 
              through expertise, innovation, and customer-centric service.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Leading Industrial Machinery Supplier
              </h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  With over 15 years of experience in the industrial machinery sector, 
                  Orix International Group has established itself as a trusted supplier 
                  of high-quality used industrial equipment. We specialize in injection 
                  molding machines, CNC equipment, blow molding machines, and comprehensive 
                  retrofitting services.
                </p>
                <p>
                  Our expertise extends beyond just selling machinery. We provide complete 
                  solutions including PLC upgrades, servo retrofitting, maintenance services, 
                  and technical training to ensure our clients maximize their productivity 
                  and return on investment.
                </p>
              </div>
              
              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg mr-4">
                      <Target className="text-emerald-600" size={24} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Our Mission</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To provide cost-effective, reliable industrial machinery solutions 
                    that empower manufacturers to achieve operational excellence.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-cyan-100 rounded-lg mr-4">
                      <Eye className="text-cyan-600" size={24} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Our Vision</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading supplier of used industrial machinery in India, 
                    known for quality, innovation, and exceptional customer service.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="p-2 bg-emerald-100 rounded-lg mr-4">
                  <Users className="text-emerald-600" size={24} />
                </div>
                Why Choose Us?
              </h4>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="p-1 bg-emerald-100 rounded-full mr-4 mt-1 group-hover:bg-emerald-200 transition-colors">
                      <CheckCircle className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                </div>
                <h5 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h5>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Professional Team</h3>
              <p className="text-blue-100 text-lg">Experienced professionals dedicated to your success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-200">
                <div className="text-5xl font-bold text-emerald-300 mb-2">25+</div>
                <div className="text-xl font-semibold mb-2">Technical Experts</div>
                <div className="text-blue-100">Certified engineers and technicians</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-200">
                <div className="text-5xl font-bold text-cyan-300 mb-2">15+</div>
                <div className="text-xl font-semibold mb-2">Years Experience</div>
                <div className="text-blue-100">Industry expertise and knowledge</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-200">
                <div className="text-5xl font-bold text-amber-300 mb-2">24/7</div>
                <div className="text-xl font-semibold mb-2">Customer Support</div>
                <div className="text-blue-100">Always available when you need us</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OruxWebsite;