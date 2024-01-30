import React from 'react';
import logo from '../images/logo.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
<div id="footer">
    <div className="left">
    <img src={logo} />
    <h2>AlKhawarizmi</h2>
    <p>Web App developed by <a href=''>Abderrazak Mahi</a></p>
    </div>
    <div className='right'>
        <ul>
            <li><a href='#home'>App</a></li>
            <li><a href='#docs'>Docs</a></li>
            <li>Copyright © {currentYear}</li>
        </ul>
    </div>
</div>

    );
    };
