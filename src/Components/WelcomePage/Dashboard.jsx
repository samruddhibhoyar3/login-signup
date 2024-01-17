// Dashboard.js
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const handleNextPage = () => {
    // Redirect to the next page
    navigate('/login')
  }

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>This is your personalized dashboard.</p>
      <div>
        <Button variant='contained' href='https://postmessage.authui.site/'>
          Registration/Sign Up
        </Button>

        <br></br>
        <h1>OR</h1>
        <Button variant='contained' onClick={() => loginWithRedirect()}>
          LogIn with Google
        </Button>
      </div>
    </div>
  )
}

export default Dashboard
