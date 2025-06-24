import React from 'react';

import alarmComLogo from '../assets/images/Alarmcomlogo.pngw3.webp';
import sdmLogo from '../assets/images/SDMlogo.pngw3.webp';
import sdmFeaturedLogo from '../assets/images/sdmfeatured.pngw3.webp';
import sdm100Logo from '../assets/images/sdm100.pngw3.webp';

const logos = [
  { src: alarmComLogo, alt: 'Alarm.com Partner' },
  { src: sdmLogo, alt: 'SDM Top Systems Integrators' },
  { src: sdmFeaturedLogo, alt: 'Featured in SDM' },
  { src: sdm100Logo, alt: 'Ranked on the SDM 100' },
];

const PartnerLogos: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-20 object-contain"
        />
      ))}
    </div>
  );
};

export default PartnerLogos; 