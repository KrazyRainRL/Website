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
            <span className="text-gray-500 cursor-default uppercase text-xs tracking-widest">
              LinkedIn
            </span>
            <span className="text-gray-500 cursor-default uppercase text-xs tracking-widest">
              GitHub
            </span>
            <span className="text-gray-500 cursor-default uppercase text-xs tracking-widest">
              Twitter
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Carter Bailey. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-xs text-gray-600 tracking-wider">
            <span className="cursor-default">Privacy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
