function Register() {
  return (
    <>
      <div className="register-header">
        <h5 className="register-title">
        Create an Account
        </h5>
        <form className="register-text" onSubmit>
          <label className="authLabel" htmlFor="firstname">

          </label>
          <input className="regInput"
            placeholder='First Name'
            name='first name'
            onChange
          />
          <input
            placeholder='Last Name'
            name='last name'
            onChange
          />
          <input
            placeholder='Email'
            name='email'
            onChange
          />
          <input
            placeholder='Username'
            name='username'
            onChange
          />
          <input
            placeholder='Password'
            type="password"
            name='password'
            onChange
          /> 
          <input
            placeholder='Confirm password'
            type="password"
            name='passwordConfirmation'
            onChange
          />
          <button className="register btn btn-primary" type='submit' id="reg">Register</button>
        </form>
        <a href="/login" className="login btn btn-primary" id="log">Login</a>
      </div>
    </>
  )
}

export default Register