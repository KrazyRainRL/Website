import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-800 relative border-y border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-dark-700 border border-dark-600 relative group">
               {/* Abstract placeholder for Carter's photo or graphic */}
               <div className="absolute inset-0 bg-gradient-to-br from-forest-900/40 to-dark-900 mix-blend-overlay" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-forest-500/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-forest-900/50 flex items-center justify-center backdrop-blur-md">
                        <span className="text-3xl font-bold text-forest-400">CB</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-dark-900 border border-dark-600 p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold text-white mb-1">5+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-forest-500 font-semibold tracking-wide uppercase text-sm mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Building digital solutions that matter.</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Hi, I'm Carter Bailey. I specialize in bridging the gap between design and engineering to create beautiful, functional, and user-centric digital experiences.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you're a startup looking to build your first MVP or an established business needing a digital overhaul, I bring a detail-oriented, earthy, and modern approach to every line of code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Clean, maintainable code',
                'Modern tech stacks',
                'Pixel-perfect design',
                'Clear communication'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-500 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
