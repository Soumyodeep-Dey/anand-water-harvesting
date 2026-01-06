"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "What is rainwater harvesting?",
        answer:
            "Rainwater harvesting is the collection and storage of rain for reuse on-site, rather than allowing it to run off. It can be used for irrigation, groundwater recharge, and with proper treatment, for drinking water.",
    },
    {
        question: "How does a DM (Demineralized) plant work?",
        answer:
            "A DM plant removes mineral salts from water through ion exchange processes. This produces highly purified water suitable for industrial applications, boilers, and processes requiring mineral-free water.",
    },
    {
        question: "What are the benefits of rainwater harvesting for industries?",
        answer:
            "Industries benefit from reduced water bills, decreased dependency on municipal water supply, sustainable water management, and compliance with environmental regulations. It also helps in groundwater recharge.",
    },
    {
        question: "Do you provide maintenance services after installation?",
        answer:
            "Yes, we provide comprehensive maintenance and support services to ensure your rainwater harvesting and water purification systems operate at optimal efficiency throughout their lifespan.",
    },
    {
        question: "What areas do you serve?",
        answer:
            "We primarily serve Jamshedpur and surrounding areas in Jharkhand. However, we have successfully executed projects across India for various industrial and commercial clients.",
    },
    {
        question: "How long does installation typically take?",
        answer:
            "Installation time varies based on project scope and complexity. A typical residential system takes 1-2 weeks, while larger industrial installations may take 4-8 weeks. We provide detailed timelines during project planning.",
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                        Find answers to common questions about our rainwater harvesting and water purification services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="p-5 bg-white border-t border-gray-200">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
