
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, MessageSquare, Users } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

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
            {/* Card deck container with 3D perspective */}
            <div 
              className="relative w-full max-w-md h-96 perspective-1000 card-deck-hover"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute -top-4 -left-4 w-48 h-48 md:w-64 md:h-64 bg-nigeria-green opacity-5 rounded-full"></div>
              
              {/* Card 4 (background) */}
              <div 
                className={`absolute card-in-deck z-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm h-64 mx-auto transform ${
                  isHovering ? 'rotate-6 translate-x-8 -translate-y-2 opacity-60 transition-all duration-500' : 'rotate-12 translate-x-6 -translate-y-4 opacity-60 transition-all duration-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-lg text-gray-400">Topic</h3>
                </div>
                <p className="text-base text-gray-400 mb-4 opacity-50 line-clamp-2">Card in background</p>
              </div>
              
              {/* Card 3 (background) */}
              <div 
                className={`absolute card-in-deck z-20 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm h-64 mx-auto transform ${
                  isHovering ? '-rotate-4 -translate-x-4 translate-y-1 opacity-80 transition-all duration-500' : '-rotate-8 -translate-x-5 translate-y-2 opacity-80 transition-all duration-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-lg dark:text-white">Research Analysis</h3>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">Revenue Distribution in Nigerian States</p>
                <div className="text-sm text-blue-500 font-medium hover:underline cursor-pointer">View analysis →</div>
              </div>
              
              {/* Card 2 (middle layer) */}
              <div 
                className={`absolute card-in-deck z-30 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm h-64 mx-auto transform ${
                  isHovering ? 'rotate-1 translate-x-1 translate-y-0 transition-all duration-500' : 'rotate-4 translate-x-2 transition-all duration-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-lg dark:text-white">Hot Debate</h3>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4">Agricultural Policy Reforms: Impact on Food Security</p>
                <div className="text-sm text-amber-500 font-medium hover:underline cursor-pointer">Join debate →</div>
              </div>
              
              {/* Card 1 (top/front card - main trending topic) */}
              <div 
                className={`relative card-in-deck z-40 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm h-64 mx-auto transform ${
                  isHovering ? 'translate-y-1 translate-x-0 rotate-0 transition-all duration-500' : 'transition-all duration-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-lg dark:text-white">Trending Topic</h3>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4">Nigeria's Central Bank Policy: Impact on Small Businesses</p>
                <div className="text-sm text-nigeria-green font-medium hover:underline cursor-pointer">Join this discussion →</div>
              </div>
              
              {/* Additional floating topics */}
              <div 
                className={`absolute card-in-deck top-1/4 -right-8 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-xs ${
                  isHovering ? 'animate-none translate-y-[-60%] translate-x-[-5px] transition-all duration-500' : 'animate-pulse-slow'
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <h3 className="font-semibold text-sm dark:text-white">Popular Discussion</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">Naira Exchange Rate: Economic Implications</p>
              </div>
              
              <div 
                className={`absolute card-in-deck bottom-1/4 -left-8 transform translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-xs ${
                  isHovering ? 'animate-none translate-y-[60%] translate-x-[5px] transition-all duration-500' : 'animate-pulse-slow'
                }`} 
                style={{ animationDelay: isHovering ? '0s' : '1.5s' }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <h3 className="font-semibold text-sm dark:text-white">Live Now</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">Infrastructure Development in Lagos State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
