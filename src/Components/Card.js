import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Card({
    color,
    title,
    img,
    url,
    description,
    i,
    progress,
    range,
    targetScale,
}) {
    const cardContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardContainer,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={cardContainer} className='card-container'>
            <motion.div
                style={{
                    scale,
                    backgroundColor: color,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className='card'
            >
                <h2>{title}</h2>
                <div className='card-Body'>
                    <div className='description'>
                        <p>{description}</p>
                    </div>

                    <div className='image-Container'>
                        <motion.div
                            //style={{ opacity: scrollYProgress }}
                            style={{ scale: imageScale }}
                            className='inner'
                        >
                            <img src={img} alt='nft thumbnail' loading='lazy' />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Card;
