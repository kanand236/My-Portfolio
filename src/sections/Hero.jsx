import React from 'react'
import profileImage from "../assets/image-anand.jpeg";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
const Hero = () => {
    return (
        <section className="min-h-screen bg-slate-950 text-white flex items-center">

            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side */}

                    <div>

                        <p className="text-sky-400 text-lg mb-3">
                            Hello, I'm
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            Anand Kumar
                        </h1>

                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
                            Java Backend Developer
                        </h2>

                        <p className="text-gray-400 leading-8 max-w-xl">
                            I build secure REST APIs,
                            scalable backend systems,
                            authentication workflows,
                            and full-stack applications
                            using Spring Boot, React,
                            PostgreSQL and modern web technologies.
                        </p>

                        <div className="flex gap-4 mt-8">

                            <a
                                href="#projects"
                                className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-medium transition"
                            >
                                View Projects
                            </a>

                            <button
                                className="border border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition"
                            >
                                <a
                                    href="../public/anand-resume.pdf"
                                    download
                                    className="border border-white px-6 py-3 rounded-lg"
                                >
                                    Resume
                                </a>
                            </button>

                            <div className="flex gap-8 mt-10">

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

                        </div>

                        <div className="flex gap-6 mt-8 text-3xl">

                            <a href="#">
                                <FaGithub />
                            </a>

                            <a href="#">
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="flex justify-center">

                        <img
                            src={profileImage}
                            alt="Anand"
                            className="w-[350px] h-[350px] object-cover rounded-full border-4 border-sky-500"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero
