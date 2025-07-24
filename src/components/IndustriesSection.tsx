import { Factory, Pill, Car, Package, Zap, Cog } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Factory className="text-emerald-600" size={32} />,
      name: 'Plastic Manufacturing',
      description: 'Injection molding, blow molding, and extrusion equipment for plastic product manufacturers.',
      applications: [
        'Consumer product molding',
        'Packaging production',
        'Automotive plastic parts',
        'Industrial components'
      ]
    },
    {
      icon: <Pill className="text-cyan-600" size={32} />,
      name: 'Pharmaceutical Packaging',
      description: 'Precision machinery for pharmaceutical containers, caps, and packaging solutions.',
      applications: [
        'Medicine bottle production',
        'Syringe manufacturing',
        'Medical device housing',
        'Sterile packaging'
      ]
    },
    {
      icon: <Car className="text-rose-600" size={32} />,
      name: 'Automotive Components',
      description: 'High-precision CNC and molding equipment for automotive part manufacturing.',
      applications: [
        'Engine components',
        'Interior trim parts',
        'Fuel system components',
        'Electrical housings'
      ]
    },
    {
      icon: <Package className="text-violet-600" size={32} />,
      name: 'Consumer Goods Production',
      description: 'Versatile machinery for household items, toys, and consumer product manufacturing.',
      applications: [
        'Household appliance parts',
        'Toy manufacturing',
        'Kitchen accessories',
        'Personal care products'
      ]
    },
    {
      icon: <Zap className="text-amber-600" size={32} />,
      name: 'Electrical & Electronics',
      description: 'Precision equipment for electrical component and electronic device manufacturing.',
      applications: [
        'Electrical enclosures',
        'Electronic housings',
        'Circuit board components',
        'Cable accessories'
      ]
    },
    {
      icon: <Cog className="text-indigo-600" size={32} />,
      name: 'Industrial Equipment',
      description: 'Heavy-duty machinery for industrial component and equipment manufacturing.',
      applications: [
        'Hydraulic components',
        'Pneumatic parts',
        'Industrial valves',
        'Machine components'
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our industrial machinery solutions power manufacturing across diverse 
            sectors, helping businesses achieve operational excellence and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-200 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {industry.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {industry.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Applications:</h4>
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 bg-gradient-to-r from-indigo-800 to-purple-900 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">6+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-gray-300">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-gray-300">Machines Deployed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;