import React from 'react';
import { FaEthereum } from 'react-icons/fa';

function ProductsShowcase() {
    const cardsData = [
        {
            nftName: 'Stellar Evolution',
            nftSrc: '/nft1.jpg',
            user: 'paulpo',
            avatarSrc: '/userAvatar2.jpg',
            price: 1.2,
        },
        {
            nftName: 'Spherical',
            nftSrc: '/nft2.jpg',
            user: 'domic1',
            avatarSrc: '/userAvatar2.jpg',
            price: 0.8,
        },
        {
            nftName: 'Cosmic Glimpse',
            nftSrc: '/nft3.jpg',
            user: 'annshen',
            avatarSrc: '/userAvatar2.jpg',
            price: 2.4,
        },
        {
            nftName: 'Spherical',
            nftSrc: '/nft4.jpg',
            user: 'lukasly',
            avatarSrc: '/userAvatar2.jpg',
            price: 1.9,
        },
    ];

    return (
        <section className='productsShowcase-section'>
            <article>
                {cardsData.map(
                    ({ nftName, nftSrc, user, avatarSrc, price }) => (
                        <div className='card'>
                            <div
                                className='nft-image'
                                style={{ backgroundImage: `url(${nftSrc})` }}
                            />
                            <p className='nft-name'>{nftName}</p>

                            <div className='user-data'>
                                <img src={avatarSrc} alt='user thumbnail' />
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
