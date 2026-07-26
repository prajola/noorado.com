import { useEffect } from 'react';

/**
 * Mobile Optimization Component
 * Handles mobile-specific behaviors and optimizations
 */
const MobileOptimizer = () => {
  useEffect(() => {
    // Fix iOS 100vh issue
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    // Prevent iOS double-tap zoom
    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };
    document.addEventListener('touchend', preventDoubleTapZoom, { passive: false });

    // Improve scroll performance
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Add mobile class to body
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.body.classList.add('is-mobile');
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
      document.removeEventListener('touchend', preventDoubleTapZoom);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MobileOptimizer;
