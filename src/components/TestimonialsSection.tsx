import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FAQsSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What technologies do you use for mobile app development?",
      answer: "We specialize in React Native, Flutter, and native iOS/Android development. Our choice depends on your specific requirements, target audience, and business goals. We also use cutting-edge technologies like TypeScript, Redux, and modern UI frameworks."
    },
    {
      question: "How long does it take to develop a custom application?",
      answer: "Development timelines vary based on project complexity. A simple mobile app takes 8-12 weeks, while complex enterprise solutions may take 4-6 months. We provide detailed project timelines after analyzing your requirements and always keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature enhancements, and regular updates. Our support packages are flexible and can be customized based on your needs."
    },
    {
      question: "Can you help migrate my existing application to modern technologies?",
      answer: "Absolutely! We have extensive experience in application modernization and migration. Whether you need to migrate from legacy systems to modern frameworks or upgrade your current tech stack, we ensure seamless transitions with minimal downtime."
    },
    {
      question: "What is your development process and methodology?",
      answer: "We follow Agile methodology with regular sprints, continuous integration, and frequent client communication. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. You'll have full visibility throughout the project."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className=" b">
                Questions
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our development services, process, and expertise.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-6">
                Our team is here to help you with any additional questions about our services.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;