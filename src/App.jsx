import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// ⚡ Bolt Performance Optimization:
// Splitting below-the-fold components out of the main bundle
// to reduce initial load time and time-to-interactive.
function App() {
  return (
    <div className="min-h-screen bg-dark-900 font-sans text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-32 bg-dark-900" />}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="bg-dark-900 pt-20 pb-10" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
