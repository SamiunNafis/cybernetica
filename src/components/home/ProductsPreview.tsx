import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "NeuroLink X1",
    category: "Neural Interface",
    image:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$149,999",
    description:
      "Direct brain-computer interface with advanced neural mapping capabilities.",
  },
  {
    id: 2,
    name: "Bionic Arm Pro",
    category: "Prosthetics",
    image:
      "https://images.pexels.com/photos/8566455/pexels-photo-8566455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$89,999",
    description:
      "Military-grade prosthetic with enhanced strength and precision.",
  },
  {
    id: 3,
    name: "OculTech Vision",
    category: "Ocular Enhancement",
    image:
      "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$74,999",
    description:
      "Advanced vision system with night vision and AR capabilities.",
  },
];

const ProductsPreview: React.FC = () => {
  return (
    <section className="bg-dark-400 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Featured Products
            </h2>
            <p className="text-gray-300 mt-2 max-w-xl">
              Explore our latest cybernetic enhancements designed for superior
              performance and seamless integration.
            </p>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 flex items-center text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span className="mr-2">View all products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-dark-300 border border-gray-800 rounded-xl overflow-hidden group hover:border-primary-500/50 hover:shadow-glow transition-all duration-500"
            >
              <Link to={`/products/${product.id}`}>
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-display font-semibold text-white">
                      {product.price}
                    </span>
                    <Link to={`/products/${product.id}`}>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
