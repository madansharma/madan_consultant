import React from 'react';
import { Brain, Database, Cog, BarChart3, Shield, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Fintech & Banking Solutions',
      description: 'Complete fintech ecosystem development including AEPS, API Banking, UPI, BNPL, digital wallets, and AI-powered payment solutions.',
      features: ['Payment Gateways', 'Digital Wallets', 'API Banking', 'AI Chatbots']
    },
    {
      icon: Database,
      title: 'Generative AI & Automation',
      description: 'Advanced AI solutions including prompt engineering, RAG systems, multimodal AI, and intelligent workflow automation.',
      features: ['Prompt Engineering', 'RAG Systems', 'Agentic Workflows', 'Content Generation']
    },
    {
      icon: Cog,
      title: 'AI-Driven UI/UX Design',
      description: 'Revolutionary user experiences with conversational interfaces, predictive journeys, and adaptive UX powered by AI.',
      features: ['Conversational UI', 'Predictive UX', 'AI Prototyping', 'Usability Analysis']
    },
    {
      icon: BarChart3,
      title: 'Immersive Tech & Media',
      description: 'Cutting-edge AR/VR experiences, 3D storytelling, and AI-powered immersive content for training and marketing.',
      features: ['AR/VR Development', '360° Videos', '3D Storytelling', 'AI Video Ads']
    },
    {
      icon: Shield,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies combining AI, fintech, and immersive technologies for business growth.',
      features: ['Strategy Consulting', 'Process Automation', 'Digital Innovation', 'Growth Hacking']
    },
    {
      icon: Lightbulb,
      title: 'Research & Marketing',
      description: 'AI-powered market research, competitive intelligence, SEO optimization, and data-driven marketing strategies.',
      features: ['Predictive Trends', 'AI-powered SEO', 'Brand Strategy', 'Customer Engagement']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our AI <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions tailored to your industry and business needs. 
            We guide you through every step of your AI transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;