import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Fortune 500 Clients', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '30+' },
    { icon: Target, label: 'Success Rate', value: '95%' },
    { icon: Zap, label: 'Projects Delivered', value: '500+' }
  ];

  const expertise = [
    {
      title: 'Fintech & Banking',
      icon: '💳',
      description: 'AEPS, API Banking, UPI, BNPL, Wallets, Payment Gateways, Cybersecurity, Embedded Finance, Micro ATMs, AI-Powered Chatbots'
    },
    {
      title: 'Generative AI & Automation',
      icon: '🤖',
      description: 'Prompt Engineering, RAG, AI-driven Content, Image/Video/3D Generation, Agentic Workflows, Marketing Automation'
    },
    {
      title: 'AI-Driven UI/UX',
      icon: '🎨',
      description: 'Conversational Interfaces, Predictive Journeys, Adaptive UX, Prototyping, AI Usability Analysis, Automated A/B Testing'
    },
    {
      title: 'Immersive Tech & Media',
      icon: '🥽',
      description: 'AI-powered AR/VR, XR, 360° Videos, 3D Storytelling, AI-driven Corporate Training & Explainers, Generative AI Video Ads'
    }
  ];

  const clients = [
    'Walmart', 'American Express', 'Motorola', 'Whirlpool', 'Honda', 'LG', 
    'Cummins', 'Indian Oil', 'Max New York Life', 'DRDO', 'WHO', 'PLAN International'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Bridging Technology, Finance & AI for{' '}
              <span className="text-blue-600">30+ Years</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With 30+ years of experience, I bridge the gap between Technology, Finance, AI, and Creativity—building 
              cutting-edge Fintech solutions with a strong focus on UI/UX, digital payments, banking innovations, 
              Generative AI, and immersive experiences that drive business growth and transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I am a Creative Technology Consultant and AI Generalist with extensive expertise in Generative AI, 
              Agentic Workflows, and Automation Solutions. My capabilities include Advanced Prompt Engineering, 
              Retrieval-Augmented Generation (RAG), Multimodal AI, and AI-driven workflow automation.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Fintech', 'Generative AI', 'UI/UX Design', 'AR/VR', 'Automation', 'Digital Payments'].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
              alt="AI Technology Innovation"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Projects Delivered</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Expertise Areas */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Core <span className="text-blue-600">Expertise</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across cutting-edge technologies and business domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {expertise.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h4>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Client Portfolio */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Over the years, I have delivered innovation across Fortune 500s, startups, governments, and NGOs.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-gray-700 font-semibold text-sm">{client}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">My Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            To blend Fintech, Generative AI, and Immersive Tech to design secure, scalable, and intelligent ecosystems. 
            I believe the future of finance and digital innovation lies in combining AI intelligence with human empathy, 
            financial trust with creativity, and immersive technology with real-world impact.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
            <p className="text-lg font-medium">
              🚀 Always open to collaborations with visionary leaders, startups, and enterprises 
              who want to embrace AI-powered transformation and shape the future together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;