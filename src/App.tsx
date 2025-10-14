import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
  
function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <Resume />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
