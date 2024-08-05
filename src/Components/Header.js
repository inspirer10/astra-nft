import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLargeFill } from 'react-icons/ri';
import { GoBell } from 'react-icons/go';
import { PiCopy } from 'react-icons/pi';

function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <header>
            <nav>
                <div className='brand-wrapper'>
                    <p className='name'>AstraNFT</p>
                    <img src='img1.png' alt='brand icon' />
                </div>

                <div className='header_menu'>
                    <div className='bell-icon-wrapper'>
                        <GoBell className='bell-icon' />
                    </div>
                    <div className='copy-wrapper'>
                        <PiCopy className='copy-icon' /> #081547111337
                    </div>
                    <div className='account-balance-wrapper'>
                        <img src='ETH-Logo.png' alt='' /> 19.3 ETH
                    </div>

                    {!menu ? (
                        <RiMenu3Line
                            className='hamburger-icon'
                            onClick={() => setMenu(true)}
                        />
                    ) : (
                        <RiCloseLargeFill
                            className='hamburger-icon active'
                            onClick={() => setMenu(false)}
                        />
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
