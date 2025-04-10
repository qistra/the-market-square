
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";

const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const handleCTAClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      // If user is logged in, proceed with intended action
      window.location.href = "#features";
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-background py-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <img
          src="/nigeria-pattern.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              The Digital{" "}
              <span className="text-nigeria-green">Marketplace</span> for African Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Connect with verified sellers, find authentic African products, and 
              engage with a community of buyers and sellers across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-nigeria-green hover:bg-nigeria-green/90 text-white px-8"
                onClick={handleCTAClick}
              >
                Start Exploring
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white dark:border-nigeria-green dark:text-nigeria-green dark:hover:bg-nigeria-green dark:hover:text-white"
                onClick={handleCTAClick}
              >
                Become a Seller
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-nigeria-green to-yellow-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-background rounded-lg overflow-hidden border border-nigeria-green/20">
                <img
                  src="/lovable-uploads/13eeef2e-d76e-4419-b0de-ec159b33408b.png"
                  alt="The Market Square sample products"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
