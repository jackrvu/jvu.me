'use client';

import React from 'react';

const Pokemon = () => {
  return (
    <div className="w-6 h-6 relative group">
      <div 
        className="w-full h-full bg-[url('/landorus.png')] bg-contain bg-no-repeat bg-center group-hover:animate-pokemon-pixel-move"
      />
    </div>
  );
};

export default Pokemon;