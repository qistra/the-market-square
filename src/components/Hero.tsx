
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, BarChart, Users } from "lucide-react";

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
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gray-950 text-white py-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="/nigeria-pattern.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <p className="text-nigeria-green flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-nigeria-green"></span>
              Nigeria's Premier Discussion Forum
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Where Nigerian<br/>
              Economic & Political<br/>
              Discourse <span className="text-nigeria-green">Evolves</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              A centralized platform for informed debate, resource sharing, and
              data-driven conversations about Nigerian politics and economics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-nigeria-green hover:bg-nigeria-green/90 text-white px-8"
                onClick={handleCTAClick}
              >
                Join The Conversation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800"
                onClick={handleCTAClick}
              >
                Explore Features
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Users className="text-nigeria-green h-5 w-5" />
                <span className="text-gray-300">10K+ Active Members</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="text-nigeria-green h-5 w-5" />
                <span className="text-gray-300">5K+ Daily Discussions</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="text-nigeria-green h-5 w-5" />
                <span className="text-gray-300">Real-time Data</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="relative perspective-1000">
              <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transform rotate-y-minus-5 rotate-z-minus-2 shadow-xl">
                <img
                  src="/lovable-uploads/cc7d716c-f8e0-4c21-b579-531c9823c080.png"
                  alt="The Market Square discussion forum"
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
