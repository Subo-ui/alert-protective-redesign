import React from 'react';
import { useInView } from 'react-intersection-observer';
import StarRating from './StarRating';

const testimonials = [
  {
    name: 'Sarah J.',
    source: 'Google',
    rating: 5,
    comment: 'Alert Protective was professional, on-time, and did a fantastic job installing our new security system. Highly recommend!',
  },
  {
    name: 'Michael B.',
    source: 'Facebook',
    rating: 5,
    comment: 'The peace of mind is priceless. Their team was knowledgeable and helped us choose the perfect system for our business.',
  },
  {
    name: 'Emily R.',
    source: 'Google',
    rating: 4,
    comment: 'Great service and support. The monitoring team is always quick to respond. Only wish the app had a few more features.',
  },
];

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className={`text-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Trusted by Your Neighbors</h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our satisfied customers have to say about us.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-soft transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex justify-between items-center">
                <StarRating rating={testimonial.rating} />
                <span className="font-bold text-navy">{testimonial.source}</span>
              </div>
              <p className="mt-6 text-gray-700">"{testimonial.comment}"</p>
              <p className="mt-4 font-bold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 