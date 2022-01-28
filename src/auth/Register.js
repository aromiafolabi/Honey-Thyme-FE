import React from 'react'
import { registerUser } from '../lib/api'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import axios from 'axios'
import Loading from '../common/Loading'

const initialState = {
  username: '',
  profileImage: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)
  const [isUploadingImage, setIsUploadingImage] = React.useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(formData)
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  console.log(formData)

  const handleImageUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    setIsUploadingImage(true)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, profileImage: res.data.url })
    console.log(res.data.url)
    setIsUploadingImage(false)
  }


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
                  <h5 className="register-title text-center">
                    Welcome to Honey &#38; Thyme
                  </h5>
                  <p className="register-subtitle text-center">Find new cocktails to try</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input 
                        type="text" 
                        name="username"
                        id="form3Example1cg" 
                        className="form-control form-control-lg" 
                        onChange={handleChange}/>
                      <label className="form-label" >Username</label>
                    </div>

                    <div className="form-outline mb-2">
                      {isUploadingImage && <Loading />} 
                      <input 
                        type="file"
                        name="profileImage"
                        id="form3Example3cg" 
                        accept="image/png, image/jpg"
                        className="form-control form-control-lg" 
                        onChange={handleImageUpload}/>
                      <label className="form-label" >Profile Image</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input 
                        type="email" 
                        name="email"
                        id="form3Example3cg" 
                        className="form-control form-control-lg" 
                        onChange={handleChange}/>
                      <label className="form-label" >Your Email</label>
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

                    <div className="form-outline mb-2">
                      <input 
                        type="password" 
                        name="passwordConfirmation"
                        id="form3Example4cdg" 
                        className="form-control form-control-lg" 
                        onChange={handleChange}/>
                      <label className="form-label" >Repeat password</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="red-button">Register</button>
                    </div>

                    <p className="text-center mt-5 mb-0 already">Already a member? <button type="button" className="white-button"><a href="/login" className="white-button-light">Login</a></button></p>
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

export default Register
