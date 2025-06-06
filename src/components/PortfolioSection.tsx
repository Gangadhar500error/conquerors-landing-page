import React, { useEffect } from "react";

// Smooth scrolling component
const SmoothScroll = () => {
  useEffect(() => {
    const container = document.querySelector(".no-scrollbar");

    if (container) {
      container.addEventListener("wheel", (e) => {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY > 0 ? 100 : -100,
          behavior: "smooth",
        });
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", () => {});
      }
    };
  }, []);

  return null;
};

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Advanced E-Learning Platform",
      category: "LMS Development",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=350&fit=crop",
      description:
        "Comprehensive learning management system with AI-powered features and interactive content delivery",
    },
    {
      title: "E-Commerce Mobile App",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop",
      description:
        "Feature-rich shopping app with AR try-on features and seamless payment integration",
    },
    {
      title: "Enterprise CRM System",
      category: "CRM Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
      description:
        "Advanced CRM solution with AI analytics and automated workflow management",
    },
    {
      title: "Healthcare Mobile App",
      category: "Flutter Development",
      image:
        "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2022/12/Patient-s-app.jpg",
      description:
        "Telemedicine app with video consultations and AI-powered health monitoring",
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      image:
        "https://appsmaventech.com/assets/Promotion_page/images/header-image-shadow.svg",
      description:
        "Modern property management platform with virtual tours and smart search features",
    },
    {
      title: "Food Delivery App",
      category: "React Native",
      image: "https://sarvinfotech.com/wp-content/uploads/2024/12/food.png",
      description:
        "Multi-vendor food delivery platform with real-time tracking and smart recommendations",
    },
  ];

  return (
    <>
      <SmoothScroll />
      <div className="bg-white py-16">
        <section
          id="portfolio"
          className="bg-white  max-w-3xl-screen ml-auto"
        >
          <div className="mb-10 px-8 text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Case Study
            </h2>
            <p className="text-xl text-gray-600">
              A showcase of our recent work and how we empower businesses
              digitally.
            </p>
          </div>

          <div className="overflow-x-auto snap-x snap-mandatory no-scrollbar flex space-x-6 px-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group snap-center flex-shrink-0 w-[80vw] max-w-[500px] h-[500px] rounded-xl overflow-hidden relative shadow-lg"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Number badge that transforms into center content */}
                <div
                  className="
                    absolute bottom-0 left-0
                    bg-red-600 text-white text-xl font-bold
                    w-28 h-20
                    transition-all duration-300 ease-in-out
                    group-hover:w-64 group-hover:h-40
                    group-hover:rounded-xl group-hover:bg-black
                    z-20
                    flex items-start justify-start flex-col
                    text-left
                    p-4
                  "
                >
                  {/* Number before hover */}
                  <span className="text-3xl group-hover:hidden">
                    {`{${(index + 1).toString().padStart(2, "0")}}`}
                  </span>

                  {/* Content shown on hover only */}
                  <div className="hidden group-hover:block">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-xs opacity-80">{item.description}</p>
                  </div>
                </div>

                {/* Optional: Remove this old hover layer since it's merged above */}
                {/* <div className="absolute inset-0 ..."></div> */}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
