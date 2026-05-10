import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to reduce initial main bundle size
// They are loaded concurrently after the critical initial render,
// keeping anchor link targets available in the DOM immediately.
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
        <Suspense fallback={<div className="min-h-screen bg-dark-900" />}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40 bg-dark-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
