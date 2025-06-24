import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define the validation schema with Zod
const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  interest: z.enum(['home', 'commercial', 'other']),
  message: z.string().min(5, { message: 'Message must be at least 5 characters' }),
});

type FormData = z.infer<typeof schema>;

const QuoteForm: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-soft text-center">
            <h2 className="text-3xl font-extrabold text-navy">Thank You!</h2>
            <p className="mt-4 text-lg text-gray-700">Your quote request has been sent. We will get back to you shortly.</p>
        </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-soft">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" {...register('name')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" {...register('email')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone <span className="text-gray-500">(Optional)</span></label>
            <input type="tel" id="phone" {...register('phone')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy" />
            </div>
            <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700">I'm interested in...</label>
            <select id="interest" {...register('interest')} defaultValue="home" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy">
                <option value="home">Home Security</option>
                <option value="commercial">Commercial Security</option>
                <option value="other">Other</option>
            </select>
            </div>
            <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" {...register('message')} rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy"></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            <div>
            <button type="submit" className="w-full bg-deep-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 shadow-md transform hover:scale-105 transition-transform duration-300">
                Request My Free Quote
            </button>
            </div>
        </form>
    </div>
  );
};

export default QuoteForm; 