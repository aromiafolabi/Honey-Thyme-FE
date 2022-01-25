import { Link } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'


function Navbar() {
  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>

        <div className="nav-buttons">
          <button to="/login" className="login-button-side">Login</button>
          <button to="/register" className="register-button-side">Register</button>
        </div>
        
      </nav>
      
    </>
  )
}

export default Navbar
