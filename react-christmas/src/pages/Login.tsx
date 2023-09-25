import React from 'react'

function Login() {
  return (
    <div>
            <form action="post">
    <div className="container position-absolute top-50 start-50 translate-middle">
        <p className="fs-2 text-center">Login</p>
        <div className="row justify-content-center align-content-center">
        </div>
        <div className="row justify-content-center align-content-center">
        <div className="col-12 col-md-8 col-xl-5">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" />
        </div>
        </div>
        <div className="row justify-content-center align-content-center">
        <div className="col-12 col-md-8 col-xl-5">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password"  id="password" className="form-control" />
            <input type="checkbox"  id="password" defaultChecked />
            <label htmlFor="forgotpassword">Remember me</label>
            <a href="/#" className="forgotpassword">Forgot password?</a>
        </div>
        <div className="row justify-content-center align-content-center">
            <div className="col-12 col-md-8 col-xl-5">
            <button className="btn btn-danger mt-2 buttonATC">Login</button> 
            <p className="text-center pt-2">Don't have an account? <a href="#register">Register</a></p>
            </div>
        </div>
        </div>
    </div>
    </form>

    </div>
  )
}

export default Login;