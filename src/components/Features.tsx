
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Shield, Truck, CreditCard, Users, Search } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";

const Features = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const handleCTAClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      // If user is logged in, proceed with intended action
      window.location.href = "#how-it-works";
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-nigeria-green">The Market Square?</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to revolutionize how African products are bought and sold online, 
            with features that prioritize authenticity, security, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-nigeria-green/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-nigeria-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Verified Sellers</h3>
            <p className="text-muted-foreground mb-4">
              Every seller undergoes a thorough verification process to ensure authenticity and trustworthiness.
            </p>
            <Button 
              variant="link" 
              className="text-nigeria-green p-0 h-auto font-medium hover:text-nigeria-green/80"
              onClick={handleCTAClick}
            >
              Learn about our verification process
            </Button>
          </div>

          {/* Feature 2 */}
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-nigeria-green/10 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="text-nigeria-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Authentic Products</h3>
            <p className="text-muted-foreground mb-4">
              Browse a wide selection of genuine African products, from traditional crafts to modern innovations.
            </p>
            <Button 
              variant="link" 
              className="text-nigeria-green p-0 h-auto font-medium hover:text-nigeria-green/80"
              onClick={handleCTAClick}
            >
              Explore our product categories
            </Button>
          </div>

          {/* Feature 3 */}
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-nigeria-green/10 rounded-lg flex items-center justify-center mb-4">
              <Search className="text-nigeria-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
            <p className="text-muted-foreground mb-4">
              Our intelligent search system helps you find exactly what you're looking for quickly and efficiently.
            </p>
            <Button 
              variant="link" 
              className="text-nigeria-green p-0 h-auto font-medium hover:text-nigeria-green/80"
              onClick={handleCTAClick}
            >
              Try it now
            </Button>
          </div>

          {/* Feature 4 */}
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-nigeria-green/10 rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="text-nigeria-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-muted-foreground mb-4">
              Multiple payment options with advanced security measures to protect all your transactions.
            </p>
            <Button 
              variant="link" 
              className="text-nigeria-green p-0 h-auto font-medium hover:text-nigeria-green/80"
              onClick={handleCTAClick}
            >
              View our payment methods
            </Button>
          </div>

          {/* Feature 5 */}
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-nigeria-green/10 rounded-lg flex items-center justify-center mb-4">
              <Truck className="text-nigeria-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reliable Delivery</h3>
            <p className="text-muted-foreground mb-4">
              Track your orders in real-time with our network of trusted delivery partners across Africa.
            </p>
            <Button 
              variant="link" 
              className="text-nigeria-green p-0 h-auto font-medium hover:text-nigeria-green/80"
              onClick={handleCTAClick}
            >
              Check delivery coverage
            </Button>
          </div>

          {/* Feature 6 */}
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-nigeria-green/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-nigeria-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Vibrant Community</h3>
            <p className="text-muted-foreground mb-4">
              Join discussions, share experiences, and connect with other buyers and sellers across the continent.
            </p>
            <Button 
              variant="link" 
              className="text-nigeria-green p-0 h-auto font-medium hover:text-nigeria-green/80"
              onClick={handleCTAClick}
            >
              Join our community
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-nigeria-green hover:bg-nigeria-green/90 text-white px-8"
            onClick={handleCTAClick}
          >
            Start Exploring Now
          </Button>
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

export default Features;
