const experiences = [
    {
        year: "Aug 2025 - Present",
        title: "Web Developer & AI Automation Executive",
        company: "Digisoft.in",
        description:
            "Working on business websites, e-commerce solutions and digital automation projects based on client requirements. Building and customizing responsive websites using WordPress, Shopify, Bootstrap, HTML, CSS, JavaScript, PHP and React.js. Also working on business process automation and reporting solutions using Google Sheets, Apps Script, AppSheet and Power BI, along with UI and creative work using Photoshop, Figma and Canva.",
        skills: [
            "WordPress",
            "Shopify",
            "Bootstrap",
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "React.js",
            "Google Sheets",
            "Apps Script",
            "AppSheet",
            "Power BI",
            "Photoshop",
            "Figma",
            "Canva"
        ]
    },
    {
        year: "Apr 2025 - Aug 2025",
        title: "Python Odoo Developer",
        company: "Weblytic Labs",
        description:
            "Worked on Odoo development using Python, including e-commerce modules, business workflows, database-related tasks and payment integration.",
        skills: [
            "Python",
            "Odoo",
            "PostgreSQL",
            "E-commerce",
            "Payment Integration"
        ]
    }
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="text-sky-400 font-medium mb-3">
                        My Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Experience
                    </h2>

                    <p className="text-gray-400 mt-5 leading-7">
                        Professional experience across web development,
                        e-commerce, business automation and software solutions.
                    </p>

                </div>

                {/* Experience Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-sky-500 hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* Date */}
                            <p className="text-sky-400 text-sm font-medium mb-3">
                                {experience.year}
                            </p>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold leading-snug">
                                {experience.title}
                            </h3>

                            {/* Company */}
                            <p className="text-gray-300 font-medium mt-2 mb-5">
                                {experience.company}
                            </p>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-7 mb-6">
                                {experience.description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map(
                                    (skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-xs px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-gray-300"
                                        >
                                            {skill}
                                        </span>
                                    )
                                )}
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Experience;