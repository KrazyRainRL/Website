import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ⚡ Bolt Optimization: Code splitting for below-the-fold components
// This prevents these components from being included in the initial main bundle,
// reducing the initial payload size and improving Time To Interactive (TTI).
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
        {/* Suspense boundary handles the loading state for lazy components */}
        <Suspense fallback={<div className="min-h-screen bg-dark-900 flex items-center justify-center text-moss-500">Loading section...</div>}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-32 bg-dark-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
