import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Madan Consultant</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bridging Technology, Finance, AI, and Creativity with 30+ years of experience. 
              Your trusted partner in digital transformation and AI innovation.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Github].map((Social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Social className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'AI Strategy Consulting',
                'Machine Learning Solutions',
                'Data Analytics',
                'AI Implementation',
                'Process Optimization'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@madansharmaai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+91 9313208456</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 madansharmaai.com. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;