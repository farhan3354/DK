import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // Importing icons from react-icons library

const Faq = () => {
    const faqs = [
        {
            question: "Can you elaborate on any recent successful investment ventures or portfolio diversification strategies undertaken by DK Group?",
            answer: "Recently, DK Group successfully ventured into renewable energy projects, capitalizing on the growing demand for clean energy solutions. Additionally, its strategic investments in emerging markets have yielded favorable returns, demonstrating its commitment to portfolio diversification and global growth opportunities."
        },
        {
            question: "What are DK Group's future plans for expansion?",
            answer: "DK Group plans to further expand its operations in the renewable energy sector, focusing on solar and wind energy projects. Additionally, it aims to strengthen its presence in emerging markets through strategic partnerships and investments."
        },
        // Add more FAQs as needed
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="p-12">
                <h2 className="text-5xl font-bold mb-8 text-center">FAQs</h2>
                <ul className="space-y-6">
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleToggle(index)}
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                            >
                                <h3 className={`text-lg font-semibold mb-2 ${activeIndex === index ? 'text-yellow-500' : 'text-black'}`}>{faq.question}</h3>
                                <span className="ml-3">
                                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className="text-gray-700">{faq.answer}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Faq;
