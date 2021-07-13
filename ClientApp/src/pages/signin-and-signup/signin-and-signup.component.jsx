import React, { useContext } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-and-signup.styles.scss';
import { UserContext } from '../../components/user-context/user-context';

const SignInAndSignUpPage = ({ handleSignInSignUp }) => {
  const userContext = useContext(UserContext);
  return (

    <div className='sign-in-and-sign-up'>
      <SignIn className='sign-in' handleSignIn={handleSignInSignUp} />
      <SignUp className='sign-up' handleSignUp={handleSignInSignUp} />
    </div>
  );
};

export default SignInAndSignUpPage;