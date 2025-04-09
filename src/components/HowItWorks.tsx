
import { Check, User, FileText, MessageSquare } from "lucide-react";

const StepCard = ({ number, title, description, icon: Icon }: { number: number; title: string; description: string; icon: any }) => {
  return (
    <div className="relative">
      <div className="flex items-center mb-4">
        <div className="bg-nigeria-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10">
          {number}
        </div>
        {number < 3 && (
          <div className="h-0.5 bg-nigeria-green bg-opacity-20 w-full ml-4 hidden md:block"></div>
        )}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
        <div className="bg-nigeria-green bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-nigeria-green" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="section-padding nigeria-pattern-bg" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our community in three simple steps and start engaging in meaningful discussions about Nigeria's economic and political landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard 
            number={1}
            title="Create Your Profile"
            description="Sign up and create your profile highlighting your areas of expertise and interests in Nigerian economics and politics."
            icon={User}
          />
          
          <StepCard 
            number={2}
            title="Explore Resources"
            description="Access our comprehensive resource library for data, analysis, and context about Nigerian economic and political landscape."
            icon={FileText}
          />
          
          <StepCard 
            number={3}
            title="Join Discussions"
            description="Participate in structured debates, contribute insights, and connect with experts and passionate community members."
            icon={MessageSquare}
          />
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">What Makes Us Different</h3>
              <p className="text-gray-600 mb-6">
                The Market Place Hub isn't just another forum. We've built specific features to elevate the quality of discussion about Nigerian economics and politics:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-nigeria-green rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Evidence-Based Discussions</span>
                    <p className="text-sm text-gray-600">All claims require supporting evidence, creating more productive conversations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-nigeria-green rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Expertise Verification</span>
                    <p className="text-sm text-gray-600">Academic and professional credentials are verified for trusted expert opinions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-nigeria-green rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Real-Time Data Integration</span>
                    <p className="text-sm text-gray-600">Economic indicators and political context displayed alongside discussions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-nigeria-green rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Structured Debate Format</span>
                    <p className="text-sm text-gray-600">Organized discussions with clear topics, time limits, and moderation</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&q=75&fit=crop&w=600" 
                alt="Nigerian architectural detail representing structured discussions" 
                className="rounded-lg shadow-lg max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
