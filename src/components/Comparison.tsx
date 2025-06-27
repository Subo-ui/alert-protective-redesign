import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import alertLogo from '../assets/images/logo-alert.png';
import ScrollFloat from './ScrollFloat';

const Comparison: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const traditionalFeatures = [
        "Relies on landlines",
        "Dated, bulky equipment",
        "One-size-fits-all solutions",
        "Limited to basic intrusion alerts",
        "Slow, unreliable support",
    ];

    const alertFeatures = [
        "Cellular & Wi-Fi communication",
        "Sleek, modern smart devices",
        "Fully customized system design",
        "Smart home automation & video",
        "24/7 five-diamond monitoring",
        "Award-winning local customer service",
    ];

    return (
        <section ref={ref} className="py-20">
            <div className={`container mx-auto px-6 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <ScrollFloat 
                    animationDuration={1.2}
                    ease="power2.out"
                    y={40}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Why Choose Modern Security?</h2>
                    <p className="mt-4 text-lg text-gray-600">See how traditional systems compare to the Alert Protective standard.</p>
                </ScrollFloat>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Traditional Security */}
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={0}
                        className="p-8 bg-white/20 backdrop-blur-lg rounded-xl shadow-soft"
                    >
                        <h3 className="text-2xl font-bold text-gray-700">Traditional Security</h3>
                        <ul className="mt-6 space-y-4">
                            {traditionalFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <XCircleIcon className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollFloat>
                    
                    {/* Alert Protective */}
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={0.1}
                        className="p-8 bg-white/20 backdrop-blur-lg rounded-xl shadow-soft border-2 border-deep-red"
                    >
                        <img src={alertLogo} alt="Alert Protective Logo" className="h-12 mb-4" />
                        <h3 className="text-2xl font-bold text-navy">Alert Protective</h3>
                        <ul className="mt-6 space-y-4">
                            {alertFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 text-center">
                             <a href="/contact" className="bg-deep-red text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-red-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                Get a Custom Quote
                            </a>
                        </div>
                    </ScrollFloat>
                </div>
            </div>
        </section>
    );
}

export default Comparison; 