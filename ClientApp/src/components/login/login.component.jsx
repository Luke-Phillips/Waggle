import React from 'react'
import './login.styles.scss'

const Login = () => {
    return (
        
            <form className='login-form'> 
                <h3>Waggle Login</h3>
                <input className='email' placeholder='Enter Email' />
                <input type='password' placeholder='Enter Password' />
                <button className='send-login'>Login</button>
            </form>
        
    )
}

export default Login;