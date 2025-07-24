import { ArrowRight } from 'lucide-react';
import { useProductContext } from '../../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductsSection = () => {
  const { products, selectProduct } = useProductContext();
   const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-teal-50">
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
        {/* <div className="flex flex-col md:flex-row gap-4 mb-12">
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
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div> */}
                {/* <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    product.energyRating === 'A+' ? 'bg-emerald-100 text-emerald-800' :
                    product.energyRating === 'A' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {product.energyRating}
                  </span>
                </div> */}
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
                    onClick={() => {
                      selectProduct(product)
                      navigate('/product')
                    }}
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

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No machines found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;