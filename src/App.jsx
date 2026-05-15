import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Optimize: Code-split below-the-fold sections to reduce initial bundle size.
// Using standard React.lazy() ensures chunks are separated from the main bundle
// but still rendered to preserve native anchor link navigation (e.g., /#contact).
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
      <Suspense fallback={<div className="h-64 bg-dark-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
