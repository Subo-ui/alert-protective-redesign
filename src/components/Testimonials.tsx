import React from 'react';
import { useInView } from 'react-intersection-observer';
import StarRating from './StarRating';
import ScrollFloat from './ScrollFloat';

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
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <ScrollFloat 
            animationDuration={1.2}
            ease="power2.out"
            y={40}
            className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Trusted by Your Neighbors</h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our satisfied customers have to say about us.
          </p>
        </ScrollFloat>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollFloat
              key={index}
              animationDuration={1.2}
              ease="back.out(1.7)"
              y={60}
              scale={true}
              stagger={index * 0.1}
              className="bg-white/40 backdrop-blur-lg p-8 rounded-xl shadow-soft"
            >
              <div className="flex justify-between items-center">
                <StarRating rating={testimonial.rating} />
                <span className="font-bold text-navy">{testimonial.source}</span>
              </div>
              <p className="mt-6 text-gray-700">"{testimonial.comment}"</p>
              <p className="mt-4 font-bold text-gray-900">{testimonial.name}</p>
            </ScrollFloat>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 