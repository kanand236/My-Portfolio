import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_3wsjapc",
                "template_hbzdgwa",
                form.current,
                {
                    publicKey: "Av4j26G31v-5hZjYW",
                }
            )
            .then(
                () => {
                    setStatus("success");
                    e.target.reset();
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("error");
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section
            id="contact"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sky-400 font-medium mb-3">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Let's Work Together
                    </h2>

                    <p className="text-gray-400 mt-5 leading-7">
                        Have a website, web application or business automation
                        requirement? Feel free to reach out and let's discuss
                        your project.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Contact Information */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h3 className="text-2xl font-semibold mb-3">
                            Let's Talk
                        </h3>

                        <p className="text-gray-400 leading-7 mb-8">
                            I'm available for freelance projects, website
                            development, web applications, e-commerce
                            solutions and business automation work.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:anandkumargzb0@gmail.com"
                            className="flex items-center gap-4 mb-6 group"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-xl text-sky-400 text-xl group-hover:bg-sky-500 group-hover:text-white transition">
                                <FaEnvelope />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Email
                                </p>

                                <p className="text-gray-300 group-hover:text-sky-400 transition">
                                    anandkumargzb0@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+918700295391"
                            className="flex items-center gap-4 mb-6 group"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-xl text-sky-400 text-xl group-hover:bg-sky-500 group-hover:text-white transition">
                                <FaPhone />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Phone
                                </p>

                                <p className="text-gray-300 group-hover:text-sky-400 transition">
                                    +91 8700295391
                                </p>
                            </div>
                        </a>

                        {/* Location */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-xl text-sky-400 text-xl">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Location
                                </p>

                                <p className="text-gray-300">
                                    Delhi, India
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="border-t border-slate-800 pt-6">

                            <p className="text-gray-400 text-sm mb-4">
                                Connect with me
                            </p>

                            <div className="flex gap-4">

                                <a
                                    href="https://github.com/kanand236"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 flex items-center justify-center bg-slate-800 rounded-lg text-gray-300 text-xl hover:bg-sky-500 hover:text-white transition"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/anand-kumar-201106297"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 flex items-center justify-center bg-slate-800 rounded-lg text-gray-300 text-xl hover:bg-sky-500 hover:text-white transition"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h3 className="text-2xl font-semibold mb-6">
                            Send Me a Message
                        </h3>

                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="space-y-5"
                        >

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-sky-500 transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-sky-500 transition"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Project / Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="What do you need help with?"
                                    required
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-sky-500 transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-sky-500 transition resize-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-800 disabled:cursor-not-allowed px-6 py-3.5 rounded-lg font-semibold transition"
                            >
                                {isSending ? "Sending..." : "Send Message"}
                            </button>

                            {/* Success Message */}
                            {status === "success" && (
                                <p className="text-green-400 text-sm text-center">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            )}

                            {/* Error Message */}
                            {status === "error" && (
                                <p className="text-red-400 text-sm text-center">
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;