import { Target, Eye, Heart, Award, Users, TrendingUp, Zap, Shield, Clock, Code, Smartphone, Globe, Database, Palette, Search, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { icon: Users, number: "150+", label: "Expert Developers", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "500+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, number: "98%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500" },
    { icon: Clock, number: "24/7", label: "Support Available", color: "from-orange-500 to-red-500" }
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS & Android apps that deliver exceptional user experiences"
    },
    {
      icon: Globe,
      title: "Web Development", 
      description: "Responsive websites and web applications built with modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers"
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Scalable server architecture and database management systems"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "SEO, social media, and digital campaigns that drive growth"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored solutions for unique business requirements"
    }
  ];

  const features = [
    "ISO 27001 Certified Security",
    "24/7 Technical Support",
    "Agile Development Process",
    "99.9% Uptime Guarantee"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden rounded-t-[40px]">

      <div className="container mx-auto px-6 relative ">
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="group bg-white/80 backdrop-blur-sm border shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Main About Section - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
             <h2 className="text-5xl lg:text-7xl font-bold text-[#021b2d] mb-8 leading-tight">
              <span className="text-gray-900 block mb-2">Driven By Purpose</span>
              <span className="stroke-text-two text-4xl lg:text-7xl">Built With Passion</span>
            </h2>     
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a passionate team of technology innovators, designers, and strategists committed to delivering 
                exceptional digital solutions that drive business growth and create lasting impact.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#contact">
              <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
              {/* <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 rounded-xl">
                View Portfolio
              </Button> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl ">
              <img 
                src="https://ezulix.com/assets/image/on-demand/team.webp" 
                alt="Our Expert Team at Work"
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div> */}
              
              {/* Floating Stats Card */}
              {/* <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
                <div className="flex items-center mt-2 text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">98% Success Rate</span>
                </div>
              </div> */}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
 {/* Stats Section */}
        
        {/* Final CTA Section */}
        {/* <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your vision to life with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="#contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-600 px-8 py-6 text-lg font-semibold transition-colors duration-300 shadow-lg rounded-xl">
              Get Free Consultation
            </Button>
            </a>
             <a href="#portfolio">
            <Button variant="outline" className="bg-white hover:text-blue-600 text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold transition-colors duration-300 shadow-lg rounded-xl">
              View Case Studies
            </Button>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;