import { ArrowRight, TrendingUp, Zap, Globe, CheckCircle, Target } from 'lucide-react';
import { mockServices } from '../data/mock';
import { Link } from 'react-router-dom';

const Services = () => {
  const getIcon = (iconName) => {
    const icons = {
      TrendingUp: TrendingUp,
      Zap: Zap,
      Globe: Globe
    };
    return icons[iconName] || TrendingUp;
  };

  const performanceDetails = {
    title: "PERFORMANCE MARKETING",
    description: "Data-driven campaigns that convert. Every dollar tracked, every result measured.",
    image: "https://images.unsplash.com/photo-1577276145795-f3922ce25fbf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxtYXJrZXRpbmclMjB0ZWFtfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1NDQ0NDc4MHww&ixlib=rb-4.1.0&q=85",
    features: [
      "Google Ads & Facebook Ads Management",
      "Conversion Rate Optimization",
      "Analytics & Attribution Modeling",
      "ROI-focused Campaign Strategy",
      "A/B Testing & Performance Analysis",
      "Landing Page Optimization"
    ],
    outcome: "Average 150% ROI improvement within 90 days"
  };

  const brandingDetails = {
    title: "BRAND STRATEGY",
    description: "Bold identity that cuts through noise. Strategy before aesthetics, always.",
    image: "https://images.unsplash.com/photo-1613017393480-4886d9e4a3b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGVudHJlcHJlbmV1cnN8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU0NDQ0Nzc1fDA&ixlib=rb-4.1.0&q=85",
    features: [
      "Brand Positioning & Messaging",
      "Visual Identity Development",
      "Logo & Brand Guidelines",
      "Market Research & Analysis",
      "Competitive Positioning",
      "Brand Voice & Communication Strategy"
    ],
    outcome: "Brand recognition increase of 200%+ in target markets"
  };

  const digitalDetails = {
    title: "DIGITAL PRESENCE",
    description: "Web, social, SEO. Your complete digital ecosystem that works as one.",
    image: "https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxtYXJrZXRpbmclMjB0ZWFtfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1NDQ0NDc4MHww&ixlib=rb-4.1.0&q=85",
    features: [
      "Website Development & Design",
      "SEO Strategy & Implementation",
      "Social Media Management",
      "Content Strategy & Creation",
      "Email Marketing Automation",
      "Digital Integration & Analytics"
    ],
    outcome: "Organic traffic growth of 300%+ within 6 months"
  };

  const allServices = [performanceDetails, brandingDetails, digitalDetails];

  return (
    <div className="min-h-screen bg-off-white">
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="w-20 h-2 bg-blue-600 mx-auto"></div>
            <h1 className="font-black text-5xl lg:text-7xl text-gray-900 leading-tight">
              OUR SERVICES
            </h1>
            <h2 className="font-black text-3xl lg:text-4xl text-blue-600">
              THREE CORE AREAS. INTEGRATED APPROACH.
            </h2>
            <p className="text-2xl font-bold text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We don't just run campaigns or design logos. We build complete marketing ecosystems 
              that drive sustainable growth for businesses that can't afford to fail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockServices.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div key={service.id} className="text-center space-y-4">
                  <div className="text-yellow-400 mx-auto">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="font-black text-2xl">{service.title}</h3>
                  <p className="text-gray-300 font-semibold">{service.description}</p>
                  <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {allServices.map((service, index) => (
        <section key={index} className={`py-24 ${index % 2 === 0 ? 'bg-off-white' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Service Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className={`w-16 h-2 ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-yellow-400' : 'bg-gray-900'}`}></div>
                  <h2 className="font-black text-4xl lg:text-5xl text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-xl font-bold text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h3 className="font-black text-2xl text-gray-900">WHAT'S INCLUDED:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle size={20} className={`${index === 0 ? 'text-blue-600' : index === 1 ? 'text-yellow-500' : 'text-gray-900'} flex-shrink-0`} />
                        <span className="text-lg font-semibold text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className={`p-6 border-l-4 ${index === 0 ? 'border-blue-600 bg-blue-50' : index === 1 ? 'border-yellow-400 bg-yellow-50' : 'border-gray-900 bg-gray-50'}`}>
                  <div className="flex items-center space-x-3">
                    <Target size={24} className={`${index === 0 ? 'text-blue-600' : index === 1 ? 'text-yellow-600' : 'text-gray-900'}`} />
                    <p className="font-black text-lg text-gray-900">{service.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Service Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`bg-gray-900 p-4 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-96 object-cover grayscale filter contrast-125 hover:grayscale-0 transition-all"
                  />
                </div>
                <div className={`absolute ${index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-yellow-400 text-black' : 'bg-gray-900'} text-white p-4 font-black text-lg`}>
                  {index === 0 ? 'PERFORMANCE' : index === 1 ? 'STRATEGY' : 'DIGITAL'}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="w-20 h-2 bg-yellow-400 mx-auto"></div>
            <h2 className="font-black text-5xl">CUSTOM PLANS</h2>
            <p className="text-2xl font-bold text-gray-300 max-w-3xl mx-auto">
              Every business is different. Your marketing strategy should be too.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              
              {/* Starter Plan */}
              <div className="bg-white text-gray-900 p-8 border-4 border-yellow-400 relative">
                <div className="space-y-6">
                  <h3 className="font-black text-2xl">STARTER</h3>
                  <p className="text-lg font-semibold">Perfect for businesses ready to take their first strategic marketing steps.</p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-500" />
                      <span className="font-semibold">1 Core Service Focus</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-500" />
                      <span className="font-semibold">Monthly Strategy Reviews</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-500" />
                      <span className="font-semibold">Performance Analytics</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 transform rotate-45"></div>
              </div>

              {/* Growth Plan */}
              <div className="bg-blue-600 text-white p-8 border-4 border-yellow-400 relative transform md:-translate-y-4">
                <div className="space-y-6">
                  <div className="bg-yellow-400 text-black px-3 py-1 font-black text-sm w-fit">MOST POPULAR</div>
                  <h3 className="font-black text-2xl">GROWTH</h3>
                  <p className="text-lg font-semibold">Integrated approach across 2-3 service areas for accelerated growth.</p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-400" />
                      <span className="font-semibold">2-3 Integrated Services</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-400" />
                      <span className="font-semibold">Weekly Performance Reviews</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-400" />
                      <span className="font-semibold">Advanced Analytics & Attribution</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-400" />
                      <span className="font-semibold">Dedicated Account Manager</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 transform rotate-45"></div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white text-gray-900 p-8 border-4 border-gray-900 relative">
                <div className="space-y-6">
                  <h3 className="font-black text-2xl">ENTERPRISE</h3>
                  <p className="text-lg font-semibold">Complete marketing ecosystem for businesses ready to dominate their market.</p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-gray-900" />
                      <span className="font-semibold">Full Service Integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-gray-900" />
                      <span className="font-semibold">Daily Performance Monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-gray-900" />
                      <span className="font-semibold">Custom Analytics Dashboard</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-gray-900" />
                      <span className="font-semibold">Strategic Leadership Team Access</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 transform rotate-45"></div>
              </div>
            </div>

            <div className="pt-12">
              <p className="text-2xl font-bold text-yellow-400 mb-8">LET'S TALK ABOUT YOUR SPECIFIC NEEDS</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-yellow-400 text-black hover:bg-yellow-500 font-black text-xl tracking-wider transition-all hover:scale-105 hover:shadow-xl group"
              >
                GET CUSTOM QUOTE
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-black text-4xl lg:text-6xl text-black leading-tight">
              READY TO STOP WASTING MONEY ON MARKETING THAT DOESN'T WORK?
            </h2>
            <p className="text-2xl font-bold text-black max-w-2xl mx-auto">
              Let's build a strategy that actually drives growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-5 bg-black text-yellow-400 hover:bg-gray-800 font-black text-xl tracking-wider transition-all hover:scale-105 hover:shadow-xl group"
            >
              TALK TO A STRATEGIST
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;