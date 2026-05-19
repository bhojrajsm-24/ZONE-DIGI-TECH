import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Show preloader for a bit, then fade out
    const timer = setTimeout(() => {
      setIsFading(true);
      // Wait for fade transition to finish before completely removing
      setTimeout(onLoadingComplete, 500); 
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-50 dark:bg-[#0a0a0f] transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing background effect */}
        <div className="absolute inset-0 w-32 h-32 bg-saffron-500/20 blur-2xl rounded-full animate-pulse" />
        
        {/* Logo/Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-saffron-500 to-saffron-400 shadow-xl shadow-saffron-500/30 animate-bounce">
          <Zap size={32} className="text-white" />
        </div>
        
        {/* Text */}
        <h2 className="text-2xl font-bold tracking-widest text-stone-900 dark:text-white uppercase font-display">
          Kiran<span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-saffron-400">Digital</span>
        </h2>
        
        {/* Loading bar */}
        <div className="w-48 h-1 mt-6 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
          <div className="w-full h-full bg-gradient-to-r from-saffron-500 to-saffron-400 animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
