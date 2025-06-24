import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const interests = [
    "Fire Alarm",
    "Access Control & Door Entry",
    "Alarm Monitoring",
    "Video Security & Surveillance",
    "Environmental Monitoring",
    "Security Guard Services"
];

const schema = z.object({
  interests: z.array(z.string()).min(1, { message: 'Please select at least one area of interest.' }),
  customerType: z.enum(['homeowner', 'business_owner'], { errorMap: () => ({ message: 'Please select if you are a homeowner or business owner.' }) }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, { message: 'Invalid zip code' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  contactMethod: z.enum(['email', 'phone'], { errorMap: () => ({ message: 'Please select a preferred contact method.' }) }),
  textOptIn: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const DetailedQuoteForm: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
        interests: [],
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
  };
  
  const selectedInterests = watch('interests');

  if (isSubmitted) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-extrabold text-navy">Thank You!</h2>
            <p className="mt-4 text-lg text-gray-700">Your quote request has been sent. We will get back to you shortly via your preferred contact method.</p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">I am interested in...</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map(interest => (
                    <div key={interest} className="flex items-center">
                        <input
                            type="checkbox"
                            id={interest}
                            value={interest}
                            {...register('interests')}
                            className="h-4 w-4 text-deep-red border-gray-300 rounded focus:ring-deep-red"
                        />
                        <label htmlFor={interest} className="ml-3 block text-sm text-gray-700">{interest}</label>
                    </div>
                ))}
            </div>
            {errors.interests && <p className="mt-2 text-sm text-red-600">{errors.interests.message}</p>}
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">I am a...</label>
            <div className="flex gap-4">
                 <label className="flex items-center">
                    <input type="radio" {...register('customerType')} value="homeowner" className="h-4 w-4 text-deep-red border-gray-300 focus:ring-deep-red" />
                    <span className="ml-2 text-gray-700">Homeowner</span>
                </label>
                <label className="flex items-center">
                    <input type="radio" {...register('customerType')} value="business_owner" className="h-4 w-4 text-deep-red border-gray-300 focus:ring-deep-red" />
                    <span className="ml-2 text-gray-700">Business Owner</span>
                </label>
            </div>
            {errors.customerType && <p className="mt-2 text-sm text-red-600">{errors.customerType.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" {...register('firstName')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" {...register('lastName')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
            </div>
        </div>

        <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip/Postal Code</label>
            <input type="text" id="zip" {...register('zip')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
            {errors.zip && <p className="mt-1 text-sm text-red-600">{errors.zip.message}</p>}
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" {...register('email')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" {...register('phone')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        
        <div className="flex items-center">
            <input id="textOptIn" type="checkbox" {...register('textOptIn')} className="h-4 w-4 text-deep-red border-gray-300 rounded focus:ring-deep-red" />
            <label htmlFor="textOptIn" className="ml-2 block text-sm text-gray-600">Yes, I would like to receive texts from Alert Protective regarding my services and special offers.</label>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">I prefer to be contacted by...</label>
            <div className="flex gap-4">
                 <label className="flex items-center">
                    <input type="radio" {...register('contactMethod')} value="email" className="h-4 w-4 text-deep-red border-gray-300 focus:ring-deep-red" />
                    <span className="ml-2 text-gray-700">Email</span>
                </label>
                <label className="flex items-center">
                    <input type="radio" {...register('contactMethod')} value="phone" className="h-4 w-4 text-deep-red border-gray-300 focus:ring-deep-red" />
                    <span className="ml-2 text-gray-700">Phone</span>
                </label>
            </div>
            {errors.contactMethod && <p className="mt-2 text-sm text-red-600">{errors.contactMethod.message}</p>}
        </div>

        <div>
            <button type="submit" className="w-full bg-deep-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 shadow-lg transform hover:scale-105 transition-transform duration-300 text-lg">
                GET MY FREE QUOTE
            </button>
        </div>
    </form>
  );
};

export default DetailedQuoteForm; 