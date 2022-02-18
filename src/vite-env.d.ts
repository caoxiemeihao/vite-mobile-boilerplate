/// <reference types="vite/client" />

interface Window {
  detectIPadOrientation: () => {
    text: string;
    orientation: 'portrait' | 'landscape';
  }
}
