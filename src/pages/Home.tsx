import React from 'react';
import { useInView } from 'react-intersection-observer';
import Testimonials from '../components/Testimonials';
import Reviews from '../components/Reviews';
import Comparison from '../components/Comparison';
import FeatureSection from '../components/FeatureSection';
import IconFeatureGrid from '../components/IconFeatureGrid';
import CtaBanner from '../components/CtaBanner';
import NewsletterSignup from '../components/NewsletterSignup';
import HomeQuoteSection from '../components/HomeQuoteSection';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import commercialImage from '../assets/images/commercial security.jpg';
import homeImage from '../assets/images/home security.jpg';

interface HeroCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    productsLink: string;
}

const HeroCard = ({ title, description, imageUrl, link, productsLink }: HeroCardProps) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
        <div ref={ref} className={`relative w-full md:w-1/2 h-[450px] sm:h-[500px] bg-cover bg-center text-white overflow-hidden group transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col justify-end h-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>{title}</h2>
                <p className="text-lg md:text-xl mt-2" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>{description}</p>
                <div className="mt-6 sm:mt-8 space-y-4">
                    <Link to={link} className="bg-deep-red px-6 py-3 flex items-center justify-between font-bold hover:bg-red-700 w-full sm:w-3/4 shadow-lg">
                        <span>Schedule {title} Quote</span>
                        <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link to={productsLink} className="bg-white text-navy px-6 py-3 flex items-center justify-between font-bold hover:bg-gray-200 w-full sm:w-3/4 shadow-lg">
                        <span>All {title} Products</span>
                        <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Home: React.FC = () => {

  return (
    <main>
      <section className="flex flex-col md:flex-row">
        <HeroCard 
            title="Commercial Security"
            description="Protecting your Business"
            imageUrl={commercialImage}
            link="#"
            productsLink="#"
        />
        <HeroCard 
            title="Home Security"
            description="Protect your home & everything in it"
            imageUrl={homeImage}
            link="#"
            productsLink="#"
        />
      </section>
      <Reviews />
      <Testimonials />
      <Comparison />
      <FeatureSection 
        title="Alarm Systems"
        description="From basic setups to the most advanced smart systems, we provide comprehensive alarm solutions to keep you safe. Our systems are designed to detect intrusion, fire, and environmental hazards, ensuring a rapid response when it matters most."
        imageUrl="https://placehold.co/1200x800/e2e8f0/4a5568?text=Alarm+Systems"
        imageSide="left"
        primaryActionText="See Details"
        primaryActionLink="/services"
        secondaryActionText="Learn More"
        secondaryActionLink="/contact"
      />
      <FeatureSection 
        title="24/7 Central Station Monitoring"
        description="Our five-diamond certified central station is always alert, providing immediate response to any alarm signal. With redundant power and communication, we ensure uninterrupted monitoring for your home or business, giving you true peace of mind."
        imageUrl="https://placehold.co/1200x800/e2e8f0/4a5568?text=24/7+Monitoring"
        imageSide="right"
        primaryActionText="See Details"
        primaryActionLink="/services"
        secondaryActionText="Learn More"
        secondaryActionLink="/contact"
      />
      <IconFeatureGrid />
      <CtaBanner />
      <NewsletterSignup />
      <HomeQuoteSection />
    </main>
  );
};

export default Home; 