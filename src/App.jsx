import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Bolt: Code-splitting below-the-fold components to reduce initial bundle size and improve page load performance.
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
        <Suspense fallback={<div className="py-32 flex justify-center items-center text-gray-400">Loading...</div>}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="py-12 flex justify-center items-center text-gray-400">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
