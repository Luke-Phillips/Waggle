import React from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/beehive-logo.svg';

const Navbar = () => (
    <div className='navbar'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/hive/settings'> SETTINGS </Link>
            <Link className='option' to='/hive/profile'> PROFILE (old) </Link>
            <Link className='option' to='/hive/discussion'> DISCUSSION </Link>
            <Link className='option' to='/signin'> SIGN IN </Link>
        </div>
    </div>
);

export default Navbar; 