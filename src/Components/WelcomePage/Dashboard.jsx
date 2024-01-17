// Dashboard.js
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleNextPage = () => {
    // Redirect to the next page
    navigate('/login')
  }

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>This is your personalized dashboard.</p>
      <Button variant='contained' onClick={handleNextPage}>
        Next Page
      </Button>
    </div>
  )
}

export default Dashboard
