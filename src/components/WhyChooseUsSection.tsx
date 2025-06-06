
import React from 'react';
import { Card } from '@/components/ui/card';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: '🌟',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for your peace of mind'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality or delivery standards'
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Future-ready applications that grow with your business requirements'
    },
    {
      icon: '👨‍💻',
      title: 'Certified Expert Developers',
      description: 'Experienced professionals with proven expertise in latest technologies'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Conquerors</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional value through our commitment to quality, innovation, and client success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
