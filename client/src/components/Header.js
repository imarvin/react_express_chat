import React from 'react';
import logo from '../logo.svg';
const Header = () => {
    return (
        <div className="chat__header">
            <div className="chat__logo">
                <img src={logo} className="chat__logo-img" alt="Better logo" />
                <h1 className="chat__logo-h1">better chat</h1>
            </div>
        </div>
    )
}

export default Header;
