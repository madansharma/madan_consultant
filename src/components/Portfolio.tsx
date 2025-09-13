import React from 'react';
import { ExternalLink, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Healthcare AI Diagnostics',
      client: 'Global Healthcare Provider',
      category: 'Computer Vision',
      description: 'Developed an AI-powered medical imaging system that improved diagnostic accuracy by 40% and reduced analysis time by 60%.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg',
      results: [
        '40% improvement in diagnostic accuracy',
        '60% reduction in analysis time',
        '$2M annual cost savings'
      ],
      icon: Shield
    },
    {
      title: 'Financial Risk Prediction',
      client: 'Investment Bank',
      category: 'Predictive Analytics',
      description: 'Built machine learning models to predict market risks and optimize investment portfolios, resulting in 25% better returns.',
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg',
      results: [
        '25% improvement in portfolio returns',
        '90% accuracy in risk prediction',
        '$15M additional revenue'
      ],
      icon: TrendingUp
    },
    {
      title: 'Manufacturing Optimization',
      client: 'Automotive Manufacturer',
      category: 'Process Optimization',
      description: 'Implemented AI-driven predictive maintenance and quality control systems, reducing downtime by 35%.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      results: [
        '35% reduction in downtime',
        '50% fewer quality defects',
        '$8M operational savings'
      ],
      icon: Zap
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. Discover how we've helped organizations 
            transform their operations with intelligent AI solutions.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-6 left-6 bg-white rounded-full p-3 shadow-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 font-medium mb-6">
                    Client: {project.client}
                  </p>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-gray-900">Key Results:</h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
                    View Case Study
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the ranks of industry leaders who have transformed their business with our AI solutions.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;