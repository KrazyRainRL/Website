import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ⚡ Bolt Performance Optimization:
// Code-split below-the-fold components using React.lazy() to reduce the initial
// main bundle size. This allows the critical path (Navbar, Hero) to load faster,
// improving First Contentful Paint (FCP) and Time to Interactive (TTI).
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
        <Suspense fallback={null}>
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
