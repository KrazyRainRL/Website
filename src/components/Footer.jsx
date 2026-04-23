import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-dark-600 pb-12">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="font-serif text-3xl font-medium tracking-wide text-white">
              Carter<span className="text-moss-500 italic">Bailey</span>.
            </a>
            <p className="text-gray-500 text-sm mt-4 font-light tracking-wide">
              Premium Web & App Development
            </p>
          </div>

          <div className="flex space-x-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-moss-400 transition-colors uppercase text-xs tracking-widest">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-moss-400 transition-colors uppercase text-xs tracking-widest">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-moss-400 transition-colors uppercase text-xs tracking-widest">
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Carter Bailey. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-xs text-gray-600 tracking-wider">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
