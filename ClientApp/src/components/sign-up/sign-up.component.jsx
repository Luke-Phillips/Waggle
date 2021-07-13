import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

const SignUp = ({handleSignUp}) => {
  const [email ,setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  
  const handleSubmit = event => {
    event.preventDefault();
    
    const registration = {
      email: email,
      username: username,
      password: password
    };

    fetch('authmanagement/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registration)
    })
    .then(res => res.json())
    .then(({token, userId}) => handleSignUp(token, userId))
    .catch(uhOh => console.log(uhOh));
  };

  const handleChange = event => {
    const { value, name } = event.target;

    name === 'email' ?
      setEmail(value) :
    name === 'name' ?
      setUsername(value) :
    name === 'password' ?
      setPassword(value) :
//  name === 'confirmPassword'
      setConfirmPassword(value);

    const pw = name === 'password' ? value : password;
    const cpw = name === 'confirmPassword' ? value : confirmPassword;

    setIsDisabled(pw.length < 8 || pw !== cpw);
  };

  return (
    <div className="sign-up">
      <h2>I need an account</h2>
      <span>Sign up with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="name"
          type="text"
          value={username}
          handleChange={handleChange}
          label="Username"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" disabled={isDisabled}>Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
