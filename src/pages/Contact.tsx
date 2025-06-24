import React from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import QuoteForm from '../components/QuoteForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-extrabold text-navy">Get in Touch</h1>
                <p className="mt-3 text-lg text-gray-600">
                    Have questions? We're here to help. Fill out the form or use the contact details below.
                </p>
            </div>
            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-deep-red mt-1" />
              <div>
                <h3 className="text-xl font-bold text-navy">Email</h3>
                <a href="mailto:info@alertprotective.com" className="text-gray-600 hover:text-deep-red">info@alertprotective.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-deep-red mt-1" />
              <div>
                <h3 className="text-xl font-bold text-navy">Phone</h3>
                <a href="tel:773-685-8383" className="text-gray-600 hover:text-deep-red">(773) 685-8383</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BuildingOffice2Icon className="h-6 w-6 text-deep-red mt-1" />
              <div>
                <h3 className="text-xl font-bold text-navy">Office</h3>
                <p className="text-gray-600">2915 W Montrose Ave<br/>Chicago, IL 60618</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default Contact; 