import { Settings, Wrench, Package, Play, GraduationCap, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Settings className="text-emerald-600" size={32} />,
      title: 'Machine Repair & Maintenance',
      description: 'Comprehensive repair and preventive maintenance services to keep your equipment running at peak performance.',
      features: [
        'Emergency breakdown support',
        'Preventive maintenance programs',
        'Performance optimization',
        'Extended warranty options'
      ]
    },
    {
      icon: <Wrench className="text-cyan-600" size={32} />,
      title: 'PLC Retrofitting',
      description: 'Upgrade your existing machinery with modern PLC systems and servo drives for improved efficiency and control.',
      features: [
        'Latest PLC technology',
        'Servo motor upgrades',
        'Enhanced safety systems',
        'Remote monitoring capability'
      ]
    },
    {
      icon: <Package className="text-violet-600" size={32} />,
      title: 'Spare Parts Supply',
      description: 'Genuine and compatible spare parts for all major machinery brands with fast delivery across India.',
      features: [
        'Extensive inventory',
        'Fast delivery network',
        'Quality guaranteed parts',
        'Technical support included'
      ]
    },
    {
      icon: <Play className="text-amber-600" size={32} />,
      title: 'On-Site Demonstrations',
      description: 'See machines in action at your facility before purchase with our comprehensive demonstration service.',
      features: [
        'Complete setup at your site',
        'Real production testing',
        'Performance evaluation',
        'Technical consultation'
      ]
    },
    {
      icon: <GraduationCap className="text-rose-600" size={32} />,
      title: 'Training Programs',
      description: 'Comprehensive training for your operators and maintenance staff to maximize equipment productivity.',
      features: [
        'Operator training courses',
        'Maintenance workshops',
        'Safety protocols',
        'Certification programs'
      ]
    },
    {
      icon: <Search className="text-indigo-600" size={32} />,
      title: 'Custom Machine Sourcing',
      description: 'Can\'t find what you need? We\'ll source specific machinery based on your exact requirements.',
      features: [
        'Global sourcing network',
        'Custom specifications',
        'Quality inspection',
        'Delivery coordination'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond just selling machinery, we provide complete industrial solutions 
            including maintenance, upgrades, training, and technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need Custom Service Solutions?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Our expert team can create tailored service packages to meet your specific 
            industrial requirements. Contact us for a consultation.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200">
            Get Service Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;