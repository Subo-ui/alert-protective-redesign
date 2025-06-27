import React from 'react';
import { useInView } from 'react-intersection-observer';
import StarRating from './StarRating';
import ScrollFloat from './ScrollFloat';

const googleLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';
const facebookLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg';
const yelpLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg';

const Reviews: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="py-20">
            <div className={`container mx-auto px-6 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <ScrollFloat 
                    animationDuration={1.2}
                    ease="power2.out"
                    y={40}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">What Our Customers Say</h2>
                    <p className="mt-4 text-lg text-gray-600">We're proud to have earned the trust of our community.</p>
                </ScrollFloat>
                
                <div className="mt-10 max-w-lg mx-auto grid gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
                    {/* Google Review Card */}
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={0}
                        className="flex flex-col items-center p-8 border border-gray-200 rounded-xl shadow-soft bg-white/40 backdrop-blur-lg"
                    >
                        <img src={googleLogoUrl} alt="Google" className="h-10"/>
                        <p className="text-gray-600 mt-4 text-center">"Excellent sales and installation. No hard pressure sales, they truly consulted with me on how I should set up my camera system."</p>
                        <div className="mt-4">
                            <StarRating rating={5} />
                        </div>
                        <p className="font-bold mt-2 text-gray-800">- Patricia D</p>
                    </ScrollFloat>
                    
                    {/* Facebook Review Card */}
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={0.1}
                        className="flex flex-col items-center p-8 border border-gray-200 rounded-xl shadow-soft bg-white/40 backdrop-blur-lg"
                    >
                        <img src={facebookLogoUrl} alt="Facebook" className="h-10"/>
                        <p className="text-gray-600 mt-4 text-center">"The best security company in the Chicagoland area. I've had their service for over 10 years and have never been disappointed."</p>
                        <div className="mt-4">
                            <StarRating rating={5} />
                        </div>
                        <p className="font-bold mt-2 text-gray-800">- Frank G</p>
                    </ScrollFloat>
                    
                    {/* Yelp Review Card */}
                    <ScrollFloat 
                        animationDuration={1.2}
                        ease="back.out(1.7)"
                        y={60}
                        scale={true}
                        stagger={0.2}
                        className="flex flex-col items-center p-8 border border-gray-200 rounded-xl shadow-soft bg-white/40 backdrop-blur-lg"
                    >
                        <img src={yelpLogoUrl} alt="Yelp" className="h-10"/>
                        <p className="text-gray-600 mt-4 text-center">"I have used Alert since 2006 and they have been much more reliable than ADT and AT&T which I previously used in different homes. Quick response, rare false alarms, reasonable pricing."</p>
                        <div className="mt-4">
                            <StarRating rating={5} />
                        </div>
                        <p className="font-bold mt-2 text-gray-800">- Audrey L.</p>
                    </ScrollFloat>
                </div>
                
                <ScrollFloat 
                    animationDuration={1.2}
                    ease="power2.out"
                    y={40}
                    className="text-center mt-12"
                >
                    <a href="#" className="bg-navy text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-900 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        Read More Reviews
                    </a>
                </ScrollFloat>
            </div>
        </section>
    );
}

export default Reviews; 