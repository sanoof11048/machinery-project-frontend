import React from 'react';
import { ArrowLeft, CheckCircle, Settings, Award, Phone } from 'lucide-react';
import type { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-medium"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Products
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover"
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
                  Energy Rating: {product.energyRating}
                </span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.tonnage && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Tonnage</div>
                    <div className="text-lg font-semibold text-gray-800">{product.tonnage}</div>
                  </div>
                )}
                {product.capacity && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="text-lg font-semibold text-gray-800">{product.capacity}</div>
                  </div>
                )}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Energy Rating</div>
                  <div className="text-lg font-semibold text-gray-800">{product.energyRating}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Category</div>
                  <div className="text-lg font-semibold text-gray-800">{product.category}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  Request Quote
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="text-emerald-600 mr-2" size={20} />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Settings className="text-cyan-600 mr-2" size={20} />
                    Applications
                  </h3>
                  <ul className="space-y-2">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Upgrades */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="text-violet-600 mr-2" size={20} />
                    Available Upgrades
                  </h3>
                  <ul className="space-y-2">
                    {product.availableUpgrades.map((upgrade, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="text-violet-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{upgrade}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;