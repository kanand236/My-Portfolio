import profileImage from "../assets/image-anand.jpeg"

const About = () => {
    return (
        <section classname="max-w-7xl mx-auto px-6"
            id="about"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Side */}

                    <div>
                        <img
                            src={profileImage}
                            alt="Anand"
                            className="w-[350px] h-[350px] object-cover rounded-full border-4 border-sky-500"
                        />
                    </div>

                    {/* Right Side */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-4 text-sky-400">
                            Java Full Stack Developer
                        </h3>

                        <p className="text-gray-300 leading-8 mb-4">
                            Passionate Java Developer with experience
                            in building secure and scalable web
                            applications using Spring Boot, React,
                            MySQL and PostgreSQL.
                        </p>

                        <p className="text-gray-300 leading-8 mb-4">
                            I enjoy solving real-world problems,
                            designing REST APIs and creating
                            modern user interfaces.
                        </p>

                        <p className="text-gray-300 leading-8">
                            Currently focused on backend
                            development, authentication systems,
                            RBAC implementation and full stack
                            application development.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;