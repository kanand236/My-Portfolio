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
        github: "https://github.com/kanand236",
        demo: "https://smart-inventory-management-system-f-rho.vercel.app/"
    },
    {
        title: "Hotel Reservation System",
        image: "/image/hotel-reservation.jpg",
        description:
            "A console-based Hotel Reservation System built using Core Java, OOP concepts and JDBC. The application allows users to search room availability, make and manage reservations, handle customer details and store booking records using MySQL database integration.",
        technologies: [
            "Core Java",
            "OOP",
            "JDBC",
            "MySQL",
            "Exception Handling",
            "Collections"
        ],
        github: "https://github.com/kanand236/Hotel_Reservation_System",
        demo: "https://github.com/kanand236/Hotel_Reservation_System"
    },
    {
        title: "Hospital Management System",
        image: "/image/hospital-management.jpg",
        description:
            "A console-based Hospital Management System developed using Core Java, OOP concepts and JDBC. The application manages patients, doctors, appointments and hospital records with database connectivity and structured data handling.",
        technologies: [
            "Core Java",
            "OOP",
            "JDBC",
            "MySQL",
            "Exception Handling",
            "Collections"
        ],
        github: "https://github.com/kanand236/HospitalManagementSystem",
        demo: "https://github.com/kanand236/HospitalManagementSystem"
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
                            className="
        bg-slate-800
        rounded-2xl
        overflow-hidden
        border
        border-slate-700
        shadow-lg
        hover:border-sky-500
        hover:-translate-y-2
        transition-all
        duration-300
        flex
        flex-col
    "
                        >

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
            w-full
            h-52
            object-cover
            hover:scale-105
            transition-transform
            duration-500
        "
                                />
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="text-2xl font-semibold mb-3 hover:text-sky-400 transition">
                                    {project.title}
                                </h3>
                            </a>

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

                            <div className="flex flex-col sm:flex-row gap-3 mt-auto">

                                <a
                                    href={project.github}
                                    className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg transition text-center"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.demo}
                                    className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-center"
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