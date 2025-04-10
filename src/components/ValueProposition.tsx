
import { BarChart4, FileText, MessageSquare, Users2 } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-nigeria-green" />,
      title: "Informed Discussions",
      description: "Debates enriched with economic data and political context for more productive exchanges"
    },
    {
      icon: <BarChart4 className="h-8 w-8 md:h-10 md:w-10 text-nigeria-green" />,
      title: "Structured Dialogue",
      description: "Organized debate formats that elevate the quality of conversations and lead to meaningful insights"
    },
    {
      icon: <Users2 className="h-8 w-8 md:h-10 md:w-10 text-nigeria-green" />,
      title: "Community Interests",
      description: "Connect with passionate individuals and leverage collective knowledge across various domains"
    },
    {
      icon: <FileText className="h-8 w-8 md:h-10 md:w-10 text-nigeria-green" />,
      title: "Resource Library",
      description: "Access valuable resources, economic data, and political context to support your arguments"
    }
  ];

  return (
    <section className="section-padding bg-white" id="value-proposition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Why Choose The Market Square?</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            A unique platform designed specifically for Nigerian economic and political discourse, with features that promote productive, data-driven conversations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-5 md:p-6 rounded-xl shadow-md border border-gray-100 card-hover"
            >
              <div className="bg-nigeria-green bg-opacity-10 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                {value.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
