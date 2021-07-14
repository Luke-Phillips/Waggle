import React, { useContext } from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/beehive-logo.svg';
import { UserContext } from '../../components/user-context/user-context';

const Navbar = ({handleSignOut}) => {
  const userContext = useContext(UserContext);
  return (
    <div className='navbar'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        {userContext.token ? (
          <>
            <Link className='option' to='/hive/discussion'>
              DISCUSSION
            </Link>
            <Link className='option' to='/hive/settings'>
              SETTINGS
            </Link>
            <Link className='option' to='/signin' onClick={handleSignOut}>
            SIGN OUT
          </Link>
          </>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
