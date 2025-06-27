import {
    KeyIcon,
    LockClosedIcon,
    BellAlertIcon,
    PhoneArrowUpRightIcon,
    DevicePhoneMobileIcon,
    UserGroupIcon
  } from '@heroicons/react/24/outline';
import ScrollFloat from '../../components/ScrollFloat';

const features = [
  {
    name: 'Cloud-Based Control',
    description: 'Remotely lock or unlock your building from anywhere with an internet connection.',
    icon: LockClosedIcon,
  },
  {
    name: 'Customized Credentials',
    description: 'Control which employees and visitors can access specific areas of your business.',
    icon: KeyIcon,
  },
  {
    name: 'Real-Time Monitoring',
    description: 'Get instant notifications when employees enter and exit the building.',
    icon: BellAlertIcon,
  },
];

const processSteps = [
    {
        step: "Step 1",
        name: "Schedule Your Appointment",
        description: "Call (855) 433-6700 or schedule online to set up your free consultation with an Alert Protective security consultant."
    },
    {
        step: "Step 2",
        name: "Get Your Free Service Quote",
        description: "A security consultant will assess your business property, share the latest equipment, and offer guidance on the best access control solutions for your needs."
    },
    {
        step: "Step 3",
        name: "Install Your New System",
        description: "Our technicians will arrive on time, complete the installation, and thoroughly test the system to ensure it's working perfectly."
    },
    {
        step: "Step 4",
        name: "Receive Full Support",
        description: "We take the time to explain your new system in detail, ensuring you are 100% comfortable with its operation before we leave."
    }
];

const offeredSystems = [
    "Key Fobs",
    "Key Cards & Card Readers",
    "Biometric Enabled Systems"
];

export default function AccessControl() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>
        <div className="relative bg-gray-900">
            <div className="absolute inset-0">
                <img
                src="/src/assets/images/access-control-system.jpg"
                alt="Commercial access control system"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-60" />
            </div>
            <div className="relative py-32 px-6 sm:py-48 lg:px-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Advanced Access Control for Businesses</h1>
                <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-gray-300">
                Take control of your business's security with our web-based access control systems.
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
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <ScrollFloat 
            animationDuration={1.2}
            ease="power2.out"
            y={40}
            className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-red-600">Total Control</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Web-Based Access Control Systems to Put You in Control
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Commercial access control systems give business owners the power to manage and monitor secure areas of their property. Today's web-based technology allows you to safely control who can access your business from anywhere with an internet connection.
          </p>
        </ScrollFloat>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, index) => (
              <ScrollFloat
                key={feature.name}
                animationDuration={1.2}
                ease="back.out(1.7)"
                y={60}
                scale={true}
                stagger={index * 0.1}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </ScrollFloat>
            ))}
          </dl>
        </div>
      </div>

       {/* Content section */}
       <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="power2.out"
                        y={40}
                        className="lg:pr-8 lg:pt-4"
                    >
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-red-600">Integrated Security Solutions</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Crucial Part of Your Security Plan</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                              No matter your building's size and layout, we can find an access control solution to fit your needs. We can integrate your access control system with your overall alarm and security systems, because as important as access control is, it doesn't replace the need for security cameras or commercial fire alarms.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                    We offer the following types of commercial access control systems:
                                    </dt>
                                    <dd className="mt-2">
                                        <ul className="list-disc list-inside space-y-1">
                                            {offeredSystems.map((system) => (
                                                <li key={system}>{system}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </ScrollFloat>
                    
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={0.1}
                        className="flex items-start justify-center"
                    >
                         <div className="rounded-xl bg-gray-900/5 p-8 ring-1 ring-inset ring-gray-900/10 lg:p-12">
                              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Why Choose Alert Protective?</h3>
                              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                  <li className="flex gap-x-3">
                                      <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                      <span>
                                          <strong className="font-semibold text-gray-900">Locally Minded.</strong> We've kept thousands of Chicago businesses safe for over 35 years.
                                      </span>
                                  </li>
                                  <li className="flex gap-x-3">
                                      <KeyIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                      <span>
                                          <strong className="font-semibold text-gray-900">Reliable Equipment.</strong> We source our products from the most reliable security manufacturers in the country.
                                      </span>
                                  </li>
                                  <li className="flex gap-x-3">
                                      <DevicePhoneMobileIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                      <span>
                                          <strong className="font-semibold text-gray-900">No High-Pressure Sales.</strong> Our technicians offer recommendations based on your actual security needs.
                                      </span>
                                  </li>
                              </ul>
                         </div>
                    </ScrollFloat>
                </div>
            </div>
        </div>


      {/* Our Process */}
      <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ScrollFloat 
                    animationDuration={1.2}
                    ease="power2.out"
                    y={40}
                    className="mx-auto max-w-2xl lg:text-center"
                >
                    <h2 className="text-base font-semibold leading-7 text-red-600">Our Process</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Simple, Straightforward Access Control Installation
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We make identifying and installing commercial access control systems as easy as possible.
                    </p>
                </ScrollFloat>
                
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {processSteps.map((step, index) => (
                        <ScrollFloat
                            key={step.name}
                            animationDuration={1.2}
                            ease="back.out(1.7)"
                            y={60}
                            scale={true}
                            stagger={index * 0.1}
                            className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="text-sm font-bold text-red-600">{step.step}</div>
                            <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.name}</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                        </ScrollFloat>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
} 