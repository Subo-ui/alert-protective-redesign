import React from 'react';
import { PhoneIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, UserGroupIcon, ShieldCheckIcon, BuildingOfficeIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import commercialFireImage from '../../assets/images/fire_alarm_image.jpg';

const features = [
  {
    name: 'UL-Approved Monitoring',
    description: 'Dispatch fire departments to your facility within seconds.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Up-to-Code & Compliant',
    description: 'Confidently meet all local and national state fire codes.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Innovative Fire Systems',
    description: 'Install the most advanced control panels, sensors and more.',
    icon: SparklesIcon,
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
      description: "Our consultant will arrive at the scheduled time and date to assess your business property. He or she will listen to your needs and offer guidance on equipment and monitoring pricing.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      step: "Step 3",
      title: "Install Your New Fire System",
      description: "We'll arrive on the day of your installation on time with the right equipment. Once there, our diligent technicians will complete the install, then test it to ensure it's in working order.",
      icon: WrenchScrewdriverIcon,
    },
    {
      step: "Step 4",
      title: "Get Support from our Technicians",
      description: "When it comes to educating our business clients on their new commercial fire alarm system, we never cut corners and we never rush the process. We'll explain the new system in detail until you are 100% comfortable with its operation.",
      icon: UserGroupIcon,
    },
];

const whyChooseUs = [
    {
        title: "Local Protection",
        description: "We monitor from a UL monitoring station here in Chicago. The same can't be said for nationwide security providers."
    },
    {
        title: "Flexible Installations",
        description: "Every sensor, control panel and audio device is customized to meet the needs of your facility."
    },
    {
        title: "Comprehensive Solutions",
        description: "From installation and monitoring to maintenance, we have your back."
    }
]

const FireAlarmSystem: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[30rem]" style={{ backgroundImage: `url(${commercialFireImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Commercial Fire Alarms in Chicago, Illinois
          </h1>
          <p className="text-xl md:text-2xl mt-4" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Responsive Fire Safety Products & Solutions for Business
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/quote" className="bg-deep-red text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg">
                Schedule a Quote
            </Link>
            <a href="tel:855-433-6700" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-deep-red transition-colors duration-300 shadow-lg flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                (855) 433-6700
            </a>
          </div>
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

      {/* Breadcrumb & Intro */}
      <div className="py-20">
          <div className="container mx-auto px-6">
              <div className="text-sm text-gray-500 mb-6 max-w-4xl mx-auto">
                <Link to="/" className="hover:text-deep-red">Home</Link> / 
                <Link to="/services" className="hover:text-deep-red"> Commercial Services</Link> / 
                <span className="font-semibold"> Commercial Fire Alarms</span>
              </div>
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Fire Alarm Systems Built on Ground-Breaking Detection Technology</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Thousands of companies in the U.S. suffer the consequences of fire damage every year. But with next-generation fire systems that are built for scale and custom-installed by our experts, you increase the odds that your property, facility, enterprise or municipality will not become one of them.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    With advanced control panels that leverage existing wire structure and intelligent sensors that combine super-responsive ionization and photoelectric components, your facility can rapidly detect fires and protect the lives of your visitors and employees.
                  </p>
              </div>
          </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Why choose Alert Protective for your commercial fire alarm needs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
                <p className="text-lg text-gray-600 mt-4">We make identifying and installing commercial fire alarm systems simple and straightforward.</p>
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

    </div>
  );
};

export default FireAlarmSystem; 