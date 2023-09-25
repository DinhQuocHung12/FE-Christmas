import React from 'react'

function Register() {
  return (
    <div>

            {/* Form đăng kí */}
    <nav id="register" className="mt-5">
    <p className="text-center fw-bold fs-2">Register for more infomation</p>
    <form action="post">
        <div className="container">
        <div className="row justify-content-center align-content-center">
            <div className="col-auto col-md-8 col-xl-5">
            <label htmlFor="name" className="form-label">Full name</label>
            <input type="text" id="name" className="form-control" />
            </div>
        </div>
        <div className="row justify-content-center align-content-center">
            <div className="col-auto col-md-8 col-xl-5">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" />
            </div>
        </div>
        <div className="row justify-content-center align-content-center">
            <div className="col-auto col-md-8 col-xl-5">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" />
            <button className="btn btn-danger mt-2 buttonATC">Register</button> 
            </div>
        </div>
        </div>
    </form>
    </nav>

    </div>
  )
}

export default Register;