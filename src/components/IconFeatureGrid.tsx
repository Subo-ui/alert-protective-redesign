// src/components/IconFeatureGrid.tsx (Enhanced Version)
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ScrollFloat from './ScrollFloat';
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
    index: number;
}

const GridFeature: React.FC<GridFeatureProps> = ({ icon: Icon, title, description, index }) => (
    <ScrollFloat 
        animationDuration={1.2}
        ease="back.out(1.7)"
        y={60}
        scale={true}
        stagger={index * 0.1}
        className="p-6 bg-white/20 backdrop-blur-lg rounded-xl shadow-soft"
    >
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-deep-red text-white mb-4">
            <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </ScrollFloat>
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
        <section ref={ref} className="py-20">
            <div className="container mx-auto px-6">
                <ScrollFloat 
                    animationDuration={1.8}
                    ease="power2.out"
                    y={40}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Complete Protection For Home & Business</h2>
                    <p className="mt-4 text-lg text-gray-600">We offer a full suite of services to ensure your total safety and peace of mind.</p>
                </ScrollFloat>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <GridFeature 
                            key={index} 
                            icon={feature.icon} 
                            title={feature.title} 
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IconFeatureGrid;