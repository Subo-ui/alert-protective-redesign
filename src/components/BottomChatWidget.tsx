import React, { useState, useRef } from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/solid';

const BottomChatWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = window.setTimeout(() => {
      setIsHovered(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsHovered(false);
  };

  if (isOpen) {
    return (
      <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
        <div className="bg-deep-red text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-bold">Chat with us</h3>
          <button onClick={() => setIsOpen(false)} className="hover:bg-red-700 p-1 rounded-full">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-grow p-4">
          {/* Placeholder for chat content */}
          <p>Welcome to our live chat!</p>
        </div>
        <div className="p-4 border-t">
          <input type="text" placeholder="Type your message..." className="w-full border rounded-md p-2" />
        </div>
      </div>
    );
  }

  return (
    <button 
      onClick={() => setIsOpen(true)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed bottom-4 right-4 bg-deep-red text-white p-4 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-red z-50 ${isHovered ? 'opacity-100' : 'opacity-50'}`}
    >
      <ChatBubbleOvalLeftEllipsisIcon className={`h-8 w-8 transition-all duration-300 ${isHovered ? 'mr-3' : 'mr-0'}`} />
      <span className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${isHovered ? 'w-24' : 'w-0'}`}>
        Live Chat
      </span>
    </button>
  );
};

export default BottomChatWidget; 