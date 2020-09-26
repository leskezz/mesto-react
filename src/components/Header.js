import React from 'react';

function Header (props) {
    return (
        <header className="header">
            <img src={props.logo} className="header__logo" alt="Место" />
        </header>
    )
}

export default Header;