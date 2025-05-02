import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dialog from '../components/ui/Dialog';

const ContactSalesPage: React.FC = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form submitted:', formData);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    navigate('/products');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-dark-400 pt-24 pb-16">
      <Dialog isOpen={isDialogOpen} onClose={handleDialogClose}>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-primary-400" />
          </div>
          <h3 className="text-xl font-display font-semibold text-white mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-300 mb-6">
            Thank you for your interest in our products. Our sales team will contact you shortly to discuss your requirements.
            <span className="block mt-2 text-sm text-gray-500">This is a demo dialog and a real message will not be sent.</span>
          </p>
          <button
            onClick={handleDialogClose}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      </Dialog>

      <div className="container mx-auto px-4 md:px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Contact Our Sales Team
              </h1>
              <p className="text-gray-300 mb-8">
                Interested in our cybernetic enhancements? Fill out the form below and our specialized sales team will get in touch with you to discuss your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">+880 1888-039-128</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-gray-400">luea099@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-gray-400">26 BN HQ, Peelkhana<br />Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-300 rounded-xl p-6 md:p-8 border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-dark-400 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-dark-400 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-dark-400 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-dark-400 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-2">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full bg-dark-400 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a product</option>
                    <option value="neural">Neural Interfaces</option>
                    <option value="bionic">Bionic Limbs</option>
                    <option value="ocular">Ocular Enhancements</option>
                    <option value="organs">Synthetic Organs</option>
                    <option value="exo">Exoskeletons</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-400 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSalesPage;