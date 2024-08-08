import Image from 'next/image';
import React from 'react';
import {
    FaTwitter,
    FaLinkedin,
    FaBehanceSquare,
    FaFacebookSquare,
} from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='footer_content-container'>
                <div className='footer-content'>
                    <div className='brand-wrapper'>
                        <p className='name'>AstraNFT</p>
                        <Image
                            src='/img1.png'
                            alt='brand icon'
                            height={35}
                            width={35}
                        />
                    </div>

                    <div className='footer-links'>
                        <p>Privacy & Policy</p>
                        <p>Contact</p>
                        <p>About</p>
                        <p>Help Center</p>
                    </div>

                    <div className='footer-icons'>
                        <FaTwitter className='icon' />
                        <FaLinkedin className='icon' />
                        <FaBehanceSquare className='icon' />
                        <FaFacebookSquare className='icon' />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
