
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Search, Palette, Code2, TestTube, Rocket, Users, Database, Shield, Zap } from 'lucide-react';

const HowWeBuildSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const buildingSteps = [
    {
      number: '01',
      title: 'Requirements Analysis & Planning',
      description: 'Comprehensive analysis of your business requirements, target audience research, and detailed project planning with milestone definitions.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      details: ['Stakeholder Interviews', 'Market Research', 'Technical Feasibility', 'Project Roadmap', 'Risk Assessment'],
      tools: ['Jira', 'Confluence', 'Figma', 'Miro']
    },
    {
      number: '02',
      title: 'UI/UX Design & Prototyping',
      description: 'Create stunning user interfaces and exceptional user experiences with interactive prototypes and comprehensive design systems.',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      details: ['Wireframing', 'Visual Design', 'Interactive Prototypes', 'User Testing', 'Design Systems'],
      tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
    },
    {
      number: '03',
      title: 'Architecture & Development',
      description: 'Build scalable, maintainable applications using modern technologies with clean code practices and robust architecture patterns.',
      icon: Code2,
      color: 'from-green-500 to-teal-500',
      details: ['System Architecture', 'Database Design', 'API Development', 'Frontend Development', 'Code Reviews'],
      tools: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      number: '04',
      title: 'Integration & Testing',
      description: 'Seamless third-party integrations and comprehensive testing to ensure reliability, performance, and security across all platforms.',
      icon: TestTube,
      color: 'from-orange-500 to-red-500',
      details: ['API Integration', 'Unit Testing', 'Integration Testing', 'Performance Testing', 'Security Testing'],
      tools: ['Jest', 'Cypress', 'Postman', 'Selenium']
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'Strategic deployment with monitoring, optimization, and comprehensive launch support to ensure smooth go-live operations.',
      icon: Rocket,
      color: 'from-indigo-500 to-blue-500',
      details: ['Cloud Deployment', 'CI/CD Pipeline', 'Performance Monitoring', 'Launch Support', 'Documentation'],
      tools: ['AWS', 'Docker', 'Jenkins', 'Git']
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing technical support, regular updates, performance optimization, and feature enhancements to ensure long-term success.',
      icon: Shield,
      color: 'from-pink-500 to-purple-500',
      details: ['24/7 Support', 'Regular Updates', 'Performance Optimization', 'Feature Enhancements', 'Security Patches'],
      tools: ['Monitoring Tools', 'Analytics', 'Support Desk', 'Version Control']
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleSteps(prev => {
            const newVisible = [...prev];
            newVisible[index] = entry.isIntersecting;
            return newVisible;
          });
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Title */}
          <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start">
            <div className="max-w-lg">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">How We Build</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Our Proven
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Development
                </span>
                Methodology
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We follow a systematic, agile approach to software development, ensuring high-quality deliverables, 
                transparent communication, and successful project outcomes through every phase.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Agile Methodology</h4>
                    <p className="text-gray-400">Iterative development with continuous feedback and improvement cycles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Quality Assurance</h4>
                    <p className="text-gray-400">Rigorous testing at every stage to ensure bug-free, high-performance applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Steps */}
          <div className="lg:w-3/5 space-y-8">
            {buildingSteps.map((step, index) => (
              <Card 
                key={index}
                ref={el => stepRefs.current[index] = el}
                className={`p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-700 transform ${
                  visibleSteps[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white/30">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">Process Details</h4>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              <span className="text-sm text-gray-400">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.tools.map((tool, toolIndex) => (
                            <span 
                              key={toolIndex}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm border border-white/20"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuildSection;
