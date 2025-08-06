import React, { useState } from 'react';
import { ArrowRight, Send, Mail, MapPin, Instagram, Phone } from 'lucide-react';
import { mockContact } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessTypes = [
    'E-commerce',
    'SaaS/Technology',
    'Professional Services',
    'Healthcare',
    'Real Estate',
    'Manufacturing',
    'Education',
    'Food & Beverage',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage (mock submission)
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    
    submissions.push(newSubmission);
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        businessType: '',
        message: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.businessType && formData.message;

  return (
    <div className="min-h-screen bg-off-white">
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Contact Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-20 h-2 bg-yellow-400 mb-6"></div>
                <h1 className="font-black text-5xl lg:text-7xl text-gray-900 leading-tight">
                  LET'S TALK
                </h1>
                <h2 className="font-black text-3xl lg:text-4xl text-blue-600">
                  ABOUT YOUR GROWTH
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-2xl font-bold text-gray-700 leading-relaxed">
                  Ready to work with a team that delivers results, not presentations?
                </p>
                <p className="text-xl font-semibold text-gray-600 leading-relaxed">
                  Tell us about your business, your challenges, and your goals. 
                  We'll show you exactly how integrated marketing can drive the growth you need.
                </p>
                <p className="text-lg font-semibold text-gray-600 leading-relaxed">
                  <strong>No sales pitches. No false promises.</strong> Just an honest conversation 
                  about what it takes to build marketing that actually works.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600" size={24} />
                  <span className="font-bold text-xl text-gray-900">{mockContact.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600" size={24} />
                  <span className="font-bold text-xl text-gray-900">{mockContact.city}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="text-blue-600" size={24} />
                  <span className="font-bold text-xl text-gray-900">{mockContact.instagram}</span>
                </div>
              </div>
            </div>

            {/* Contact Image */}
            <div className="relative">
              <div className="bg-gray-900 p-4 transform rotate-2 hover:rotate-0 transition-transform">
                <img 
                  src="https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg" 
                  alt="Business consultation meeting" 
                  className="w-full h-96 object-cover grayscale filter contrast-125 hover:grayscale-0 transition-all"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 font-black text-lg">
                LET'S CONNECT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-8 border-black p-8 lg:p-12 relative">
            
            {/* Form Header */}
            <div className="text-center mb-12">
              <h2 className="font-black text-4xl lg:text-5xl text-gray-900 mb-4">
                TALK TO A TEAM THAT DELIVERS
              </h2>
              <p className="text-xl font-bold text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-8 p-6 bg-yellow-400 border-4 border-gray-900 text-center">
                <h3 className="font-black text-2xl text-black mb-2">MESSAGE SENT!</h3>
                <p className="font-bold text-black">We'll get back to you within 24 hours with a strategic approach tailored to your business.</p>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-black text-lg text-gray-900">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-4 border-gray-900 focus:border-blue-600 font-semibold text-lg transition-colors bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-black text-lg text-gray-900">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-4 border-gray-900 focus:border-blue-600 font-semibold text-lg transition-colors bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Business Type Field */}
              <div className="space-y-2">
                <label htmlFor="businessType" className="font-black text-lg text-gray-900">
                  BUSINESS TYPE *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-4 border-gray-900 focus:border-blue-600 font-semibold text-lg transition-colors bg-white"
                >
                  <option value="">Select your business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-black text-lg text-gray-900">
                  TELL US ABOUT YOUR BUSINESS & GOALS *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full p-4 border-4 border-gray-900 focus:border-blue-600 font-semibold text-lg transition-colors bg-white resize-none"
                  placeholder="What challenges are you facing? What are your growth goals? What's not working with your current marketing?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitted}
                  className={`inline-flex items-center px-10 py-5 font-black text-xl tracking-wider transition-all hover:scale-105 hover:shadow-xl group ${
                    isFormValid && !isSubmitted
                      ? 'bg-black text-yellow-400 hover:bg-gray-800'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      MESSAGE SENT
                      <Send className="ml-3" size={24} />
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 transform rotate-45"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 transform rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 transform rotate-45"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-600 transform rotate-45"></div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-black text-3xl mb-8">OTHER WAYS TO CONNECT</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-4">
                <Mail size={48} className="text-yellow-400 mx-auto" />
                <h4 className="font-black text-xl">EMAIL US</h4>
                <p className="font-semibold text-gray-300">Direct line to our strategy team</p>
                <p className="font-bold text-yellow-400">{mockContact.email}</p>
              </div>

              <div className="space-y-4">
                <Instagram size={48} className="text-yellow-400 mx-auto" />
                <h4 className="font-black text-xl">FOLLOW US</h4>
                <p className="font-semibold text-gray-300">Marketing insights and case studies</p>
                <p className="font-bold text-yellow-400">{mockContact.instagram}</p>
              </div>

              <div className="space-y-4">
                <MapPin size={48} className="text-yellow-400 mx-auto" />
                <h4 className="font-black text-xl">VISIT US</h4>
                <p className="font-semibold text-gray-300">Strategic sessions available in-person</p>
                <p className="font-bold text-yellow-400">{mockContact.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;