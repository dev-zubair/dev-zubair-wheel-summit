import React from 'react';
import './Header.css';
import header from './../../images/header-image.gif'


const Header = () => {
    return (

        <div className='header'>
            <img src={header} alt="" />
            <h1>The Wheel Summit 2021</h1>
            <p>Here are our top donor who will donates for Poor People</p>
            <h3>Total Amount Needed : 200 Million Dollar</h3>
        </div>
    );
};

export default Header;