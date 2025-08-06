import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="font-black text-3xl">S&B MARKETING</h3>
            <p className="text-gray-300 font-bold text-lg leading-relaxed">
              MARKETING FOR THOSE<br />
              WHO CAN'T AFFORD TO FAIL.
            </p>
            <div className="w-16 h-1 bg-yellow-400"></div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-yellow-400">NAVIGATION</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-yellow-400 font-bold text-lg transition-colors">
                HOME
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-yellow-400 font-bold text-lg transition-colors">
                ABOUT
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-yellow-400 font-bold text-lg transition-colors">
                SERVICES
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-yellow-400 font-bold text-lg transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-yellow-400">CONNECT</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-yellow-400" size={20} />
                <span className="text-gray-300 font-bold">contato@sbmarketing.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-yellow-400" size={20} />
                <span className="text-gray-300 font-bold">São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="text-yellow-400" size={20} />
                <span className="text-gray-300 font-bold">@sbmarketingintegrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-yellow-400 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-bold">
              © 2025 S&B Marketing Integrado. RESULTS DELIVERED.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 font-bold">PERFORMANCE</span>
              <span className="text-gray-400 font-bold">STRATEGY</span>
              <span className="text-gray-400 font-bold">RESULTS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;