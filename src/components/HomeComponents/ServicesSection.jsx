import monitoring from "../../assets/Analysis-pana.png";
import optimization from "../../assets/Risk management-pana.png";
import control from "../../assets/Smart home-cuate.png";
import suggestion from "../../assets/Upvote-bro.png";
import Visualization from "../../assets/Social Dashboard-cuate.png";
import security from "../../assets/Login-bro.png";

const ServicesSection = () => {
  const services = [
    {
      serviceImage: monitoring,
      title: "Energy Monitoring",
      id: "energyMonitoring",
      description:
        "Provides insights into energy usage patterns, helping users make informed decisions to reduce energy costs and optimize their appliance usage.",
    },
    {
      serviceImage: optimization,
      title: "Energy Optimization",
      id: "energyOptimization",
      description:
        "Helps users lower energy bills by optimizing appliance operation, thereby promoting energy efficiency and reducing carbon footprint.",
    },
    {
      serviceImage: control,
      title: "Automation & Control",
      id: "energyControl",
      description:
        "Enhances energy management through automation, allowing users to create a more sustainable and cost-effective environment at home.",
    },
    {
      serviceImage: suggestion,
      title: "Suggestions",
      id: "energySuggestions",
      description: "Insights empower users to maximize efficiency with minimal effort.",
    },
    {
      serviceImage: Visualization,
      title: "Data Visualization",
      id: "energyVisualization",
      description:
        "This service enables users to visualize data at a glance, helping them understand and manage energy usage effectively.",
    },
    {
      serviceImage: security,
      title: "Privacy & Protection",
      id: "energySecurity",
      description:
        "Ensures user data privacy with secure authentication, encrypted data storage, and robust access control.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10 px-4 w-full" id="serviceSection">
      <div className="bg-customBlue1 w-28 h-2 rounded-lg mb-4"></div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-4xl">Services</h1>
        <p>Transform Your Energy Experience with Smart Solutions</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-center items-center transition-transform duration-500 hover:scale-105 hover:shadow-gray-950 mb-5 mt-7"
            id={service.id}
          >
            <div className="text-center w-3/4 h-[200px] bg-[#63818C] bg-opacity-10 p-4 rounded-lg relative overflow-visible flex flex-col justify-center items-center shadow-2xl">
              <img
                className="absolute -top-[27%] left-1/2 transform -translate-x-1/2 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
                src={service.serviceImage}
                alt={service.title}
              />
              <h1 className="font-bold mt-7">{service.title}</h1>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
