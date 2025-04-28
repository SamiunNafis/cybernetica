import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Shield, Zap, Brain } from 'lucide-react';
import { productData } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-dark-400 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/products')}
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-400 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <button 
          onClick={() => navigate('/products')}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {product.isNew && (
              <div className="absolute top-4 right-4 bg-accent-600/80 text-white text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                New
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="text-primary-400 text-sm font-medium mb-2">{product.category}</div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm ml-2">({product.reviewCount} reviews)</span>
              </div>
              <div className="text-3xl font-display font-bold text-white">{product.price}</div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-dark-300 p-4 rounded-lg">
                    {feature === 'neural-feedback' && <Brain className="h-5 w-5 text-primary-400" />}
                    {feature === 'military-grade' && <Shield className="h-5 w-5 text-primary-400" />}
                    {feature === 'ai-powered' && <Zap className="h-5 w-5 text-primary-400" />}
                    <span className="text-gray-300 capitalize">{feature.replace('-', ' ')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <button 
                onClick={() => alert('Contact form will be implemented')}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;