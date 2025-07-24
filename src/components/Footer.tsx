import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-emerald-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-lg">OIG</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Orix International Group</h3>
                <p className="text-sm text-gray-400">Industrial Machinery Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for high-quality used industrial machinery, 
              expert retrofitting services, and comprehensive technical support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Industries
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Injection Moulding Machines
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blow Moulding Machines
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  CNC Machines
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Vertical Machining Centers
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Power Press Machines
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Industrial Robots
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-emerald-400 mt-1" size={16} />
                <div>
                  <div className="text-gray-300">+91 9847755707</div>
                  <div className="text-gray-300">+91 9847755707</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-cyan-400 mt-1" size={16} />
                <div>
                  <div className="text-gray-300">info@orixinternational.com</div>
                  <div className="text-gray-300">sales@orixinternational.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-rose-400 mt-1" size={16} />
                <div className="text-gray-300">
                  Industrial Area, Sector-XX<br />
                  City, State - 000000, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Orix International Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;