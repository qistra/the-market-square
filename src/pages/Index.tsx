
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import { WifiOff } from "lucide-react";
import { checkForUpdates, showInstallPrompt } from "@/registerServiceWorker";

const Index = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    // Check for service worker updates
    checkForUpdates();
    
    // Show PWA install prompt
    showInstallPrompt();
    
    // Handle online/offline status
    const handleOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <Features />
        <HowItWorks />
        <Community />
      </main>
      <Footer />
      
      {/* Offline notification */}
      {isOffline && (
        <div className="offline-alert">
          <WifiOff size={16} />
          <span>You're offline. Some features may be limited.</span>
        </div>
      )}
    </div>
  );
};

export default Index;
