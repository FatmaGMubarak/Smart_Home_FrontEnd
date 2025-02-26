import { useState } from "react";
const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const plans = [
    {
      price: "$500",
      name: "Basic Plan",
      features: [
        "Real-time energy monitoring for up to 5 devices",
        "Personalized energy usage insights",
        "Personalized Energy-Saving Suggestions",
        "Basic data visualization dashboard",
        "Email support",
      ],
    },
    {
      price: "$1000",
      name: "Standard Plan",
      features: [
        "Real-time monitoring for up to 15 devices",
        "Advanced AI-driven energy optimization insights",
        "Automation options for energy-saving rules",
        "Interactive dashboard with detailed usage and cost analysis",
      ],
    },
    {
      price: "$2000",
      name: "Premium Plan",
      features: [
        "Unlimited device monitoring and control",
        "Full AI automation and predictive energy management",
        "Customizable automation rules for all appliances",
        "Interactive dashboard with detailed usage and cost analysis",
      ],
      mostPopular: true,
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 px-4" id="pricingSection">
      <div className="bg-customBlue1 w-28 h-2 rounded-lg mb-1"></div>
      <h1 className="text-4xl font-bold text-white mb-4">Purchasing</h1>
      <p className="text-lg text-white mb-10">
        Power Your Home with the Right Plan
      </p>
      <div className="bg-[#adc7d6] flex flex-wrap justify-center gap-8 rounded-xl items-center ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-80 rounded-lg p-6 transform transition-transform duration-500 hover:scale-105 ml-10 ${
              plan.mostPopular
                ? "bg-customBlue1 text-white"
                : "bg-[#adc7d6] text-gray-800"
            }`}
          >
            {plan.mostPopular && (
              <div className="text-sm bg-[#4A616D] text-white px-2 py-1 rounded-full w-fit mb-4">
                MOST POPULAR
              </div>
            )}
            <h2 className="text-4xl font-extrabold">{plan.price}</h2>
            <p className="text-sm font-medium mb-4">/month</p>
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
            onClick={()=>setSelectedPlan(plans.name)}
              className={`w-full py-2 text-sm font-bold rounded-lg text-white ${
                plan.mostPopular
                  ? "bg-[#B1C1B7] hover:bg-[#A46E3D]"
                  : "bg-[#4A616D] hover:bg-gray-300"
              }`}
            >
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
