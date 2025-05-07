import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Ready to Build with Us?</h1>
        
        <p className="text-lg text-gray-600 mb-12">
          Whether you're planning your next big construction project or considering a career move, we're here to help you take the next step. Our team is dedicated to delivering exceptional results and fostering long-term partnerships.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Build a Project Section */}
          <div className="bg-yellow-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Build a Project with Us</h2>
            <p className="text-lg">
              Looking for a reliable, experienced construction partner? We are ready to turn your vision into reality with precision, innovation, and quality.
            </p>
          </div>

          {/* Build a Career Section */}
          <div className="bg-yellow-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Build a Career with Us</h2>
            <p className="text-lg">
              We believe in growing together. If you're passionate about construction and eager to make an impact, join our team. Let’s build something great together!
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-800">
            **Phone Number**: 798-01  
            **Email**: <a href="mailto:afyfy@gfjjs.com" className="text-yellow-400">afyfy@gfjjs.com</a>
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-800">
            Get in touch with us today, and let’s start building the future together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
