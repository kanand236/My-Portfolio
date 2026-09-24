const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sky-400 font-medium mb-3">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Developer Who Builds Practical Solutions
                    </h2>

                    <p className="text-gray-400 mt-5 leading-7">
                        I combine software development skills with practical
                        business technology experience to build useful digital
                        solutions.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                            Hi, I'm Anand Kumar
                        </h3>

                        <p className="text-gray-300 leading-8 mb-5">
                            I'm a developer focused on building modern websites,
                            web applications and backend solutions. My primary
                            development experience includes Java, Spring Boot,
                            React and database technologies such as PostgreSQL
                            and MySQL.
                        </p>

                        <p className="text-gray-300 leading-8 mb-5">
                            Along with software development, I also work with
                            WordPress, Shopify, Odoo and business automation
                            tools. This allows me to understand both the
                            technical side of a project and the practical
                            requirements of a business.
                        </p>

                        <p className="text-gray-300 leading-8">
                            Whether you need a business website, web application,
                            backend API or an automation solution, I focus on
                            creating clean, responsive and practical solutions
                            based on the project requirements.
                        </p>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">

                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                                <h4 className="text-sky-400 font-semibold mb-2">
                                    Development
                                </h4>
                                <p className="text-gray-400 text-sm leading-6">
                                    Java, Spring Boot, React, Node.js, REST APIs
                                    and database development.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                                <h4 className="text-sky-400 font-semibold mb-2">
                                    Freelance Solutions
                                </h4>
                                <p className="text-gray-400 text-sm leading-6">
                                    WordPress, Shopify, Odoo and business
                                    automation solutions.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-2 gap-5">

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-500 transition">
                            <div className="text-3xl font-bold text-sky-400 mb-2">
                                Java
                            </div>
                            <p className="text-gray-400 text-sm">
                                Backend Development
                            </p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-500 transition">
                            <div className="text-3xl font-bold text-sky-400 mb-2">
                                React
                            </div>
                            <p className="text-gray-400 text-sm">
                                Frontend Development
                            </p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-500 transition">
                            <div className="text-3xl font-bold text-sky-400 mb-2">
                                Web
                            </div>
                            <p className="text-gray-400 text-sm">
                                Websites & Applications
                            </p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-500 transition">
                            <div className="text-3xl font-bold text-sky-400 mb-2">
                                Automation
                            </div>
                            <p className="text-gray-400 text-sm">
                                Business Solutions
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;