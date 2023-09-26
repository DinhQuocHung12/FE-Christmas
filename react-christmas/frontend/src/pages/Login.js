import React, {useState}from 'react'
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [values, setValues] = useState({
    email:'',
    password:'',
  })

  const navigate = useNavigate();

const [errors, setErrors] = useState({})

  const handleInput =(event)=>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === ""){
      axios.post('http://localhost:3001/login', values)
      .then(res => {
        if(res.data === "Success"){
          navigate('/');
        } else{
          alert('No record existed');
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div>
            <form action="" onSubmit={handleSubmit}>
    <div className="container position-absolute top-50 start-50 translate-middle">
        <p className="fs-2 text-center">Login</p>
        <div className="row justify-content-center align-content-center">
        </div>
        <div className="row justify-content-center align-content-center">
        <div className="col-12 col-md-8 col-xl-5">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control"  onChange={handleInput}/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        </div>
        <div className="row justify-content-center align-content-center">
        <div className="col-12 col-md-8 col-xl-5">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password"  name="password" className="form-control" onChange={handleInput}/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
            <input type="checkbox"  id="password" defaultChecked />
            <label htmlFor="forgotpassword">Remember me</label>
            <a href="/#" className="forgotpassword">Forgot password?</a>
        </div>
        <div className="row justify-content-center align-content-center">
            <div className="col-12 col-md-8 col-xl-5">
            <button className="btn btn-danger mt-2 buttonATC" type='submit'>Login</button> 
            <p className="text-center pt-2">Don't have an account? <Link to={"/register"}>Register</Link></p>
            </div>
        </div>
        </div>
    </div>
    </form>

    </div>
  )
}

export default Login;