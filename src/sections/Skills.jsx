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
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        My Skills
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Technologies and tools I use to build modern web applications.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {skillsData.map((item) => (

                        <div
                            key={item.category}
                            className="
                                bg-slate-800
                                border
                                border-slate-700
                                rounded-2xl
                                p-6
                                shadow-lg
                                hover:border-sky-500
                                hover:-translate-y-2
                                transition-all
                                duration-300
                            "
                        >

                            <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                                {item.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {item.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="
                                            bg-slate-700
                                            hover:bg-sky-500
                                            hover:text-white
                                            transition
                                            duration-300
                                            px-4
                                            py-2
                                            rounded-lg
                                            text-sm
                                            font-medium
                                        "
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