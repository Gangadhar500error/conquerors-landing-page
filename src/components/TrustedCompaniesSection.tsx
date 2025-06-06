import React from 'react';
import microsoftLogo from '../assets/clients/2560px-Clarivate_Analytics.svg.png';
import googleLogo from '../assets/clients/chinnababu.png';
import amazonLogo from '../assets/clients/Trialect-logo-2.png';
import appleLogo from '../assets/clients/unnamed.png';
import metaLogo from '../assets/clients/Screenshot_1.png';
import netflixLogo from '../assets/clients/QtxWNWUIhVBByJq.png';
import teslaLogo from '../assets/clients/logo 1.png';
import googleLogo2 from '../assets/clients/coworkspace.png';
import amazonLogo2 from '../assets/clients/TP-Proventures (1).png';
import spotifyLogo from '../assets/clients/naturaw-logo-1.png';
import ConqrLogo from '../assets/clients/FCAlogo-PrimaryColSMALL.png';
import ThinkLogo from '../assets/clients/thinkmove.png';

const TrustedClients = () => {
  const clients = [
    { name: 'Microsoft', logo: microsoftLogo, description: 'Cloud Solutions' },
    { name: 'Google', logo: googleLogo, description: 'AI & Analytics' },
    { name: 'Amazon', logo: amazonLogo, description: 'E-Commerce Platform' },
    { name: 'Apple', logo: appleLogo, description: 'Mobile Technology' },
    { name: 'Meta', logo: metaLogo, description: 'Social Media' },
    { name: 'Netflix', logo: ConqrLogo, description: 'Streaming Platform' },
    { name: 'Tesla', logo: teslaLogo, description: 'Electric Vehicles' },
    { name: 'Google', logo: googleLogo2, description: 'AI & Analytics' },
    { name: 'Amazon', logo: amazonLogo2, description: 'E-Commerce Platform' },
    { name: 'Apple', logo: ThinkLogo, description: 'Mobile Technology' },
    { name: 'Netflix', logo: netflixLogo, description: 'Streaming Platform' },
    { name: 'Spotify', logo: spotifyLogo, description: 'Music Streaming' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#021b2d] mb-8 leading-tight">
            VALUED <span className="stroke-text-two text-4xl lg:text-7xl">CLIENTS</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Probey Services builds relationships based on trust, offering transparency, reliability, and consistent quality in everything we do. Our dedication to integrity creates lasting partnerships and shared success.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="border border-gray-800 rounded-xl flex items-center justify-center p-4 h-36">
              <img
                src={client.logo}
                alt={client.name}
                className=" object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
