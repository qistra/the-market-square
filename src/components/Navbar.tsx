
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPwaInstallable, setIsPwaInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Detect scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // PWA installation handling
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Store the event for later use
      setDeferredPrompt(e);
      // Show the install button
      setIsPwaInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // We no longer need the prompt
    setDeferredPrompt(null);
    setIsPwaInstallable(false);
  };

  return (
    <nav 
      className={`bg-white bg-opacity-95 backdrop-blur-sm fixed w-full z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-nigeria-green flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl text-nigeria-green">
                The Market <span className="text-gray-800 hidden xs:inline">Place Hub</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-700 hover:text-nigeria-green transition duration-300">Home</a>
            <a href="#features" className="text-gray-700 hover:text-nigeria-green transition duration-300">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-nigeria-green transition duration-300">How It Works</a>
            <a href="#community" className="text-gray-700 hover:text-nigeria-green transition duration-300">Community</a>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {isPwaInstallable && (
              <Button 
                variant="outline" 
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white"
                onClick={handleInstallClick}
                id="install-button"
              >
                <Download size={18} className="mr-2" />
                Install App
              </Button>
            )}
            
            <Button variant="outline" className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white">
              Sign In
            </Button>
            <Button className="bg-nigeria-green hover:bg-nigeria-green-dark text-white">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {isPwaInstallable && (
              <Button 
                variant="outline" 
                size="sm"
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white p-2"
                onClick={handleInstallClick}
                id="mobile-install-button"
              >
                <Download size={18} />
              </Button>
            )}
            
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-nigeria-green focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3">
              <a 
                href="#" 
                className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#community" 
                className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <div className="flex flex-col space-y-3 pt-2">
                <Button variant="outline" className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white w-full">
                  Sign In
                </Button>
                <Button className="bg-nigeria-green hover:bg-nigeria-green-dark text-white w-full">
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
