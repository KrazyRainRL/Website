import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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
        {/* Bolt: Wrap below-the-fold components in Suspense for code splitting */}
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
