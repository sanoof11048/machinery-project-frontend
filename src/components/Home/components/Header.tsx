import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-emerald-50 backdrop-blur-xl shadow-2xl shadow-emerald-500/10' 
        : 'bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md'
    }`}>
      {/* Top Info Bar with Gradient */}
      {!isScrolled && (
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-0 relative">
          <div className="flex justify-between items-center text-sm py-1">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 group">
                <Phone size={16} className="text-emerald-200 group-hover:text-white transition-colors" />
                <span className="font-medium">+91 7907805626</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Mail size={16} className="text-emerald-200 group-hover:text-white transition-colors" />
                <span className="font-medium">info@essarenterprises.com</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 group">
                <MapPin size={16} className="text-emerald-200 group-hover:text-white transition-colors" />
                <span className="font-medium">Thrissur, Kerala</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Clock size={16} className="text-emerald-200" />
              <span className="font-medium">Mon-Sat: 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>
      )}
      
      {/* Main Header */}
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-3 rounded-2xl shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300 group-hover:scale-105">
                <Zap size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
                {/* Essar <span className='hidden md:inline'>Enterprises</span> */}
                Essar Enterprises
              </h1>
              {/* <p className="text-sm text-emerald-600 font-semibold">Industrial Machinery Solutions</p> */}
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 text-gray-400 hover:text-emerald-600 font-semibold transition-all duration-300 hover:backdrop-blur-3xl rounded-xl group-hover:shadow-md"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>
                {/* Hover effect underline */}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 overflow-hidden group">
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden relative p-1 rounded-xl bg-transparent transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 ">
              <span className={`absolute block w-6 h-0.5 bg-emerald-600 transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-emerald-600 top-3 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-emerald-600 transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'min-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl m-4 shadow-xl">
            <nav className="flex flex-col space-y-2 px-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-emerald-600 font-semibold transition-all duration-300 hover:bg-white hover:shadow-md rounded-xl transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={16} className="text-emerald-500" />}
                </a>
              ))}
              <button
                className="mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-bold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      
    </header>
  );
};

export default Header;