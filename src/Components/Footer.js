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
                        <img src='img1.png' alt='brand icon' />
                    </div>

                    <div className='footer_icons'>
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
