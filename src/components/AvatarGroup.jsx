import React from 'react';

const AvatarGroup = ({ images }) => {
  return (
    <div className="flex -space-x-2">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Avatar ${index}`}
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
