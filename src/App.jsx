import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from './sections/Hero';
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Project />

            <Experience />

            <Contact />

            <Footer />
        </>
    );
}

export default App;