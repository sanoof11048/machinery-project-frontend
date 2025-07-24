import { useState } from 'react';
import { ArrowLeft, CheckCircle, Settings, Award, Phone, Mail, Share2, Heart, Star, Download, Info, Zap, Shield, Wrench } from 'lucide-react';
import { useProductContext } from '../../../context/ProductContext';


const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const {selectedProduct : product} = useProductContext()
  // const product = mockProduct;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Info },
    { id: 'specifications', name: 'Specifications', icon: Settings },
    { id: 'features', name: 'Features', icon: Zap },
    { id: 'support', name: 'Support', icon: Shield }
  ];

  if(!product) 
    return (<div>Loading</div>)
  return (
    <div className="mt-5 min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50">
      {/* Hero Section */}
      <div className="relative pt-24 overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button className="flex items-center text-white/80 hover:text-white mb-6 font-medium transition-colors duration-200 group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" size={20} />
            Back to Products
          </button>

          {/* Breadcrumb */}
          <nav className="text-white/60 text-sm mb-6">
            <span>Products</span> / <span className="text-emerald-300">{product.category}</span> / <span className="text-white">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Info */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                  <span className="text-white/80 ml-2">4.8 (124 reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                {product.name}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-300">{product.tonnage}</div>
                  <div className="text-white/70 text-sm">Max Capacity</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-300">{product.energyRating}</div>
                  <div className="text-white/70 text-sm">Energy Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-300">{product.capacity}</div>
                  <div className="text-white/70 text-sm">Output Rate</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center">
                  <Phone className="mr-2" size={20} />
                  Request Quote
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center">
                  <Mail className="mr-2" size={20} />
                  Schedule Demo
                </button>
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <Heart className={`${isLiked ? 'fill-current text-red-400' : ''}`} size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Energy Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    Energy Rating: {product.energyRating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-2 bg-white rounded-2xl shadow-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <Icon size={18} className="mr-2" />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeTab === 'overview' && (
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <CheckCircle className="text-emerald-600" size={24} />
                    </div>
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start bg-emerald-50 p-4 rounded-xl hover:bg-emerald-100 transition-colors duration-200">
                        <CheckCircle className="text-emerald-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="bg-cyan-100 p-2 rounded-lg mr-3">
                      <Settings className="text-cyan-600" size={24} />
                    </div>
                    Applications
                  </h3>
                  <div className="space-y-3">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-start bg-cyan-50 p-4 rounded-xl hover:bg-cyan-100 transition-colors duration-200">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Upgrades */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="bg-violet-100 p-2 rounded-lg mr-3">
                      <Award className="text-violet-600" size={24} />
                    </div>
                    Available Upgrades
                  </h3>
                  <div className="space-y-3">
                    {product.availableUpgrades.map((upgrade, index) => (
                      <div key={index} className="flex items-start bg-violet-50 p-4 rounded-xl hover:bg-violet-100 transition-colors duration-200">
                        <Award className="text-violet-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">{upgrade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                  <Settings className="text-emerald-600" size={32} />
                </div>
                Technical Specifications
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl p-8 shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                      <span className="font-bold text-gray-700">{key}</span>
                      <span className="text-gray-600 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                  <Zap className="text-yellow-600" size={32} />
                </div>
                Advanced Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="text-emerald-600" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{feature}</h4>
                    <p className="text-gray-600 text-sm">Advanced technology ensuring optimal performance and reliability.</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                Support & Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Wrench className="text-blue-600 mr-2" size={20} />
                      Technical Support
                    </h4>
                    <p className="text-gray-600">24/7 technical support with expert engineers available for troubleshooting and maintenance guidance.</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Shield className="text-emerald-600 mr-2" size={20} />
                      Warranty Coverage
                    </h4>
                    <p className="text-gray-600">Comprehensive 3-year warranty covering all major components and manufacturing defects.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Download className="text-violet-600 mr-2" size={20} />
                      Documentation
                    </h4>
                    <p className="text-gray-600">Access to complete technical documentation, user manuals, and maintenance schedules.</p>
                    <button className="mt-3 text-violet-600 font-semibold hover:text-violet-700">Download Resources →</button>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Phone className="text-orange-600 mr-2" size={20} />
                      Contact Support
                    </h4>
                    <p className="text-gray-600">Get in touch with our support team for immediate assistance and expert guidance.</p>
                    <button className="mt-3 text-orange-600 font-semibold hover:text-orange-700">Contact Now →</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-emerald-100 mb-8 text-lg">Contact our experts for a personalized quote and consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Request Quote Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;