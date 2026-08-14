import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Contact Me
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Have a project or opportunity? Let's connect.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Card */}

                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">

                        <h3 className="text-2xl font-semibold mb-8 text-sky-400">
                            Contact Information
                        </h3>

                        <div className="space-y-6">

                            <div className="flex items-center gap-4">

                                <FaEnvelope className="text-sky-400 text-xl" />

                                <span className="break-all">
                                    anandkumargzb0@gmail.com
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaPhoneAlt className="text-sky-400 text-xl" />

                                <span>
                                    +91 8700295391
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaMapMarkerAlt className="text-sky-400 text-xl" />

                                <span>
                                    Delhi, India
                                </span>

                            </div>

                            <a
                                href="https://github.com/kanand236"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 hover:text-sky-400 transition"
                            >
                                <FaGithub className="text-2xl" />

                                <span>
                                    GitHub Profile
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/anand-kumar-201106297"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 hover:text-sky-400 transition"
                            >
                                <FaLinkedin className="text-2xl" />

                                <span>
                                    LinkedIn Profile
                                </span>
                            </a>

                        </div>

                    </div>

                    {/* Right Card */}

                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                            />

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full bg-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-sky-500 hover:bg-sky-600 py-3 rounded-lg font-semibold transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;