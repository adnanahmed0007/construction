import React from 'react';
import Video from "./11960517_1080_1920_30fps.mp4";

const OurServeise = () => {
  const services = [
    'Shuttering',
    'Sariya Layoff',
    'Plumbing',
    'Electricity Line Layoff',
    'Mechanised Plastering',
    'Mechanised Putty',
    'Mechanised Painting',
    'Excavation & Filling',
    'Windows-Gate-Grill',
    'Dhala',
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-6 py-12 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-center text-white/90 mb-10 text-lg">
            We offer a complete range of construction services to meet all your building needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/90 text-gray-900 shadow-lg rounded-xl p-6 text-center border border-yellow-200 hover:scale-105 transform transition duration-300"
              >
                <h2 className="text-xl font-semibold text-yellow-700">{service}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServeise;
