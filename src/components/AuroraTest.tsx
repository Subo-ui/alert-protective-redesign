import React from 'react';
import { AuroraBackground } from './AuroraBackground';

const AuroraTest: React.FC = () => {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-4xl font-bold text-center mb-8">
          Aurora Animation Test
        </h1>
        <div className="bg-white/80 rounded-xl p-8 shadow-lg max-w-xl w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aurora Effect</h2>
          <p className="text-gray-700">This shows the animated aurora background effect using the new component!</p>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default AuroraTest; 