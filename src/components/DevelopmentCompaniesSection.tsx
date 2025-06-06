import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Smartphone, Code, GraduationCap, Zap, Building2,
  Globe, Database, ShoppingCart, Monitor
} from 'lucide-react';

const DevelopmentCompaniesSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const companies = [
    {
      icon: Monitor,
      title: 'Web Applications Development Company',
      description: 'Expert web application development company building modern, responsive web applications with cutting-edge technologies and frameworks.',
      color: 'from-cyan-500 to-blue-500',
      features: ['Responsive Design', 'Progressive Web Apps', 'Single Page Applications', 'Performance Optimization'],
      technologies: ['React', 'Angular', 'Vue.js', 'TypeScript']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps Development Company',
      description: 'Leading mobile application development company specializing in native iOS and Android apps with cutting-edge features and seamless user experiences.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Native iOS Development', 'Android App Development', 'Cross-Platform Solutions', 'App Store Optimization'],
      technologies: ['Swift', 'Kotlin', 'Java', 'Objective-C']
    },
    {
      icon: Code,
      title: 'React Native App Development Company',
      description: 'Expert React Native development company creating high-performance cross-platform mobile applications with native-like performance and shared codebase.',
      color: 'from-purple-500 to-pink-500',
      features: ['Cross-Platform Apps', 'Native Performance', 'Code Reusability', 'Faster Development'],
      technologies: ['React Native', 'JavaScript', 'TypeScript', 'Expo']
    },
    {
      icon: Zap,
      title: 'Flutter Development Company',
      description: 'Professional Flutter development company crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
      color: 'from-orange-500 to-red-500',
      features: ['Single Codebase', 'Fast Development', 'Beautiful UIs', 'Hot Reload'],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Material Design']
    },
    {
      icon: Database,
      title: 'MERN Developers',
      description: 'Professional MERN stack developers creating full-stack JavaScript applications with MongoDB, Express.js, React, and Node.js for scalable solutions.',
      color: 'from-teal-500 to-green-500',
      features: ['Full-Stack JavaScript', 'Scalable Architecture', 'Real-time Features', 'RESTful APIs'],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      icon: Globe,
      title: 'Laravel Development Company',
      description: 'Expert Laravel development company building robust, scalable web applications with elegant syntax and powerful features for modern businesses.',
      color: 'from-pink-500 to-purple-500',
      features: ['MVC Architecture', 'Eloquent ORM', 'Artisan CLI', 'Blade Templating'],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js']
    },
    {
      icon: Code,
      title: 'API Development Company',
      description: 'Leading API development company designing and building robust RESTful and GraphQL APIs for seamless system integration and data exchange.',
      color: 'from-blue-500 to-indigo-500',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'API Security'],
      technologies: ['REST', 'GraphQL', 'OpenAPI', 'OAuth']
    },
    {
      icon: Building2,
      title: 'CRM Development Company',
      description: 'Leading CRM development company creating powerful customer relationship management systems to streamline business processes and boost productivity.',
      color: 'from-indigo-500 to-blue-500',
      features: ['Custom CRM Solutions', 'Sales Automation', 'Customer Analytics', 'Integration Capabilities'],
      technologies: ['Salesforce', 'HubSpot', 'Custom CRM', 'API Integration']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      description: 'Premier e-commerce development company creating powerful online stores with secure payment processing and advanced inventory management.',
      color: 'from-red-500 to-orange-500',
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Multi-vendor Support'],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions']
    },
    {
      icon: GraduationCap,
      title: 'LMS Development Company',
      description: 'Premier learning management system development company building comprehensive educational platforms with interactive content and advanced analytics.',
      color: 'from-green-500 to-teal-500',
      features: ['Custom LMS Platforms', 'Interactive Learning', 'Progress Tracking', 'Multi-device Support'],
      technologies: ['Moodle', 'Canvas', 'Custom Solutions', 'SCORM']
    }
  ];

  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(companies.length).fill(false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleCards(prev => {
            if (!prev[index] && entry.isIntersecting) {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            }
            return prev;
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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sticky Title Section */}
          <div className="lg:w-2/5 lg:sticky lg:top-28 lg:self-start">
            <div className="max-w-lg">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#021b2d] mb-8 leading-tight">
                WHAT WE <br />
                <span className="stroke-text-two text-4xl lg:text-7xl">DELIVER</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are a comprehensive technology company offering specialized development services across multiple platforms and technologies, delivering excellence in every domain.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Industry-leading expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Cutting-edge technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Proven track record</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Scrollable Companies Cards */}
          <div className="lg:w-3/5 space-y-8">
            {companies.map((company, index) => (
              <Card
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`p-8 shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-300 ${
                  visibleCards[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 10}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${company.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <company.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {company.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {company.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {company.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-yellow-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Get In Touch Card */}
            <Card className="p-8 bg-white rounded-3xl shadow-xl mt-12">
              <div className="text-center max-w-xl mx-auto">
                <p className="text-xl text-gray-800 leading-relaxed">
                  Ready to take the next step? Request additional services or start your next project with the
                  <span className="font-bold text-gray-900"> top development company in India</span> today.
                </p>
                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-6 py-2 rounded-full transition duration-300">
                  GET IN TOUCH
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentCompaniesSection;
