import React from 'react';
import { useInView } from 'react-intersection-observer';
import ScrollFloat from './ScrollFloat';

const NewsletterSignup: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // A real implementation would handle form submission here
        alert('Thank you for subscribing to our newsletter!');
    };

    return (
        <section ref={ref} className="bg-white/70 backdrop-blur-sm py-20">
            <ScrollFloat 
                animationDuration={1.2}
                ease="power2.out"
                y={40}
                className="container mx-auto px-6 max-w-xl text-center"
            >
                <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Stay In The Know</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Sign up for our newsletter to get the latest security tips, product updates, and exclusive offers delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-navy focus:outline-none"
                    />
                    <button 
                        type="submit" 
                        className="bg-deep-red text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 shadow-md transform hover:scale-105 transition-transform duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </ScrollFloat>
        </section>
    );
};

export default NewsletterSignup; 