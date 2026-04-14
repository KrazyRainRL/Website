import React, { useState } from 'react';
import { Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-dark-900 relative border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-moss-500" />
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
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 border border-dark-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-moss-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:hello@carterbailey.biz" className="text-gray-300 hover:text-moss-400 transition-colors">
                    hello@carterbailey.biz
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 border border-dark-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-moss-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-gray-300">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 p-10 border border-dark-600 relative">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-900 border-b border-dark-600 px-0 py-3 text-white focus:outline-none focus:border-moss-500 transition-colors bg-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-900 border-b border-dark-600 px-0 py-3 text-white focus:outline-none focus:border-moss-500 transition-colors bg-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="service" className="text-xs font-medium text-gray-400 uppercase tracking-widest">Service</label>
                <select
                  id="service"
                  className="w-full bg-dark-900 border-b border-dark-600 px-0 py-3 text-gray-300 focus:outline-none focus:border-moss-500 transition-colors bg-transparent appearance-none rounded-none"
                >
                  <option value="" className="bg-dark-900">Select a service</option>
                  <option value="web" className="bg-dark-900">Web Development</option>
                  <option value="app" className="bg-dark-900">App Development</option>
                  <option value="custom" className="bg-dark-900">Custom Software</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-medium text-gray-400 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full bg-dark-900 border-b border-dark-600 px-0 py-3 text-white focus:outline-none focus:border-moss-500 transition-colors bg-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-moss-600 hover:bg-moss-500 text-white px-8 py-4 font-medium tracking-wide transition-colors duration-300 mt-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'idle' && 'Send Message'}
                {status === 'submitting' && (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 className="-ml-1 mr-2 h-5 w-5" />
                    Message Sent
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
