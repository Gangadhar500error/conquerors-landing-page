import React from "react";

const categories = [
  "LMS Development",
  "OES Solutions",
  "Pickles & Food",
  "E-commerce Platforms",
  "Real Estate Portals",
  "Mobile Apps",
  "CRM Systems",
  "EdTech Platforms",
  "Church & Ministries",
  "Job Portals",
  "Internship Platforms",
  "Matrimony Services",
];

const CategoryCard = ({ name }: { name: string }) => {
  return (
    <div className="group relative overflow-hidden border border-gray-800 backdrop-blur-sm bg-white/5 aspect-square flex items-end p-6">
      {/* Rotating Icon - stays in place */}
      <div className="absolute top-4 left-4 text-white/30 text-6xl font-bold z-10">
        <span className="inline-block group-hover:animate-spin-slow-one">★</span>
      </div>

      {/* Sliding Text */}
      <div className="z-20">
        <span className="block text-white text-sm font-semibold uppercase tracking-widest transform translate-x-0 group-hover:translate-x-4 transition-all duration-700">
          {name}
        </span>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  return (
    <section className="bg-black py-16 px-4 text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-7xl font-bold leading-tight">
          Industries{" "}
          <span className="stroke-text text-blue-500">we serve</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <CategoryCard key={cat} name={cat} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
