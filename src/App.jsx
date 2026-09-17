
import './global.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// import Impact from './components/Impact';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="antialiased min-h-screen bg-white">
      {/* Skip to main content — accessibility & Lighthouse best practice */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Hero />

      <main id="main-content">
        <About />
        <Services />
        {/* <Impact /> */}
        <Team />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
