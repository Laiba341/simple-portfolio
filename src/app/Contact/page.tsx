import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-orange-800 py-10">
      {/* Contact Information */}
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 md:flex">
        <div className="md:w-1/2 w-full p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-4">I'd love to hear from you! Whether you have a question, proposal, or just want to say hello, feel free to reach out.</p>

          {/* Contact Details */}
          <div className="flex items-center text-lg mb-4">
            <FaPhoneAlt className="text-lime-600 mr-3" />
            <p className="text-gray-800">+92 123 122 334</p>
          </div>
          <div className="flex items-center text-lg mb-4">
            <FaEnvelope className="text-cyan-300 mr-3" />
            <p className="text-gray-800">ABC @example.com</p>
          </div>
          <div className="flex items-center text-lg mb-4">
            <FaMapMarkerAlt className="text-red-600 mr-3" />
            <p className="text-gray-800">123 Street, Karachi, Pakistan</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800"><FaFacebook size={25} /></a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600"><FaTwitter size={25} /></a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900"><FaLinkedin size={25} /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 p-4">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-800" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-800" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-800" required></textarea>
            </div>

            <div>
              <button type="submit" className="w-full bg-orange-800 hover:bg-orange-800 text-white font-bold py-3 px-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-800">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
