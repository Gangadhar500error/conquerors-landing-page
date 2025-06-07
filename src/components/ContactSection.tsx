import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDown, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#001728] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-2">
          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            START A <br />
            CONNECTION <br />
          </h2>
          <h2 className="text-white text-outline font-bold text-5xl lg:text-7xl text-right stroke-text">
            WITH US
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            With Probey Services, we don’t just serve you—we become an integral
            part of your business. We work as a team to ensure success and
            follow through on our commitment to results.
          </p>
        </div>

        {/* Right Form Card */}
        <div className="bg-white text-black w-full lg:w-[500px] rounded-3xl p-8 space-y-5 shadow-2xl">
          <form className="space-y-4">
            <Input placeholder="Full Name*" className="rounded-xl" />
            <div className="flex gap-4">
              <div className="relative w-1/3">
                <select className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-600">
                  <option value="">Country</option>
                  <option value="IN">India</option>
                  <option value="US">USA</option>
                  {/* Add more countries as needed */}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
              <Input placeholder="Phone Num*" className="w-2/3 rounded-xl" />
            </div>
            <Input
              placeholder="Email Address*"
              type="email"
              className="rounded-xl"
            />
           <select className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-600">
            <option>Select Service*</option>
            <option>Mobile Apps Development</option>
            <option>React Native App Development</option>
            <option>LMS Development</option>
            <option>Flutter Development</option>
            <option>CRM Development</option>
            <option>Laravel Development</option>
            <option>MERN Development</option>
            <option>API Development</option>
            <option>E-Commerce Development</option>
            <option>Web Applications Development</option>
          </select>
            <Textarea
              placeholder="Your Message"
              rows={3}
              className="rounded-xl"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-accent-500 to-purple-600 hover:from-accent-600 hover:to-purple-700 text-white px-10 py-6 text-xl rounded-xl font-bold shadow-2xl hover:shadow-accent-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Send className="w-4 h-4 mr-2 inline-block" />
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
