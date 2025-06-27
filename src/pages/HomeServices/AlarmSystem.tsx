import React from 'react';
import { PhoneIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import alarmSystemImage from '../../assets/images/alarmsystemimage.jpg';

const AlarmSystem: React.FC = () => {
  const processSteps = [
    {
      step: "Step 1",
      title: "Schedule an Appointment",
      description: "Calling (855) 433-6700 or requesting a quote online will connect you with an actual Alert Protective employee – not a call center agent. From here you can schedule a time for a security consultant to arrive at your door and assess your security needs for free based on your home's unique design and layout.",
      icon: CalendarDaysIcon,
    },
    {
      step: "Step 2",
      title: "Get a Free Quote",
      description: "When the consultant arrives, he or she will perform a comprehensive home assessment, identifying all entryways and blindspots. The consultant will then work within your budget to identify the best security solution possible for you and your family.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      step: "Step 3",
      title: "Relax While We Install Your System",
      description: "On the day of your installation, we'll arrive with all the necessary tools and security hardware. Our technicians work quickly to complete your installation, then test the system thoroughly to make sure everything is working properly.",
      icon: WrenchScrewdriverIcon,
    },
    {
      step: "Step 4",
      title: "Get Training & Support",
      description: "When it comes to educating our customers on their new security system, we never cut corners, and we never rush the process. We'll explain the new system in detail until you and your family members are 100% comfortable with how it works.",
      icon: UserGroupIcon,
    },
  ]

  return (
    <div className="bg-transparent text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 md:h-[32rem] lg:h-[40rem]" style={{ backgroundImage: `url(${alarmSystemImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Making the Midwest Safer
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            One Home Security Installation at a Time
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-deep-blue mb-4">Your Castle, Your Protection</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Your home is your castle. Unfortunately, protecting your castle with a moat isn't practical here in the Midwest. Thankfully, our state-of-the-art home alarm systems provide the protection you need.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As one of the leading home security companies in the Midwest, we understand that every home is different. That's why we design and install custom home alarm systems according to the specific needs of each unique residence. In some cases, an alarm system will provide ample protection all on its own. In others, a complete home security system might be necessary.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold text-deep-blue mb-4">Our Midwest Advantage</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Alert Protective was founded in the Midwest and we've served families here over the last four decades. Our home-court advantage sets us apart from the national security brands. We know the ins and outs of every neighborhood because we live here, too. And we use that knowledge to design the most effective systems for every home alarm installation.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold text-deep-blue mb-4">More Than Just Hardware</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                An alarm is only as effective as the response to it. So with every home alarm installation, we offer alarm monitoring in the Midwest. Like the rest of our company, our 24/7 professional monitoring service center is located right here in our city. As a result, we provide lightning-fast response times and the most competitive pricing in the industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Even if you already have a monitored system, our 5-Diamond Certified monitoring center could save you as much as 40% a month. Best of all, you won't even have to purchase new equipment.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold text-deep-blue mb-4">Seamless Integration</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                When your alarm is only one part of your home's protection, each component should work seamlessly with the rest. At Alert Protective, we make sure that they do.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From a single mobile app, you can monitor and control the alarm, motion sensors, and security cameras for your Midwest home. You can respond in seconds from anywhere in the world at the first sign of trouble and cancel false alarms just as quickly. Plus, with our Midwest home automation services, you'll be able to control your home entertainment, lighting, and more!
              </p>
            </div>

            {/* Process Section */}
            <div className="py-12">
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800">Our Process</h2>
                  <p className="text-lg text-gray-600 mt-4">We make the process of choosing and installing a home security and alarm system simple and straightforward.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((item) => (
                      <div key={item.step} className="bg-white/40 backdrop-blur-lg p-6 rounded-lg shadow-md text-center">
                          <item.icon className="h-12 w-12 text-deep-red mx-auto mb-4"/>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{item.step}: {item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                  ))}
              </div>
            </div>

            <div className="text-center bg-white/40 backdrop-blur-lg p-8 rounded-lg shadow-md mt-12">
              <h2 className="text-3xl font-bold text-deep-blue mb-4">The Best Home Security Company in the Midwest</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When the safety of your family and your home is on the line, why settle for anything less than the best? Alert Protective has the experience and expertise to keep you safe with home alarm systems designed for your unique needs. Call us today for a free security system quote. With our competitive rates, you can't afford not to.
              </p>
              <a href="tel:855-433-6700" className="bg-deep-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center max-w-xs mx-auto shadow-lg">
                <PhoneIcon className="h-6 w-6 mr-3" />
                (855) 433-6700
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmSystem; 