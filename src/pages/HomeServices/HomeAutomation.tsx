import React from 'react';
import { PhoneIcon, VideoCameraIcon, DevicePhoneMobileIcon, BeakerIcon, KeyIcon, LightBulbIcon, CalendarDaysIcon, SparklesIcon, WrenchScrewdriverIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import homeAutomationImage from '../../assets/images/homeautomationphone.jpg';

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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-contain bg-no-repeat bg-center bg-black h-96 md:h-[36rem] lg:h-[48rem]" style={{ backgroundImage: `url(${homeAutomationImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Your Home, Intelligently Automated
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Seamlessly orchestrate your security, comfort, and entertainment with one intuitive system.
          </p>
        </div>
      </div>

      {/* Intro Content Section */}
      <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Future of Home Living</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Go beyond basic security. Imagine a home that responds to your every need. With smart home solutions from Alert Protective, you're not just installing gadgets; you're upgrading your lifestyle. Our experts design and install cutting-edge systems like <span className="font-bold text-deep-red">Control4</span> that unify all your devices—from locks and lights to your entire home theater—into a single, effortless experience. Manage everything from anywhere, with just a tap on your phone.
                  </p>
              </div>
          </div>
      </div>
      
      {/* Products Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Create Your Perfect Smart Home Ecosystem</h2>
            <p className="text-lg text-gray-600 mt-4">Everything you need to build a responsive, intelligent home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.name} className="flex">
                <product.icon className="h-10 w-10 text-deep-red flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
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
          <h2 className="text-4xl font-bold mb-4">Bring Your Home Into the 21st Century!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discover how our smart home solutions can bring unparalleled comfort and peace of mind.</p>
          <div className="flex justify-center items-center space-x-6">
              <a href="tel:855-433-6700" className="bg-white text-deep-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-300 flex items-center shadow-lg">
                <PhoneIcon className="h-6 w-6 mr-3" />
                (855) 433-6700
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-deep-red transition-colors duration-300 shadow-lg">
                Schedule a Consultation
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAutomation; 