import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/esm/Button'
import './SecretPosting.css'
const SecretPosting = () => {
  const [secret, setSecret] = useState('')
  const [secrets, setSecrets] = useState([])

  const handleSecretSubmit = () => {
    if (secret.trim() !== '') {
      setSecrets([...secrets, secret])
      setSecret('')
    }
  }

  return (
    <div className='secretcontainer'>
      <div className='secretheader'>
        <h2>Welcome to the Secret Posting Section!</h2>
        <p>
          Share your secret anonymously or discover secrets shared by others.
        </p>
      </div>

      <InputGroup>
        <InputGroup.Text className='align-bottom:20px'>
          Share your Secret!!
        </InputGroup.Text>
        <Form.Control
          as='textarea'
          aria-label='With textarea'
          rows='4'
          placeholder='Share your secret...'
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      </InputGroup>
      <div>
        <Button onClick={handleSecretSubmit}>Post Secret</Button>
      </div>

      <div className='secretlist'>
        <h3>Secrets Shared by Others:</h3>
        <ul>
          {secrets.map((postedSecret, index) => (
            <li key={index}>{postedSecret}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SecretPosting
