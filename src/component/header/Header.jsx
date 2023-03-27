import React from 'react';
import logo from"../../images/images/Logo.svg"
import"./Header.css"
const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <div className='nav-info'>
               <a href="">Order</a>
               <a href="">Order review</a>
               <a href="">Manage Inventory</a>
               <a href="">Login</a>
            </div>
        </div>
    );
};

export default Header;