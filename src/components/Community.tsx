
import { Button } from "@/components/ui/button";
import { MessageCircle, ThumbsUp, Users } from "lucide-react";

const Community = () => {
  return (
    <section className="section-padding bg-white" id="community">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with passionate individuals discussing Nigerian economic and political matters in a structured, data-driven environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-3 bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold">Featured Discussion</h3>
            </div>
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-nigeria-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">OA</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold">Oluwaseun Adeleke</h4>
                    <span className="ml-2 text-xs bg-nigeria-green bg-opacity-10 text-nigeria-green px-2 py-1 rounded-full">Policy Analyst</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    The Central Bank's recent decision to adjust interest rates will have significant implications for small businesses across Nigeria. Based on historical data from similar policy shifts, we can expect...
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>48 upvotes</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>23 responses</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pl-14 border-l-2 border-gray-200 ml-5 mb-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-8 h-8 bg-nigeria-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-nigeria-green font-bold text-xs">FJ</span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h5 className="font-medium text-sm">Dr. Fatima Jimoh</h5>
                      <span className="ml-2 text-xs bg-nigeria-green bg-opacity-10 text-nigeria-green px-2 py-1 rounded-full">Economist</span>
                    </div>
                    <p className="text-gray-700 text-sm mt-1">
                      While I agree with your assessment of short-term implications, we should also consider the regional variations in impact. The data from southern states shows...
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-nigeria-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-nigeria-green font-bold text-xs">BN</span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h5 className="font-medium text-sm">Babatunde Nwachukwu</h5>
                      <span className="ml-2 text-xs bg-nigeria-green bg-opacity-10 text-nigeria-green px-2 py-1 rounded-full">Business Owner</span>
                    </div>
                    <p className="text-gray-700 text-sm mt-1">
                      As a small business owner in Lagos, I can confirm these effects. My operating costs have increased by approximately 12% since the policy change...
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-nigeria-green hover:bg-nigeria-green-dark text-white">
                View Full Discussion
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 card-hover">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-nigeria-green mr-3" />
                  <h3 className="text-xl font-semibold">Community Stats</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-nigeria-green">10K+</p>
                    <p className="text-gray-600 text-sm">Active Members</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-nigeria-green">5K+</p>
                    <p className="text-gray-600 text-sm">Daily Discussions</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-nigeria-green">500+</p>
                    <p className="text-gray-600 text-sm">Verified Experts</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-nigeria-green">2K+</p>
                    <p className="text-gray-600 text-sm">Resources Shared</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 card-hover flex-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-nigeria-green mr-3" />
                  <h3 className="text-xl font-semibold">Trending Topics</h3>
                </div>
                <ul className="space-y-4">
                  <li className="border-b border-gray-100 pb-4">
                    <a href="#" className="hover:text-nigeria-green transition-colors">
                      <p className="font-medium">Nigeria's Energy Sector Reform: Opportunities & Challenges</p>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <span>32 active participants</span>
                        <span className="mx-2">•</span>
                        <span>Updated 2h ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <a href="#" className="hover:text-nigeria-green transition-colors">
                      <p className="font-medium">Agricultural Policies and Food Security in Nigeria</p>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <span>28 active participants</span>
                        <span className="mx-2">•</span>
                        <span>Updated 4h ago</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-nigeria-green transition-colors">
                      <p className="font-medium">Digital Economy: Nigeria's Tech Revolution</p>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <span>45 active participants</span>
                        <span className="mx-2">•</span>
                        <span>Updated 1h ago</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-nigeria-green rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to join the conversation?</h3>
              <p className="text-white text-opacity-90">
                Become part of Nigeria's premier economic and political discussion community and contribute to meaningful dialogue.
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-white text-nigeria-green hover:bg-gray-100 px-8 py-6 w-full md:w-auto">
                Join The Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
