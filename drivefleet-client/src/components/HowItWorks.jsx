import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Location & Car",
      description: "Select your city (Dhaka, Chattogram, etc.) and browse through our available vehicles to find your perfect match.",
    },
    {
      step: "02",
      title: "Pick Your Dates",
      description: "Define your rental duration, choose pickup and drop-off times, and fill out the quick booking form.",
    },
    {
      step: "03",
      title: "Hit the Road",
      description: "Complete your payment online or on delivery, grab the keys, and start your comfortable journey.",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-20">
          <span className="text-cyan-500 font-bold uppercase tracking-wider text-sm px-3 py-1 bg-cyan-50 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-gray-900">
            Rent a Car in 3 Easy Steps
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-cyan-500 text-gray-400 group-hover:text-cyan-500 font-black text-3xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 relative bg-white">
                  {item.step}

                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-transparent group-hover:bg-cyan-500 rounded-full transition-all duration-300" />
                </div>

                <div className="space-y-2 max-w-sm mx-auto">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
