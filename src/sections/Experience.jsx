const experiences = [
    {
        year: "2025 - Present",
        title: "Java Full Stack Developer",
        company: "Self Learning & Personal Projects",
        description:
            "Building full-stack applications using Spring Boot, React, PostgreSQL and JWT Authentication. Working on scalable REST APIs and Role-Based Access Control systems."
    },
    {
        year: "2024 - 2025",
        title: "Backend Development Journey",
        company: "Spring Boot Learning",
        description:
            "Focused on Java, Spring Boot, Spring Security, Hibernate, JPA, MySQL and PostgreSQL while building real-world projects."
    }
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Experience
                    </h2>

                    <p className="text-gray-400">
                        My development journey and learning experience.
                    </p>

                </div>

                <div className="relative border-l-2 border-sky-500 ml-4">

                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className="mb-12 ml-8 relative"
                        >
                            <div className="absolute -left-[42px] w-5 h-5 rounded-full bg-sky-500"></div>

                            <span className="text-sky-400 font-semibold">
                                {item.year}
                            </span>

                            <h3 className="text-2xl font-bold mt-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 mt-1">
                                {item.company}
                            </p>

                            <p className="text-gray-400 mt-3 leading-7">
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