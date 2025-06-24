import React from 'react';
import { PhoneIcon, WifiIcon, CameraIcon, DevicePhoneMobileIcon, ShieldCheckIcon, CalendarDaysIcon, SparklesIcon, WrenchScrewdriverIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoSurveillanceImage from '../../assets/images/videosurveillancefamily.jpg';

const technologies = [
  {
    name: 'Wireless Outdoor Cams',
    description: 'High-resolution, weatherproof security cameras that connect via WiFi and run on battery power for years, covering every angle of your property.',
    icon: WifiIcon,
  },
  {
    name: 'High-Tech Indoor Cams',
    description: 'Discreet HD cameras with whole-room coverage, exceptional night vision, and intelligent motion detection to monitor your home\'s interior.',
    icon: CameraIcon,
  },
  {
    name: 'Video Doorbells',
    description: 'See, hear, and speak to visitors at your door from anywhere in the world, adding a powerful layer of security and convenience.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Ready for Professional Monitoring',
    description: 'Elevate your protection by connecting your cameras to our 24/7 monitoring service for immediate response at the first sign of trouble.',
    icon: ShieldCheckIcon,
  },
];

const processSteps = [
    {
      step: "Step 1",
      title: "Schedule Your Consultation",
      description: "Connect with us by calling (855) 433-6700 or requesting a quote online. We'll schedule a convenient time for one of our expert consultants to visit your home.",
      icon: CalendarDaysIcon,
    },
    {
      step: "Step 2",
      title: "Design Your Custom System",
      description: "Your personal consultant will listen to your needs and help you design a smart home that fits your lifestyle perfectly. We promise a no-pressure experience focused entirely on your goals.",
      icon: SparklesIcon,
    },
    {
      step: "Step 3",
      title: "Relax During Your Seamless Installation",
      description: "Our certified technicians work quickly and meticulously. We ensure every component is running perfectly and connected to your devices before we leave.",
      icon: WrenchScrewdriverIcon,
    },
    {
      step: "Step 4",
      title: "Enjoy Personalized Training & Ongoing Support",
      description: "We don't leave until you're 100% comfortable. We provide detailed, patient training on your new system and remain available for any questions you have down the road.",
      icon: UserGroupIcon,
    },
]

const VideoSurveillance: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${videoSurveillanceImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            See Your World, Securely
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Crystal-clear video surveillance that keeps you connected and in control, wherever you are.
          </p>
        </div>
      </div>

      {/* Intro Content Section */}
      <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">The Ultimate Peace of Mind is Seeing for Yourself</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  What if you could be certain your child made it home from school or that an important package arrived safely? With a state-of-the-art surveillance system from Alert Protective, you can. We give you a real-time window into your home, accessible from the phone already in your pocket. It's more than security; it's a constant connection to what matters most.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Studies show that security cameras are the #1 deterrent for criminals, cutting neighborhood crime rates by over 50%. With instant motion alerts and cloud-stored HD video, you'll have undeniable proof and the awareness you need to protect your family and your belongings effectively.
                  </p>
              </div>
          </div>
      </div>
      
      {/* Technologies Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">The Latest in Surveillance Technology</h2>
            <p className="text-lg text-gray-600 mt-4">We install cutting-edge camera solutions tailored to your home's unique needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex">
                <tech.icon className="h-10 w-10 text-deep-red flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Our White-Glove Installation Process</h2>
                <p className="text-lg text-gray-600 mt-4">We make upgrading your home simple and straightforward.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((item) => (
                    <div key={item.step} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <item.icon className="h-12 w-12 text-deep-red mx-auto mb-4"/>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.step}: {item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-deep-red text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to See Your Home in a Whole New Light?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let another day pass with an unprotected home. Call today to design a custom surveillance system that gives you the protection and peace of mind you deserve.</p>
          <div className="flex justify-center items-center space-x-6">
              <a href="tel:855-433-6700" className="bg-white text-deep-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-300 flex items-center shadow-lg">
                <PhoneIcon className="h-6 w-6 mr-3" />
                (855) 433-6700
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-deep-red transition-colors duration-300 shadow-lg">
                Get a Free Quote
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSurveillance; 