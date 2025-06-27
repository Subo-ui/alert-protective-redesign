import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ScrollFloat from './ScrollFloat';

const CtaBanner: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="bg-white/80 backdrop-blur-sm">
            <ScrollFloat 
                animationDuration={1.2}
                ease="power2.out"
                y={40}
                className="container mx-auto px-6 py-12"
            >
                <div className="flex flex-col md:flex-row justify-between items-center text-navy text-center md:text-left">
                    <h2 className="text-3xl font-extrabold sm:text-4xl mb-6 md:mb-0">
                        Getting a new alarm is not as complicated as you think.
                    </h2>
                    <Link 
                        to="/contact" 
                        className="bg-deep-red text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 shadow-lg transform hover:scale-105 transition-transform duration-300 flex-shrink-0"
                    >
                        Get Started Today
                    </Link>
                </div>
            </ScrollFloat>
        </section>
    );
};

export default CtaBanner; 