import React from 'react';
import { useInView } from 'react-intersection-observer';
import QuoteForm from './QuoteForm';

const HomeQuoteSection: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section ref={ref} className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h2 className="text-4xl font-extrabold text-navy">Request a FREE security system quote today.</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Our security consultants are ready to help you design the perfect system for your needs and budget. Give us a call or fill out the form to get started.
                        </p>
                        <p className="mt-8 text-3xl font-bold text-deep-red">
                            <a href="tel:8554336700" className="hover:text-red-700">(855) 433-6700</a>
                        </p>
                    </div>

                    {/* Form Column */}
                    <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <QuoteForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeQuoteSection; 