import profileImage from "../assets/image-anand.jpeg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-slate-950 text-white flex items-center pt-24"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}

                    <div className="order-2 lg:order-1 text-center lg:text-left">

                        <p className="text-sky-400 text-lg mb-3">
                            Hello, I'm
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
                            Anand Kumar
                        </h1>

                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-300 mb-6">
                            Java Backend Developer
                        </h2>

                        <p className="text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0">
                            I build secure REST APIs, scalable backend systems,
                            authentication workflows, and full-stack applications
                            using Spring Boot, React, PostgreSQL and modern web technologies.
                        </p>

                        {/* Buttons */}

                        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                            <a
                                href="#projects"
                                className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-medium transition text-center"
                            >
                                View Projects
                            </a>

                            <a
                                href="/anand-resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
                            >
                                <FaDownload />
                                Resume
                            </a>

                        </div>

                        {/* Stats */}

                        <div className="flex justify-center lg:justify-start gap-8 mt-10 flex-wrap">

                            <div>
                                <h3 className="text-3xl font-bold text-sky-400">
                                    10+
                                </h3>
                                <p className="text-gray-400">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-sky-400">
                                    100+
                                </h3>
                                <p className="text-gray-400">
                                    APIs
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-sky-400">
                                    2+
                                </h3>
                                <p className="text-gray-400">
                                    Years Learning
                                </p>
                            </div>

                        </div>

                        {/* Social Icons */}

                        <div className="flex justify-center lg:justify-start gap-6 mt-10 text-3xl">

                            <a
                                href="https://github.com/kanand236"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-400 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/anand-kumar-201106297"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-400 transition"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="order-1 lg:order-2 flex justify-center">

                        <img
                            src={profileImage}
                            alt="Anand Kumar"
                            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] object-cover rounded-full border-4 border-sky-500 shadow-2xl"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;