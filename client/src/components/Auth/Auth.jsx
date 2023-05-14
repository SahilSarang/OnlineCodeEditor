import React from 'react'
import { useState } from 'react'

import About from './About'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(true)
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section className="auth-section">
      <About />
      <div className="auth-container">
        <div className='form-heading'>
          {isSignup ? <h1>Sign Up</h1> : <h1>Log In</h1>}
        </div>
          <form >
            <div className='form-container'>
              {isSignup && (
                <label htmlFor="name" className='form-input'>
                  <h4>Name:</h4>
                  <input type="text" id="name" name="name"/>
                </label>
              )}
              <label htmlFor="email" className='form-input'>
                <h4>Email:</h4>
                <input type="email" name="email" id="email"/>
              </label>
              <label htmlFor="password" className='form-input'>
                <h4>Password:</h4>
                <input type="password" name="password" id="password"/>
              </label>
              <button type="submit " className="auth-btn">
                {isSignup ? "Sign up" : "Log in"}
              </button>
            </div>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of
                <br /> service
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span> and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <p className="singnup-link">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button type="button" className="handle-switch-btn" onClick={handleSwitch}>
            {isSignup ? "Log in" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  )
}

export default Auth
