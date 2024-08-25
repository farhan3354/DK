import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // Importing icons from react-icons library

const Faq = () => {
    const faqs = [
        {
            question: "Can you elaborate on any recent successful investment ventures or portfolio diversification strategies undertaken by DK Group?",
            answer: "Recently, DK Group successfully ventured into renewable energy projects, capitalizing on the growing demand for clean energy solutions. Additionally, its strategic investments in emerging markets have yielded favorable returns, demonstrating its commitment to portfolio diversification and global growth opportunities."
        },
        {
            question: "What are the primary sectors or industries in which DK Group invests?",
            answer: "DK Group primarily invests in sectors such as technology, healthcare, renewable energy, real estate, and emerging markets."
        },
        {
            question: "Could you provide insights into DK Group's investment strategy and philosophy?",
            answer: ": DK Group’s investment strategy revolves around thorough research, diversification, and long-term growth. Its philosophy emphasises sustainable investments that create value for both stakeholders and the broader community."
        },
        {
            question: "What sets DK Group apart from other investment firms in terms of its approach to risk management?",
            answer: ": DK Group adopts a comprehensive risk management framework that integrates quantitative analysis, qualitative assessments, and proactive risk mitigation strategies. It focuses on maintaining a balanced risk-return profile to safeguard investor interests.",
        },
        {
            question: "How does DK Group identify potential investment opportunities and assess their viability?",
            answer: "DK Group employs a rigorous due diligence process, leveraging its extensive network, market intelligence, and industry expertise to identify promising investment opportunities. It evaluates factors such as market trends, competitive landscape, financial performance, and growth potential before making investment decisions.",
        }
        // Add more FAQs as needed
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex justify-center items-center w">
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
