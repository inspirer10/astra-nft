import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { GoBell } from 'react-icons/go';
import { PiCopy } from 'react-icons/pi';

function Header() {
    return (
        <header>
            <nav>
                <div className='brand-wrapper'>
                    <p className='name'>AstraNFT</p>
                    <img src='img1.png' alt='brand icon' />
                </div>

                <div className='header_menu'>
                    <div className='copy-wrapper'>
                        <PiCopy className='copy-icon' /> #081547111337
                    </div>

                    <div className='bell-icon-wrapper'>
                        <GoBell className='bell-icon' />
                    </div>

                    <div className='account-balance-wrapper'>
                        <img src='icon.png' alt='' /> 0.5 ETH
                    </div>

                    <RiMenu3Line className='hamburger-icon' />
                </div>
            </nav>
        </header>
    );
}

export default Header;
