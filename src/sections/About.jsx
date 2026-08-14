import profileImage from "../assets/image-anand.jpeg";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        About Me
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Get to know me better.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}

                    <div className="flex justify-center">

                        <img
                            src={profileImage}
                            alt="Anand Kumar"
                            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] object-cover rounded-full border-4 border-sky-500 shadow-2xl"
                        />

                    </div>

                    {/* Content */}

                    <div className="text-center lg:text-left">

                        <h3 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-6">
                            Java Full Stack Developer
                        </h3>

                        <p className="text-gray-300 leading-8 mb-5">
                            Passionate Java Full Stack Developer with experience
                            in building scalable web applications using
                            <span className="text-sky-400"> Spring Boot</span>,
                            <span className="text-sky-400"> React</span>,
                            <span className="text-sky-400"> MySQL</span> and
                            <span className="text-sky-400"> PostgreSQL</span>.
                        </p>

                        <p className="text-gray-300 leading-8 mb-5">
                            I enjoy designing secure REST APIs, implementing
                            authentication systems, solving real-world problems,
                            and building responsive user interfaces.
                        </p>

                        <p className="text-gray-300 leading-8 mb-8">
                            My goal is to become a skilled Software Engineer by
                            developing high-quality, scalable and user-friendly
                            applications.
                        </p>

                        {/* Quick Info */}

                        <div className="grid grid-cols-2 gap-6">

                            <div>

                                <h4 className="text-sky-400 font-semibold">
                                    Name
                                </h4>

                                <p className="text-gray-300">
                                    Anand Kumar
                                </p>

                            </div>

                            <div>

                                <h4 className="text-sky-400 font-semibold">
                                    Email
                                </h4>

                                <p className="text-gray-300 break-all">
                                    demo@gmail.com
                                </p>

                            </div>

                            <div>

                                <h4 className="text-sky-400 font-semibold">
                                    Location
                                </h4>

                                <p className="text-gray-300">
                                    India
                                </p>

                            </div>

                            <div>

                                <h4 className="text-sky-400 font-semibold">
                                    Experience
                                </h4>

                                <p className="text-gray-300">
                                    1+ Year
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;