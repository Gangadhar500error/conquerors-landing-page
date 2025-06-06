
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SuccessStoriesSection = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      title: 'E-Commerce Revolution',
      subtitle: 'Retail Giant Transformation',
      description: 'Helped a traditional retailer increase online sales by 400% through a modern e-commerce platform with AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      feedback: 'Game-changing results in just 6 months!'
    },
    {
      title: 'Educational Innovation',
      subtitle: 'LMS Platform Success',
      description: 'Developed a comprehensive learning platform that now serves over 50,000 students with 99.9% uptime and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      feedback: 'Transformed our educational delivery completely'
    },
    {
      title: 'Healthcare Digital Shift',
      subtitle: 'Patient Management System',
      description: 'Created a HIPAA-compliant patient management system that reduced administrative overhead by 60% and improved patient satisfaction.',
      image: 'https://www.esferasoft.com/wp-content/uploads/2019/07/Digital-Transformation-in-Healthcare.jpg',
      feedback: 'Revolutionized our healthcare operations'
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results and transformative outcomes achieved through our innovative solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-white shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={stories[currentStory].image} 
                  alt={stories[currentStory].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stories[currentStory].title}
                </h3>
                <h4 className="text-xl text-blue-600 font-semibold mb-4">
                  {stories[currentStory].subtitle}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {stories[currentStory].description}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-700 italic">
                    "{stories[currentStory].feedback}"
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center space-x-4 mt-8">
            <Button 
              onClick={prevStory}
              variant="outline" 
              className="rounded-full w-12 h-12 p-0 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              ←
            </Button>
            <div className="flex space-x-2 items-center">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button 
              onClick={nextStory}
              variant="outline" 
              className="rounded-full w-12 h-12 p-0 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
