
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";

const HowItWorks = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const handleCTAClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      // If user is logged in, proceed with intended action
      window.location.href = "#community";
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="text-nigeria-green">The Market Square</span> Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a buyer looking for authentic products or a seller wanting to reach new customers,
            our platform makes the process simple and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold text-lg">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                  <p className="text-muted-foreground">
                    Sign up for free in seconds using your email, phone number, or social media accounts.
                    Verify your identity to start buying or selling.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold text-lg">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Browse or List Products</h3>
                  <p className="text-muted-foreground">
                    Explore thousands of products from across Africa or list your own products with detailed
                    descriptions and high-quality images.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                  <p className="text-muted-foreground">
                    Use our secure payment system that protects both buyers and sellers. 
                    Funds are only released when buyers confirm receipt of goods.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold text-lg">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Delivery & Feedback</h3>
                  <p className="text-muted-foreground">
                    Track your order in real-time until it arrives. Leave feedback and ratings to help
                    build our community's trust system.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                className="bg-nigeria-green hover:bg-nigeria-green/90 text-white"
                onClick={handleCTAClick}
              >
                Get Started Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-nigeria-green to-yellow-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-background rounded-xl overflow-hidden border border-nigeria-green/20">
              <img
                src="/lovable-uploads/7d9307ec-33b2-4413-9b0b-b652225403ee.png"
                alt="The Market Square platform demonstration"
                className="w-full h-auto"
              />
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

export default HowItWorks;
