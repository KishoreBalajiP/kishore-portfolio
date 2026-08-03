import Header from './components/Header';
import BottomNav from './components/BottomNav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-canvas text-slate-900 antialiased">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;