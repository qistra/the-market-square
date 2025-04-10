
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, MessageSquare, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-24 nigeria-pattern-bg dark:bg-gray-900 dark:bg-opacity-95">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-5 md:space-y-6">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-nigeria-green bg-opacity-10 rounded-full mb-3 md:mb-4">
              <p className="text-nigeria-green font-medium text-xs md:text-sm flex items-center">
                <span className="bg-nigeria-green w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1.5 md:mr-2"></span>
                Nigeria's Premier Discussion Forum
              </p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance dark:text-white">
              Where Nigerian Economic & Political Discourse <span className="text-nigeria-green">Evolves</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 md:pr-12 text-balance">
              A centralized platform for informed debate, resource sharing, and data-driven conversations about Nigerian politics and economics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button size="lg" className="bg-nigeria-green hover:bg-nigeria-green-dark text-white py-5 md:py-6 px-6 md:px-8">
                <span>Join The Conversation</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white py-5 md:py-6 px-6 md:px-8 dark:text-nigeria-green dark:border-nigeria-green dark:hover:bg-nigeria-green dark:hover:text-white">
                Explore Features
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 md:pt-8">
              <div className="flex gap-2 items-center">
                <Users className="text-nigeria-green h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">10K+ Active Members</span>
              </div>
              <div className="flex gap-2 items-center">
                <MessageSquare className="text-nigeria-green h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">5K+ Daily Discussions</span>
              </div>
              <div className="flex gap-2 items-center">
                <BarChart2 className="text-nigeria-green h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Real-time Data</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-48 h-48 md:w-64 md:h-64 bg-nigeria-green opacity-5 rounded-full"></div>
              <img 
                src="/lovable-uploads/13eeef2e-d76e-4419-b0de-ec159b33408b.png" 
                alt="Silhouettes of people against a map of Africa with data visualization elements" 
                className="relative z-10 w-full h-auto rounded-lg shadow-lg dark:border dark:border-gray-700" 
                loading="lazy"
              />
              <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 md:p-4 max-w-xs animate-pulse-slow">
                <div className="flex items-center mb-1 md:mb-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1.5 md:mr-2"></div>
                  <h3 className="font-semibold text-xs md:text-sm dark:text-white">Trending Topic</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Nigeria's Central Bank Policy: Impact on Small Businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
