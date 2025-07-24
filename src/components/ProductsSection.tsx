import { useState } from 'react';
import { Filter, Search, ArrowRight } from 'lucide-react';
import type { Product } from '../types';

interface ProductsSectionProps {
  onProductSelect: (product: Product) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onProductSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Injection Moulding',
    'Blow Moulding', 
    'CNC Machines',
    'Vertical Machining',
    'Power Press',
    'Robots'
  ];

  const products: Product[] = [
    {
      id: 'inj-001',
      name: 'Injection Moulding Machine 250T',
      category: 'Injection Moulding',
      image: 'https://images.pexels.com/photos/162568/factory-machine-technology-production-162568.jpeg',
      shortDescription: 'High-precision 250-ton injection moulding machine with servo motor drive',
      fullDescription: 'Professional-grade 250-ton injection moulding machine featuring advanced servo motor technology, precise temperature control, and energy-efficient operation. Ideal for automotive, consumer goods, and packaging applications.',
      features: [
        'Servo motor drive system',
        'Advanced PLC control',
        'Energy efficient design',
        'Precise temperature control',
        'Safety interlocks'
      ],
      applications: [
        'Automotive components',
        'Consumer products',
        'Packaging materials',
        'Electronic housings'
      ],
      tonnage: '250 Tons',
      energyRating: 'A+',
      availableUpgrades: ['PLC Upgrade', 'Servo Retrofit', 'Safety Systems'],
      specifications: {
        'Clamping Force': '250 Tons',
        'Shot Weight': '850g',
        'Screw Diameter': '45mm',
        'Max Daylight': '520mm',
        'Tie Bar Distance': '480 x 480mm'
      }
    },
    {
      id: 'blow-001',
      name: 'Blow Moulding Machine 5L',
      category: 'Blow Moulding',
      image: 'https://images.pexels.com/photos/3785100/pexels-photo-3785100.jpeg',
      shortDescription: 'Automatic blow moulding machine for 5L containers with multi-layer capability',
      fullDescription: 'State-of-the-art automatic blow moulding machine capable of producing up to 5L containers with multi-layer co-extrusion technology. Perfect for industrial containers, automotive tanks, and large packaging applications.',
      features: [
        'Multi-layer co-extrusion',
        'Automatic operation',
        'Quick mold changeover',
        'Energy efficient heating',
        'Quality monitoring system'
      ],
      applications: [
        'Industrial containers',
        'Automotive fuel tanks',
        'Chemical storage',
        'Food packaging'
      ],
      capacity: '5L Max Volume',
      energyRating: 'A',
      availableUpgrades: ['Advanced Controls', 'Multi-layer System', 'Automation Package'],
      specifications: {
        'Max Container Volume': '5L',
        'Production Rate': '120 pcs/hr',
        'Extruder Size': '65mm',
        'Mold Stations': '2',
        'Power Consumption': '45 kW'
      }
    },
    {
      id: 'cnc-001',
      name: 'CNC Machining Center VMC-850',
      category: 'CNC Machines',
      image: 'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg',
      shortDescription: 'Vertical machining center with 850mm travel and 4th axis capability',
      fullDescription: 'High-precision vertical machining center with 850mm X-Y travel, featuring rigid construction, advanced spindle technology, and optional 4th axis rotary table. Ideal for precision manufacturing and complex part production.',
      features: [
        'Rigid cast iron construction',
        'High-speed spindle',
        '4th axis ready',
        'Tool changer (24 tools)',
        'Flood coolant system'
      ],
      applications: [
        'Precision manufacturing',
        'Aerospace components',
        'Medical devices',
        'Die and mold making'
      ],
      capacity: '850mm Travel',
      energyRating: 'B+',
      availableUpgrades: ['4th Axis Rotary', 'High-Speed Spindle', 'Advanced Probing'],
      specifications: {
        'X-Axis Travel': '850mm',
        'Y-Axis Travel': '450mm',
        'Z-Axis Travel': '450mm',
        'Spindle Speed': '8000 RPM',
        'Tool Capacity': '24 Tools'
      }
    },
    {
      id: 'vmc-001',
      name: 'Vertical Machining Center VMP-1200',
      category: 'Vertical Machining',
      image: 'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg',
      shortDescription: '1200mm travel vertical machining center for heavy-duty applications',
      fullDescription: 'Heavy-duty vertical machining center with 1200mm travel capacity, designed for large part machining and high-volume production. Features robust construction and advanced control systems.',
      features: [
        'Heavy-duty construction',
        'Large work envelope',
        'Advanced CNC control',
        'Automatic tool changer',
        'Coolant management system'
      ],
      applications: [
        'Heavy machinery parts',
        'Large molds',
        'Industrial equipment',
        'Power generation components'
      ],
      capacity: '1200mm Travel',
      energyRating: 'B',
      availableUpgrades: ['Pallet Changer', 'High-Pressure Coolant', 'Spindle Upgrade'],
      specifications: {
        'X-Axis Travel': '1200mm',
        'Y-Axis Travel': '600mm',
        'Z-Axis Travel': '600mm',
        'Max Load': '2000kg',
        'Spindle Power': '15kW'
      }
    },
    {
      id: 'press-001',
      name: 'Power Press Machine 100T',
      category: 'Power Press',
      image: 'https://images.pexels.com/photos/162568/factory-machine-technology-production-162568.jpeg',
      shortDescription: '100-ton power press with mechanical drive and safety features',
      fullDescription: 'Reliable 100-ton mechanical power press designed for stamping, forming, and cutting operations. Features safety systems, adjustable stroke, and robust construction for industrial applications.',
      features: [
        'Mechanical drive system',
        'Safety light curtains',
        'Adjustable stroke length',
        'Emergency stop systems',
        'Overload protection'
      ],
      applications: [
        'Metal stamping',
        'Sheet forming',
        'Punching operations',
        'Industrial components'
      ],
      tonnage: '100 Tons',
      energyRating: 'B+',
      availableUpgrades: ['Servo Drive', 'Advanced Safety', 'Automation Integration'],
      specifications: {
        'Press Force': '100 Tons',
        'Bed Size': '1000 x 600mm',
        'Stroke Length': '120mm',
        'Strokes per Minute': '45',
        'Motor Power': '7.5kW'
      }
    },
    {
      id: 'robot-001',
      name: 'Industrial Robot 6-Axis',
      category: 'Robots',
      image: 'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg',
      shortDescription: '6-axis industrial robot for moulding machine automation',
      fullDescription: '6-axis articulated industrial robot designed specifically for injection moulding automation. Features precise positioning, high payload capacity, and integrated safety systems.',
      features: [
        '6-axis articulated arm',
        'High precision positioning',
        'Safety rated systems',
        'Easy programming',
        'Multiple I/O options'
      ],
      applications: [
        'Part removal',
        'Insert placement',
        'Quality inspection',
        'Packaging automation'
      ],
      capacity: '20kg Payload',
      energyRating: 'A',
      availableUpgrades: ['Vision System', 'Force Control', 'Advanced Programming'],
      specifications: {
        'Payload': '20kg',
        'Reach': '1800mm',
        'Repeatability': '±0.05mm',
        'Axes': '6',
        'Controller': 'Advanced CNC'
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive selection of quality-tested used industrial machinery 
            with expert retrofitting and upgrade services.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="text-gray-600 flex-shrink-0" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search machines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    product.energyRating === 'A+' ? 'bg-emerald-100 text-emerald-800' :
                    product.energyRating === 'A' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {product.energyRating}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.shortDescription}</p>
                
                {product.tonnage && (
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Capacity:</span> {product.tonnage}
                  </div>
                )}
                {product.capacity && (
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Capacity:</span> {product.capacity}
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => onProductSelect(product)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 flex items-center group"
                  >
                    View Details
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </button>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No machines found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;