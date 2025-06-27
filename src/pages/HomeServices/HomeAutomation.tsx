import React from 'react';
import { PhoneIcon, VideoCameraIcon, DevicePhoneMobileIcon, BeakerIcon, KeyIcon, LightBulbIcon, CalendarDaysIcon, SparklesIcon, WrenchScrewdriverIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import homeAutomationImage from '../../assets/images/homeautomationphone.jpg';
import ScrollFloat from '../../components/ScrollFloat';

const products = [
  {
    name: 'Remote Video Monitoring',
    description: 'Keep an eye on what matters most with a crystal-clear, 24/7 live feed from your security cameras, streamed directly to your phone.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Video Doorbells',
    description: 'See, hear, and speak to visitors at your front door from anywhere, ensuring you never miss an important delivery or guest.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Smart Thermostats',
    description: 'Automate your home\'s climate for perfect comfort and impressive energy savings—potentially over 10% on your monthly bills.',
    icon: BeakerIcon,
  },
  {
    name: 'Smart Locks',
    description: 'Say goodbye to lost keys. Lock and unlock your doors remotely for guests, family, or service providers, all from your smart device.',
    icon: KeyIcon,
  },
  {
    name: 'Automated Lighting Control',
    description: 'Set the perfect mood. Schedule your lights to brighten, dim, or turn off automatically, enhancing both security and ambiance.',
    icon: LightBulbIcon,
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

const HomeAutomation: React.FC = () => {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${homeAutomationImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Smart Home, Smart Life
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Transform your home into an intelligent, automated sanctuary that adapts to your lifestyle.
          </p>
        </div>
      </div>

      {/* Intro Content Section */}
      <div className="py-20 bg-white/40 backdrop-blur-lg">
          <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Home, Your Rules, Your Control</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Imagine arriving home to find your lights already on, your thermostat set to the perfect temperature, and your favorite music playing softly in the background. With Alert Protective's smart home automation, this isn't just a dream—it's your new reality. We turn your home into an intelligent companion that learns your habits and anticipates your needs.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  From saving energy to enhancing security, smart home automation offers benefits that go far beyond convenience. Our systems integrate seamlessly with your existing security setup, creating a comprehensive solution that protects your family while making your life easier. It's not just about technology; it's about creating a home that truly works for you.
                  </p>
              </div>
          </div>
      </div>
      
      {/* Products Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <ScrollFloat 
              animationDuration={1.2}
              ease="power2.out"
              y={40}
              className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800">Smart Technology That Works for You</h2>
            <p className="text-lg text-gray-600 mt-4">We integrate the latest automation solutions to create a truly intelligent home.</p>
          </ScrollFloat>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <ScrollFloat
                key={product.name}
                animationDuration={1.2}
                ease="back.out(1.7)"
                y={60}
                scale={true}
                stagger={index * 0.1}
                className="flex"
              >
                <product.icon className="h-10 w-10 text-deep-red flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </ScrollFloat>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white/40 backdrop-blur-lg py-20">
        <div className="container mx-auto px-6">
            <ScrollFloat 
                animationDuration={1.2}
                ease="power2.out"
                y={40}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-800">Our White-Glove Installation Process</h2>
                <p className="text-lg text-gray-600 mt-4">We make upgrading your home simple and straightforward.</p>
            </ScrollFloat>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((item, index) => (
                    <ScrollFloat
                        key={item.step}
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={index * 0.1}
                        className="bg-white/40 backdrop-blur-lg p-6 rounded-lg shadow-md text-center"
                    >
                        <item.icon className="h-12 w-12 text-deep-red mx-auto mb-4"/>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.step}: {item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </ScrollFloat>
                ))}
            </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-deep-red text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make Your Home Smarter?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Don't wait to experience the convenience and security of a truly smart home. Call today to start your automation journey.</p>
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

export default HomeAutomation; 