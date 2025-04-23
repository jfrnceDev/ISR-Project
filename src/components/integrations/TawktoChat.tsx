'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: any;
  }
}

export default function TawktoChat() {
  useEffect(() => {
    // Load tawk.to script
    const tawkToId = process.env.NEXT_PUBLIC_TAWKTO_ID;
    const tawkToWidgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;
    
    if (tawkToId && tawkToWidgetId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${tawkToId}/${tawkToWidgetId}`;
      script.setAttribute('crossorigin', '*');
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);
  
  return null;
}