import React, { useContext } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-and-signup.styles.scss';
<<<<<<< HEAD
<<<<<<< HEAD
import { UserContext } from '../../components/user-context/user-context';

const SignInAndSignUpPage = ({ handleSignInSignUp }) => {
  const userContext = useContext(UserContext);
  return (

=======
//import { Redirect } from 'react-router';
import { UserContext } from '../../components/user-context/user-context';

const SignInAndSignUpPage = ({ handleSignInSignUp }) => {
  const userContext = useContext(UserContext);
  return (
    //userContext.token ?
    //<Redirect to='/hive/discussion' /> :
>>>>>>> effb4953018eb9bd56b889723a377e89adbe1ad0
=======
//import { UserContext } from '../../components/user-context/user-context';

const SignInAndSignUpPage = ({ handleSignInSignUp }) => {
  //const userContext = useContext(UserContext);
  return (

>>>>>>> dpworking
    <div className='sign-in-and-sign-up'>
      <SignIn className='sign-in' handleSignIn={handleSignInSignUp} />
      <SignUp className='sign-up' handleSignUp={handleSignInSignUp} />
    </div>
  );
};

export default SignInAndSignUpPage;