import { ArrowRight, CheckCircle, Award, Settings } from 'lucide-react';
import bg1 from '../../../assets/random/Injection Molding in Action.png';
import bg2 from '../../../assets/random/Modern Industrial Workshop in Action.png';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const images = [bg1, bg2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Slide transition effect
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);
  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (

       <section id="home" className="relative min-h-screen overflow-hidden text-white">
      {/* Slider Wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          ref={slideRef}
          className="flex transition-transform duration-1200 ease-in-out w-full h-full"
          style={{ width: "100%" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="w-full h-full bg-black/40"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-screen">
      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl mt-10 font-bold leading-tight">
                Your Trusted Source for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Premium
                </span>{' '}
                Industrial Machinery
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Specializing in injection molding machines, CNC equipment, blow molding machines,
                and comprehensive retrofitting services. We deliver reliable industrial solutions
                with expert support and on-site demonstrations.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center align-middle content-center text-center">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                <span className="text-sm font-medium text-center">On-Site Demos</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Settings className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">PLC Retrofitting</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Award className="text-amber-400 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-300 font-medium">Machines Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-amber-400 mb-2">200+</div>
              <div className="text-gray-300 font-medium">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-violet-400 mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;