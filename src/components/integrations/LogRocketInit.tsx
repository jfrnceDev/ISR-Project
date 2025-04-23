'use client';

import { useEffect } from 'react';
import LogRocket from 'logrocket';

export default function LogRocketInit() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APP_ID || 'isr-website/production');
    }
  }, []);
  
  return null;
}