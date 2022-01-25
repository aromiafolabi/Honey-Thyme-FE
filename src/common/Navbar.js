import { Link } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'


function Navbar() {
  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>

        <div className="nav-buttons">
          <button className="login-button-side"><a href="/cocktails" className="nav-button-login">Cocktails</a></button>
          <button className="login-button-side"><a href="/login" className="nav-button-login">Login</a></button>
          <button className="register-button-side"><a href="/register" className="nav-button-register">Register</a></button>
        </div>
        
      </nav>
      
    </>
  )
}

export default Navbar
