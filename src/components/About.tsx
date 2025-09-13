import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'AI Experts', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Target, label: 'Success Rate', value: '95%' },
    { icon: Zap, label: 'Projects Delivered', value: '200+' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Scientist',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg',
      bio: 'PhD in Machine Learning from Stanford. Former AI researcher at Google.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Strategy',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: '15+ years in AI consulting. Led digital transformation for Fortune 500 companies.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Ethics & Governance Lead',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg',
      bio: 'Expert in AI ethics and responsible AI development. Published researcher.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Leading AI Innovation for{' '}
              <span className="text-blue-600">10+ Years</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI Catalyst is a premier consulting firm specializing in artificial intelligence solutions. 
              We bridge the gap between cutting-edge AI research and practical business applications.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of PhD-level data scientists, AI engineers, and strategy experts have successfully 
              delivered transformative AI solutions across healthcare, finance, manufacturing, and technology sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Robotics', 'AI Ethics'].map((expertise, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {expertise}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="AI Team Working"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-700 font-medium">Value Generated for Clients</div>
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

        {/* Team */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Leadership Team</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            World-class experts with deep experience in AI research, business strategy, and ethical AI development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;