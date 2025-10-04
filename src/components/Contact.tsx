import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-100 dark:bg-gray-900/50" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email</label>
            <input 
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 px-3 py-2" 
              id="email" 
              name="email" 
              placeholder="you@example.com" 
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">Message</label>
            <textarea 
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 px-3 py-2" 
              id="message" 
              name="message" 
              placeholder="Your message..." 
              rows={4}
            ></textarea>
          </div>
          <div className="text-right">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;