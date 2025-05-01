import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Layout, LayoutGrid, ChevronDown } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { productData } from '../data/products';
import { Product } from '../types/product';

const categories = [
  { value: 'neural', label: 'Neural Interfaces', count: 3 },
  { value: 'prosthetics', label: 'Prosthetics', count: 4 },
  { value: 'ocular', label: 'Ocular Enhancements', count: 2 },
  { value: 'organs', label: 'Synthetic Organs', count: 3 },
  { value: 'exo', label: 'Exoskeletons', count: 2 },
];

const priceRanges = [
  { value: 'budget', label: 'Under $50,000', count: 3 },
  { value: 'mid', label: '$50,000 - $100,000', count: 5 },
  { value: 'premium', label: '$100,000 - $200,000', count: 4 },
  { value: 'luxury', label: 'Over $200,000', count: 2 },
];

const features = [
  { value: 'neural-feedback', label: 'Neural Feedback', count: 8 },
  { value: 'waterproof', label: 'Waterproof', count: 6 },
  { value: 'military-grade', label: 'Military Grade', count: 4 },
  { value: 'ai-powered', label: 'AI Powered', count: 5 },
  { value: 'night-vision', label: 'Night Vision', count: 3 },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRanges: [],
    features: []
  });

  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Apply category filters
    if (activeFilters.categories.length > 0) {
      result = result.filter(product => 
        activeFilters.categories.some(cat => 
          product.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    // Apply price range filters
    if (activeFilters.priceRanges.length > 0) {
      // This is a simplification - in a real app this would be more complex
      if (activeFilters.priceRanges.includes('budget')) {
        result = result.filter(product => parseInt(product.price.replace(/\D/g, '')) < 50000);
      }
      if (activeFilters.priceRanges.includes('mid')) {
        result = result.filter(product => {
          const price = parseInt(product.price.replace(/\D/g, ''));
          return price >= 50000 && price < 100000;
        });
      }
      if (activeFilters.priceRanges.includes('premium')) {
        result = result.filter(product => {
          const price = parseInt(product.price.replace(/\D/g, ''));
          return price >= 100000 && price < 200000;
        });
      }
      if (activeFilters.priceRanges.includes('luxury')) {
        result = result.filter(product => parseInt(product.price.replace(/\D/g, '')) >= 200000);
      }
    }

    // Apply feature filters
    if (activeFilters.features.length > 0) {
      result = result.filter(product => 
        activeFilters.features.some(feature => 
          (product.features || []).includes(feature)
        )
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
        break;
      case 'price-asc':
        result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
        break;
      case 'price-desc':
        result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' is default, no sorting needed
        break;
    }

    setFilteredProducts(result);
  }, [products, searchQuery, sortBy, activeFilters]);

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-dark-400 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Cybernetic <span className="text-primary-400">Products</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Explore our cutting-edge cybernetic enhancements designed to push the boundaries of human potential.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilter 
              categories={categories}
              priceRanges={priceRanges}
              features={features}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="flex-grow">
            {/* Search and Sort */}
            <div className="bg-dark-300 border border-gray-800 rounded-xl p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-dark-400 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none w-full bg-dark-400 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
                  </div>
                  <button 
                    onClick={toggleFilters}
                    className="lg:hidden bg-dark-400 border border-gray-700 rounded-lg p-2 text-white hover:border-primary-500 transition-colors"
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                  </button>
                  <div className="hidden md:flex border border-gray-700 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-dark-400 text-gray-400 hover:text-white'} transition-colors`}
                    >
                      <LayoutGrid className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-dark-400 text-gray-400 hover:text-white'} transition-colors`}
                    >
                      <Layout className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6">
                <ProductFilter 
                  categories={categories}
                  priceRanges={priceRanges}
                  features={features}
                  onFilterChange={handleFilterChange}
                />
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 mb-4">No products found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilters({
                      categories: [],
                      priceRanges: [],
                      features: []
                    });
                    setSortBy('featured');
                  }}
                  className="text-primary-400 hover:text-primary-300"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;