import { Auth0Provider } from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
// Initialize the Appwrite client
const root = createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain='dev-78hmqrn5ri8bxdu0.us.auth0.com'
    clientId='6vJt6NraN9ymn4ZvD6gFCPfuIHM2T5b2'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
