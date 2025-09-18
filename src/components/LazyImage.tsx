import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  style, 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3ELoading...%3C/text%3E%3C/svg%3E',
  loading = 'lazy',
  priority = false,
  sizes,
  quality = 75
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip observer for priority images
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)} style={style}>
      {(isInView || loading === 'eager') && !error ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : loading}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 ease-out",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </>
      ) : error ? (
        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
          <span className="text-sm">Failed to load image</span>
        </div>
      ) : (
        <div className="w-full h-full bg-muted animate-pulse"></div>
      )}
    </div>
  );
};

export default LazyImage;