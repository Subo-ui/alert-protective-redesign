import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="bg-navy">
            <div className={`container mx-auto px-6 py-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left">
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
            </div>
        </section>
    );
};

export default CtaBanner; 