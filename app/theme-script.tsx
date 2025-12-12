// app/theme-script.tsx
'use client';

import { useEffect } from 'react';

export function ThemeScript() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.className = theme;
    document.documentElement.style.colorScheme = theme;
  }, []);

  return null;
}

// Use in layout.tsx
<ThemeScript />