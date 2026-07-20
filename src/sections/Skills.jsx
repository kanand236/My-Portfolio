const skillsData = [
    {
        category: "Backend",
        skills: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Hibernate",
            "JPA",
            "JWT",
            "REST APIs"
        ]
    },
    {
        category: "Frontend",
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Bootstrap"
        ]
    },
    {
        category: "Database",
        skills: [
            "MySQL",
            "PostgreSQL"
        ]
    },
    {
        category: "Tools",
        skills: [
            "Git",
            "GitHub",
            "Postman",
            "VS Code",
            "IntelliJ IDEA",
            "Maven",
            "WordPress",
            "Shopify",
            "Google Workspace",
            "GoogleSheet",
            "Apps Script",
            "AppSheet",
            "Excel",
            "PowerBi"
        ]
    }
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-4">
                    Skills
                </h2>

                <p className="text-center text-gray-400 mb-12">
                    Technologies and tools I use to build scalable applications.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                    {skillsData.map((item) => (
                        <div
                            key={item.category}
                            className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-sky-400 mb-5">
                                {item.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {item.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-700 px-4 py-2 rounded-lg text-sm hover:bg-sky-500 transition"
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;