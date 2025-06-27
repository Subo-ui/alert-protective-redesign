// src/components/ScrollFloat.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  y?: number;
  opacity?: boolean;
  scale?: boolean;
  className?: string;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  animationDuration = 1,
  ease = 'power2.out',
  scrollStart = 'top bottom-=100',
  scrollEnd = 'bottom top+=100',
  stagger = 0,
  y = 50,
  opacity = true,
  scale = false,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      y: y,
      opacity: opacity ? 0 : 1,
      scale: scale ? 0.8 : 1
    });

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: scrollStart,
        end: scrollEnd,
        toggleActions: 'play none none reverse'
      }
    });

    tl.to(element, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: animationDuration,
      ease: ease,
      stagger: stagger
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger, y, opacity, scale]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollFloat;