import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-dark-300 border border-gray-800 rounded-xl overflow-hidden group hover:border-primary-500/50 hover:shadow-glow transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 bg-primary-900/80 text-primary-200 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
          {product.category}
        </div>
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-accent-600/80 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
            New
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
              />
            ))}
          </div>
          <span className="text-gray-500 text-xs ml-2">({product.reviewCount})</span>
        </div>
        <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 mb-4 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-display font-semibold text-white">{product.price}</span>
          <Link to={`/products/${product.id}`} className="flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm">
            <span>Details</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;