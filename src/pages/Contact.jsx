import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="py-8 px-8 bg-gradient-to-r from-purple-500 to-pink-500">
          <h1 className="text-3xl font-bold text-white text-center">Contact Us</h1>
          <p className="mt-2 text-white text-center">We'd love to hear from you!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="py-8 px-8">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-100 focus:border-purple-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-100 focus:border-purple-300"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-100 focus:border-purple-300"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mb-6">
            <button 
              type="submit" 
              className="w-full px-3 py-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;