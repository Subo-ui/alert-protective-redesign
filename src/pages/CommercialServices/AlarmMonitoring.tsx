import {
    ShieldCheckIcon,
    BellAlertIcon,
    CurrencyDollarIcon,
    PhoneArrowUpRightIcon,
    WrenchScrewdriverIcon,
    ArrowPathIcon,
    WifiIcon,
    DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import { CalendarDaysIcon, ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const features = [
  {
    name: 'Respond Quickly to Threats',
    description: 'Monitor for fire, CO, burglary, medical emergencies and more.',
    icon: BellAlertIcon,
  },
  {
    name: 'Get Monitoring Protection',
    description: 'We monitor your business from a 5-diamond central station.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Switch to Alert and Save',
    description: 'Save up to 40% per month when you switch your monitoring to Alert.',
    icon: CurrencyDollarIcon,
  },
];

const whyChooseUs = [
    {
        name: "Rates start at $36.99/mo",
        description: "We offer some of the most affordable landline rates in the industry.",
        icon: CurrencyDollarIcon
    },
    {
        name: "Always free to switch",
        description: "Switching to Alert Protective is fast and free for new customers.",
        icon: ArrowPathIcon
    },
    {
        name: "Your equipment or ours",
        description: "Have your own equipment? We can monitor almost any security system.",
        icon: WrenchScrewdriverIcon
    },
    {
        name: "Cutting-edge wireless monitoring",
        description: "We install the industry's most advanced monitoring equipment.",
        icon: WifiIcon
    }
];

const processSteps = [
    {
        step: "Step 1",
        name: "Schedule Your Appointment",
        description: "When you're ready, call (855) 433-6700 or contact us online. A friendly customer service representative will schedule a time for one of our security agents to assess your home/business."
    },
    {
        step: "Step 2",
        name: "Discuss Monitoring Options",
        description: "Monitoring needs are different for every home and business. Your security consultant will learn more about your needs during a free consultation, then provide guidance on the monitoring options that work best for you."
    },
    {
        step: "Step 3",
        name: "Connect Monitoring Services",
        description: "We'll arrive at your home or business on your scheduled service date to connect your security system to our 5-Diamond monitoring center. If you have new security equipment, we'll get that installed as well."
    },
    {
        step: "Step 4",
        name: "Get Support from our Technicians",
        description: "When it comes to educating our customers on their new monitoring service, we never cut corners, and we never rush the process. We'll explain the new system in detail until you are 100% comfortable with its operation."
    }
];


export default function CommercialAlarmMonitoring() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900">
          <div className="absolute inset-0">
              <img
              src="/src/assets/images/commercial security.jpg"
              alt="Commercial and residential alarm monitoring"
              className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-60" />
          </div>
          <div className="relative py-32 px-6 sm:py-48 lg:px-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Commercial & Residential Alarm Monitoring</h1>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-gray-300">
                Responsive Professional Monitoring for Your Home & Business in Chicago
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/quote" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                      Get a Free Quote
                  </a>
                  <a href="tel:8554336700" className="text-sm font-semibold leading-6 text-white flex items-center">
                      Call Now <PhoneArrowUpRightIcon className="h-4 w-4 ml-2" />
                  </a>
              </div>
          </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">24/7 Protection</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Monitoring Keeps Your Home or Business on High Alert
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            You can't be certain of when an emergency will strike. But with professional 24/7 monitoring support from Alert Protective, you'll never be caught unprepared. Our customers are monitored from a 5-Diamond Certified monitoring center right here in Chicago.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

       {/* Why Choose Us Section */}
       <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-red-600">Your Trusted Partner</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Alert Protective?</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We are the monitoring provider of choice for tens of thousands of Chicago residents and businesses, with some of the most competitive rates in the industry.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
                        {whyChooseUs.map((reason) => (
                            <div key={reason.name} className="relative pl-12">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                                        <reason.icon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    {reason.name}
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">{reason.description}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


      {/* Our Process */}
      <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-red-600">Our Process</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Easy and Convenient Monitoring Setup
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        It's never been easier to monitor your home or business through Alert Protective.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {processSteps.map((step) => (
                        <div key={step.name} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-sm font-bold text-red-600">{step.step}</div>
                            <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.name}</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
} 