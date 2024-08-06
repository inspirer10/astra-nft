import React from 'react';
import { FaEthereum } from 'react-icons/fa';

function ProductsShowcase() {
    const cardsData = [
        {
            nftName: 'Stellar Evolution',
            nftSrc: '/nft1.jpg',
            user: 'paulpo',
            avatarSrc: '/userAvatar1.jpg',
            price: 1.2,
        },
        {
            nftName: 'Glassgow',
            nftSrc: '/nft2.jpg',
            user: 'inspirer',
            avatarSrc: '/userAvatar2.png',
            price: 0.8,
        },
        {
            nftName: 'Cosmic Glimpse',
            nftSrc: '/nft3.jpg',
            user: 'annshen',
            avatarSrc: '/userAvatar3.jpg',
            price: 2.3,
        },
        {
            nftName: 'Fantasist',
            nftSrc: '/nft4.jpg',
            user: 'lukasly',
            avatarSrc: '/userAvatar4.jpg',
            price: 1.9,
        },

        {
            nftName: 'Face of Nature',
            nftSrc: '/nft5.jpg',
            user: 'leonie',
            avatarSrc: '/userAvatar5.jpg',
            price: 2.7,
        },
        {
            nftName: 'Spherical',
            nftSrc: '/nft6.jpg',
            user: 'jonet',
            avatarSrc: '/userAvatar6.jpg',
            price: 0.4,
        },
        {
            nftName: 'Down of Cosmic',
            nftSrc: '/nft7.jpg',
            user: 'subhaan',
            avatarSrc: '/userAvatar7.jpg',
            price: 4.1,
        },
        {
            nftName: 'Seize the Day',
            nftSrc: '/nft8.jpg',
            user: 'bonniex',
            avatarSrc: '/userAvatar8.jpg',
            price: 1.9,
        },

        {
            nftName: 'Zeitgeist',
            nftSrc: '/nft9.jpg',
            user: 'kettiela',
            avatarSrc: '/userAvatar9.jpg',
            price: 3.9,
        },
        {
            nftName: 'Epiphany',
            nftSrc: '/nft10.jpg',
            user: 'trevor',
            avatarSrc: '/userAvatar10.jpg',
            price: 1.6,
        },
        {
            nftName: 'Vivid Stream',
            nftSrc: '/nft11.jpg',
            user: 'mathi08',
            avatarSrc: '/userAvatar11.jpg',
            price: 2.8,
        },
        {
            nftName: 'Aurora Drift',
            nftSrc: '/nft12.jpg',
            user: 'davemin',
            avatarSrc: '/userAvatar12.jpg',
            price: 3.1,
        },

        {
            nftName: 'Ethereal Pulse',
            nftSrc: '/nft13.jpg',
            user: 'georg3',
            avatarSrc: '/userAvatar13.jpg',
            price: 3.2,
        },
        {
            nftName: 'Crystal Loop',
            nftSrc: '/nft14.jpg',
            user: 'illuro',
            avatarSrc: '/userAvatar14.jpg',
            price: 5.0,
        },
        {
            nftName: 'Broken Elegance',
            nftSrc: '/nft15.jpg',
            user: 'arteq',
            avatarSrc: '/userAvatar15.jpg',
            price: 4.9,
        },
        {
            nftName: 'Prism Horizon',
            nftSrc: '/nft16.jpg',
            user: 'svrell',
            avatarSrc: '/userAvatar16.jpg',
            price: 5.4,
        },
    ];

    return (
        <section className='productsShowcase-section'>
            <article>
                {cardsData.map(
                    ({ nftName, nftSrc, user, avatarSrc, price }) => (
                        <div className='card'>
                            <div className='nft-image-container'>
                                <div
                                    className='nft-image'
                                    style={{
                                        backgroundImage: `url(${nftSrc})`,
                                    }}
                                />
                            </div>

                            <p className='nft-name'>{nftName}</p>

                            <div className='user-data'>
                                <img
                                    src={avatarSrc}
                                    alt='user thumbnail'
                                    loading='lazy'
                                />
                                <p className='user-name'>@{user}</p>
                            </div>

                            <p className='current-price'> Current price</p>
                            <p className='price'>
                                {price} ETH
                                <span>
                                    <FaEthereum className='eth-icon' />
                                </span>
                            </p>
                        </div>
                    )
                )}
            </article>
        </section>
    );
}

export default ProductsShowcase;
