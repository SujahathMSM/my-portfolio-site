
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  loadingClassName?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  loadingClassName,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div className={cn('animate-pulse bg-muted h-full w-full', loadingClassName)} />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-500',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        loading="lazy"
      />
    </div>
  );
};

export default AnimatedImage;
