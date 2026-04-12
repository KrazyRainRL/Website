import React from 'react';
import { Monitor, Smartphone, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern frameworks. From elegant landing pages to complex web applications.',
    icon: Monitor,
    features: ['React & Next.js', 'Performance Optimized', 'SEO Friendly'],
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications designed for a seamless, high-end user experience.',
    icon: Smartphone,
    features: ['iOS & Android', 'React Native', 'Intuitive UI/UX'],
  },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions engineered to solve specific business challenges with clean, maintainable code.',
    icon: Cpu,
    features: ['API Integration', 'Database Design', 'Scalable Architecture'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-3 mb-6 bg-dark-800/50 px-4 py-2 rounded-full border border-dark-600/50">
              <span className="w-2 h-2 rounded-full bg-moss-500" />
              <span className="text-xs font-medium text-moss-400 uppercase tracking-widest">Expertise</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight">
              Services tailored to <br/>
              <span className="text-moss-400 italic">your needs.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
            A comprehensive suite of development services. Every project is built with clean architecture and an eye for welcoming, round design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-dark-800 p-10 rounded-3xl border border-dark-600 hover:border-moss-600/30 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden shadow-lg shadow-dark-900/50"
              >
                <div className="absolute -top-10 -right-10 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                    <Icon className="w-48 h-48 text-moss-500" strokeWidth={0.5} />
                </div>

                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl border border-dark-600 flex items-center justify-center mb-8 bg-dark-900 group-hover:bg-moss-900/30 group-hover:border-moss-700/50 transition-colors duration-500">
                    <Icon className="h-6 w-6 text-moss-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-8 font-light leading-relaxed text-sm">
                    {service.description}
                    </p>
                    <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-300 tracking-wide bg-dark-900/50 py-2 px-3 rounded-xl border border-dark-600/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-moss-500 mr-3" />
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
