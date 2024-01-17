// App.js
import { Component, default as React } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { LoginSignUp } from './Components/LogonSignUp/LoginSignUp'
import SecretPosting from './Components/PostingPage/PostingPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<SecretPosting />}></Route>

            <Route exact path='/login' element={<LoginSignUp />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
