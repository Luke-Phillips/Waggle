import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './signin-and-signup.styles.scss'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn className='sign-in'/>
        <SignUp className='sign-up' />
    </div>
    
);

export default SignInAndSignUpPage;