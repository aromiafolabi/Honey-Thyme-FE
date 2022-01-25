function Login() {
  return (
    <>
      <div className="login-body">
        <h5 className="login-title">Log in</h5>
        <form className="login-text" onSubmit>
          <label className="authLabel" htmlFor="email">

          </label>
          <input 
            placeholder='Username'
            name='username'
            onChange
          />
          <input
            placeholder='Password'
            name='password'
            type='password'
            onChange
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