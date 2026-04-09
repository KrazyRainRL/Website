import React from 'react';
import { ArrowRight, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-forest-900 rounded-full mix-blend-screen filter blur-[128px] opacity-50" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-forest-800 rounded-full mix-blend-screen filter blur-[128px] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Available for work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-600">Digital</span> <br />
              Experiences.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              I build modern, high-performance websites and applications that elevate your brand and drive results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-forest-600 hover:bg-forest-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] group"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-dark-800 hover:bg-dark-700 text-white font-medium border border-dark-600 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            {/* Abstract visual representation instead of a photo for a sleek modern look */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/40 to-transparent rounded-2xl border border-dark-600 backdrop-blur-sm transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-dark-800 rounded-2xl border border-dark-600 p-8 flex flex-col justify-between transform -rotate-3 transition-transform hover:rotate-0 duration-500 shadow-2xl">
                <div className="flex justify-between items-start">
                  <Code className="h-10 w-10 text-forest-500" />
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-dark-600" />
                    <div className="w-3 h-3 rounded-full bg-dark-600" />
                    <div className="w-3 h-3 rounded-full bg-dark-600" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-dark-600 rounded w-3/4" />
                  <div className="h-2 bg-dark-600 rounded w-1/2" />
                  <div className="h-2 bg-forest-900/50 rounded w-full" />
                  <div className="h-2 bg-dark-600 rounded w-5/6" />
                </div>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark-600">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-400 font-medium">Responsive Design</span>
                  </div>
                  <div className="px-3 py-1 bg-forest-900/30 text-forest-400 text-xs rounded-full border border-forest-800/50">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
