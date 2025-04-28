import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FilterX, Check } from 'lucide-react';
import { FilterOption, ActiveFilters } from '../../types/product';

interface ProductFilterProps {
  categories: FilterOption[];
  priceRanges: FilterOption[];
  features: FilterOption[];
  onFilterChange: (filters: ActiveFilters) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ 
  categories, 
  priceRanges, 
  features,
  onFilterChange 
}) => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    categories: [],
    priceRanges: [],
    features: []
  });

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    priceRanges: true,
    features: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const toggleFilter = (type: keyof ActiveFilters, value: string) => {
    const newFilters = { ...activeFilters };
    
    if (newFilters[type].includes(value)) {
      newFilters[type] = newFilters[type].filter(v => v !== value);
    } else {
      newFilters[type] = [...newFilters[type], value];
    }
    
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters: ActiveFilters = {
      categories: [],
      priceRanges: [],
      features: []
    };
    setActiveFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const totalActiveFilters = Object.values(activeFilters).flat().length;

  return (
    <div className="bg-dark-400 border border-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-display font-semibold text-white">Filters</h3>
        {totalActiveFilters > 0 && (
          <button 
            onClick={clearFilters}
            className="flex items-center text-sm text-gray-400 hover:text-primary-400 transition-colors"
          >
            <FilterX className="h-4 w-4 mr-1" />
            Clear all
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6 border-b border-gray-800 pb-6">
        <button 
          className="flex items-center justify-between w-full text-white font-medium mb-4"
          onClick={() => toggleSection('categories')}
        >
          <span>Categories</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`} />
        </button>
        
        {expandedSections.categories && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {categories.map((category) => (
              <div key={category.value} className="flex items-center">
                <button
                  className={`flex items-center w-full group`}
                  onClick={() => toggleFilter('categories', category.value)}
                >
                  <div className={`w-5 h-5 flex-shrink-0 border rounded flex items-center justify-center mr-3 transition-colors ${
                    activeFilters.categories.includes(category.value) 
                      ? 'bg-primary-600 border-primary-600' 
                      : 'border-gray-600 group-hover:border-primary-500'
                  }`}>
                    {activeFilters.categories.includes(category.value) && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors flex-1 text-left text-sm">
                    {category.label}
                  </span>
                  <span className="text-gray-500 text-xs">({category.count})</span>
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Price Ranges */}
      <div className="mb-6 border-b border-gray-800 pb-6">
        <button 
          className="flex items-center justify-between w-full text-white font-medium mb-4"
          onClick={() => toggleSection('priceRanges')}
        >
          <span>Price Range</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.priceRanges ? 'rotate-180' : ''}`} />
        </button>
        
        {expandedSections.priceRanges && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {priceRanges.map((range) => (
              <div key={range.value} className="flex items-center">
                <button
                  className={`flex items-center w-full group`}
                  onClick={() => toggleFilter('priceRanges', range.value)}
                >
                  <div className={`w-5 h-5 flex-shrink-0 border rounded flex items-center justify-center mr-3 transition-colors ${
                    activeFilters.priceRanges.includes(range.value) 
                      ? 'bg-primary-600 border-primary-600' 
                      : 'border-gray-600 group-hover:border-primary-500'
                  }`}>
                    {activeFilters.priceRanges.includes(range.value) && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors flex-1 text-left text-sm">
                    {range.label}
                  </span>
                  <span className="text-gray-500 text-xs">({range.count})</span>
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Features */}
      <div>
        <button 
          className="flex items-center justify-between w-full text-white font-medium mb-4"
          onClick={() => toggleSection('features')}
        >
          <span>Features</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.features ? 'rotate-180' : ''}`} />
        </button>
        
        {expandedSections.features && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {features.map((feature) => (
              <div key={feature.value} className="flex items-center">
                <button
                  className={`flex items-center w-full group`}
                  onClick={() => toggleFilter('features', feature.value)}
                >
                  <div className={`w-5 h-5 flex-shrink-0 border rounded flex items-center justify-center mr-3 transition-colors ${
                    activeFilters.features.includes(feature.value) 
                      ? 'bg-primary-600 border-primary-600' 
                      : 'border-gray-600 group-hover:border-primary-500'
                  }`}>
                    {activeFilters.features.includes(feature.value) && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors flex-1 text-left text-sm">
                    {feature.label}
                  </span>
                  <span className="text-gray-500 text-xs">({feature.count})</span>
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;