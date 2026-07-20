const Contact = () => {
    return (
        <section
            id="contact"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-12">

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Me
                    </h2>

                    <p className="text-gray-400">
                        Let's connect and build something amazing.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Left Side */}

                    <div className="bg-slate-800 p-8 rounded-2xl">

                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-4">

                            <p>
                                📧 anandkumargzb0@gmail.com
                            </p>

                            <p>
                                📱 +91 8700295391
                            </p>

                            <p>
                                📍 Delhi, India
                            </p>

                            <p>
                                🔗{" "}
                                <a
                                    href="https://github.com/kanand236"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-400 hover:underline"
                                >
                                    github.com/kanand236
                                </a>
                            </p>

                            <p>
                                🔗{" "}
                                <a
                                    href="https://www.linkedin.com/in/anand-kumar-201106297"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-400 hover:underline"
                                >
                                    linkedin.com/in/anand-kumar-201106297
                                </a>
                            </p>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="bg-slate-800 p-8 rounded-2xl">

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-slate-700 outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 rounded-lg bg-slate-700 outline-none"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full p-3 rounded-lg bg-slate-700 outline-none"
                            ></textarea>

                            <button
                                className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg transition"
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