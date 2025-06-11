import React from 'react'
import '../CSS/LoginSingUp.css'
import Footer from '../components/Footer/Footer'


const LoginSingUp = () => {
  return (
    <>
      <div className="loginsingup">
      <div className="loginsingup-contanier">
        <h1>Sing Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder='Enter a UserName'/>
          <input type="email" placeholder='Enter a Email'/>
          <input type="password" placeholder='Enter a Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsingup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing ,i  agree to the terms of use  & privacy policy</p>
        </div>
        </div>
        <Footer></Footer>
    </div>

    </>
  )
}

export default LoginSingUp