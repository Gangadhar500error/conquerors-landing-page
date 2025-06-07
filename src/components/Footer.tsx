
import React from 'react';
import { Code, Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoheader from '../assets/footer-image.svg';

const Footer = () => {
  return (
    <footer className="bg-[#081A38] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                    <img 
        src={logoheader} 
        alt="Logo" 
        className="h-16 w-auto object-contain" 
      />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading development company transforming businesses through innovative mobile apps, web applications, 
                and cutting-edge technology solutions worldwide.
              </p>
              <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
            </div>

            {/* Development Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Development Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Mobile Apps Development
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  React Native Apps
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Flutter Development
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Laravel Development
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  MERN Stack Development
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  E-Commerce Solutions
                </a></li>
              </ul>
            </div>

            {/* Business Solutions */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Business Solutions</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  CRM Development
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  LMS Platforms
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  API Development
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Web Applications
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cloud Solutions
                </a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Technical Consulting
                </a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-gray-300 text-sm">info@conquerorstech.net</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Phone className="w-5 h-5 text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Us</div>
                    <div className="text-gray-300 text-sm">+91 70131 96804</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <MapPin className="w-5 h-5 text-purple-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Visit Us</div>
                    <div className="text-gray-300 text-sm">No.#16, Triveni, Silicon Valley, Madhapur, Hitech City, near Cyber Towers, HYDERABAD,
Telangana – 500081.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl">
                <div className="text-white font-medium mb-2">Ready to Start?</div>
                <div className="text-gray-300 text-sm mb-3">Get a free consultation for your project</div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2025 Conquerors Software Technology. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
