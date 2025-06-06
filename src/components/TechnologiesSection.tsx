import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

// Image imports (place them in src/assets or your image folder)
import ReactImg from '@/assets/react-tec.png';
import AngularImg from '@/assets/angular.png';
import VueImg from '@/assets/vue.png';
import NodeImg from '@/assets/node.png';
import LaravelImg from '@/assets/laravel.webp';
import FlutterImg from '@/assets/flutter.webp';
import ReactNativeImg from '@/assets/native.png';
import MongoDBImg from '@/assets/mangodb.png';
import MySQLImg from '@/assets/mysql.avif';
import AWSImg from '@/assets/aws.png';
import AzureImg from '@/assets/azu.png';
import SecurityImg from '@/assets/security.png';

const TechnologiesSection = () => {
  const [visibleTechs, setVisibleTechs] = useState<boolean[]>([]);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);

  const technologies = [
    { name: 'React', image: ReactImg, color: 'from-blue-400 to-blue-600', category: 'Frontend' },
    { name: 'Angular', image: AngularImg, color: 'from-red-400 to-red-600', category: 'Frontend' },
    { name: 'Vue.js', image: VueImg, color: 'from-green-400 to-green-600', category: 'Frontend' },
    { name: 'React Native', image: ReactNativeImg, color: 'from-indigo-400 to-indigo-600', category: 'Mobile' },
    { name: 'Flutter', image: FlutterImg, color: 'from-blue-500 to-cyan-600', category: 'Mobile' },
    { name: 'Node.js', image: NodeImg, color: 'from-green-400 to-green-600', category: 'Backend' },
    { name: 'Laravel', image: LaravelImg, color: 'from-orange-400 to-orange-600', category: 'Backend' },
    { name: 'MongoDB', image: MongoDBImg, color: 'from-green-500 to-emerald-600', category: 'Database' },
    { name: 'MySQL', image: MySQLImg, color: 'from-yellow-400 to-yellow-600', category: 'Database' },
    { name: 'AWS', image: AWSImg, color: 'from-yellow-400 to-orange-500', category: 'Cloud' },
    { name: 'Azure', image: AzureImg, color: 'from-blue-600 to-blue-800', category: 'Cloud' },
    { name: 'Security', image: SecurityImg, color: 'from-blue-700 to-indigo-800', category: 'Security' },
  ];

  useEffect(() => {
    const observers = techRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleTechs(prev => {
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
    <section className="py-16 bg-[#011627] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Built With <span className="stroke-text text-4xl md:text-7xl font-bold">Powerful Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage the most advanced technologies and frameworks to build robust, scalable,
            and future-ready solutions that drive innovation and deliver exceptional performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              ref={el => (techRefs.current[index] = el)}
              className={`p-6 text-center group cursor-pointer bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                visibleTechs[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-20 h-20  rounded-3xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
              >
                <img src={tech.image} alt={tech.name} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {tech.category}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
