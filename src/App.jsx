import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ⚡ Bolt Performance Optimization:
// Code splitting below-the-fold components to reduce initial bundle size
// and improve Time To Interactive (TTI). Navbar and Hero remain synchronous
// as they are critical for the initial render.
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
        <Suspense fallback={<div className="h-32 bg-dark-900" />}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-16 bg-dark-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
