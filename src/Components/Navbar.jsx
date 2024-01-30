import React from 'react';
import logo from '../images/logo.png';

export default function Navbar() {
    return (
<div id="navbar">
    <div className="left">
    <img src={logo} />
    <h2>AlKhawarizmi</h2>
    </div>
    <div className='right'>
        <ul>
            <li><a href='#home'>App</a></li>
            <li><a href='#docs'>Docs</a></li>
        </ul>
    </div>
</div>

    );
    };
