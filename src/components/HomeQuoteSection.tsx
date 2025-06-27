import React from 'react';
import { useInView } from 'react-intersection-observer';
import QuoteForm from './QuoteForm';
import ScrollFloat from './ScrollFloat';

const HomeQuoteSection: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section ref={ref} className="bg-white/40 backdrop-blur-lg py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="power2.out"
                        y={40}
                        className="transition-all duration-700"
                    >
                        <h2 className="text-4xl font-extrabold text-navy">Request a FREE security system quote today.</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Our security consultants are ready to help you design the perfect system for your needs and budget. Give us a call or fill out the form to get started.
                        </p>
                        <p className="mt-8 text-3xl font-bold text-deep-red">
                            <a href="tel:8554336700" className="hover:text-red-700">(855) 433-6700</a>
                        </p>
                    </ScrollFloat>

                    {/* Form Column */}
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={0.1}
                        className="transition-all duration-700"
                    >
                        <QuoteForm />
                    </ScrollFloat>
                </div>
            </div>
        </section>
    );
};

export default HomeQuoteSection; 