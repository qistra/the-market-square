
import { BarChart4, FileText, MessageSquare, Users2 } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: <MessageSquare className="h-10 w-10 text-nigeria-green" />,
      title: "Informed Discussions",
      description: "Debates enriched with economic data and political context for more productive exchanges"
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-nigeria-green" />,
      title: "Structured Dialogue",
      description: "Organized debate formats that elevate the quality of conversations and lead to meaningful insights"
    },
    {
      icon: <Users2 className="h-10 w-10 text-nigeria-green" />,
      title: "Community Expertise",
      description: "Connect with subject matter experts and leverage collective knowledge across various domains"
    },
    {
      icon: <FileText className="h-10 w-10 text-nigeria-green" />,
      title: "Resource Library",
      description: "Access valuable resources, economic data, and political context to support your arguments"
    }
  ];

  return (
    <section className="section-padding bg-white" id="value-proposition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose The Market Place Hub?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A unique platform designed specifically for Nigerian economic and political discourse, with features that promote productive, data-driven conversations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-hover"
            >
              <div className="bg-nigeria-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
