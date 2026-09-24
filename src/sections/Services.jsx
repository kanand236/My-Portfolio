import {
    FaWordpress,
    FaReact,
    FaNodeJs,
    FaJava,
    FaGoogle,
    FaFileExcel
} from "react-icons/fa";

import {
    SiShopify,
    SiOdoo
} from "react-icons/si";

const services = [
    {
        icon: <FaWordpress />,
        title: "WordPress Development",
        description:
            "Professional and responsive WordPress websites for businesses, portfolios, landing pages and online stores.",
        technologies: "WordPress • WooCommerce • Elementor"
    },
    {
        icon: <SiShopify />,
        title: "Shopify Development",
        description:
            "Shopify store setup and customization with responsive layouts, product management and storefront improvements.",
        technologies: "Shopify • E-commerce • Store Customization"
    },
    {
        icon: <FaReact />,
        title: "React Development",
        description:
            "Modern and responsive web interfaces using React.js with clean components and user-friendly designs.",
        technologies: "React.js • JavaScript • Tailwind CSS"
    },
    {
        icon: <FaNodeJs />,
        title: "Node.js Development",
        description:
            "Backend applications and REST APIs using Node.js for modern web applications and business solutions.",
        technologies: "Node.js • Express.js • REST APIs"
    },
    {
        icon: <FaJava />,
        title: "Java & Spring Boot",
        description:
            "Backend applications and REST APIs using Java and Spring Boot with database integration and authentication.",
        technologies: "Java • Spring Boot • JPA • PostgreSQL"
    },
    {
        icon: <SiOdoo />,
        title: "Odoo Development",
        description:
            "Odoo customization and business solutions including CRM, e-commerce modules and business workflows.",
        technologies: "Odoo • Python • CRM • E-commerce"
    },
    {
        icon: <FaGoogle />,
        title: "Google Sheets Automation",
        description:
            "Business spreadsheet automation to reduce repetitive work and organize data more efficiently.",
        technologies: "Google Sheets • Apps Script • Automation"
    },
    {
        icon: <FaFileExcel />,
        title: "Excel & Data Solutions",
        description:
            "Excel-based data organization, reporting and business tracking solutions for everyday business needs.",
        technologies: "Excel • Data Organization • Reporting"
    }
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="text-sky-400 font-medium mb-3">
                        What I Do
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        My Services
                    </h2>

                    <p className="text-gray-400 mt-5 leading-7">
                        I help businesses and individuals build websites,
                        web applications and practical digital solutions
                        according to their requirements.
                    </p>

                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-sky-500 hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-700 text-sky-400 text-3xl mb-6 group-hover:bg-sky-500 group-hover:text-white transition">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-7 text-sm mb-5">
                                {service.description}
                            </p>

                            {/* Technologies */}
                            <p className="text-sky-400 text-sm leading-6">
                                {service.technologies}
                            </p>

                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14">

                    <p className="text-gray-400 mb-5">
                        Have a project or business requirement in mind?
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 px-7 py-3 rounded-lg font-semibold transition"
                    >
                        Let's Discuss Your Project
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Services;