import React from 'react'
import './navbar.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/beehive-logo.svg'

const Navbar = () => (
    <div className='navbar'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/'> PROFILE </Link>
            <Link className='option' to='/discussion'> DISCUSSION </Link>
            <Link className='option' to='/signin'> SIGN IN </Link>
        </div>
    </div>
)

export default Navbar; 