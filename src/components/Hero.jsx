import { ArrowRight, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">

      {/* Refined subtle background gradients instead of glowing orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-moss-900/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-moss-900/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="text-left lg:col-span-7">
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-8 h-[1px] bg-moss-500" />
              <span className="text-xs font-medium text-moss-400 uppercase tracking-widest">Available for work</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5rem] font-medium leading-[1.1] mb-8 text-white">
              Crafting <span className="text-moss-400 italic">Digital</span><br />
              Experiences.
            </h1>

            <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed font-light">
              I build modern, high-performance websites and applications that elevate your brand with clean, thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 bg-moss-600 hover:bg-moss-500 text-white font-medium transition-all duration-300 group"
              >
                View Services
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent hover:bg-dark-800 text-white font-medium border border-dark-600 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Extremely clean, minimalist abstract visual */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-dark-800 border border-dark-600 overflow-hidden group hover:border-moss-900/50 transition-colors duration-700">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-moss-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 border border-dark-600 rounded-none flex items-center justify-center">
                        <Code className="h-5 w-5 text-moss-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="h-[1px] bg-dark-600 w-1/4" />
                    <div className="space-y-3">
                        <div className="h-1 bg-dark-600 w-full" />
                        <div className="h-1 bg-moss-900/50 w-5/6" />
                        <div className="h-1 bg-dark-600 w-4/6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-dark-600">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-4 w-4 text-gray-500" strokeWidth={1.5} />
                      <span className="text-xs text-gray-500 uppercase tracking-widest">Responsive</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offset decorative frame */}
              <div className="absolute -inset-4 border border-dark-600/50 -z-10 transform translate-x-4 translate-y-4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
