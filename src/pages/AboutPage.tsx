import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Building, Award, ArrowRight, MessageSquare } from 'lucide-react';

const teamMembers = [
  {
    name: "Samiun Nafis",
    role: "Human",
    image: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/472337496_1342023683624868_5600258639717854244_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF6fWQcTTRVckVSxmRDKGVP31LcoO5A8vjfUtyg7kDy-L73O4o3yW53B-MamTL3kIdQR4PO0I9VbZJo6p9MeXr4&_nc_ohc=1361M9t539cQ7kNvwFaxPLV&_nc_oc=Adnj2QiPTOoXfa3SDEGLnQIaUlXbU3KMqZ4pm9myPy0jJa3gmj2_tDxHyRXQ-WeXbCc&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=_iF_VN5jon1eiqod2jyxXw&oh=00_AfFiCCsszR5PYs1p-mZZcFZ2rZ3uo79adXfSf9hONWlcwQ&oe=681A86C3",
    bio: "Leading the future of human-AI collaboration in cybernetic enhancements."
  },
  {
    name: "ARIA-7",
    role: "AI",
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Advanced AI system specializing in neural network architecture and biomechanical integration."
  },
  {
    name: "NEXUS",
    role: "AI",
    image: "https://images.pexels.com/photos/8439997/pexels-photo-8439997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Quantum-powered AI focused on cybernetic enhancement optimization and human adaptation protocols."
  },
  {
    name: "SYNTHIA",
    role: "AI",
    image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Specialized in emotional intelligence and human-machine interface design."
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-400 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-primary-900/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM0QjAwODIiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOHYyNGg4eiIvPjxwYXRoIGQ9Ik0zMCAxOHYyNE0zMCAxOEgxOE00MiAxOEgzME0xOCAxOHYxMk0xOCAzMHYxMk00MiAxOHYxMk00MiAzMHYxMk0xOCAxOEgwTTYwIDE4SDQyTTE4IDMwSDBNNjAgMzBINDJNMTggNDJIME02MCA0Mkg0MiIvPjwvZz48L3N2Zz4=')] opacity-5" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Future</span> of Humanity
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              CYBERNETICA is at the forefront of cybernetic innovation, dedicated to enhancing human capabilities through cutting-edge technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-dark-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl">
                  <img 
                    src="https://images.pexels.com/photos/8439749/pexels-photo-8439749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="CYBERNETICA headquarters" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-900/90 backdrop-blur-sm p-6 rounded-xl border border-primary-700">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-display font-bold text-white">15+</div>
                    <div className="text-sm text-primary-300">Years of<br />Innovation</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Our Story
                </h2>
                <p className="text-gray-300">
                  Founded in 2010 by a team of visionary scientists and engineers, CYBERNETICA began with a simple yet profound mission: to extend and enhance human capabilities through seamless integration of technology and biology.
                </p>
                <p className="text-gray-300">
                  What started as a small research lab has grown into a global leader in cybernetic enhancements, pushing the boundaries of what's possible and redefining the relationship between humans and technology.
                </p>
                <p className="text-gray-300">
                  Today, our team of over 500 experts across neuroscience, bioengineering, AI, and materials science continues to pioneer breakthroughs that transform lives and unlock new human potential.
                </p>
                <div className="pt-4">
                  <a href="#" className="text-primary-400 font-medium flex items-center">
                    <span>Read our full history</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-300">
              Guided by a set of core principles, we're committed to responsibly advancing human enhancement technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Human-Centered Design",
                description: "We prioritize user needs, comfort, and autonomy in every enhancement we create, ensuring technology serves humanity, not the other way around."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Ethical Innovation",
                description: "We adhere to the highest standards of bioethics, ensuring our technologies respect human dignity and promote well-being."
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Accessibility",
                description: "We're committed to making cybernetic enhancements increasingly accessible to all who need them, regardless of background or circumstance."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Quality & Safety",
                description: "We maintain rigorous standards in design, manufacturing, and testing to ensure every product meets our exceptional quality and safety benchmarks."
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Transparent Communication",
                description: "We believe in honest dialogue with users, healthcare providers, and the public about the capabilities and limitations of our technology."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Continuous Improvement",
                description: "We never stop refining and enhancing our products based on user feedback, emerging research, and technological advancements."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-300 border border-gray-800 rounded-xl p-6 hover:border-primary-500/30 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-900/30 flex items-center justify-center mb-4 text-primary-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-300">
              Meet the visionaries and experts leading CYBERNETICA into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-display font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-primary-400 text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
              View Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-primary-900/80 to-dark-300 backdrop-blur-sm border border-primary-500/20 rounded-3xl overflow-hidden shadow-glow p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Join the Cybernetic Revolution
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Whether you're looking to enhance your capabilities, explore career opportunities, or partner with us, we'd love to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Contact Us
                </button>
                <button className="border border-primary-500/50 bg-transparent text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-900/20 transition-colors">
                  Join Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;