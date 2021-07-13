import React, {useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

const SignIn = ({handleSignIn}) => {
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = event => {
    const { value, name } = event.target;

    name === 'email' ?
      setEmail(value) :
      setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const login = {
      email: email,
      password: password
    };

    fetch('authmanagement/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(({token, userId}) => handleSignIn(token, userId))
    .catch(uhOh => console.log(uhOh));
  };

  return (
    <div className="sign-up">
      <h2>I have an account</h2>
      <span>Sign in with your email and password</span>
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
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }
//   handleSubmit = event => {
//     event.preventDefault();

//     this.setState({ email: '', password: '' });
//   };

//   handleChange = event => {
//     const { value, name } = event.target;

//     this.setState({ [name]: value });
//   };
//   render() {
//     return (
//       <div className='sign-in'>
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name='email'
//             type='email'
//             value={this.state.email}
//             handleChange={this.handleChange}
//             label='Email'
//             required
//           />

//           <FormInput
//             name='password'
//             type='password'
//             value={this.state.password}
//             handleChange={this.handleChange}
//             label='Password'
//             required
//           />

//           <CustomButton type='submit'> Sign In</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

export default SignIn;
