import { Link } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'


function Navbar() {
  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>

        <div className="nav-buttons">
          <button className="cocktails-button"><a href="/cocktails" className="nav-button-dark">Cocktails</a></button>
          <button className="login-button"><a href="/login" className="nav-button-dark">Login</a></button>
          <button className="register-button"><a href="/register" className="nav-button-light">Register</a></button>
        </div>
        
      </nav>
      
    </>
  )
}

export default Navbar
