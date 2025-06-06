import React from 'react';
import { MessageSquareQuoteIcon, Cog, Wrench, Power } from 'lucide-react';

const processSteps = [
  {
    icon: <MessageSquareQuoteIcon className="w-10 h-10 text-indigo-400" />,
    title: "Discovery",
    description: "We start by understanding your goals."
  },
  {
    icon: <Cog className="w-10 h-10 text-purple-400" />,
    title: "Strategy",
    description: "We create a custom plan customized to your needs."
  },
  {
    icon: <Wrench className="w-10 h-10 text-pink-400" />,
    title: "Development",
    description: "We build and code your solution."
  },
  {
    icon: <Power className="w-10 h-10 text-violet-400" />,
    title: "Launch",
    description: "We go live with the finished product."
  }
];

const OurProcess = () => {
  return (
    <section className="bg-[#011627] text-white py-16 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-7xl font-bold">
          <span className="text-white">OUR </span>
          <span className="stroke-text text-4xl md:text-7xl font-bold">PROCESS</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
          See how our smooth, step-by-step process can turn your ideas into practical digital solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="relative bg-gradient-to-br from-[#072540] to-[#0d1f35] rounded-xl p-6 w-full max-w-xs  shadow-lg border border-[#1d3b58] h-44">
            <div className="flex mb-4">{step.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400">{step.description}</p>
            <div className="absolute top-4 right-4 text-3xl font-bold text-white stroke-text">{index + 1}</div>

            {/* Arrow for all but the last card */}
            {index !== processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-[-2rem] transform -translate-y-1/2">
                <span className="text-blue-500 text-2xl">➜</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
