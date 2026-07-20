const projects = [
    {
        title: "Smart Inventory Management System",
        image: "/image/inventory-management.jpeg",
        description:
            "A full-stack inventory management system with JWT Authentication, Role Based Access Control (RBAC), stock management and dashboard analytics.",
        technologies: [
            "Spring Boot",
            "React",
            "PostgreSQL",
            "JWT",
            "Tailwind CSS"
        ],
        github: "#",
        demo: "#"
    },
    {
        title: "Employee Management System",
        image: "/image/employee-management.png",
        description:
            "Employee Management application with CRUD operations, pagination, search and sorting.",
        technologies: [
            "Spring Boot",
            "React",
            "MySQL"
        ],
        github: "#",
        demo: "#"
    },
    {
        title: "Task Management System",
        image: "/image/task-management.png  ",
        description:
            "Task Management System with authentication and authorization.",
        technologies: [
            "Spring Boot",
            "React",
            "PostgreSQL"
        ],
        github: "#",
        demo: "#"
    }
];

const Project = () => {
    return (
        <section
            id="projects"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured Projects
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I have built
                        using Spring Boot, React, MySQL and PostgreSQL.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 
                bg-slate-800
rounded-2xl
p-6
shadow-lg
border
border-slate-700
hover:border-sky-500
hover:-translate-y-2
transition-all
duration-300
">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-sky-500/20 transition-all duration-300"
                        >

                            <img
                                src={project.image}
                                // alt={project.title}
                                className="w-full h-52 object-cover rounded-xl mb-5"
                            />

                            <h3 className="text-2xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-5 leading-7">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">

                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-slate-700 text-sm px-3 py-1 rounded-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>

                            <div className="flex gap-3">

                                <a
                                    href={project.github}
                                    className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg transition"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.demo}
                                    className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                                >
                                    Live Demo
                                </a>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Project;