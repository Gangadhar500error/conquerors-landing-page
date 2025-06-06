const IndustriesWeServe = () => {
  const industries = [
    {
      name: "LMS Development",
      image: "https://img.freepik.com/free-vector/online-certification-illustration_23-2148575639.jpg",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "OES Solutions",
      image: "https://img.freepik.com/free-vector/online-exams-concept-illustration_114360-7767.jpg",
      color: "from-purple-600 to-indigo-800"
    },
    {
      name: "Pickles & Food",
      image: "https://img.freepik.com/free-vector/flat-design-indian-food-illustration_23-2149422000.jpg",
      color: "from-yellow-600 to-orange-600"
    },
    {
      name: "E-commerce Platforms",
      image: "https://topsoftwarecompanies.co/front_assets/img/blog/ecommerce.jpeg",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Real Estate Portals",
      image: "https://www.hallmarkbuilders.in/images/blog/nov23/blog-banner-17nov2023.jpg",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Mobile Apps",
      image: "https://img.freepik.com/free-vector/mobile-marketing-concept-illustration_114360-4093.jpg",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "CRM Systems",
      image: "https://img.freepik.com/free-vector/crm-system-concept-illustration_114360-7343.jpg",
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "EdTech Platforms",
      image: "https://reviewsreporter.com/wp-content/uploads/2021/09/edutech.webp",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Church & Ministries",
      image: "https://img.freepik.com/free-vector/praying-christians-concept-illustration_114360-7291.jpg",
      color: "from-yellow-700 to-orange-700"
    },
    {
      name: "Job Portals",
      image: "https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-5666.jpg",
      color: "from-teal-600 to-green-600"
    },
    {
      name: "Internship Platforms",
      image: "https://img.freepik.com/free-vector/job-promotion-concept-illustration_114360-1274.jpg",
      color: "from-cyan-600 to-blue-700"
    },
    {
      name: "Matrimony Services",
      image: "https://img.freepik.com/free-vector/indian-wedding-couple-concept-illustration_114360-7871.jpg",
      color: "from-rose-600 to-pink-700"
    }
  ];

  return (
    <section className="py-16 bg-[#011627] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Industries <span className="stroke-text text-4xl md:text-7xl font-bold">we Serve</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative text-center p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm transition-all duration-500 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="relative w-full h-24 rounded-xl overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-80 mix-blend-overlay`}></div>
              </div>

              <h4 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                {industry.name}
              </h4>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
