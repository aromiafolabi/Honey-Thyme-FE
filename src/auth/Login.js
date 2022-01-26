import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'
import { getAllCocktails } from '../lib/api'

const initialState = {
  email: '',
  password: '',
}

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)
  const [isError, setIsError] = React.useState(false)
  const [profiles, setProfiles] = React.useState([])
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllCocktails()
        setProfiles(data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(formData)
      console.log(res.data.token)
      setToken(res.data.token)
      navigate('/cocktails')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <>
      <div className="login-body">
        <h5 className="login-title">Log in</h5>
        <form className="login-text" onSubmit={handleSubmit}>
          <label className="authLabel" htmlFor="email">

          </label>
          <input 
            placeholder='Username'
            name='username'
            onChange={handleChange}
          />
          <input
            placeholder='Password'
            name='password'
            type='password'
            onChange={handleChange}
          />
          
          <button type='submit' className="authButton">
          Log in
          </button>
        </form>
        <p className="card-text-register"><small className="text-muted">
          Dont have an account? </small>
        <button className="regButton"><a href="/register">Register</a></button>
        </p>
      </div>
    </>
  )
}

export default Login