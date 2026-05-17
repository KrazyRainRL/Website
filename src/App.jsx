import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Code-split below-the-fold sections to reduce initial bundle size
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-dark-900 font-sans text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-32 text-center text-gray-500">Loading sections...</div>}>
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
