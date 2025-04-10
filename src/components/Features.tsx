
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, BarChart, Calendar, FileText } from "lucide-react";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  bgColor = "bg-nigeria-green",
  image
}: { 
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor?: string;
  image?: string;
}) => {
  return (
    <Card className="overflow-hidden card-gradient border-none card-hover">
      <CardContent className="p-6">
        <div className={`${bgColor} bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
          <Icon className={`h-7 w-7 text-nigeria-green`} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        {image && (
          <div className="mt-4 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Features = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Designed specifically for the Nigerian context, our platform offers tools to facilitate meaningful economic and political discourse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-nigeria-green bg-opacity-10 text-nigeria-green mb-6">
                <span>Trending Topics</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Real-time Economic & Political Dashboard</h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stay updated with key indicators like inflation rates, exchange rates, GDP growth, and political developments that shape discussions on our platform.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">Customizable watchlist of economic indicators</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">Political event calendar with analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">Data visualization tools for better insights</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gray-900 p-3 flex gap-2 items-center">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-200 text-sm">Nigeria Economic Dashboard</div>
            </div>
            <div className="bg-gray-800 p-4 grid grid-cols-2 gap-4 h-full">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Inflation Rate</div>
                <div className="text-red-500 text-2xl font-bold">22.41%</div>
                <div className="text-gray-400 text-xs flex items-center mt-1">
                  <svg className="h-3 w-3 text-green-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  0.26% from last month
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">NGN/USD</div>
                <div className="text-gray-200 text-2xl font-bold">₦770.38</div>
                <div className="text-gray-400 text-xs flex items-center mt-1">
                  <svg className="h-3 w-3 text-red-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  0.8% from yesterday
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">GDP Growth</div>
                <div className="text-green-500 text-2xl font-bold">2.51%</div>
                <div className="text-gray-400 text-xs mt-1">Q2 2023 estimate</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Unemployment</div>
                <div className="text-red-500 text-2xl font-bold">33.3%</div>
                <div className="text-gray-400 text-xs mt-1">Q4 2022 data</div>
              </div>
              <div className="col-span-2 bg-gray-700 p-4 rounded-lg">
                <div className="text-gray-300 text-sm font-medium mb-2">Key Political Events</div>
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <div className="text-xs text-gray-400 bg-gray-600 rounded px-2 py-1 h-fit">
                      <div>Jul</div>
                      <div>12</div>
                    </div>
                    <div className="text-gray-200">Supreme Court ruling on state autonomy</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-xs text-gray-400 bg-gray-600 rounded px-2 py-1 h-fit">
                      <div>Jul</div>
                      <div>18</div>
                    </div>
                    <div className="text-gray-200">National Assembly budget defense sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Structured Discussion Forums"
            description="Engage in organized debates with time limits, fact-checking, and clear pro/con sections to ensure productive discourse."
            icon={Calendar}
          />
          
          <FeatureCard
            title="Comprehensive Resource Library"
            description="Access a curated collection of economic data, political analyses, academic papers, and reference materials."
            icon={FileText}
          />
          
          <FeatureCard
            title="Interest-Based User Profiles"
            description="Build your community through shared interests and contribute to the growing knowledge base."
            icon={BarChart}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
