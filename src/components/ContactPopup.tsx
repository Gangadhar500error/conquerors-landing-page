// components/ContactModal.tsx
import React from "react";
import {
  CheckCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-scale-in border border-gray-200">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-2/5 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-12 flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-white text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Get Your Free Quote!
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your ideas into reality with our expert development
                team. Get a detailed proposal within 24 hours.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8 text-left">
                {[
                  "Free consultation & project analysis",
                  "Detailed project roadmap & timeline",
                  "No obligation competitive pricing",
                  "Dedicated project manager assigned",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form Design */}
          <div className="lg:w-3/5 p-12 relative bg-white">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-10 h-10"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                  Free Quote Request
                </span>
              </div>
              <h4 className="text-4xl font-bold text-gray-900 mb-4">
                Start Your Project Today
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tell us about your vision and we'll provide a comprehensive
                proposal with timeline and pricing within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <select className="w-full pl-4 pr-4 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-900">
                    <option value="">Select Service</option>
                    <option value="mobile-apps">Mobile Apps Development</option>
                    <option value="react-native">
                      React Native App Development
                    </option>
                    <option value="lms">LMS Development</option>
                    <option value="flutter">Flutter Development</option>
                    <option value="crm">CRM Development</option>
                    <option value="laravel">Laravel Development</option>
                    <option value="mern">MERN Development</option>
                    <option value="api">API Development</option>
                    <option value="ecommerce">E-Commerce Development</option>
                    <option value="web-applications">
                      Web Applications Development
                    </option>
                  </select>
                </div>
              </div>

              <div className="relative group">
                <MessageCircle className="absolute left-4 top-6 text-gray-400 w-5 h-5" />
                <textarea
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  rows={4}
                  className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none resize-none text-gray-900 placeholder-gray-500"
                />
              </div>

              <Button
                type="button"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              >
                <Send className="w-5 h-5 mr-3" />
                Get My Free Quote Now
              </Button>
            </form>

            <div className="flex items-center justify-center space-x-2 mt-6 p-4 bg-green-50 rounded-2xl border border-green-200">
              <Shield className="w-5 h-5 text-green-600" />
              <p className="text-sm text-green-700 font-medium">
                100% Confidential. Your information is secure with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
