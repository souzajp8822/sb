import { ArrowRight, TrendingUp, Zap, Globe, Quote } from 'lucide-react';
import { mockTestimonials, mockServices } from '../data/mock';
import { Link } from 'react-router-dom';

const Home = () => {
  const getIcon = (iconName) => {
    const icons = {
      TrendingUp: TrendingUp,
      Zap: Zap,
      Globe: Globe
    };
    const IconComponent = icons[iconName] || TrendingUp;
    return <IconComponent size={48} />;
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-20 h-2 bg-yellow-400 mb-6"></div>
                <h1 className="font-black text-5xl lg:text-7xl text-gray-900 leading-tight tracking-tight">
                  MARKETING FOR THOSE WHO CAN'T AFFORD TO FAIL
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="text-2xl lg:text-3xl font-bold text-gray-700 leading-relaxed">
                  SIMPLE. STRATEGIC. RESULTS-DRIVEN.
                </p>
                <p className="text-xl font-semibold text-gray-600 max-w-2xl">
                  We help small and medium businesses grow through integrated marketing 
                  that actually works. No fluff. No promises. Just results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg tracking-wider transition-all hover:scale-105 hover:shadow-lg group"
                >
                  START NOW
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center px-8 py-4 border-4 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-black text-lg tracking-wider transition-all"
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gray-900 p-4 transform rotate-2 hover:rotate-0 transition-transform">
                <img 
                  src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU0NDQ0Nzg1fDA&ixlib=rb-4.1.0&q=85" 
                  alt="Business entrepreneurs working" 
                  className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all filter contrast-125"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 font-black text-lg">
                RESULTS DRIVEN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Block */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-1 bg-yellow-400 mx-auto"></div>
              <h3 className="font-black text-2xl">SIMPLE</h3>
              <p className="text-gray-300 font-semibold">Clear strategy. No complexity. Direct results.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-1 bg-yellow-400 mx-auto"></div>
              <h3 className="font-black text-2xl">STRATEGIC</h3>
              <p className="text-gray-300 font-semibold">Data-driven decisions. Purpose-built campaigns.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-1 bg-yellow-400 mx-auto"></div>
              <h3 className="font-black text-2xl">RESULTS</h3>
              <p className="text-gray-300 font-semibold">Measurable growth. ROI that matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-2 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="font-black text-5xl text-gray-900 mb-6">OUR SERVICES</h2>
            <p className="text-2xl font-bold text-gray-600 max-w-3xl mx-auto">
              Three core areas. Integrated approach. Maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockServices.map((service, index) => (
              <div key={service.id} className={`group ${index % 2 === 1 ? 'transform md:translate-y-8' : ''}`}>
                <div className="bg-white border-4 border-gray-900 p-8 hover:shadow-2xl transition-all hover:border-blue-600 relative overflow-hidden">
                  
                  {/* Service Icon */}
                  <div className="text-blue-600 mb-6 group-hover:text-yellow-400 transition-colors">
                    {getIcon(service.icon)}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-lg font-semibold text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 font-semibold">
                        <ArrowRight size={16} className="text-yellow-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 transform rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-black text-4xl lg:text-6xl text-black leading-tight">
              READY TO GROW?
            </h2>
            <p className="text-2xl font-bold text-black max-w-2xl mx-auto">
              Stop wasting time on marketing that doesn't work.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-5 bg-black text-yellow-400 hover:bg-gray-800 font-black text-xl tracking-wider transition-all hover:scale-105 hover:shadow-xl group mt-8"
            >
              TALK TO OUR TEAM
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-2 bg-gray-900 mx-auto mb-8"></div>
            <h2 className="font-black text-5xl text-gray-900 mb-6">WHAT CLIENTS SAY</h2>
            <p className="text-2xl font-bold text-gray-600">
              Real results from real businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`group ${index === 1 ? 'transform md:-translate-y-8' : ''}`}>
                <div className="bg-gray-900 p-8 text-white relative">
                  
                  {/* Quote Icon */}
                  <Quote size={32} className="text-yellow-400 mb-6" />
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-xl font-semibold mb-8 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Image and Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white p-1 transform rotate-3 group-hover:rotate-0 transition-transform">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover grayscale filter contrast-125"
                      />
                    </div>
                    <div>
                      <div className="font-black text-lg text-yellow-400">{testimonial.name}</div>
                      <div className="font-semibold text-gray-300">{testimonial.role}</div>
                      <div className="font-bold text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-1 bg-blue-600"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;