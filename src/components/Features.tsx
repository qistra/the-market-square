
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, BarChart, Timer, FileText, Users, MessageCircle, LucideIcon } from "lucide-react";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  bgColor = "bg-nigeria-green",
  image
}: { 
  title: string;
  description: string;
  icon: LucideIcon;
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
        <p className="text-gray-600 mb-4">{description}</p>
        {image && (
          <div className="mt-4 rounded-md overflow-hidden border border-gray-200">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Features = () => {
  return (
    <section className="section-padding bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the tools and features that make The Market Place Hub the premier platform for Nigerian economic and political discourse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Trending Topics Dashboard"
            description="Stay updated with real-time economic indicators and trending political topics that are shaping the Nigerian landscape."
            icon={LineChart}
            image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&q=75&fit=crop&w=750"
          />
          
          <FeatureCard
            title="Structured Debate Arena"
            description="Engage in organized debates with time limits, fact-checking, and clear pro/con sections to ensure productive discourse."
            icon={Timer}
          />
          
          <FeatureCard
            title="Comprehensive Resource Library"
            description="Access a curated collection of economic data, political analyses, academic papers, and reference materials."
            icon={FileText}
          />
          
          <FeatureCard
            title="Expert User Profiles"
            description="Build your reputation through verified expertise indicators and contributions to the community knowledge base."
            icon={Users}
          />
        </div>
        
        <div className="mt-16 bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Featured Discussion Format</h3>
                <p className="text-gray-600 mb-6">
                  Our structured debate format ensures that conversations remain productive, evidence-based, and respectful. See how it works:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-nigeria-green bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                      <MessageCircle className="h-4 w-4 text-nigeria-green" />
                    </div>
                    <div>
                      <span className="font-medium">Topic Introduction</span>
                      <p className="text-sm text-gray-600">Clear presentation of the topic with context and relevant data</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nigeria-green bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                      <Users className="h-4 w-4 text-nigeria-green" />
                    </div>
                    <div>
                      <span className="font-medium">Expert Contributions</span>
                      <p className="text-sm text-gray-600">Verified experts provide insights and analysis</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nigeria-green bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                      <BarChart className="h-4 w-4 text-nigeria-green" />
                    </div>
                    <div>
                      <span className="font-medium">Data Integration</span>
                      <p className="text-sm text-gray-600">Economic indicators and political facts integrated directly into discussions</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <div className="bg-gray-50 p-4 border-b">
                    <h4 className="font-medium">Active Debate: Central Bank Policy</h4>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Pro Arguments</span>
                        <span className="text-sm text-nigeria-green">8 contributions</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-nigeria-green rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Counter Arguments</span>
                        <span className="text-sm text-nigeria-green">5 contributions</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-nigeria-green rounded-full w-2/5"></div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-nigeria-green rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">EA</span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium text-sm">Dr. Emeka Adebayo</span>
                            <span className="ml-2 bg-nigeria-green bg-opacity-10 text-nigeria-green text-xs px-2 py-1 rounded-full">Economist</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">The recent policy shift will likely increase foreign investment in the short term, but we need to consider the impact on local industries...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
