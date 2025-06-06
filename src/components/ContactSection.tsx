
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl mb-4">
              <span className="text-blue-600 text-sm font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Start Your Project Today</h2>
            <p className="text-xl text-gray-600">Ready to transform your business? Let's discuss your vision</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Phone</p>
                      <p className="font-bold text-gray-900 text-lg">+91 70131 96804</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Email</p>
                      <p className="font-bold text-gray-900 text-lg">info@conquerorstech.net</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Address</p>
                      <p className="font-bold text-gray-900 text-lg">No.#16, Triveni, Silicon Valley, Madhapur, Hitech City, near Cyber Towers, HYDERABAD,
Telangana – 500081.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl border border-blue-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Why Choose Our Development Services?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>Free consultation and project analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>Agile development methodology</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>Post-launch support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Card className="p-8 rounded-2xl border-0 shadow-2xl">
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  </div>
                  
                 
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  {/* <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select a service</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="web-app">Web Application Development</option>
                      <option value="react-native">React Native Development</option>
                      <option value="flutter">Flutter Development</option>
                      <option value="laravel">Laravel Development</option>
                      <option value="mern">MERN Stack Development</option>
                      <option value="crm">CRM Development</option>
                      <option value="lms">LMS Development</option>
                      <option value="ecommerce">E-Commerce Development</option>
                      <option value="api">API Development</option>
                    </select>
                  </div> */}
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export default ContactForm;
