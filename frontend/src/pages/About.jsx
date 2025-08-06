import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { mockTeam } from '../data/mock';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "CLARITY OVER NOISE",
      description: "We cut through marketing BS to deliver strategies that actually work. No buzzwords, just results."
    },
    {
      icon: Eye,
      title: "TRANSPARENCY FIRST",
      description: "You see every metric, every decision, every outcome. Your success is our only measurement."
    },
    {
      icon: Heart,
      title: "GROWTH THROUGH PARTNERSHIP",
      description: "We're not just vendors. We're your growth partners, invested in your long-term success."
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* About Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-20 h-2 bg-blue-600 mb-6"></div>
                <h1 className="font-black text-5xl lg:text-7xl text-gray-900 leading-tight">
                  ABOUT S&B
                </h1>
                <h2 className="font-black text-3xl lg:text-4xl text-blue-600">
                  MARKETING INTEGRADO
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-2xl font-bold text-gray-700 leading-relaxed">
                  We exist to help businesses that can't afford to fail.
                </p>
                <p className="text-xl font-semibold text-gray-600 leading-relaxed">
                  Founded on the principle that marketing should deliver measurable results, 
                  not pretty presentations. Every campaign we run, every strategy we build, 
                  every decision we make is driven by one question: <strong>Will this grow the business?</strong>
                </p>
                <p className="text-lg font-semibold text-gray-600 leading-relaxed">
                  Based in São Paulo, we work with ambitious small and medium-sized businesses 
                  across Brazil who need marketing that actually works. No fluff. No false promises. 
                  Just strategic, integrated marketing that drives real growth.
                </p>
              </div>
            </div>

            {/* About Image */}
            <div className="relative">
              <div className="bg-gray-900 p-4 transform -rotate-2 hover:rotate-0 transition-transform">
                <img 
                  src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg" 
                  alt="S&B Marketing team in action" 
                  className="w-full h-96 object-cover grayscale filter contrast-125 hover:grayscale-0 transition-all"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black p-4 font-black text-lg">
                RESULTS DRIVEN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-2 bg-yellow-400 mx-auto mb-8"></div>
            <h2 className="font-black text-5xl mb-6">OUR FOUNDATION</h2>
            <p className="text-2xl font-bold text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision, every strategy, every result.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className={`group ${index === 1 ? 'transform lg:translate-y-8' : ''}`}
                >
                  <div className="bg-white text-gray-900 p-8 border-4 border-yellow-400 hover:border-blue-600 transition-all relative">
                    
                    {/* Icon */}
                    <div className="text-blue-600 mb-6 group-hover:text-yellow-400 transition-colors">
                      <IconComponent size={48} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-black text-2xl mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg font-semibold leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 transform rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-2 bg-gray-900 mx-auto mb-8"></div>
            <h2 className="font-black text-5xl text-gray-900 mb-6">OUR TEAM</h2>
            <p className="text-2xl font-bold text-gray-600 max-w-3xl mx-auto">
              The strategic minds behind your growth. Real people. Real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockTeam.map((member, index) => (
              <div 
                key={member.id} 
                className={`group ${index % 2 === 1 ? 'transform md:translate-y-8' : ''}`}
              >
                <div className="bg-white border-4 border-gray-900 overflow-hidden hover:border-blue-600 transition-all hover:shadow-xl relative">
                  
                  {/* Team Member Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover grayscale filter contrast-125 group-hover:grayscale-0 transition-all transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all"></div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-black text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <div className="font-bold text-sm text-yellow-600 tracking-wider">
                        {member.role}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-black text-4xl lg:text-6xl text-black leading-tight">
              READY TO WORK WITH A TEAM THAT DELIVERS?
            </h2>
            <p className="text-2xl font-bold text-black max-w-2xl mx-auto">
              No more agencies that promise the world and deliver PowerPoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="/contact" 
                className="inline-flex items-center px-10 py-5 bg-black text-yellow-400 hover:bg-gray-800 font-black text-xl tracking-wider transition-all hover:scale-105 hover:shadow-xl group"
              >
                START A CONVERSATION
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center px-10 py-5 border-4 border-black text-black hover:bg-black hover:text-yellow-400 font-black text-xl tracking-wider transition-all"
              >
                SEE OUR SERVICES
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;