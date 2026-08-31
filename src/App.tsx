import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";
import ProjectDetails from "./components/ProjectDetalis";
import { AnimatePresence } from "framer-motion"

const HomePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <Projects />
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <Skills />
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <Contact />
      </FadeInSection>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<><Navbar /><ProjectDetails /><Footer /></>} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;