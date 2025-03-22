import React from 'react'
import './Login.css'
import assets from "../../assets/assets"

const Login = () => {
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="login" className="logo"/>   
        <form className="login-form">
            <h2>Sign up</h2>
            <input type="text" placeholder="Username" className='form-input' required/>
            <input type="email" placeholder="Email address"  className='form-input' required/>
            <input type="password" placeholder="Password"   className='form-input' required/>
            <button type="submit" >Sign up</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms and use of policy</p>
            </div>
            <div className='login-forgot'>
                <p className='login-toggle'> Already have an account ? <span>click here </span></p>

            </div>
            </form>  
    </div>
  )
}

export default Login;