import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-dark-400 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-primary-900/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
      
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM0QjAwODIiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOHYyNGg4eiIvPjxwYXRoIGQ9Ik0zMCAxOHYyNE0zMCAxOEgxOE00MiAxOEgzME0xOCAxOHYxMk0xOCAzMHYxMk00MiAxOHYxMk00MiAzMHYxMk0xOCAxOEgwTTYwIDE4SDQyTTE4IDMwSDBNNjAgMzBINDJNMTggNDJIME02MCA0Mkg0MiIvPjwvZz48L3N2Zz4=')] opacity-5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary-900/80 to-dark-300 backdrop-blur-sm border border-primary-500/20 rounded-3xl overflow-hidden shadow-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    Ready to Upgrade Your Human Experience?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Schedule a consultation with our cybernetic specialists to explore how our cutting-edge enhancements can elevate your capabilities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center group">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border border-primary-500/50 bg-transparent text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-900/20 transition-colors">
                      View Catalog
                    </button>
                  </div>
                </div>
                <div className="lg:pl-12">
                  <div className="bg-dark-400/70 backdrop-blur-md rounded-xl p-6 border border-primary-800/50">
                    <h3 className="text-xl font-display font-semibold text-white mb-4">
                      What to Expect
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Personalized cybernetic assessment",
                        "Customized enhancement recommendations",
                        "Virtual preview of your upgrades",
                        "Detailed pricing and financing options",
                        "Comprehensive support plan"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;