const projects = [

    // =========================
    // DIGISOFT / COMPANY WORK
    // =========================
    {
        title: "IIMM Website",
        image: "/image/iimm.png",
        description:
            "A professional institutional website developed for the Indian Institute of Materials Management with structured content, course information, announcements and responsive pages.",
        technologies: [
            "WordPress",
            "Elementor",
            "Responsive Design",
            "CMS"
        ],
        github: "#",
        demo: "https://iimm.org/",
        featured: true
    },
    {
        title: "BUSY Accounting Software Website",
        image: "/image/busy-accounting.png",
        description:
            "A responsive business website built using Bootstrap, HTML, CSS and JavaScript to present accounting software, product information, features and business solutions.",
        technologies: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript"
        ],
        github: "#",
        demo: "https://busyaccountingsoftware.in/",
        featured: true
    },
    {
        title: "Humidry E-commerce Website",
        image: "/image/humidry.png",
        description:
            "An e-commerce storefront developed for Humidry with product presentation, shopping experience and responsive layouts for moisture-control products.",
        technologies: [
            "Shopify",
            "E-commerce",
            "Store Customization",
            "Responsive Design"
        ],
        github: "#",
        demo: "https://humidry.in/",
        featured: true
    },
    {
        title: "BMI Cables Website",
        image: "/image/bmi-cables.png",
        description:
            "A professional business website for an industrial cable manufacturer, presenting products, industries served, company information and business-focused content.",
        technologies: [
            "Web Development",
            "Responsive Design",
            "Business Website"
        ],
        github: "#",
        demo: "https://bmicables.com/",
        featured: true
    },

    // =========================
    // ODOO PROJECTS
    // =========================
    {
        title: "Juspay Payment Gateway",
        image: "/image/odoo-juspay.png",
        description:
            "An Odoo payment gateway module developed for integrating Juspay payment processing with e-commerce workflows, including transaction handling and payment-related operations.",
        technologies: [
            "Python",
            "Odoo",
            "Juspay",
            "Payment Gateway",
            "E-commerce"
        ],
        github: "#",
        demo: "https://apps.odoo.com/apps/modules/19.0/wbl_juspay_payment_gateway",
        featured: true
    },
    {
        title: "Cart Reminder",
        image: "/image/odoo-cart-reminder.png",
        description:
            "An Odoo e-commerce module designed to support cart reminder workflows and help businesses follow up with customers who leave products in their shopping cart.",
        technologies: [
            "Python",
            "Odoo",
            "E-commerce",
            "Cart Management"
        ],
        github: "#",
        demo: "https://apps.odoo.com/apps/modules/19.0/wbl_cart_reminder",
        featured: true
    },
    {
        title: "Order Export Pro",
        image: "/image/odoo-order-export.png",
        description:
            "An Odoo module developed to simplify order data export and support efficient handling of e-commerce order information for business operations and reporting.",
        technologies: [
            "Python",
            "Odoo",
            "PostgreSQL",
            "E-commerce",
            "Data Export"
        ],
        github: "#",
        demo: "https://apps.odoo.com/apps/modules/19.0/wbl_order_export",
        featured: true
    },
    {
        title: "Expected Delivery Date",
        image: "/image/odoo-delivery-date.png",
        description:
            "An Odoo e-commerce module focused on displaying and managing expected delivery information to improve order communication and customer experience.",
        technologies: [
            "Python",
            "Odoo",
            "E-commerce",
            "Order Management"
        ],
        github: "#",
        demo: "https://apps.odoo.com/apps/modules/19.0/wbl_expected_delivery_date",
        featured: true
    },
    {
        title: "Website FAQ",
        image: "/image/odoo-website-faq.png",
        description:
            "An Odoo website module for creating and managing frequently asked questions, helping businesses organize support information and improve website usability.",
        technologies: [
            "Python",
            "Odoo",
            "Website",
            "FAQ",
            "E-commerce"
        ],
        github: "#",
        demo: "https://apps.odoo.com/apps/modules/19.0/wbl_website_faq",
        featured: true
    },

    // =========================
    // PERSONAL PROJECTS
    // =========================
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
        demo: "https://smart-inventory-management-system-f-rho.vercel.app/",
        featured: false
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
        demo: "https://github.com/kanand236/Hotel_Reservation_System",
        featured: false
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
        demo: "https://github.com/kanand236/HospitalManagementSystem",
        featured: false
    }
];

const Project = () => {
    return (
        <section
            id="projects"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="text-sky-400 font-medium mb-3">
                        My Work
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured Projects
                    </h2>

                    <p className="text-gray-400 leading-7">
                        A selection of Odoo modules, business websites,
                        e-commerce solutions and software projects I have
                        worked on using different technologies.
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-slate-800 rounded-2xl overflow-hidden border shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col ${project.featured
                                ? "border-sky-500/60 hover:border-sky-400"
                                : "border-slate-700 hover:border-sky-500"
                                }`}
                        >

                            {/* Image */}
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </a>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">

                                {project.featured && (
                                    <span className="inline-block w-fit bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                                        Client / Company Work
                                    </span>
                                )}

                                <h3 className="text-xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-5 leading-7 text-sm">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-slate-700 text-gray-300 text-xs px-3 py-1.5 rounded-lg border border-slate-600"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-auto">

                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-sky-500 hover:bg-sky-600 px-4 py-2.5 rounded-lg transition text-center text-sm font-semibold"
                                        >
                                            GitHub
                                        </a>
                                    )}

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${project.github === "#"
                                            ? "w-full"
                                            : "flex-1"
                                            } border border-slate-600 px-4 py-2.5 rounded-lg hover:border-sky-400 hover:text-sky-400 transition text-center text-sm font-semibold`}
                                    >
                                        Visit Project
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14">

                    <p className="text-gray-400 mb-5">
                        Have a project or website requirement?
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 px-7 py-3 rounded-lg font-semibold transition"
                    >
                        Start a Project
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Project;