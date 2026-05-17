import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🚗",
      title: "Extensive Fleet",
      description: "Choose from our wide range of pristine sedans, rugged SUVs, and family minivans tailored for your journey.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "No hidden charges! Enjoy competitive daily rates and flexible mileage plans that fit your budget.",
    },
    {
      icon: "🛠️",
      title: "24/7 Roadside Assistance",
      description: "Drive with peace of mind knowing our dedicated support team is always ready to help you anywhere, anytime.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <span className="text-cyan-500 font-bold text-sm">BEST CHOICE</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 text-gray-900">
          Why Choose Our Car Rental?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col text-center"
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;