import React from "react";
import { useState } from "react";

const faqs = [
    {
        question: "What is your return policy?",
        answer:
            "We offer a 30-day hassle-free return policy. If you're not satisfied, simply contact our support team.",
    },
    {
        question: "Do you offer international shipping?",
        answer:
            "Yes, we ship to over 50 countries worldwide. Shipping fees and delivery times may vary.",
    },
    {
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, you will receive a tracking number via email to monitor its progress.",
    },
    {
        question: "Is customer support available 24/7?",
        answer:
            "Absolutely! Our friendly support team is available around the clock to help you with any concerns.",
    },
];
function FaqsQestion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <section className="py-16 bg-white text-gray-800">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl p-4 shadow-sm transition duration-300"
                            >
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="text-lg font-semibold">{faq.question}</span>
                                    <i className={`fas ${openIndex === index ? "fa-minus" : "fa-plus"} text-gray-600`}></i>
                                </button>
                                {openIndex === index && (
                                    <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default FaqsQestion