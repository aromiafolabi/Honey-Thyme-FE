import { Link, useNavigate } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'
import React from 'react'
import { isAuthenticated, removeToken } from '../lib/auth'




function Navbar() {
  const isAuth = isAuthenticated()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        <div className="nav-buttons">
          {isAuth ? (
            <>
              <button className="cocktails-button"><a href="/cocktails" className="nav-button-dark">Cocktails</a></button>
              <button className="profile-button"><a href="/profile" className="nav-button-dark">Profile</a></button>
              <button className="logout-button" onClick={handleLogout}><a href="/" className="nav-button-light">Log out</a></button>
            </>
          ) : (
            <>
              <button className="login-button"><a href="/login" className="nav-button-dark">Login</a></button>
              <button className="register-button"><a href="/register" className="nav-button-light">Register</a></button>
            </>
          )}
        </div>
      </nav>
      
    </>
  )
}

export default Navbar