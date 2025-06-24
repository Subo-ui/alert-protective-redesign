import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheckIcon, CameraIcon, LockClosedIcon, ClockIcon, BuildingOffice2Icon, KeyIcon, FireIcon, BellAlertIcon } from '@heroicons/react/24/outline';

const homeServices = [
  {
    name: 'Intrusion Detection',
    description: 'Protect your property with advanced sensors for doors, windows, and motion detection.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Surveillance Cameras',
    description: 'Keep an eye on your home with high-definition indoor, outdoor, and doorbell cameras.',
    icon: CameraIcon,
  },
  {
    name: 'Smart Home Automation',
    description: 'Integrate smart locks, lights, and thermostats for convenience and security.',
    icon: LockClosedIcon,
  },
  {
    name: '24/7 Professional Monitoring',
    description: 'Our certified monitoring center is always ready to respond to alarms, day or night.',
    icon: ClockIcon,
  },
];

const commercialServices = [
    {
      name: 'Access Control Systems',
      description: 'Manage and restrict entry to your premises with keycards, biometrics, and electronic locks.',
      icon: KeyIcon,
    },
    {
      name: 'Commercial Video Surveillance',
      description: 'Advanced CCTV and IP camera systems to monitor your business and deter theft.',
      icon: BuildingOffice2Icon,
    },
    {
      name: 'Fire & Life Safety',
      description: 'Integrated smoke detectors, carbon monoxide alarms, and fire alarm systems.',
      icon: FireIcon,
    },
    {
      name: 'Business Alarm Systems',
      description: 'Customized alarm solutions to protect your assets, employees, and customers.',
      icon: BellAlertIcon,
    },
  ];

const Services: React.FC = () => {
    const { ref: homeRef, inView: homeInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: commercialRef, inView: commercialInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-navy sm:text-5xl">Comprehensive Security Solutions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Tailored security for your home and business, because your safety is our priority.
          </p>
        </div>
      </div>

      {/* Home Services Section */}
      <section ref={homeRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 transition-opacity duration-1000 ${homeInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Home Security</h2>
            <p className="mt-4 text-lg text-gray-600">Protecting your family and property around the clock.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeServices.map((service, index) => (
              <div key={service.name} className={`bg-white p-8 rounded-xl shadow-soft border border-gray-100 transition-all duration-700 delay-${index * 100} ${homeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <service.icon className="h-10 w-10 text-deep-red" />
                <h3 className="mt-6 text-xl font-bold text-navy">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section ref={commercialRef} className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 transition-opacity duration-1000 ${commercialInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Commercial Security</h2>
            <p className="mt-4 text-lg text-gray-600">Robust solutions to secure your business assets.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialServices.map((service, index) => (
              <div key={service.name} className={`bg-white p-8 rounded-xl shadow-soft border border-gray-100 transition-all duration-700 delay-${index * 100} ${commercialInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <service.icon className="h-10 w-10 text-deep-red" />
                <h3 className="mt-6 text-xl font-bold text-navy">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-white py-20">
        <div className={`container mx-auto px-6 text-center transition-opacity duration-1000 ${ctaInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-extrabold text-navy">Ready to Secure Your Property?</h2>
            <p className="mt-4 text-lg text-gray-600">Schedule a free, no-obligation quote with one of our security experts today.</p>
            <a href="#" className="mt-8 inline-block bg-deep-red text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-red-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
                Schedule a Free Quote
            </a>
        </div>
      </section>
    </div>
  );
};

export default Services; 