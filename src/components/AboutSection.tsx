import { Target, Eye, CheckCircle, Users } from 'lucide-react';

const AboutSection = () => {
  const whyChooseUs = [
    'Extensive inventory of quality-tested machinery',
    'Expert technical support and consultation',
    'Comprehensive retrofitting and upgrade services',
    'On-site demonstrations and training',
    'Competitive pricing with flexible terms',
    'Pan-India delivery and installation support'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Orix International Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in industrial machinery solutions, delivering excellence
            through expertise, innovation, and customer-centric service.
          </p>
        </div>

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

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Professional Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-800 font-semibold mb-2">Technical Experts</div>
              <div className="text-gray-600">Certified engineers and technicians</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
              <div className="text-gray-800 font-semibold mb-2">Years Experience</div>
              <div className="text-gray-600">Industry expertise and knowledge</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-violet-600 mb-2">24/7</div>
              <div className="text-gray-800 font-semibold mb-2">Customer Support</div>
              <div className="text-gray-600">Always available when you need us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;