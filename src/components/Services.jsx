import React from 'react';
import { Monitor, Smartphone, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern frameworks. From landing pages to complex web applications.',
    icon: Monitor,
    features: ['React & Next.js', 'Performance Optimized', 'SEO Friendly'],
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications designed for a seamless user experience.',
    icon: Smartphone,
    features: ['iOS & Android', 'React Native', 'Intuitive UI/UX'],
  },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions to solve your specific business challenges and automate workflows.',
    icon: Cpu,
    features: ['API Integration', 'Database Design', 'Scalable Architecture'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-forest-500 font-semibold tracking-wide uppercase text-sm mb-3">What I Do</h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-6">Services tailored to your needs</p>
          <p className="text-gray-400 text-lg">
            I offer a comprehensive suite of development services to bring your ideas to life. Every project is built with clean code and an eye for design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-dark-800 p-8 rounded-2xl border border-dark-600 hover:border-forest-600/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/20"
              >
                <div className="w-14 h-14 bg-dark-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest-900/30 transition-colors">
                  <Icon className="h-7 w-7 text-forest-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
