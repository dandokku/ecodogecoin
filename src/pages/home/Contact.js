import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Form submission logic here
  };

  const contactMethods = [
    {
      id: 'email',
      icon: '✉️',
      title: 'Email Us',
      description: 'Get a response within 24 hours',
      color: 'from-green-500 to-indigo-600'
    },
    {
      id: 'chat',
      icon: '💬',
      title: 'Live Chat',
      description: 'Instant connection with our team',
      color: 'from-green-500 to-cyan-600'
    },
    {
      id: 'call',
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly to an expert',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'visit',
      icon: '🏢',
      title: 'Visit Us',
      description: 'Schedule an office visit',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const socialMedia = [
    { name: 'Twitter', icon: '🐦', url: '#', color: 'bg-green-400' },
    { name: 'LinkedIn', icon: '🔗', url: '#', color: 'bg-green-600' },
    { name: 'Facebook', icon: '👍', url: '#', color: 'bg-green-800' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'bg-blue-600' },
    { name: 'Discord', icon: '💬', url: '#', color: 'bg-indigo-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.contact-element');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-green-50"
      id="contact"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/15 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-green-200/25 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 contact-element opacity-0">
          <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-700 font-semibold text-sm border border-green-300 mb-6">
            📍 Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-green-600 via-green-500 to-blue-600 bg-clip-text mb-8">
            CONTACT US
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            We're here to help and answer any questions you might have. Reach out and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="contact-element opacity-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200 transform transition-all duration-500 hover:shadow-3xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {/* Contact Method Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {contactMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setActiveTab(method.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === method.id
                        ? `bg-gradient-to-r ${method.color} text-white shadow-md`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {method.icon} {method.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'email' && (
                  <motion.form
                    key="email-form"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            placeholder="John Doe"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-400">👤</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            placeholder="your@email.com"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-400">✉️</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            placeholder="How can we help?"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-400">💡</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                          placeholder="Tell us about your project or inquiry..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                          I agree to the privacy policy
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-600 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Send Message 🚀
                      </button>
                    </div>
                  </motion.form>
                )}

                {activeTab === 'chat' && (
                  <motion.div
                    key="chat-preview"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                        👋
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">EcoDoge Support</h4>
                        <p className="text-sm text-gray-500">Typically replies in minutes</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-start">
                        <div className="max-w-xs bg-white p-4 rounded-xl rounded-tl-none shadow-sm border border-gray-200">
                          <p>Hello! How can we help you today?</p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-xs bg-green-100 p-4 rounded-xl rounded-tr-none shadow-sm">
                          <p>I have a question about...</p>
                          <div className="mt-2 h-4 bg-gray-300 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                      <button className="p-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                        Send
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'call' && (
                  <motion.div
                    key="call-info"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-br from-green-50 to-green-50 rounded-xl p-6"
                  >
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                        📞
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Call Our Team</h3>
                      <p className="text-gray-600">Speak directly with our support specialists</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800">General Inquiries</h4>
                            <p className="text-sm text-gray-500">Monday-Friday, 9am-5pm EST</p>
                          </div>
                          <a href="tel:+18005551234" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            Call Now
                          </a>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800">Technical Support</h4>
                            <p className="text-sm text-gray-500">24/7 emergency support</p>
                          </div>
                          <a href="tel:+18005551235" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            Call Now
                          </a>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800">Business Partnerships</h4>
                            <p className="text-sm text-gray-500">By appointment</p>
                          </div>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            Schedule Call
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'visit' && (
                  <motion.div
                    key="visit-info"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6"
                  >
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                        🏢
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Visit Our Offices</h3>
                      <p className="text-gray-600">Schedule an in-person meeting with our team</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <h4 className="font-medium text-gray-800 mb-2">🌎 Global Headquarters</h4>
                        <p className="text-gray-600 mb-3">123 Eco Street, Greenville, CA 90210</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <span>🕘 Mon-Fri: 9am-6pm</span>
                        </div>
                        <button className="mt-2 w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                          Get Directions
                        </button>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <h4 className="font-medium text-gray-800 mb-2">🌿 Eco Innovation Center</h4>
                        <p className="text-gray-600 mb-3">456 Sustainable Ave, Ecotown, NY 10001</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <span>🕘 Mon-Fri: 10am-4pm</span>
                        </div>
                        <button className="mt-2 w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                          Get Directions
                        </button>
                      </div>

                      <div className="text-center mt-4">
                        <button className="text-orange-600 font-medium hover:underline">
                          View all 12 global locations
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8 contact-element opacity-0">
            <motion.div 
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Headquarters</h3>
                    <p className="text-gray-600">123 Eco Street, Greenville, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (800) ECO-DOGE</p>
                    <p className="text-sm text-gray-500 mt-1">24/7 Technical Support: +1 (800) 555-1234</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@ecodoge.com</p>
                    <p className="text-sm text-gray-500 mt-1">Support: support@ecodoge.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm EST</p>
                    <p className="text-gray-600">Weekends: Emergency support only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Contacts */}
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-50 rounded-3xl p-8 shadow-2xl border border-green-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Direct Contacts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                      👩‍💼
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Sarah Johnson</h3>
                      <p className="text-sm text-gray-500">CEO & Founder</p>
                    </div>
                  </div>
                  <a href="mailto:sarah@ecodoge.com" className="text-green-600 text-sm hover:underline block mb-1">
                    sarah@ecodoge.com
                  </a>
                  <a href="tel:+18005551236" className="text-gray-600 text-sm hover:underline block">
                    +1 (800) 555-1236
                  </a>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                      👨‍💻
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Mark Chen</h3>
                      <p className="text-sm text-gray-500">CTO</p>
                    </div>
                  </div>
                  <a href="mailto:mark@ecodoge.com" className="text-green-600 text-sm hover:underline block mb-1">
                    mark@ecodoge.com
                  </a>
                  <a href="tel:+18005551237" className="text-gray-600 text-sm hover:underline block">
                    +1 (800) 555-1237
                  </a>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                      👩‍🎨
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Emma Rodriguez</h3>
                      <p className="text-sm text-gray-500">Marketing Director</p>
                    </div>
                  </div>
                  <a href="mailto:emma@ecodoge.com" className="text-green-600 text-sm hover:underline block mb-1">
                    emma@ecodoge.com
                  </a>
                  <a href="tel:+18005551238" className="text-gray-600 text-sm hover:underline block">
                    +1 (800) 555-1238
                  </a>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      👨‍🔬
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">David Kim</h3>
                      <p className="text-sm text-gray-500">Eco Initiatives Lead</p>
                    </div>
                  </div>
                  <a href="mailto:david@ecodoge.com" className="text-green-600 text-sm hover:underline block mb-1">
                    david@ecodoge.com
                  </a>
                  <a href="tel:+18005551239" className="text-gray-600 text-sm hover:underline block">
                    +1 (800) 555-1239
                  </a>
                </div>
              </div>

              <button className="mt-6 w-full py-3 bg-white border border-green-300 text-green-600 rounded-xl hover:bg-green-50 transition-colors font-medium">
                View Full Team Directory
              </button>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Connect With Us</h2>
              
              <div className="flex flex-wrap gap-3">
                {socialMedia.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${platform.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg`}
                    whileHover={{ y: -5 }}
                  >
                    {platform.icon}
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-gray-800 mb-2">📢 Join Our Newsletter</h3>
                <p className="text-sm text-gray-600 mb-3">Get updates on our latest eco-initiatives and crypto developments</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .contact-element {
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;