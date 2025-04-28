import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const RobotViewer: React.FC = () => {
  return (
    <motion.div 
      className="w-full h-full rounded-xl overflow-hidden relative"
      animate={{ 
        y: [0, -20, 0],
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-400 to-transparent z-10" />
      {/* Add overlay to hide Spline watermark */}
      <div className="absolute bottom-0 right-0 w-32 h-8 bg-dark-400 z-20" />
      <Spline scene="https://prod.spline.design/dS8QxWPLI0c6ugsp/scene.splinecode" />
    </motion.div>
  );
};

export default RobotViewer;