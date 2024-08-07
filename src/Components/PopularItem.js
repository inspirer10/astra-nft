import React, { useEffect, useState } from 'react';
import { TbArrowsExchange } from 'react-icons/tb';

function PopularItem() {
    const [activeElement, setActiveElement] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isModalOpen]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [time, setTime] = useState({
        hours: 17,
        minutes: 2,
        seconds: 56,
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTime((prevTime) => {
                let { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            clearInterval(countdown);
                            return { hours: 0, minutes: 0, seconds: 0 }; //stop licznika
                        }
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <>
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
                    <img src='nft3.jpg' alt='item thumbnail' loading='lazy' />

                    <aside className='highlighted-item-content'>
                        <p className='ntf-name'>Cosmic Glimpse</p>

                        <div className='details-container'>
                            <div className='details-wrapper'>
                                <img
                                    className='creator-avatar'
                                    src='userAvatar8.jpg'
                                    alt='creator thumbnail'
                                    loading='lazy'
                                />
                                <div className='details-info'>
                                    <p className='info-heading'>Creator</p>
                                    <p>Cerr M</p>
                                </div>
                            </div>

                            <div className='details-wrapper'>
                                <img
                                    className='creator-avatar'
                                    src='ETH-Logo.png'
                                    alt='creator thumbnail'
                                    loading='lazy'
                                />
                                <div className='details-info'>
                                    <p className='info-heading'>
                                        Instant Price
                                    </p>
                                    <p>2.3 ETH</p>
                                </div>
                            </div>
                        </div>

                        <div className='current-prize-container'>
                            <p className='current'>Current BET</p>
                            <h2>1.8 ETH</h2>
                            <p className='price_subheading'>$4,412.07</p>

                            <p className='ending-info'>Auction ending in</p>

                            <div className='data-container'>
                                <div className='data-wrapper'>
                                    <p className='time-value'>
                                        {`${String(time.hours).padStart(
                                            2,
                                            '0'
                                        )}`}
                                    </p>
                                    <p className='time'>hrs</p>
                                </div>
                                <div className='data-wrapper'>
                                    <p className='time-value'>
                                        {`${String(time.minutes).padStart(
                                            2,
                                            '0'
                                        )}`}
                                    </p>
                                    <p className='time'>min</p>
                                </div>
                                <div className='data-wrapper'>
                                    <p className='time-value'>
                                        {`${String(time.seconds).padStart(
                                            2,
                                            '0'
                                        )}`}
                                    </p>
                                    <p className='time'>sec</p>
                                </div>
                            </div>
                        </div>

                        <button className='buy_button'>Buy now</button>
                        <button onClick={handleOpenModal}>Viev item</button>
                    </aside>
                </article>
            </section>

            {isModalOpen && (
                <div
                    className='modal-overlay'
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCloseModal();
                    }}
                >
                    <div
                        className='showcase_modal'
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCloseModal();
                        }}
                    >
                        <div
                            className='image-wrapper'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src='nft3.jpg'
                                alt='NFT thumbnail'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopularItem;
