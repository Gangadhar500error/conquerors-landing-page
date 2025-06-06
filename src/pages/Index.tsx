
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import DevelopmentCompaniesSection from '../components/DevelopmentCompaniesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessSection from '../components/ProcessSection';
import HowWeBuildSection from '../components/HowWeBuildSection';
import TrustedCompaniesSection from '../components/TrustedCompaniesSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import CompanyCardsSection from '../components/CompanyCardsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import FloatingButtons from '../components/FloatingButtons';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900">
      <HeroSection scrollToForm={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <AboutSection />
      <DevelopmentCompaniesSection />
      <ServicesSection />
      <TrustedCompaniesSection />
       <CompanyCardsSection />
      {/* <WhyChooseUsSection /> */}
      <TechnologiesSection />
      <PortfolioSection />
      <ProcessSection />
      {/* <HowWeBuildSection /> */}
      
     
      {/* <SuccessStoriesSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons showBackToTop={false} scrollToTop={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <ContactPopup  />
    </div>
  );
};

export default Index;
