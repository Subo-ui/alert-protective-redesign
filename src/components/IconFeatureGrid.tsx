import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
    DevicePhoneMobileIcon,
    FireIcon,
    VideoCameraIcon,
    KeyIcon,
    ShieldCheckIcon,
    ShieldExclamationIcon
} from '@heroicons/react/24/outline';

interface GridFeatureProps {
    icon: React.ElementType;
    title: string;
    description: string;
    delay: number;
    inView: boolean;
}

const GridFeature: React.FC<GridFeatureProps> = ({ icon: Icon, title, description, delay, inView }) => (
    <div className={`p-6 bg-white rounded-xl shadow-soft transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms`}}>
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-deep-red text-white mb-4">
            <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);


const IconFeatureGrid: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const features = [
        { icon: DevicePhoneMobileIcon, title: "Mobile Apps", description: "Control your security system from anywhere with our intuitive mobile apps for iOS and Android." },
        { icon: FireIcon, title: "Medical, Fire & Gas", description: "Integrated detectors for smoke, heat, and carbon monoxide provide life-saving alerts." },
        { icon: VideoCameraIcon, title: "Video Alarms", description: "Get real-time video clips when an alarm is triggered to verify threats instantly." },
        { icon: KeyIcon, title: "Access Control", description: "Manage access to your property with smart locks, card readers, and keyless entry solutions." },
        { icon: ShieldCheckIcon, title: "Alarm Response", description: "Our 24/7 monitoring ensures a fast dispatch of emergency services when needed." },
        { icon: ShieldExclamationIcon, title: "Verified Alarms", description: "Video verification reduces false alarms, ensuring priority response from authorities." },
    ];

    return (
        <section ref={ref} className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Complete Protection For Home & Business</h2>
                    <p className="mt-4 text-lg text-gray-600">We offer a full suite of services to ensure your total safety and peace of mind.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <GridFeature 
                            key={index} 
                            icon={feature.icon} 
                            title={feature.title} 
                            description={feature.description}
                            delay={index * 100}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IconFeatureGrid; 