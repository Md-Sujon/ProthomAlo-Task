import React from 'react';
import '../../Styles/Navbar.css';
import logo from '../../image/logo.png';

const Navbar = () => {
    return (
        <div className="navBar">
            <a href="/Home" ><img src={logo} alt="" /></a>
          
        </div>
        //--------

    );
};

export default Navbar;