import { Link, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import logo from '../assets/logo.jpg'
import React from 'react'
import { isAuthenticated, removeToken } from '../lib/auth'



function Navbar() {
  const [sideBarShow, setSideBarShow] = React.useState(false)
  const isAuth = isAuthenticated()
  const navigate = useNavigate()
  const handleSideBar = () => setSideBarShow(!sideBarShow)


  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  return (
    <>
      <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        <Link to="/" className="brand-name">
          <span className="title-word-4">Honey</span>
          <span className="title-word-5">&#38;</span> 
          <span className="title-word-6">Thyme</span>
        </Link>
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

      <nav className="nav burger-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        <Link to="/" className="brand-name"></Link>
        <div className="burger-icon" onClick={handleSideBar}>
          <Hamburger toggled={sideBarShow} toggle={setSideBarShow} />
        </div>
        <div className={
          sideBarShow
            ? 'side-nav-menu-container active'
            : 'side-nav-menu-container'
        }>
          <div onClick={handleSideBar}>
            <div className="nav-buttons">
              <ul>
                {isAuth ? (
                  <>
                    <li className="li-buttons"><a href="/cocktails" className="li-hrefs">Cocktails</a></li>
                    <li className="li-buttons"><a href="/profile" className="li-hrefs">Profile</a></li>
                    <li className="li-buttons" onClick={handleLogout}><a href="/" className="li-hrefs">Log out</a></li>
                  </>
                ) : (
                  <>
                    <div className='auth-burger'>
                      <li className="li-buttons"><a href="/login" className="li-hrefs">Login</a></li>
                      <li className="li-buttons"><a href="/register" className="li-hrefs">Register</a></li>
                    </div>
                  </>
                )}
              </ul>
            </div>

          </div>
          
        </div>
      </nav>

    </>
  )
}

export default Navbar