
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, MessageSquare, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-24 nigeria-pattern-bg">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-5 md:space-y-6">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-nigeria-green bg-opacity-10 rounded-full mb-3 md:mb-4">
              <p className="text-nigeria-green font-medium text-xs md:text-sm flex items-center">
                <span className="bg-nigeria-green w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1.5 md:mr-2"></span>
                Nigeria's Premier Discussion Forum
              </p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Where Nigerian Economic & Political Discourse <span className="text-nigeria-green">Evolves</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 md:pr-12 text-balance">
              A centralized platform for informed debate, resource sharing, and data-driven conversations about Nigerian politics and economics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button size="lg" className="bg-nigeria-green hover:bg-nigeria-green-dark text-white py-5 md:py-6 px-6 md:px-8">
                <span>Join The Conversation</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white py-5 md:py-6 px-6 md:px-8">
                Explore Features
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 md:pt-8">
              <div className="flex gap-2 items-center">
                <Users className="text-nigeria-green h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-gray-600 text-sm md:text-base">10K+ Active Members</span>
              </div>
              <div className="flex gap-2 items-center">
                <MessageSquare className="text-nigeria-green h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-gray-600 text-sm md:text-base">5K+ Daily Discussions</span>
              </div>
              <div className="flex gap-2 items-center">
                <BarChart2 className="text-nigeria-green h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-gray-600 text-sm md:text-base">Real-time Data</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-48 h-48 md:w-64 md:h-64 bg-nigeria-green opacity-5 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&q=75&fit=crop&w=750" 
                alt="Nigerian business professionals in discussion" 
                className="relative z-10 rounded-lg shadow-xl w-full h-auto" 
                loading="lazy"
              />
              <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-xs animate-pulse-slow">
                <div className="flex items-center mb-1 md:mb-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1.5 md:mr-2"></div>
                  <h3 className="font-semibold text-xs md:text-sm">Trending Topic</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Nigeria's Central Bank Policy: Impact on Small Businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
