import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Home/Hero";
import Contact from "./sections/Contact/Contact";
import About from "./sections/About/About";
import Education from "./sections/Education/Education";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Certifications from "./sections/Certifications/Certifications";
import CodingProfiles from "./sections/CodingProfiles/CodingProfiles";
import Experience from "./sections/Experience/Experience";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Experience />
        <Contact />
    </div>
  );
}

export default App;