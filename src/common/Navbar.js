import { Link } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'


function Navbar() {
  return (
    <>
      <nav>
        <Link to="/"><img src={logo} className="logo"></img></Link>

        <div>
          <Link to="/register" className="nav-item">Register</Link>
          <Link to="/login" className="nav-item">Log in</Link>
        </div>
        
      </nav>
      
    </>
  )
}

export default Navbar
