const reasons = [
    {
        number: "01",
        title: "Requirement Understanding",
        description:
            "I first understand the project, business requirements and expected outcome before starting the development work."
    },
    {
        number: "02",
        title: "Practical Solutions",
        description:
            "I focus on building solutions that are useful, responsive and aligned with the actual needs of the business."
    },
    {
        number: "03",
        title: "Development + Business Understanding",
        description:
            "My experience across web development, e-commerce and business automation helps me understand both technical and business requirements."
    },
    {
        number: "04",
        title: "Responsive & User-Friendly",
        description:
            "I build websites and applications with responsive layouts and a clean user experience across desktop, tablet and mobile."
    },
    {
        number: "05",
        title: "Clear Communication",
        description:
            "I keep project communication simple and clear so requirements, progress and changes are easy to understand."
    },
    {
        number: "06",
        title: "Long-Term Support",
        description:
            "I aim to build professional working relationships and can continue helping with updates, improvements and future requirements."
    }
];

const WhyWorkWithMe = () => {
    return (
        <section
            id="why-me"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="text-sky-400 font-medium mb-3">
                        Why Work With Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Focused on Your Project's Success
                    </h2>

                    <p className="text-gray-400 mt-5 leading-7">
                        From understanding your requirements to delivering
                        the final solution, I focus on practical development,
                        clear communication and a smooth working experience.
                    </p>

                </div>

                {/* Reasons */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-sky-500 hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Number */}
                            <div className="text-sky-400 text-sm font-semibold mb-5">
                                {reason.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3">
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-7">
                                {reason.description}
                            </p>

                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="text-center mt-14">

                    <p className="text-gray-400 mb-5">
                        Have an idea, website or business requirement?
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 px-7 py-3 rounded-lg font-semibold transition"
                    >
                        Let's Work Together
                    </a>

                </div>

            </div>
        </section>
    );
};

export default WhyWorkWithMe;