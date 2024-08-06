import React, { useRef } from 'react';
import Card from './Card';
import { useScroll } from 'framer-motion';

function CardsParallax() {
    const cardContainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardContainer,
        offset: ['start start', 'end end'],
    });

    const cardsData = [
        {
            title: 'Stellar Evolution',
            img: 'nft1.jpg',
            description:
                'Stellar Evolution captures the explosive colors and forms that reflect the dynamic processes within stars. This digital composition blends intricate structures with intense gradients, symbolizing the birth and transformation of cosmic phenomena.',
            color: '#000814',
        },
        {
            title: 'Broken Elegance',
            img: 'nft15.jpg',
            description:
                'Broken Elegance is a tribute to classical beauty, while subtly critiquing its fragility. This sculpture, with its classical features, cracked and gilded, demonstrates how beauty can be enhanced by imperfections and the passage of time.',
            color: '#041a31',
        },
        {
            title: 'Prism Horizon',
            img: 'nft16.jpg',
            description:
                'Prism Horizon is a burst of color and light emanating from a central prism. This composition captures the moment when light breaks into its original hues, creating a spectacular display that transcends the limits of ordinary perception',
            color: '#001d3d',
        },
        {
            title: 'Face of Nature',
            img: 'nft5.jpg',
            description:
                'Fantasist presents a world of dreams and abstract forms. Its vibrant colors and fluid shapes encapsulate the essence of imagination and creative thinking, transcending the boundaries of reality to open doors to infinite possibilities.',
            color: '#680707',
        },
        {
            title: 'Vivid Stream',
            img: 'nft11.jpg',
            description:
                'Vivid Stream is a mesmerizing flow of intense colors and light reflections, symbolizing the continuous stream of energy and emotion. This digital art immerses the viewer in a dynamic wave of colors that transform before their eyes.',
            color: '#004328',
        },
    ];

    return (
        <section ref={cardContainer} className='cards-parallax'>
            {cardsData.map((data, i) => {
                const targetScale = 1 - (cardsData.length - i) * 0.05;
                return (
                    <Card
                        key={i}
                        {...data}
                        i={i}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}

export default CardsParallax;
