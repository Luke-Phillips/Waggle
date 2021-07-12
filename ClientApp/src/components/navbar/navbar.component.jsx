import React, { useContext } from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/beehive-logo.svg';
import { UserContext } from '../../components/user-context/user-context';

const Navbar = () => {
    const userContext = useContext(UserContext);
    return (
        <div className='navbar'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/hive/settings'> SETTINGS </Link>
                {/* <Link className='option' to='/hive/profile'> PROFILE (old) </Link> */}
                <Link className='option' to='/hive/discussion'> DISCUSSION </Link>
                {!userContext.token && <Link className='option' to='/signin'> SIGN IN </Link>}
            </div>
        </div>
    );
};

export default Navbar; 