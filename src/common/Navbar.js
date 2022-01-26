import { Link, useNavigate } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'
import React from 'react'
import { isAuthenticated, removeToken } from '../lib/auth'
import { useParams } from 'react-router'

function Navbar() {
  const params = useParams()
  const [searchedValue, setSearchedValue] = React.useState(params.searchedValue)
  // const [cocktails, setCocktails] = React.useState(null)
  const isAuth = isAuthenticated()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   setSearchedValue(e.target.value)
  // }
  // console.log(searchedValue)


  const handleSubmit = (e) => {
    e.preventDefault() 
    searchedValue.toLowerCase()
    setSearchedValue(searchedValue)
    console.log(searchedValue)
    navigate(`/${cocktailId}`)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchedValue(e.target.value)
  }
  // console.log(userWord)


  // const filteredCocktails = (cocktails) => {
  //   return cocktails.name.toLowerCase().includes(searchedValue.toLowerCase())
  // }

  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        {/* <input className="Search-bar" type="search" placeholder="Search cocktails..." onChange={handleSearch}/> */}
        {/* <input type="search" className="search form-control rounded" placeholder="Search" aria-label="Search" onChange={handleSearch}/> */}
        
        {/* <div className="search-bar">
          <form onSubmit={handleSubmit} className="bar">
            <i className="fa fa-search"></i>
            <input
              className="search"
              placeholder="Search"
              type="text"
              onChange={handleChange}
            /> */}

        <form onSubmit={handleSubmit} className="example">
          <i className="fas fa-search"></i>
          <input
            className="search"
            placeholder="Search"
            type="text"
            onChange={handleChange}
          />

          <div>
            <button className="button" type="submit">Search</button>
          </div>
        </form>


        
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