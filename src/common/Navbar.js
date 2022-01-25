import { Link } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'
import React from 'react'


function Navbar() {
  const [searchedValue, setSearchedValue] = React.useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchedValue(e.target.value)
  }
  console.log(searchedValue)
  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        <input className="Search-bar" type="search" placeholder="Search cocktails..." onChange={handleSearch}/>
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
