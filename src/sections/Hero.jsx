import profileImage from "../assets/image-anand.jpeg";
import {
    FaGithub,
    FaLinkedin,
    FaArrowRight,
    FaDownload
} from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-slate-950 text-white flex items-center pt-24 pb-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        <p className="text-sky-400 font-medium text-lg mb-4">
                            Hello, I'm
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
                            Anand Kumar
                        </h1>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 leading-snug mb-6">
                            Web Developer &{" "}
                            <span className="text-sky-400">
                                Software Developer
                            </span>
                        </h2>

                        <p className="text-gray-400 text-base sm:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
                            I build responsive websites, modern web applications
                            and business automation solutions that help businesses
                            work better and grow online.
                        </p>

                        {/* Services / Technologies */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mt-6">

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                Java
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                Spring Boot
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                WordPress
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                Shopify
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                React
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                Node.js
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                Odoo
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                Google Sheets
                            </span>

                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                                Zoho CRM
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mt-8">

                            <a
                                href="#projects"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 px-6 py-3.5 rounded-lg font-semibold transition"
                            >
                                View My Work
                                <FaArrowRight className="text-sm" />
                            </a>

                            <a
                                href="#contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center border border-slate-600 hover:border-sky-400 hover:text-sky-400 px-6 py-3.5 rounded-lg font-semibold transition"
                            >
                                Let's Work Together
                            </a>

                        </div>

                        {/* Resume + Social */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8">

                            <a
                                href="/anand-resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-300 hover:text-sky-400 transition"
                            >
                                <FaDownload />
                                View Resume
                            </a>

                            <a
                                href="https://github.com/kanand236"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-sky-400 transition text-2xl"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/anand-kumar-201106297"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-sky-400 transition text-2xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">

                        <div className="relative">

                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-3xl scale-110"></div>

                            <img
                                src={profileImage}
                                alt="Anand Kumar"
                                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-full border-4 border-sky-500 shadow-2xl"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;