import React from 'react';
import logo from '../logo.svg';
const Header = () => {
    return (
        <header className="chat__header">
            <div className="chat__logo">
                <img src={logo} className="chat__logo-img" alt="Better logo" />
                <h1 className="chat__logo-h1">better chat</h1>
            </div>
        </header>
    )
}

export default Header;
