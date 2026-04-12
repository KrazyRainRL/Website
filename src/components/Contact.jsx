import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-dark-900 relative border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <div className="inline-flex items-center space-x-3 mb-6 bg-dark-800/50 px-4 py-2 rounded-full border border-dark-600/50">
              <span className="w-2 h-2 rounded-full bg-moss-500" />
              <span className="text-xs font-medium text-moss-400 uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight mb-8">
              Let's build something <br/>
              <span className="text-moss-400 italic">amazing together.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed max-w-md">
              Have a project in mind? Fill out the form, and I'll get back to you to discuss how we can bring your vision to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 bg-dark-800/50 p-4 rounded-3xl border border-dark-600/50">
                <div className="w-14 h-14 bg-dark-900 border border-dark-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-moss-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:hello@carterbailey.biz" className="text-gray-300 hover:text-moss-400 transition-colors">
                    hello@carterbailey.biz
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-6 bg-dark-800/50 p-4 rounded-3xl border border-dark-600/50">
                <div className="w-14 h-14 bg-dark-900 border border-dark-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-moss-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-gray-300">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 p-10 rounded-[2.5rem] border border-dark-600 relative shadow-xl shadow-dark-900/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-900 border border-dark-600 rounded-full px-6 py-4 text-white focus:outline-none focus:border-moss-500 focus:ring-1 focus:ring-moss-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-widest pl-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-900 border border-dark-600 rounded-full px-6 py-4 text-white focus:outline-none focus:border-moss-500 focus:ring-1 focus:ring-moss-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="service" className="text-xs font-medium text-gray-400 uppercase tracking-widest pl-2">Service</label>
                <select
                  id="service"
                  className="w-full bg-dark-900 border border-dark-600 rounded-full px-6 py-4 text-gray-300 focus:outline-none focus:border-moss-500 focus:ring-1 focus:ring-moss-500 transition-all appearance-none"
                >
                  <option value="" className="bg-dark-900">Select a service</option>
                  <option value="web" className="bg-dark-900">Web Development</option>
                  <option value="app" className="bg-dark-900">App Development</option>
                  <option value="custom" className="bg-dark-900">Custom Software</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-medium text-gray-400 uppercase tracking-widest pl-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-900 border border-dark-600 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-moss-500 focus:ring-1 focus:ring-moss-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-moss-600 hover:bg-moss-500 text-white rounded-full px-8 py-5 font-medium tracking-wide transition-colors duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
