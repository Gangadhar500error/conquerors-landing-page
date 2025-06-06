import React from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  Code,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import logoheader from '../assets/footer-image.svg';
interface HeroProps {
  scrollToForm: () => void;
}
const Hero = ({ scrollToForm }: HeroProps) => {
  return (
    <section className="bg-gradient-to-br pb-20 from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden text-white">
      <nav className="relative z-50 p-6 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
              <img 
        src={logoheader} 
        alt="Logo" 
        className="h-16 w-auto object-contain" 
      />
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#about" className="hover:text-blue-300 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="hover:text-blue-300 transition-all duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="hover:text-blue-300 transition-all duration-300 relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-blue-300 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>
      <div className="text-center">
        <p className="text-sm tracking-widest text-gray-300 uppercase">
          <Badge className="mt-4 mb-4 bg-gradient-to-r from-accent-500 to-purple-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
            💡 Empowering Your Vision Through Technology
          </Badge>
        </p>
      </div>

      {/* Heading */}
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          WE’RE BUILDING WEBSITES
        </h1>
        <h2 className="stroke-text text-4xl md:text-6xl font-bold px-4 inline-block mt-4">
          FOCUSED ON GENERATING LEADS!
        </h2>
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed">
          We’re a dynamic team dedicated to turning your ideas into captivating
          designs. From sleek websites to standout logos, we deliver creative
          solutions that leave a lasting impression and drive success for
          businesses of all kinds. As a premier digital marketing agency, we
          craft strategies that propel brands to new heights in the digital
          world.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center my-10">
        <Button
          size="lg"
          onClick={scrollToForm}
          className="bg-gradient-to-r from-accent-500 to-purple-600 hover:from-accent-600 hover:to-purple-700 text-white px-10 py-6 text-xl rounded-xl font-bold shadow-2xl hover:shadow-accent-500/25 transform hover:scale-105 transition-all duration-300"
        >
          Book a Free Consultation
        </Button>
        {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white bg-white/10 px-10 py-6 text-xl font-bold backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Book a Free Consultation
            </Button> */}
      </div>
      <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <span className="font-medium">Custom-Built for Every Business</span>
        </div>
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <span className="font-medium">Launch in Weeks, Not Months</span>
        </div>
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <span className="font-medium">Dedicated Project Manager Support</span>
        </div>
      </div>

      {/* Social icons - right fixed */}
      {/* Social icons - show only inside this section and on large screens */}
      <div className="hidden lg:flex flex-col gap-4 absolute top-1/2 right-6 transform -translate-y-1/2 z-10">
        <a
          href="#"
          className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <Instagram size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
