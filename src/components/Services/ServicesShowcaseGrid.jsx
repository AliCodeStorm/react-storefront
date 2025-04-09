import React from 'react'

function ServicesShowcaseGrid() {
    const services = [
        {
            id: 1,
            title: "Free Shipping",
            description: "Enjoy complimentary shipping on all orders over $50",
            image: "/images/Products/shipping.jpg",
            icon: "fas fa-truck-fast",
            features: [
                "2-5 business days delivery",
                "Real-time tracking",
                "Free returns within 30 days"
            ],
            ctaText: "View shipping policy",
            ctaLink: "/shipping"
        },
        {
            id: 2,
            title: "24/7 Customer Support",
            description: "We're here to help anytime, day or night",
            image: "/images/Products/support.jpg",
            icon: "fas fa-headset",
            features: [
                "Live chat and email support",
                "Quick resolution time",
                "Multilingual assistance"
            ],
            ctaText: "Contact support",
            ctaLink: "/contact"
        },
        {
            id: 3,
            title: "Secure Payments",
            description: "All transactions are encrypted and secure",
            image: "/images/Products/payment.jpg",
            icon: "fas fa-lock",
            features: [
                "SSL-encrypted checkout",
                "Multiple payment options",
                "Fraud protection"
            ],
            ctaText: "Learn more",
            ctaLink: "/security"
        },
    ];
    return (
        <div>
            <section id="services" className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="h-48 bg-gray-100 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-blue-600 text-3xl mb-4">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={service.ctaLink}
                                    className="inline-block text-blue-600 font-medium hover:text-blue-800 hover:underline"
                                >
                                    {service.ctaText} →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ServicesShowcaseGrid
