
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";

const Community = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const handleCTAClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      // If user is logged in, proceed with intended action
      // For now, just show a message
      alert("Welcome to our community! This feature is coming soon.");
    }
  };

  return (
    <section id="community" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our <span className="text-nigeria-green">Growing Community</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Market Square is more than just a marketplace – it's a vibrant community of people 
            passionate about African products, culture, and commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Card 1 */}
          <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/8a988b41-82e2-4468-b325-ca89b0344ab9.png" 
                alt="Community members discussing products" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Connect with Like-minded People</h3>
              <p className="text-muted-foreground mb-4">
                Network with buyers, sellers, and enthusiasts who share your passion for authentic 
                African products and culture.
              </p>
              <Button 
                variant="outline" 
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white w-full"
                onClick={handleCTAClick}
              >
                Explore Community
              </Button>
            </div>
          </div>

          {/* Community Card 2 */}
          <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/b2205a8c-1187-423b-b40f-733753f3570d.png" 
                alt="Virtual marketplace event" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Participate in Events</h3>
              <p className="text-muted-foreground mb-4">
                Join virtual and physical marketplace events, workshops, and seminars to enhance your 
                buying or selling experience.
              </p>
              <Button 
                variant="outline" 
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white w-full"
                onClick={handleCTAClick}
              >
                View Upcoming Events
              </Button>
            </div>
          </div>

          {/* Community Card 3 */}
          <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/13eeef2e-d76e-4419-b0de-ec159b33408b.png" 
                alt="Learning about African crafts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Share Knowledge & Experience</h3>
              <p className="text-muted-foreground mb-4">
                Learn about the stories behind products, traditional crafting methods, and 
                sustainable practices from across Africa.
              </p>
              <Button 
                variant="outline" 
                className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white w-full"
                onClick={handleCTAClick}
              >
                Join Discussions
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to be part of something special? Join thousands of members already experiencing
            the power of our connected marketplace.
          </p>
          <Button 
            size="lg" 
            className="bg-nigeria-green hover:bg-nigeria-green/90 text-white px-8"
            onClick={handleCTAClick}
          >
            Join Our Community
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

export default Community;
