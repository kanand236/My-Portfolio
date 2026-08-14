const experiences = [
    {
        year: "Aug 2025 - Present",
        title: "Java Developer",
        company: "Digisoft.in",
        description:
            "Working on web application development using Java, Spring Boot and React.js. Developing REST APIs, working with databases and implementing basic authentication and application features."
    },
    {
        year: "Apr 2025 - Aug 2025",
        title: "Python Odoo Developer",
        company: "Weblytic Labs",
        description:
            "Worked on Odoo development using Python, including e-commerce module development and payment integration."
    }
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Experience
                    </h2>

                    <p className="text-gray-400 mt-4">
                        My professional journey as a developer.
                    </p>

                </div>

                <div className="relative border-l-2 border-sky-500 ml-4">

                    {experiences.map((item, index) => (

                        <div
                            key={index}
                            className="mb-12 ml-8 relative"
                        >

                            <div
                                className="absolute -left-[42px] w-5 h-5 rounded-full bg-sky-500"
                            ></div>

                            <span className="text-sky-400 font-semibold">
                                {item.year}
                            </span>

                            <h3 className="text-2xl font-bold mt-2">
                                {item.title}
                            </h3>

                            <h4 className="text-lg text-gray-300 mt-1">
                                {item.company}
                            </h4>

                            <p className="text-gray-400 leading-7 mt-4">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Experience;