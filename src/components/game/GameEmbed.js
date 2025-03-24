import React, { useState, useEffect, useRef } from 'react';

const GameEmbed = ({ url, title, width, height }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(height);
  const iframeRef = useRef(null);
  
  // 全屏功能
  const handleFullScreen = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
      iframe.msRequestFullscreen();
    }
  };
  
  useEffect(() => {
    // Adjust iframe height for mobile devices
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // On mobile, use a 16:9 aspect ratio based on width
        const aspectRatio = 9/16;
        const calculatedHeight = window.innerWidth * aspectRatio;
        setIframeHeight(`${calculatedHeight}px`);
      } else {
        setIframeHeight(height);
      }
    };
    
    // Initialize height
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [height]);

  return (
    <div className="game-embed-container relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-apple-gray-100 rounded-lg">
          <div className="text-center">
            <svg className="animate-spin h-10 w-10 text-apple-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-apple-gray-700">Loading game...</p>
          </div>
        </div>
      )}
      
      {/* 全屏按钮 */}
      <button 
        onClick={handleFullScreen}
        className="absolute top-2 right-2 bg-apple-blue-700 text-white p-2 rounded-full z-10 hover:bg-apple-blue-800 transition-colors shadow-md"
        aria-label="Full Screen"
        title="全屏游戏"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      </button>
      
      <iframe
        ref={iframeRef}
        src={url}
        title={title}
        width={width}
        height={iframeHeight}
        frameBorder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
        onLoad={() => setIsLoading(false)}
      ></iframe>
      
      <noscript>
        <div className="bg-red-50 text-red-700 p-4 mt-4 rounded-lg">
          <p>This game requires JavaScript to be enabled. Please enable JavaScript in your browser settings to play the game.</p>
        </div>
      </noscript>
    </div>
  );
};

export default GameEmbed; 