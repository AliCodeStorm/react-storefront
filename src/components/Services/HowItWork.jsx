import React from 'react'

function HowItWork() {
    const processSteps = [
        {
            title: "Step 1: Discovery",
            description: "We start by understanding your needs, goals, and vision to craft a strategy that best suits your objectives.",
            icon: "fas fa-search", // Example icon class from Font Awesome
            image: "/images/Products/discovery.jpg",
        },
        {
            title: "Step 2: Planning",
            description: "In this stage, we map out a clear and actionable plan, including timelines, resources, and goals to guide the project.",
            icon: "fas fa-calendar-alt",
            image: "/images/Products/planning.jpg",
        },
        {
            title: "Step 3: Execution",
            description: "With the plan in place, we start implementing the solution, working closely with your team to ensure everything runs smoothly.",
            icon: "fas fa-cogs",
            image: "/images/Products/execution.jpg",
        },
        {
            title: "Step 4: Review",
            description: "After execution, we conduct a thorough review to assess the project's success and identify areas for improvement.",
            icon: "fas fa-check-circle",
            image: "/images/Products/review.jpg",
        },
        {
            title: "Step 5: Launch",
            description: "Finally, we launch the project, ensuring that everything is functional, scalable, and ready for real-world use.",
            icon: "fas fa-rocket",
            image: "/images/Products/launch.jpg",
        },
        {
            title: "Step 6: Support",
            description: "Post-launch, we continue to offer support, monitor the solution, and provide ongoing maintenance as needed.",
            icon: "fas fa-life-ring",
            image: "/images/Products/support.jpg",
        }
    ];

    return (
        <div>
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
                <div className="relative">
                    {/* Progress line */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                    {processSteps.map((step, i) => (
                        <div
                            key={i}
                            className={`mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                        >
                            <div className="md:w-5/12 mb-6 md:mb-0 px-4">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-xl font-bold">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                            <div className="md:w-2/12 flex justify-center">
                                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <i className={step.icon}></i>
                                </div>
                            </div>
                            <div className="md:w-5/12 px-4">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="rounded-lg shadow-md w-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HowItWork