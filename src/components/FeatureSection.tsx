import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

interface FeatureSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imageSide: 'left' | 'right';
    primaryActionText: string;
    primaryActionLink: string;
    secondaryActionText: string;
    secondaryActionLink: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
    title, 
    description, 
    imageUrl, 
    imageSide,
    primaryActionText,
    primaryActionLink,
    secondaryActionText,
    secondaryActionLink
}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2';
    const textOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1';

    return (
        <section ref={ref} className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className={`transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${imageOrder}`}>
                        <img src={imageUrl} alt={title} className="rounded-xl shadow-2xl w-full" />
                    </div>

                    {/* Text Column */}
                    <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ${textOrder}`}>
                        <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
                        <p className="mt-6 text-lg text-gray-600">{description}</p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to={primaryActionLink} className="bg-deep-red text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-red-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                {primaryActionText}
                            </Link>
                            <Link to={secondaryActionLink} className="bg-navy text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-900 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                {secondaryActionText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection; 