// LoginSignUp.js
import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import './LoginSignUp.css'

import { Link } from 'react-router-dom'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'

export const LoginSignUp = () => {
  const [action, setAction] = useState('SignUp')
  const [username, setUsername] = useState('')
  const [isLoggedIn, setLoggedIn] = useState(false)
  const { loginWithRedirect } = useAuth0()

  return (
    <div className='Container'>
      <div className='header'>
        <div className='text'> {action}</div>
        <div className='Underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Log in' ? (
          <div></div>
        ) : (
          <div className='input'>
            <img src={user_icon} alt='' />
            <input
              type='text'
              placeholder='Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      {action === 'SignUp' ? (
        <div></div>
      ) : (
        <div className='forgot-password'>
          Forget Password?<span>Click Here</span>
        </div>
      )}
      <div className='submit-container'>
        <Link
          to='/'
          className={action === 'LogIn' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Log in')
          }}
        >
          Log in
        </Link>
        <Link
          to='/'
          className={action === 'SignUp' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('SignUp')
          }}
        >
          SignUp
        </Link>
        <div className='caret-lime-50'>OR</div>
        <Row>
          <div className=' d-flex justify-content-between'>
            <Button onClick={() => loginWithRedirect()}>
              Log In with Google
            </Button>
          </div>
        </Row>
      </div>
    </div>
  )
}
