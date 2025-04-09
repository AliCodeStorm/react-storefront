import React from 'react'

function TestimonialsCaseStudy() {
    const testimonials = [
        {
            id: 1,
            avatar: '/images/About/testimonial1.jpg',
            name: 'John Doe',
            company: 'Tech Solutions',
            quote: 'This product has revolutionized our workflow and significantly boosted our productivity. Highly recommend!',
            rating: 5, // Number of stars
        },
        {
            id: 2,
            avatar: '/images/About/testimonial2.jpg',
            name: 'Jane Smith',
            company: 'Creative Agency',
            quote: 'A game changer for our team. We couldn’t be happier with the results.',
            rating: 4, // Number of stars
        },
        {
            id: 3,
            avatar: '/images/About/testimonial3.jpg',
            name: 'Alice Brown',
            company: 'Design Studios',
            quote: 'Fantastic support and user experience. Our clients love it!',
            rating: 5, // Number of stars
        },
    ];

    const caseStudies = [
        {
            id: 1,
            title: 'Boosting Efficiency for Tech Solutions',
            link: '/case-studies/tech-solutions',
            image: '/images/Banners/case-study1.jpg',
            results: 'Increased team productivity by 40% through streamlined processes.',
        },
        {
            id: 2,
            title: 'Creative Agency Streamlines Projects',
            link: '/case-studies/creative-agency',
            image: '/images/Banners/case-study2.jpg',
            results: 'Reduced project timelines by 30% and improved client satisfaction.',
        },
        {
            id: 3,
            title: 'Design Studios Revolutionize Client Workflows',
            link: '/case-studies/design-studios',
            image: '/images/Banners/case-study3.jpg',
            results: 'Achieved a 50% reduction in design revisions and faster delivery times.',
        },
    ];

    return (
        <div>
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="bg-gray-800 p-8 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                                <p className="mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {caseStudies.map(caseStudy => (
                            <a
                                key={caseStudy.id}
                                href={caseStudy.link}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-lg h-64">
                                    <img
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition">
                                                {caseStudy.title}
                                            </h3>
                                            <p className="text-gray-300">{caseStudy.results}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TestimonialsCaseStudy