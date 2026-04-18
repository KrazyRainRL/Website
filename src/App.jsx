import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ⚡ Bolt: Lazy load below-the-fold components to reduce initial bundle size
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-dark-900 font-sans text-gray-200">
      <Navbar />
      <main>
        <Hero />
        {/* ⚡ Bolt: Suspense wraps lazy components to handle loading state */}
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-moss-500">Loading sections...</div>}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
