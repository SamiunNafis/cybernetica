import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Brain, Shield, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useDeviceType } from "../../hooks/useDeviceType";

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const deviceType = useDeviceType();
  const isDesktop = deviceType === "desktop";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-400">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-primary-900/30" />

      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary-500"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-primary-900/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-primary-400 text-sm font-medium">
                The Future is Now
              </span>
              <ChevronRight className="h-4 w-4 text-primary-400 ml-1" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white"
            >
              Upgrade Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Human
              </span>{" "}
              Experience
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl"
            >
              Experience the next evolution of humanity with our cutting-edge
              cybernetic enhancements. Designed for seamless integration and
              unmatched performance.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/products">
                <motion.button
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 rounded-md font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  Explore Products
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="border border-primary-500/50 bg-dark-400/50 backdrop-blur-sm text-white px-8 py-3 rounded-md font-medium hover:bg-primary-900/20 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Technology
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                {
                  icon: <Brain className="h-5 w-5 text-primary-400" />,
                  text: "Neural Integration",
                },
                {
                  icon: <Shield className="h-5 w-5 text-primary-400" />,
                  text: "ISO 27001 Certified",
                },
                {
                  icon: <Star className="h-5 w-5 text-primary-400" />,
                  text: "99.8% Success Rate",
                },
                {
                  icon: <Zap className="h-5 w-5 text-primary-400" />,
                  text: "Lifetime Support",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-2"
                >
                  {item.icon}
                  <span className="text-xs text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {isDesktop ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent rounded-full blur-[100px] opacity-70" />
              <motion.div
                className="w-full h-full relative"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {" "}
                {/* polygon(44% 19%, 100% 19%, 100% 100%, 0% 100%, 0 21%, 28% 20%, 24% 0) */}
                {/* The above code is a scrap, that could've worked but I think the newer one on the bottom works better */}
                <div
                  style={{
                    clipPath:
                      "polygon(43% 36%, 99% 37%, 100% 100%, 0% 100%, 0 37%, 26% 37%, 24% 0)",
                    background: "linear-gradient(to right, #4f46e5, #3b82f6)",
                    marginBottom: "20px",
                    borderRadius: "5px",
                    height: "100px",
                  }}
                  className="absolute bottom-0 right-0 w-64 h-16 bg-dark-400 z-20"
                >
                  <div className="absolute bottom-6 inset-0 flex items-end justify-center">
                    <span className="text-white text-sm font-semibold">
                      Model #A-88: Cyber Buddy
                    </span>
                  </div>
                </div>
                <Spline scene="https://prod.spline.design/dS8QxWPLI0c6ugsp/scene.splinecode" />
              </motion.div>
            </motion.div>
          ) : (
            //i think the website looks better without this image on mobile
            // it was the initial idea to have an image on moble phones since the model will lag the phone
            
            // <motion.div
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.6 }}
            //   className="relative h-[300px] flex justify-center items-center"
            // >
            //   <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent rounded-full blur-[100px] opacity-70" />
            //   <img
            //     src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            //     alt="Cybernetic Enhancement"
            //     className="w-full h-full object-cover rounded-xl"
            //   />
            // </motion.div>
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
