
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download, LogIn, UserCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPwaInstallable, setIsPwaInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const renderAuthButtons = () => {
    if (loading) {
      return <Button variant="outline" disabled>Loading...</Button>;
    }
    
    if (user) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-nigeria-green text-nigeria-green flex items-center gap-2">
              <UserCircle size={18} />
              {user.email ? user.email.split('@')[0] : 'Account'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Saved Items</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    
    return (
      <Button 
        variant="outline" 
        className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white dark:border-nigeria-green dark:text-nigeria-green dark:hover:bg-nigeria-green dark:hover:text-white"
        onClick={handleOpenAuthModal}
      >
        <LogIn className="mr-2 h-4 w-4" />
        Sign In
      </Button>
    );
  };

  return (
    <nav 
      className={`bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm fixed w-full z-50 transition-shadow duration-300 ${
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
                The Market <span className="text-gray-800 dark:text-white hidden xs:inline">Square</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green transition duration-300">Home</a>
            <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green transition duration-300">Features</a>
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green transition duration-300">How It Works</a>
            <a href="#community" className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green transition duration-300">Community</a>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeToggle />
            
            {isPwaInstallable && (
              <Button 
                variant="outline" 
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white dark:border-nigeria-green dark:text-nigeria-green dark:hover:bg-nigeria-green dark:hover:text-white"
                onClick={handleInstallClick}
                id="install-button"
              >
                <Download size={18} className="mr-2" />
                Install App
              </Button>
            )}
            
            {renderAuthButtons()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            
            {isPwaInstallable && (
              <Button 
                variant="outline" 
                size="sm"
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white dark:border-nigeria-green dark:text-nigeria-green dark:hover:bg-nigeria-green dark:hover:text-white p-2"
                onClick={handleInstallClick}
                id="mobile-install-button"
              >
                <Download size={18} />
              </Button>
            )}
            
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green focus:outline-none"
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
                className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#community" 
                className="text-gray-700 dark:text-gray-200 hover:text-nigeria-green dark:hover:text-nigeria-green py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              
              <div className="py-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                {loading ? (
                  <Button variant="outline" disabled className="w-full mt-2">Loading...</Button>
                ) : user ? (
                  <>
                    <div className="py-2 text-sm text-gray-500 dark:text-gray-400">Signed in as: {user.email}</div>
                    <Button 
                      variant="outline" 
                      className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white dark:border-nigeria-green dark:text-nigeria-green dark:hover:bg-nigeria-green dark:hover:text-white w-full mt-2"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white dark:border-nigeria-green dark:text-nigeria-green dark:hover:bg-nigeria-green dark:hover:text-white w-full mt-2"
                    onClick={handleOpenAuthModal}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
