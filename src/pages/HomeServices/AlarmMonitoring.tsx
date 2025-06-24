import React from 'react';
import { PhoneIcon, WifiIcon, WrenchScrewdriverIcon, ArrowPathIcon, CurrencyDollarIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import monitoringImage from '../../assets/images/commercial security.jpg'; // Using a placeholder for now

const HomeAlarmMonitoring: React.FC = () => {
  const benefits = [
    {
      icon: 'price',
      title: 'Transparent, Competitive Pricing',
      description: 'Our landline monitoring rates are among the most affordable in the industry, starting at just $36.99/month. No hidden fees, just honest pricing.',
    },
    {
      icon: 'switch',
      title: 'Switching is Always Free',
      description: 'Ready for better service and pricing? We make the transition seamless and completely free for new customers.',
    },
    {
      icon: 'tools',
      title: 'Your Equipment or Ours',
      description: "Have an existing security system? We can monitor almost any system, saving you the cost of new hardware.",
    },
    {
      icon: 'wifi',
      title: 'Cutting-Edge Wireless Monitoring',
      description: "We install the industry's most advanced and reliable wireless monitoring equipment for state-of-the-art protection.",
    },
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "Schedule Your Appointment",
      description: "When you're ready, call (855) 433-6700 or contact us online. A friendly customer service representative will schedule a time for one of our security agents to assess your home/business.",
      icon: CalendarDaysIcon,
    },
    {
      step: "Step 2",
      title: "Discuss Monitoring Options",
      description: "Monitoring needs are different for every home and business. Your security consultant will learn more about your needs during a free consultation, then provide guidance on the monitoring options that work best for you.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      step: "Step 3",
      title: "Connect Monitoring Services",
      description: "We'll arrive at your home or business on your scheduled service date to connect our 5-Diamond monitoring center. If you have new security equipment, we'll get that installed as well.",
      icon: WrenchScrewdriverIcon,
    },
    {
      step: "Step 4",
      title: "Get Support from our Technicians",
      description: "When it comes to educating our customers on their new monitoring service, we never cut corners. We'll explain the new system in detail until you are 100% comfortable with its operation.",
      icon: UserGroupIcon,
    },
  ]

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'price':
        return <CurrencyDollarIcon className="h-12 w-12 text-deep-red" />;
      case 'switch':
        return <ArrowPathIcon className="h-10 w-10 text-deep-red" />;
      case 'tools':
        return <WrenchScrewdriverIcon className="h-10 w-10 text-deep-red" />;
      case 'wifi':
        return <WifiIcon className="h-10 w-10 text-deep-red" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${monitoringImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            24/7 Professional Monitoring
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Constant Vigilance for Your Home and Business. You can't be everywhere at once, but we can.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* Intro */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-4">Never Be Caught Unprepared</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Emergencies are unpredictable. With 24/7 professional monitoring from Alert Protective, you gain the unwavering certainty that your property is always under a watchful eye. As the trusted monitoring provider for thousands across Chicago, our 5-Diamond Certified, locally-based center ensures lightning-fast response times when it matters most.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 mb-4">{renderIcon(benefit.icon)}</div>
                <h3 className="text-xl font-bold text-deep-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Process Section */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Our Process</h2>
                <p className="text-lg text-gray-600 mt-4">It's never been easier and more convenient to monitor your home or business through Alert Protective.</p>
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
          <div className="mt-20 text-center max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-deep-blue mb-4">Ready for Unmatched Peace of Mind?</h3>
            <p className="text-gray-600 mb-8">
              Whether you have an existing system or need a new one, our team is ready to provide you with the most reliable monitoring service in the industry. Contact us today to see how much you can save.
            </p>
            <a href="tel:855-433-6700" className="bg-deep-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300 inline-flex items-center shadow-lg">
              <PhoneIcon className="h-6 w-6 mr-3" />
              Get a Free Quote Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAlarmMonitoring; 