import React from 'react';
import Video from './11960517_1080_1920_30fps.mp4';
import img from './guilherme-cunha-4zwozQxDbD4-unsplash.jpg';
import img1 from './pexels-sevenstormphotography-439416.jpg';
import img3 from './scott-blake-x-ghf9LjrVg-unsplash.jpg';

const Home = () => {
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
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 py-20 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
            Building Your Future with Excellence and Innovation
          </h1>
          <p className="text-lg text-white/90 mb-8 drop-shadow-lg">
            At BuildStrong Co., we believe in the power of mutual success. By working closely with our clients and partners,
            we ensure that every project is a step toward building lasting legacies. With a deep understanding of the unique
            challenges in Bihar and beyond, we focus on delivering innovative construction solutions that create long-term value.
          </p>
          <p className="text-lg text-white/90 mb-8 drop-shadow-lg">
            We bring over a decade of expertise to every project, from residential to industrial, ensuring your construction needs
            are met with the highest standards of quality and efficiency. Our team is dedicated to providing you with the right
            resources, the latest construction technologies, and unmatched customer support at every stage of your journey.
          </p>
          <p className="text-lg text-white/90 mb-12 drop-shadow-lg">
            When you choose BuildStrong Co., you're partnering with a reliable, full-service construction provider who understands
            the importance of excellence. Together, we create structures that stand the test of time.
          </p>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={img} alt="Expert Construction" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow-600 mb-2">Expert Construction</h2>
                <p className="text-gray-700">We ensure top-quality service in all our construction projects, delivering outstanding results.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={img1} alt="Sustainable Practices" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow-600 mb-2">Sustainable Practices</h2>
                <p className="text-gray-700">Our methods embrace sustainability, ensuring eco-friendly and energy-efficient solutions.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={img3} alt="Innovative Designs" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow-600 mb-2">Innovative Designs</h2>
                <p className="text-gray-700">We bring creative and innovative designs to each project, offering modern and stylish solutions.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-yellow-300 font-medium">
              Let us help you turn your vision into reality. <br /> Contact us today to begin your construction journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
