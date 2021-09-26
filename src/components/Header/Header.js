import React from 'react';
import './Header.css';
// import header from './../../images/header-image.gif'


const Header = () => {
    return (

        <div className='header'>
            {/* <img src={header} alt="" /> */}
            <h1>Create React File</h1>
            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            <h3>Total Budget : 200 Million Dollar</h3>
        </div>
    );
};

export default Header;