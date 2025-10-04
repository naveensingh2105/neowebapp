import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setStatus('error');
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const templateParams = {
        from_email: email,
        message,
      } as Record<string, string>;

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Failed to send email', err);
      setStatus('error');
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-100 dark:bg-gray-900/50" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 px-3 py-2" 
              id="email" 
              name="email" 
              placeholder="you@example.com" 
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">Message</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 px-3 py-2" 
              id="message" 
              name="message" 
              placeholder="Your message..." 
              rows={4}
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          <div aria-live="polite">
            {status === 'success' && <p className="text-green-600 mt-2">Message sent — thanks! I'll get back to you soon.</p>}
            {status === 'error' && <p className="text-red-600 mt-2">Failed to send message. Please try again later.</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;