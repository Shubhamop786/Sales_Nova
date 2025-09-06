
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
      <Hero />
      <About />
      <Services />
      {/* <Impact /> */}
      <Team />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
