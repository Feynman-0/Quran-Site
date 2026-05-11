// Tawk.to chat widget helpers
// The Tawk_API global is injected by the script in index.html

declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
      minimize: () => void;
      toggle: () => void;
      isChatMaximized: () => boolean;
      onLoad?: () => void;
    };
  }
}

export const openTawkChat = () => {
  if (typeof window !== "undefined" && window.Tawk_API) {
    window.Tawk_API.maximize();
  }
};
