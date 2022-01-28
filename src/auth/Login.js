import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../lib/api'
import { setToken, setId } from '../lib/auth'
import logo from '../assets/logo.jpg'


const initialState = {
  username: '',
  password: '',
}

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)
  const [isError, setIsError] = React.useState(false)
  // const [isAuth, setIsAuth] = React.useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      console.log(formData)
      const res = await loginUser(formData)
      console.log(res.data.token)
      console.log('hello')
      console.log(res.data)
      setId(res.data.id)
      setToken(res.data.token)
      navigate('/cocktails')
    } catch (err) {
      setIsError(true)
    }
  }
  console.log(formData)


  return (
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-7">
            <div className="login-register-card">
              <div className="card">
              
                <div className="card-body p-5">
                  <div className="center">
                    <img src={logo} className="register-logo"></img>
                  </div>
                  <h5 className="login-title text-center">
                    Welcome Back
                  </h5>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input 
                        type="username" 
                        name="username"
                        id="form3Example3cg" 
                        className="form-control form-control-lg" 
                        onChange={handleChange}/>
                      <label className="form-label" >Username</label>
                    </div>

          
                    <div className="form-outline mb-2">
                      <input 
                        type="password" 
                        name="password"
                        id="form3Example4cg" 
                        className="form-control form-control-lg" 
                        onChange={handleChange}/>
                      <label className="form-label" >Password</label>
                    </div>

                    {isError && (
                      <p>Password or Email were incorrect.</p>
                    )}

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="red-button">Login</button>
                    </div>
          
                    <p className="text-center mt-5 mb-0 already">Not a member yet? <button type="button" className="white-button"><a href="/register" className="white-button-light">Register</a></button></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login