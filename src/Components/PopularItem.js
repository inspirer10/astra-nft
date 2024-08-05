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
        </section>
    );
}

export default PopularItem;
