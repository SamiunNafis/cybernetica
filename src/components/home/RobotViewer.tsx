import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useDeviceType } from '../../hooks/useDeviceType';

const RobotViewer: React.FC = () => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';

  console.log('Device Type:', deviceType);

  if (!isDesktop) {
    return (
      // <motion.div 
      //   className="w-full h-full rounded-xl overflow-hidden relative"
      //   initial={{ opacity: 0, scale: 0.95 }}
      //   animate={{ opacity: 1, scale: 1 }}
      //   transition={{ duration: 0.6 }}
      // >
      //   {/* <img 
      //     src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      //     alt="Cybernetic Enhancement"
      //     className="w-full h-full object-cover"
      //   /> */}
      // </motion.div>
      <></>
    );
  }

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
      <div className="absolute bottom-0 right-0 w-32 h-8 bg-dark-400 z-20" />
      <Spline scene="https://prod.spline.design/dS8QxWPLI0c6ugsp/scene.splinecode" />
    </motion.div>
  );
};

export default RobotViewer;