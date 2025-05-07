import React from 'react';
 // Path to your video
 import Video from "./11960517_1080_1920_30fps.mp4";
const Sell = () => {
  const materials = [
    'Sand, Cement, Sariya, Gitti, Putty, White Cement',
    'Plumbing & Sanitary Materials',
    'Plumbing Materials',
    'Wire & Electrical Materials',
    'Paints',
    'Bricks',
    'Mitti',
    'Pump',
  ];

  return (
    <div className="relative min-h-screen">
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
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 py-12 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-yellow-600 mb-8 drop-shadow-md">
            Materials We Sell
          </h1>
          <p className="text-lg text-white/90 mb-12">
            We provide a wide range of high-quality construction materials for all your project needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((item, index) => (
              <div
                key={index}
                className="bg-white/90 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-xl font-semibold text-yellow-600">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
