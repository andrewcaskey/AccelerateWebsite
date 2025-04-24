import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height 
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  
  // Fallback image based on the alt text (first letter as background)
  const generateFallbackImage = () => {
    const letter = (alt && alt.length > 0) ? alt[0].toUpperCase() : "A";
    
    return (
      <div 
        className={`flex items-center justify-center bg-primary bg-opacity-10 text-primary text-4xl font-bold ${className}`}
        style={{ width, height }}
      >
        {letter}
      </div>
    );
  };

  if (error) {
    return generateFallbackImage();
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setError(true)}
    />
  );
};

export default ImageWithFallback;