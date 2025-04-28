import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Heart, Eye, Brain } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-7 w-7" />,
    title: "Neural Interfaces",
    description: "Direct brain-computer interfaces for seamless control of cybernetic components and enhanced cognitive abilities.",
  },
  {
    icon: <Cpu className="h-7 w-7" />,
    title: "Bionic Limbs",
    description: "Advanced prosthetics with neural feedback, providing enhanced strength, precision, and natural movement.",
  },
  {
    icon: <Eye className="h-7 w-7" />,
    title: "Ocular Enhancements",
    description: "Augmented vision systems with night vision, zoom capabilities, and augmented reality overlays.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Military-Grade Materials",
    description: "Ultra-durable, lightweight components designed to withstand extreme conditions and physical stress.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Power Systems",
    description: "Long-lasting, self-recharging power sources utilizing bio-electric conversion technology.",
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Organ Replacements",
    description: "Synthetic organs with improved efficiency and longevity compared to their biological counterparts.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-dark-300 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Advanced <span className="text-primary-400">Cybernetic</span> Technologies
          </h2>
          <p className="text-gray-300">
            Our cutting-edge enhancements utilize the most advanced technologies available, 
            pushing the boundaries of what's possible in human augmentation.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-dark-400 border border-primary-900/50 rounded-xl p-6 transition-all duration-300 hover:border-primary-500/50 hover:shadow-glow group"
              variants={item}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-900/30 flex items-center justify-center mb-4 text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;