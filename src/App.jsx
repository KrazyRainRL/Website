import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Bolt: Code-split below-the-fold components to reduce initial bundle size.
// Components are loaded only when rendered, improving Time to Interactive (TTI).
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
        {/* Bolt: Suspense boundaries provide a fallback UI while lazy chunks load */}
        <Suspense fallback={<div className="min-h-[50vh] bg-dark-900" />}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="bg-dark-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
