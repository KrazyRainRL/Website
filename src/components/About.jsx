import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square max-w-md mx-auto relative group">
                <div className="absolute inset-0 bg-dark-800 border border-dark-600 group-hover:border-moss-900/50 transition-colors duration-700 z-10 flex items-center justify-center">
                    <span className="font-serif text-6xl text-moss-500/20 italic">CB</span>
                </div>
                {/* Decorative offset blocks for a structural, designed feel */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-moss-500/30 -z-0" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-moss-500/30 -z-0" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-moss-500" />
              <span className="text-xs font-medium text-moss-400 uppercase tracking-widest">About</span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight mb-8">
              Building digital solutions <br/>
              <span className="text-moss-400 italic">that matter.</span>
            </h3>

            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-10">
                <p>
                Hi, I'm Carter Bailey. I specialize in bridging the gap between engineering and design to create beautiful, highly functional digital experiences.
                </p>
                <p>
                Whether you're a startup launching a minimal MVP or an established business needing a sophisticated digital overhaul, I bring a detail-oriented, structured, and premium approach to every line of code.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-dark-600">
              {[
                'Clean architecture',
                'Modern tech stacks',
                'Minimalist design',
                'Clear communication'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-[4px] h-[4px] bg-moss-500 rounded-full" />
                  <span className="text-gray-300 text-sm tracking-wide">{item}</span>
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
