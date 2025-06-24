import React from 'react';
import DetailedQuoteForm from '../components/DetailedQuoteForm';
import { ShieldCheckIcon, ClockIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import LocationMap from '../components/LocationMap';
import PartnerLogos from '../components/PartnerLogos';


const Quote = () => {
  return (
    <div className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            {/* Form Section */}
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-navy">Request a FREE security system quote today.</h1>
                    <p className='mt-3 text-lg text-gray-600'>
                        Call Alert Protective at <a href="tel:8554336700" className="text-deep-red font-semibold">(855) 433-6700</a> or fill out the form below.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg mb-20">
                    <DetailedQuoteForm />
                </div>
            </div>

            {/* Info Section */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-navy mb-6">We are a Midwest-based company with proud roots in our community.</h2>
                <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
                    Since 1982, we have been locally owned and operated. Our professional staff is dedicated to the highest level of customer service and technical support. We offer a full spectrum of protection for your family, home, and business.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md text-left flex flex-col">
                        <h3 className="text-xl font-semibold text-navy mb-4">Because we offer a full spectrum of protection:</h3>
                        <ul className="space-y-4 text-gray-600 flex-grow">
                            <li className="flex items-start">
                                <ShieldCheckIcon className="h-6 w-6 text-deep-red mr-3 flex-shrink-0 mt-1" />
                                <span>We can custom-design a security system that is right for you.</span>
                            </li>
                            <li className="flex items-start">
                                <ClockIcon className="h-6 w-6 text-deep-red mr-3 flex-shrink-0 mt-1" />
                                <span>We provide 24/7 monitoring from our state-of-the-art central station.</span>
                            </li>
                            <li className="flex items-start">
                                <VideoCameraIcon className="h-6 w-6 text-deep-red mr-3 flex-shrink-0 mt-1" />
                                <span>We offer the latest in security technology, including smart home automation.</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-navy text-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                        <ShieldCheckIcon className="h-16 w-16 text-white mx-auto mb-4 border-4 border-white rounded-full p-2" />
                        <h3 className="text-2xl font-bold mb-2">Quality Alarm Systems</h3>
                        <p className="text-lg">
                           As an IQ Certified company, we are committed to providing you with the highest standards of security service and installation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy">We are a Midwest-based company with great experience.</h2>
                <p className="mt-3 text-xl text-gray-600">We offer full security protection.</p>
                <div className="mt-8">
                    <PartnerLogos />
                </div>
            </div>
            <div className="px-4">
                <LocationMap />
            </div>
        </div>
    </div>
  );
};

export default Quote; 