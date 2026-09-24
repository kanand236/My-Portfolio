import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from './sections/Hero';
import Services from "./sections/Services";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import WhyWorkWithMe from "./sections/WhyWorkWithMe";


function App() {
    return (
        <>
            <Navbar />

            <Hero />

            <Services />

            <About />

            <Skills />

            <Project />

            <Experience />

            <WhyWorkWithMe />

            <Contact />

            <Footer />

        </>
    );
}

export default App;