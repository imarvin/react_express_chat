import React from 'react';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const Header = () => {
    return (
        <header className="chat__header">
            <div className="chat__logo">
                <AccountTreeIcon className="chat__logo-svg"></AccountTreeIcon>
                 
            </div>
        </header>
    )
}

export default Header;
