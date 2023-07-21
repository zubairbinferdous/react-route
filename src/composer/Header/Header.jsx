/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Heder.css';

const Header = () => {
    return (
        <div className='navbar'>
           <ul>
            <li> <Link to='/' > Home </Link> </li>
            <li> <Link to='/about' > About </Link> </li>
            <li> <Link to='/service' > service </Link> </li>
           </ul>
        </div>
    );
};

export default Header;