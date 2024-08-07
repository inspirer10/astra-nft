import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='faq-item'>
            <div
                className='faq-question'
                onClick={() => setIsOpen(!isOpen)}
                id={isOpen ? 'opened' : ''}
            >
                {question}
                <span className='faq-toggle'>
                    {isOpen ? <FiMinus /> : <GoPlus />}
                </span>
            </div>

            {isOpen ? (
                <div className='faq-answer acitve'>{answer}</div>
            ) : (
                <div className='faq-answer '>{answer}</div>
            )}
        </div>
    );
};

export default FAQItem;
