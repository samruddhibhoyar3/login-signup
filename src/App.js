// App.js
import { Component, default as React } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { LoginSignUp } from './Components/LogonSignUp/LoginSignUp'
import SecretPosting from './Components/PostingPage/PostingPage'
import Dashboard from './Components/WelcomePage/Dashboard'
import Signup from './Components/signup/signup'
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<SecretPosting />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/login' element={<LoginSignUp />}></Route>
            <Route
              exact
              path='/post-message'
              element={<SecretPosting />}
            ></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
