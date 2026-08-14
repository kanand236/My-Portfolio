import {
    FaGithub,
    FaLinkedin,
    FaArrowUp
} from "react-icons/fa";

const Footer = () => {

    const year = new Date().getFullYear();

    return (

        <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Left */}

                    <div>

                        <h2 className="text-2xl font-bold text-sky-400 mb-4">
                            Anand.dev
                        </h2>

                        <p className="leading-7 text-gray-400">
                            Java Full Stack Developer passionate about
                            building scalable backend systems and modern
                            web applications using Spring Boot, React,
                            MySQL and PostgreSQL.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <a href="#about" className="hover:text-sky-400 transition">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#skills" className="hover:text-sky-400 transition">
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a href="#projects" className="hover:text-sky-400 transition">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="#experience" className="hover:text-sky-400 transition">
                                    Experience
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="hover:text-sky-400 transition">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Connect With Me
                        </h3>

                        <div className="flex gap-5 text-3xl">

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

                            <a
                                href="#home"
                                className="hover:text-sky-400 transition"
                            >
                                <FaArrowUp />
                            </a>

                        </div>

                        <a
                            href="/anand-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded-lg text-white transition"
                        >
                            Download Resume
                        </a>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">

                    © {year} Anand Kumar. All Rights Reserved.

                </div>

            </div>

        </footer>

    );

};

export default Footer;