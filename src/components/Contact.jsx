import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-forest-500 font-semibold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's build something amazing together.</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Have a project in mind? Fill out the form, and I'll get back to you as soon as possible to discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-dark-600">
                  <Mail className="h-5 w-5 text-forest-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                  <a href="mailto:hello@carterbailey.biz" className="text-white hover:text-forest-400 transition-colors text-lg">
                    hello@carterbailey.biz
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-dark-600">
                  <MapPin className="h-5 w-5 text-forest-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                  <p className="text-white text-lg">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 p-8 md:p-10 rounded-3xl border border-dark-600 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-forest-900/20 rounded-full mix-blend-screen filter blur-[80px]" />

            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Interested In</label>
                <select
                  id="service"
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500 transition-all appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="custom">Custom Software</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-forest-600 hover:bg-forest-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-[0_0_20px_rgba(22,163,74,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
