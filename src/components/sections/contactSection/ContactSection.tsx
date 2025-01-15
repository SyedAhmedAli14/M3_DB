import WheitageBlogging from "@/components/structureschema/WheitageBlogging";
import React from "react";

const ContactSection = () => {
  return (
    <WheitageBlogging>
      <div id="contact" className="py-12 bg-blue-50">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <div className="my-8">
          <form action="#" className="space-y-6 max-w-3xl mx-auto">
            <div className="space-y-2">
              <label htmlFor="FullName" className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="FullName"
                placeholder="Syed Ahmed Ali Shah"
                className="border border-gray-300 placeholder:text-gray-500 w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="youremail@example.com"
                className="border border-gray-300 placeholder:text-gray-500 w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="Message"
                id="Message"
                cols={30}
                rows={8}
                placeholder="Your Message"
                className="border border-gray-300 placeholder:text-gray-500 w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md mx-auto block hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </WheitageBlogging>
  );
};

export default ContactSection;