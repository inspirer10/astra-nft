import React from 'react';
import FAQItem from './FaqItem';

function Faq() {
    const faqData = [
        {
            question: 'How do I purchase an NFT on this platform?',
            answer: 'To purchase an NFT, you must first connect your cryptocurrency wallet to our platform. Once connected, you can browse through available NFTs, select the one you want to buy, and confirm the transaction. The NFT will be transferred to your wallet, and you will receive a confirmation of your purchase. Please ensure you have sufficient ETH in your wallet to cover both the purchase and any transaction fees.',
        },
        {
            question: 'Can I resell my NFTs on this platform?',
            answer: 'Yes, you can resell your NFTs directly on our platform. Simply navigate to your collection, select the NFT you wish to sell, set your desired price, and list it for sale. Other users on the platform will be able to view and purchase your NFT. When the sale is completed, the funds will be transferred to your connected wallet.',
        },
        {
            question: 'What payment methods are accepted for purchasing NFTs?',
            answer: 'Our platform primarily accepts payments in Ethereum (ETH). You will need to have ETH in your connected cryptocurrency wallet to make purchases. We recommend using a wallet like MetaMask for smooth transactions. In the future, we plan to support additional cryptocurrencies and possibly fiat currency options.',
        },
        {
            question: 'How do I know if an NFT is authentic?',
            answer: 'Each NFT on our platform is verified and authenticated through blockchain technology. You can view the provenance of the NFT, including its creation details, ownership history, and any previous sales. This information ensures that you are purchasing a genuine and original digital asset. Additionally, our platform features artist verification badges to further guarantee authenticity.',
        },

        {
            question: 'What rights do I have when I purchase an NFT?',
            answer: 'When you purchase an NFT, you own the digital asset associated with it, which may include artwork, music, or other media. Ownership of the NFT allows you to display or resell the asset, but it does not typically grant you copyright or commercial use rights unless explicitly stated by the creator. Always review the terms associated with each NFT to understand your rights as an owner.',
        },
    ];

    return (
        <section className='FAQ_section'>
            <h2 className='FAQ-heading'>Frequently Asked Questions</h2>

            <div className='faq'>
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </section>
    );
}

export default Faq;
