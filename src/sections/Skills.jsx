const skillCategories = [
    {
        title: "Backend & Development",
        skills: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Hibernate",
            "JPA",
            "JWT",
            "REST APIs",
            "Node.js"
        ]
    },
    {
        title: "Frontend",
        skills: [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap"
        ]
    },
    {
        title: "Database & APIs",
        skills: [
            "PostgreSQL",
            "MySQL",
            "SQL",
            "Postman"
        ]
    },
    {
        title: "Tools & Business Solutions",
        skills: [
            "Git",
            "GitHub",
            "IntelliJ IDEA",
            "VS Code",
            "Maven",
            "WordPress",
            "Shopify",
            "Odoo",
            "Google Sheets",
            "Apps Script",
            "AppSheet",
            "Excel",
            "Power BI"
        ]
    }
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sky-400 font-medium mb-3">
                        My Skills
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Technologies & Tools
                    </h2>

                    <p className="text-gray-400 mt-5 leading-7">
                        A combination of software development technologies,
                        modern web tools and business solutions that I use
                        to build practical digital products.
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 gap-6">

                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-sky-500 transition-all duration-300"
                        >

                            <h3 className="text-xl font-semibold mb-6 text-sky-400">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-gray-300 hover:text-white hover:border-sky-400 transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14">
                    <p className="text-gray-400 mb-5">
                        Looking for a specific technology or business solution?
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 px-7 py-3 rounded-lg font-semibold transition"
                    >
                        Let's Discuss
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Skills;