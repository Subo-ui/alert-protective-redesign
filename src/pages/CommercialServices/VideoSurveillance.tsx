import React from 'react';
import { PhoneIcon, WifiIcon, CameraIcon, DevicePhoneMobileIcon, ShieldCheckIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, UserGroupIcon, MapPinIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoSurveillanceImage from '../../assets/images/VideoSurveillanceComm.jpg';

const heroFeatures = [
    {
        name: 'Local Midwest Business',
        description: 'Surveillance systems built by Midwesterns, for Midwesterns',
        icon: MapPinIcon,
    },
    {
        name: 'Smartphone Access & Viewing',
        description: 'Real-time and recorded video, anytime from anywhere',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Best Video Surveillance Brands',
        description: 'Alarm.com, Honeywell, Hikvision, EEN Brivo and others',
        icon: ShieldCheckIcon,
    }
];

const technologies = [
  {
    name: 'Wireless Outdoor Cams',
    description: 'High-res weatherproof security cams that connect through WiFi and run on battery power for years.',
    icon: WifiIcon,
  },
  {
    name: 'High-Tech Indoor Cams',
    description: 'Discreet HD video cameras with whole-room coverage, night vision, motion detection and more.',
    icon: CameraIcon,
  },
  {
    name: 'Video Doorbells',
    description: "See who's at your door and even speak with them directly from your phone or connected smart device.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Ready for Professional Monitoring',
    description: 'Looking for added protection? Professional monitoring by Alert Protective is the perfect choice.',
    icon: ComputerDesktopIcon,
  },
];

const processSteps = [
    {
      step: "Step 1",
      title: "Schedule Your Appointment",
      description: "Call 855-433-6700 or request a free estimate today. An agent will schedule an at-home consultation with one of our friendly security consultants at your earliest convenience.",
      icon: CalendarDaysIcon,
    },
    {
      step: "Step 2",
      title: "Get Your Free Quote",
      description: "Once the security consultant has assessed your home, he or she will sit down with you and share some of our best-selling video surveillance systems. Once you decide on a system, we'll schedule a time for the installation.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      step: "Step 3",
      title: "Relax While We Install Your System",
      description: "Our technicians will arrive at your home with your brand new surveillance equipment. We'll work quickly to install your new system and test it afterward to make sure it's working properly.",
      icon: WrenchScrewdriverIcon,
    },
    {
      step: "Step 4",
      title: "Receive Free Support and Training",
      description: "You don't have to comb through instruction booklets or hunt down online PDFs with Alert Protective. Our technicians will walk you through your new system until you're 100% comfortable with how it works.",
      icon: UserGroupIcon,
    },
];

const CommercialVideoSurveillance: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 md:h-[32rem] lg:h-[40rem]" style={{ backgroundImage: `url(${videoSurveillanceImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Security Camera Installation in the Midwest
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Stay Connected and Safe
          </p>
        </div>
      </div>

      {/* Hero Features Section */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {heroFeatures.map((feature) => (
                    <div key={feature.name} className="flex flex-col items-center">
                        <feature.icon className="h-10 w-10 text-deep-red mb-3" />
                        <h3 className="text-xl font-bold">{feature.name}</h3>
                        <p className="text-gray-300 text-sm mt-1">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Intro Content Section */}
      <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-sm text-gray-500 mb-6 max-w-5xl mx-auto">
                <Link to="/" className="hover:text-deep-red">Home</Link> / 
                <Link to="/services" className="hover:text-deep-red"> Commercial Services</Link> / 
                <span className="font-semibold"> Commercial Video Surveillance</span>
            </div>
              <div className="max-w-5xl mx-auto">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Security Camera Installation in the Midwest: Stay Connected and Safe</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    What if you could be certain that your child made it home safe from school? Or that intruders weren't lurking on your property? With next-gen live-streaming home security cameras, Midwest residents can do all this and more. At Alert Protective, your safety is our specialty. As Midwest natives ourselves, we've seen the impacts of crime on our city first hand. So we've made it our business to help keep families safe throughout the city and the greater Midwest area.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Our video surveillance systems provide property owners with a way to keep a watchful eye on their home from anywhere in the world that has internet access. It's never been easier to calm a worried mind. Thanks to simple smartphone integrations, you can see inside your home in real time with the device that's already in your pocket.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Once we've installed security cameras in your Midwest home, you'll be amazed with how much they can do. At the first sign of movement, they can send a notification straight to your phone. They can also store high definition video of the event in the cloud. So if you aren't able to check your notifications in the moment, a recording will be waiting for you whenever you choose to view it.
                  </p>
                   <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Outfitting your home with a security camera system is the best way to protect your family and your belongings. A study of more than 400 convicted burglars showed that cameras were the number one deterrent for criminals. Other studies have demonstrated that video security has the ability to drop crime rates by roughly 50%. And simply knowing that your home is safe while your away offers a peace of mind that little else can provide.
                  </p>
                   <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    If security is a top priority, consider pairing a surveillance solution with an alarm and our protective monitoring service. Doing so will grant you all of the protection of the camera system plus a team of professionals who are on call 24/7 to take action at the first sign of trouble. They can have the police department to your home in minutes if necessary and will always be there to answer any questions you may have.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    Don't let another day pass with an unprotected home. Give us a call today to learn more about security cameras in the Midwest or to schedule an appointment to give your home the protection it deserves.
                  </p>
              </div>
          </div>
      </div>
      
      {/* Technologies Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Alert Protective installs the latest video surveillance technology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                <tech.icon className="h-12 w-12 text-deep-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((item) => (
                    <div key={item.step} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
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

export default CommercialVideoSurveillance; 