import React, { useState } from 'react';
import { TbArrowsExchange } from 'react-icons/tb';

function PopularItem() {
    const [activeElement, setActiveElement] = useState(1);

    return (
        <section className='popularItem_section'>
            <h2>Explore exclusive digital assets</h2>

            <div className='buttons-row'>
                <div className='buttons-wrapper'>
                    <button
                        onClick={() => setActiveElement(1)}
                        className={activeElement === 1 ? 'active' : null}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveElement(2)}
                        className={activeElement === 2 ? 'active' : null}
                    >
                        Art
                    </button>
                    <button
                        onClick={() => setActiveElement(3)}
                        className={activeElement === 3 ? 'active' : null}
                    >
                        Photography
                    </button>
                </div>

                <button className='sort-button'>
                    Sort <TbArrowsExchange className='sort-icon' />
                </button>
            </div>

            <article className='highlighted-item'>
                <img src='nft3.jpg' alt='item thumbnail' />

                <aside className='highlighted-item-content'>
                    <p className='ntf-name'>
                        Blessed assurance <span>© </span>
                    </p>

                    <div className='details-container'>
                        <div className='details-wrapper'>
                            <img
                                className='creator-avatar'
                                src='userAvatar8.jpg'
                                alt='creator thumbnail'
                            />
                            <div className='details-info'>
                                <p className='info-heading'>Creator</p>
                                <p>Cerr M</p>
                            </div>
                        </div>

                        <div className='details-wrapper'>
                            <img
                                className='creator-avatar'
                                src='ETH-logo.png'
                                alt='creator thumbnail'
                            />
                            <div className='details-info'>
                                <p className='info-heading'>Instant Price</p>
                                <p>2.3 ETH</p>
                            </div>
                        </div>
                    </div>

                    <div className='current-prize-container'>
                        <p className='current'>Current BET</p>
                        <h2>1.8 ETH</h2>
                        <p className='price_subheading'>$3,795.71</p>

                        <p className='ending-info'>Auction ending in</p>

                        <div className='data-container'>
                            <div className='data-wrapper'>
                                <p className='time-value'>17</p>
                                <p className='time'>hrs</p>
                            </div>
                            <div className='data-wrapper'>
                                <p className='time-value'>12</p>
                                <p className='time'>min</p>
                            </div>
                            <div className='data-wrapper'>
                                <p className='time-value'>56</p>
                                <p className='time'>sec</p>
                            </div>
                        </div>
                    </div>

                    <button className='buy_button'>Buy now</button>
                    <button>Viev item</button>
                </aside>
            </article>
        </section>
    );
}

export default PopularItem;
