import React from 'react'
import { registerUser } from '../lib/api'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'

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
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-7">
            <div className="card">

              <div className="card-body p-5">
                <div className="center">
                  <img src={logo} className="register-logo"></img>
                </div>
                <h5 className="register-title text-center">
                    Welcome to Honey &#38; Thyme
                </h5>
                <p className="register-subtitle text-center">Find new cocktails to try</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-2">
                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={handleChange}/>
                    <label className="form-label" >Your Name</label>
                  </div>

                  <div className="form-outline mb-2">
                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={handleChange}/>
                    <label className="form-label" >Your Email</label>
                  </div>

                  <div className="form-outline mb-2">
                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={handleChange}/>
                    <label className="form-label" >Password</label>
                  </div>

                  <div className="form-outline mb-2">
                    <input type="password" id="form3Example4cdg" className="form-control form-control-lg" onChange={handleChange}/>
                    <label className="form-label" >Repeat password</label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="button" className="red-button"><a href="/login" className="red-button-dark">Register</a></button>
                  </div>

                  <p className="text-center mt-5 mb-0 already">Already a member? <button type="button" className="white-button"><a href="/login" className="white-button-light">Login</a></button></p>
                </form>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register



// <div className="card text-center" id="register-card">
//       <div className="register-header">
//         <img src={logo} className="register-logo"></img>
//         <h5 className="register-title">
//         Welcome to Honey &#38; Thyme
//         </h5>
//         <p className="register-subtitle">Find new cocktails to try</p>
//         <form className="register-text" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input className="regInput"
//               placeholder='First Name'
//               name='first name'
//               onChange={handleChange}
//             />
//             <input
//               placeholder='Last Name'
//               name='last name'
//               onChange={handleChange}
//             />
//             <input
//               placeholder='Email'
//               name='email'
//               onChange={handleChange}
//             />
//             <input
//               placeholder='Username'
//               name='username'
//               onChange={handleChange}
//             />
//             <input
//               placeholder='Password'
//               type="password"
//               name='password'
//               onChange={handleChange}
//             /> 
//             <input
//               placeholder='Confirm password'
//               type="password"
//               name='passwordConfirmation'
//               onChange={handleChange}
//             />
//             <button className="register btn btn-primary" type='submit' id="reg">Register</button>
//           </div>
//         </form>
//         <div className="form-bottom">
//           <p>Already a member?</p>
//           <a href="/login" className="login btn btn-primary" id="log">Login</a>
//         </div>
//       </div>
//     </div>