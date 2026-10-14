import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DotGrid from "./components/DotGrid";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <LanguageProvider>
      <DotGrid />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
