import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// ⚡ Bolt Optimization: Code-split below-the-fold sections
// Reduces initial main bundle size by moving these heavy sections
// into separate chunks that load after the critical Hero section paints.
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-dark-900 font-sans text-gray-200">
      <Navbar />
      <main>
        <Hero />
        {/* ⚡ Bolt Optimization: Provide a dark background placeholder to minimize layout shift while chunks load */}
        <Suspense fallback={<div className="py-32 bg-dark-900 min-h-[50vh]"></div>}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
