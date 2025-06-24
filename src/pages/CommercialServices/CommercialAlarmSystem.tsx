import React from 'react';
import { PhoneIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, UserGroupIcon, BuildingStorefrontIcon, ShieldCheckIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import commercialAlarmImage from '../../assets/images/CommercialServicesAlarmSystems.jpg';

const features = [
  {
    name: 'Custom-Designed Systems',
    description: "Custom systems designed for your building around your company's compliance needs.",
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Advanced Alarm Equipment',
    description: 'The latest surveillance cams, motion detectors, environmental sensors and more.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'UL-Approved Monitoring',
    description: 'We vigilantly monitor your business from a UL credentialed alarm monitoring facility.',
    icon: ShieldCheckIcon,
  },
];

const processSteps = [
    {
      step: "Step 1",
      title: "Schedule Your Appointment",
      description: "Call (855) 433-6700 or schedule online to set up your free consultation with an Alert Protective security consultant.",
      icon: CalendarDaysIcon,
    },
    {
      step: "Step 2",
      title: "Get Your Free Service Quote",
      description: "A security consultant will arrive at the scheduled time to assess your business property and security needs. He'll recommend alarm systems and give upfront pricing on the cost to install them.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      step: "Step 3",
      title: "Install Your New Alarm System",
      description: "We'll arrive on the day of your installation on time with the right equipment. Once there, our diligent technicians will complete the install, then test it to ensure it's in working order.",
      icon: WrenchScrewdriverIcon,
    },
    {
      step: "Step 4",
      title: "Get Support from our Technicians",
      description: "We'll explain how your new alarm system works in detail until you are 100% comfortable with its operation. When it comes to educating our business clients, we never cut corners and we never rush the process.",
      icon: UserGroupIcon,
    },
];

const otherServices = [
    { name: 'Alarm Monitoring', link: '/services/alarm-monitoring' },
    { name: 'Access Control', link: '#' },
    { name: 'Fire Alarms', link: '#' },
    { name: 'Video Surveillance', link: '#' },
];

const CommercialAlarmSystem: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${commercialAlarmImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Prevent Crime. Detect Threats. Master Your Commercial Security.
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            A safer, more secure business begins with the latest in smart commercial security alarms and responsive alarm monitoring.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {features.map((feature) => (
              <div key={feature.name}>
                <feature.icon className="h-12 w-12 text-deep-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content & Services List */}
      <div className="py-20">
          <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-deep-blue mb-6">One Provider For All Your Business Security Needs</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      No matter the size of your business and budget, we can create a custom alarm system solution for you. All of our alarm systems are easy to use and give you notifications in real time so you can always stay up to date.
                  </p>
                  <div className="bg-gray-100 p-8 rounded-lg">
                      <h3 className="text-2xl font-semibold text-deep-blue mb-4">We offer the following types of commercial alarm systems and services:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {otherServices.map(service => (
                              <li key={service.name}><Link to={service.link} className="hover:text-deep-red hover:underline">{service.name}</Link></li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Our Process</h2>
                <p className="text-lg text-gray-600 mt-4">We make the whole process—from surveying, installing and testing your alarm system—as painless and straightforward as possible.</p>
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
          <h2 className="text-4xl font-bold mb-4">Why choose Alert Protective for your business security needs?</h2>
          <p className="text-xl mb-2"><span className="font-bold">Locally minded:</span> For over 35 years, we've protected Chicago businesses just like yours.</p>
          <p className="text-xl mb-2"><span className="font-bold">Reliable equipment:</span> We choose products from the most trusted manufacturers in the industry.</p>
          <p className="text-xl mb-8"><span className="font-bold">No high-pressure sales tactics:</span> Our technicians only design and recommend alarm systems based on your actual needs.</p>
          <a href="tel:855-433-6700" className="bg-white text-deep-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-300 flex items-center shadow-lg max-w-sm mx-auto justify-center">
            <PhoneIcon className="h-6 w-6 mr-3" />
            (855) 433-6700
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommercialAlarmSystem; 