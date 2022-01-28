import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function PopUp({ trigger, setTrigger }) {
  
  return (
    <div>
      {trigger ? (
        <>
          <div className="popup">
            <div className="popup-card text-center">
              <div className="close-btn-area">
                <a className="close" onClick={() => setTrigger(false)}>x</a>
              </div>
              <div className="center">
                <img src={logo} className="register-logo"></img>
              </div>
              <div className="card-header">
                <h1 className="popup-header">Welcome To Honey&Thyme</h1>
              </div>

              <div className="card-body">  

                <div className="popup-card-title">
                  <h2 className="find-here">Find your new cocktail recipe here!</h2>
                </div>

                <div className="popup-btns-container">
                  <div>
                    <button className="login-button"><a href="/login" className="nav-button-dark">Login</a></button>
                  </div>

                  <div>
                    <button className="register-button"><a href="/register" className="nav-button-light">Register</a></button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </>
      ) : (''
      )}
    </div>
  )
}

export default PopUp