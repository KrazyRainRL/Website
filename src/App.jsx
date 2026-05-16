import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Code-split components below the fold to reduce initial bundle size and improve TTI
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
        {/* Wrapper divs with IDs keep anchor targets in the initial DOM before chunks load */}
        <div id="services">
          <Suspense fallback={<div className="py-32 flex justify-center text-moss-500">Loading Services...</div>}>
            <Services />
          </Suspense>
        </div>

        <div id="about">
          <Suspense fallback={<div className="py-32 flex justify-center text-moss-500">Loading About...</div>}>
            <About />
          </Suspense>
        </div>

        <div id="contact">
          <Suspense fallback={<div className="py-32 flex justify-center text-moss-500">Loading Contact...</div>}>
            <Contact />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={<div className="py-10 bg-dark-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
