import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Military Veteran",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "After losing my arm in combat, the Bionic Arm Pro has completely transformed my life. Not only can I perform all tasks I could before, but the neural feedback makes it feel like my own limb. The precision is unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Sarah Chen",
    role: "Neurosurgeon",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "As a surgeon, the OculTech Vision enhancement has dramatically improved my surgical precision. The zoom capabilities and AR overlay of patient vitals have reduced procedure times by 30%. Simply revolutionary.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Wilson",
    role: "Data Scientist",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The NeuroLink X1 has exponentially increased my productivity. Being able to interface directly with systems and process data through neural pathways has given me capabilities I never thought possible.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-dark-300 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Transforming Lives with <span className="text-primary-400">Cybernetic</span> Excellence
          </h2>
          <p className="text-gray-300">
            Hear from our clients who have experienced the future of human enhancement firsthand.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-400 border border-primary-900/50 rounded-2xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[current].avatar} 
                    alt={testimonials[current].name} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary-500"
                  />
                </div>
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonials[current].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 text-lg italic mb-6">
                    "{testimonials[current].content}"
                  </blockquote>
                  <div>
                    <p className="text-white font-medium text-lg">{testimonials[current].name}</p>
                    <p className="text-primary-400">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-white hover:border-primary-500 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === current ? 'bg-primary-500' : 'bg-gray-700'
                  } transition-colors duration-300`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-white hover:border-primary-500 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;