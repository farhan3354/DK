import React, { useState } from 'react';

const FaqList = () => {
    const faqs = [
        {
            question: "Can you elaborate on any recent successful investment ventures or portfolio diversification strategies undertaken by DK Group?",
            answer: "Recently, DK Group successfully ventured into renewable energy projects, capitalizing on the growing demand for clean energy solutions. Additionally, its strategic investments in emerging markets have yielded favorable returns, demonstrating its commitment to portfolio diversification and global growth opportunities."
        },
        // Add more FAQs as needed
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-8">FAQs</h2>
                <ul className="space-y-6">
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleToggle(index)}
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                            >
                                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                                <span className="ml-2">{activeIndex === index ? '-' : '+'}</span>
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

export default FaqList;
