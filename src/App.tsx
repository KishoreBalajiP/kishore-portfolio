import Hero from './components/Hero';
import Skills from './components/Skills';
import { Education, Experience } from './components/Timeline';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <main>
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
