// SecretButton.js
import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const SecretButton = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <Link to='/post-secret'>
      <Button>Post a Secret</Button>
    </Link>
  ) : null
}

export default SecretButton
