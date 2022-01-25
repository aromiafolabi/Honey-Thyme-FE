import React from 'react'
import { registerUser } from '../lib/api'
import { useNavigate } from 'react-router-dom'

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(formData)
      navigate.push('/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <>
      <div className="register-header">
        <h5 className="register-title">
        Create an Account
        </h5>
        <form className="register-text" onSubmit={handleSubmit}>
          <label className="authLabel" htmlFor="firstname">

          </label>
          <input className="regInput"
            placeholder='First Name'
            name='first name'
            onChange={handleChange}
          />
          <input
            placeholder='Last Name'
            name='last name'
            onChange={handleChange}
          />
          <input
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
          <input
            placeholder='Username'
            name='username'
            onChange={handleChange}
          />
          <input
            placeholder='Password'
            type="password"
            name='password'
            onChange={handleChange}
          /> 
          <input
            placeholder='Confirm password'
            type="password"
            name='passwordConfirmation'
            onChange={handleChange}
          />
          <button className="register btn btn-primary" type='submit' id="reg">Register</button>
        </form>
        <a href="/login" className="login btn btn-primary" id="log">Login</a>
      </div>
    </>
  )
}

export default Register