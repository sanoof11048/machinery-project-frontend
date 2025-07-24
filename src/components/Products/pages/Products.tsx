import { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, Heart, Eye, ArrowRight, Zap, Award, Settings, Wrench, ChevronDown, X, Plus, Truck, Shield } from 'lucide-react';
import { useProductContext } from '../../../context/ProductContext';




const categories = ["All", "Injection Moulding", "CNC Machines", "Cutting Equipment", "Lathe Machines", "Grinding Machines"];
const sortOptions = [
  { value: "name", label: "Name A-Z" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" }
];

const ProductsPage = () => {
  const { products, loading } = useProductContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [energyFilter, setEnergyFilter] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [compareList, setCompareList] = useState(new Set());

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesEnergy = energyFilter === "All" || product.energyRating === energyFilter;
      return matchesSearch && matchesCategory && matchesEnergy;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, energyFilter, priceRange, products]);

  const toggleLike = (productId: any) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const toggleCompare = (productId: any) => {
    setCompareList(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId) || newSet.size < 3) {
        if (newSet.has(productId)) {
          newSet.delete(productId);
        } else {
          newSet.add(productId);
        }
      }
      return newSet;
    });
  };

  const ProductCard = ({ product }: any) => (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-3 border border-gray-100">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
              ✨ NEW
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              🔥 FEATURED
            </span>
          )}
        </div>

        {/* Energy Rating */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${product.energyRating === 'A+' ? 'bg-emerald-500/90 text-white' :
            product.energyRating === 'A' ? 'bg-emerald-400/90 text-white' :
              'bg-yellow-400/90 text-gray-800'
            }`}>
            ⚡ {product.energyRating}
          </div>
        </div>

        {/* Availability Badge */}
        <div className="absolute bottom-4 left-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${product.availability === 'In Stock' ? 'bg-green-500/90 text-white' : 'bg-orange-500/90 text-white'
            }`}>
            {product.availability === 'In Stock' ? '✓ In Stock' : '⏱ Pre-Order'}
          </div>
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedProduct(product)}
              className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Eye size={20} />
            </button>
            <button
              onClick={() => toggleLike(product.id)}
              className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Heart className={`${likedProducts.has(product.id) ? 'fill-current text-red-400' : ''}`} size={20} />
            </button>
            <button
              onClick={() => toggleCompare(product.id)}
              className={`backdrop-blur-md p-4 rounded-full transition-all duration-200 hover:scale-110 shadow-lg ${compareList.has(product.id) ? 'bg-emerald-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-emerald-600 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-gray-700 font-medium text-sm">{product.rating}</span>
            <span className="text-gray-400 text-sm">({product.reviews})</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-200 leading-tight">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl border">
            <div className="text-xs text-gray-500 font-medium">Tonnage</div>
            <div className="font-bold text-gray-800">{product.tonnage}</div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl border">
            <div className="text-xs text-gray-500 font-medium">Capacity</div>
            <div className="font-bold text-gray-800">{product.capacity}</div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.features.slice(0, 3).map((feature: any, index: number) => (
            <span key={index} className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-200">
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
              +{product.features.length - 3} more
            </span>
          )}
        </div>

        {/* Delivery Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Truck size={14} />
            <span>{product.delivery}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield size={14} />
            <span>Warranty</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-emerald-600">{product.price}</div>
            <div className="text-xs text-gray-500">Apprx. price</div>
          </div>
          <button
            onClick={() => setSelectedProduct(product)}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center hover:scale-105"
          >
            View Details
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );

  const ProductListItem = ({ product }: any) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="flex">
        <div className="relative w-80 h-64">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <div className={`px-2 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${product.energyRating === 'A+' ? 'bg-emerald-500/90 text-white' :
              product.energyRating === 'A' ? 'bg-emerald-400/90 text-white' :
                'bg-yellow-400/90 text-gray-800'
              }`}>
              ⚡ {product.energyRating}
            </div>
          </div>
          <div className="absolute bottom-3 left-3">
            <div className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${product.availability === 'In Stock' ? 'bg-green-500/90 text-white' : 'bg-orange-500/90 text-white'
              }`}>
              {product.availability === 'In Stock' ? '✓ In Stock' : '⏱ Pre-Order'}
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-emerald-600 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">{product.name}</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="text-gray-700 font-medium">{product.rating}</span>
                <span className="text-gray-400">({product.reviews})</span>
              </div>
              <button
                onClick={() => toggleLike(product.id)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <Heart className={`${likedProducts.has(product.id) ? 'fill-current text-red-400' : 'text-gray-400'}`} size={20} />
              </button>
            </div>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl border">
              <div className="text-xs text-gray-500 font-medium">Tonnage</div>
              <div className="font-bold text-gray-800">{product.tonnage}</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl border">
              <div className="text-xs text-gray-500 font-medium">Capacity</div>
              <div className="font-bold text-gray-800">{product.capacity}</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-3 rounded-xl border border-emerald-200">
              <div className="text-xs text-emerald-600 font-medium">Price</div>
              <div className="font-bold text-emerald-600">{product.price}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl border border-blue-200">
              <div className="text-xs text-blue-600 font-medium">Delivery</div>
              <div className="font-bold text-blue-600">{product.delivery}</div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              {product.features.slice(0, 4).map((feature: any, index: number) => (
                <span key={index} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200">
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => toggleCompare(product.id)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${compareList.has(product.id)
                  ? 'bg-emerald-500 text-white'
                  : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                  }`}
              >
                {compareList.has(product.id) ? 'Added' : 'Compare'}
              </button>
              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Product Detail Modal
  const ProductModal = ({ product, onClose }: any) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-200"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${product.energyRating === 'A+' ? 'bg-emerald-500/90 text-white' :
                      product.energyRating === 'A' ? 'bg-emerald-400/90 text-white' :
                        'bg-yellow-400/90 text-gray-800'
                      }`}>
                      ⚡ {product.energyRating}
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
                  <h4 className="font-bold text-gray-800 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature: any, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                <div>
                  <span className="text-emerald-600 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-800 mt-3 mb-2">{product.name}</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={18} />
                      <span className="text-gray-700 font-medium">{product.rating}</span>
                      <span className="text-gray-400">({product.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{product.description}</p>

                {/* Specifications */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-4">Technical Specifications</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value as string}</span>
                      </div>
                    ))}


                  </div>
                </div>

                {/* Pricing and Actions */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-2xl text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-3xl font-bold">{product.price}</div>
                      <div className="text-emerald-100 text-sm">Ex-factory price</div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${product.availability === 'In Stock' ? 'bg-green-500/20 text-green-100' : 'bg-orange-500/20 text-orange-100'
                        }`}>
                        {product.availability}
                      </div>
                      <div className="text-emerald-100 text-sm mt-1">Delivery: {product.delivery}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-200">
                      Request Quote
                    </button>
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all duration-200">
                      Contact Expert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-5 min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50">
      {/* Enhanced Hero Section */}
      <div className="relative pt-10 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Industrial Machinery
            </h1>
            <h2 className="text-4xl font-bold mb-6 text-emerald-100">
              Premium Products
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-quality industrial machinery designed for maximum efficiency, reliability, and precision manufacturing
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl font-bold text-emerald-300 mb-2">200+</div>
                <div className="text-emerald-100 font-medium">Products</div>
                <div className="text-emerald-200 text-sm mt-1">Premium Quality</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl font-bold text-emerald-300 mb-2">50+</div>
                <div className="text-emerald-100 font-medium">Categories</div>
                <div className="text-emerald-200 text-sm mt-1">Wide Range</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl font-bold text-emerald-300 mb-2">1000+</div>
                <div className="text-emerald-100 font-medium">Happy Clients</div>
                <div className="text-emerald-200 text-sm mt-1">Worldwide</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl font-bold text-emerald-300 mb-2">15+</div>
                <div className="text-emerald-100 font-medium">Years Experience</div>
                <div className="text-emerald-200 text-sm mt-1">Industry Leader</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Wrench size={64} className="text-white animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Settings size={48} className="text-white animate-spin" style={{ animationDuration: '8s' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Search and Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Enhanced Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products, categories, or specifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white min-w-[200px] font-medium"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white min-w-[200px] font-medium"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-2xl p-2 border-2 border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-200 ${viewMode === 'grid' ? 'bg-emerald-500 text-white shadow-md' : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-200'
                  }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-200 ${viewMode === 'list' ? 'bg-emerald-500 text-white shadow-md' : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-200'
                  }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:shadow-lg transition-all duration-200 font-medium"
            >
              <Filter size={20} className="mr-2" />
              Advanced Filters
              <ChevronDown className={`ml-2 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} size={16} />
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Energy Rating</label>
                  <div className="relative">
                    <select
                      value={energyFilter}
                      onChange={(e) => setEnergyFilter(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 appearance-none bg-white"
                    >
                      <option value="All">All Ratings</option>
                      <option value="A+">A+ (Most Efficient)</option>
                      <option value="A">A (Efficient)</option>
                      <option value="B+">B+ (Standard)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Price Range: ₹{priceRange[0]}L - ₹{priceRange[1]}L
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>₹0L</span>
                      <span>₹50L</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Availability</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-emerald-500 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-emerald-500 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-gray-700">New Products</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setEnergyFilter("All");
                      setPriceRange([0, 50]);
                    }}
                    className="px-6 py-3 text-emerald-600 hover:text-emerald-700 font-semibold border-2 border-emerald-200 rounded-xl hover:bg-emerald-50 transition-all duration-200"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Compare Bar */}
        {compareList.size > 0 && (
          <div className="bg-emerald-500 text-white p-4 rounded-2xl mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Compare Products ({compareList.size}/3)</span>
                <div className="flex gap-2">
                  {Array.from(compareList).map((productId: any) => {
                    const product = products.find(p => p.id === productId);
                    return (
                      <div key={productId} className="bg-white/20 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                        {product?.name.substring(0, 20)}...
                        <button onClick={() => toggleCompare(productId)}>
                          <X size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className="bg-white text-emerald-500 px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Compare Now
              </button>
            </div>
          </div>
        )}

        {/* Results Count and Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <p className="text-gray-700 text-lg">
              Showing <span className="font-bold text-emerald-600">{filteredAndSortedProducts.length}</span> products
              {selectedCategory !== "All" && (
                <span className="text-gray-500"> in {selectedCategory}</span>
              )}
            </p>
            {searchTerm && (
              <p className="text-gray-500 text-sm mt-1">
                Search results for "<span className="font-medium">{searchTerm}</span>"
              </p>
            )}
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Zap className="text-emerald-500" size={18} />
              <span className="font-medium">Energy Efficient Options</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-blue-500" size={18} />
              <span className="font-medium">Warranty Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-orange-500" size={18} />
              <span className="font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>
            {loading&&(
              <>Loading...</>
            )}
        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {filteredAndSortedProducts.map(product => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
              <Settings className="text-gray-400" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">No products found</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
              We couldn't find any products matching your criteria. Try adjusting your search or filters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setEnergyFilter("All");
                  setPriceRange([0, 50]);
                }}
                className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all duration-200 hover:shadow-lg"
              >
                Clear All Filters
              </button>
              <button className="bg-white text-emerald-600 border-2 border-emerald-500 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all duration-200">
                Browse All Products
              </button>
            </div>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

          <div className="relative">
            <h3 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-emerald-100 mb-8 text-xl max-w-2xl mx-auto">
              Our industrial machinery experts are here to help you find the perfect solution for your specific manufacturing needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Award className="mx-auto mb-3 text-emerald-200" size={32} />
                <h4 className="font-bold mb-2">Expert Consultation</h4>
                <p className="text-emerald-100 text-sm">Free technical consultation with our machinery specialists</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Settings className="mx-auto mb-3 text-emerald-200" size={32} />
                <h4 className="font-bold mb-2">Custom Solutions</h4>
                <p className="text-emerald-100 text-sm">Tailored machinery solutions for your unique requirements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="mx-auto mb-3 text-emerald-200" size={32} />
                <h4 className="font-bold mb-2">Quality Assurance</h4>
                <p className="text-emerald-100 text-sm">Premium quality products with comprehensive warranty</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                🎯 Contact Our Experts
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30">
                📋 Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;