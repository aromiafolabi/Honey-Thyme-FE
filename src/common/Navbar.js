import { Link } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'


function Navbar() {
  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>

        <div className="nav-buttons">
          <button className="login-button-side"><a href="/login">Login</a></button>
          <button className="register-button-side"><a href="/register">Register</a></button>
        </div>
        
      </nav>
      
    </>
  )
}

export default Navbar
