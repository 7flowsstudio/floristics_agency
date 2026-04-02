'use client';
import { useState, useRef } from 'react';

interface MapProps {
  address: string;
  mapSrc: string;
}

export default function Map({ address, mapSrc }: MapProps) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="relative w-full overflow-hidden rounded-b-lg border border-stone-200 bg-stone-100 h-[195px] lg:h-[245px]">
        {isLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-stone-200 animate-pulse">
            <div className="w-6 h-6 border-2 border-[#1C686D] border-t-transparent rounded-full animate-spin mb-2"></div>
            <span className="text-[10px] text-stone-500 uppercase tracking-widest">
              Завантаження карти...
            </span>
          </div>
        )}

        <iframe
          ref={iframeRef}
          key={mapSrc}
          src={mapSrc}
          loading="lazy"
          onLoad={handleLoad}
          referrerPolicy="no-referrer-when-downgrade"
          className={`w-full h-full border-none transition-opacity duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      <p className="text-[12px] text-black text-center px-4">{address}</p>
    </div>
  );
}
