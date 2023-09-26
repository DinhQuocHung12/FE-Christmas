import React, {useState} from 'react'
import axios from 'axios'
import SignupValidation from './SignupValidation';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';

function Register() {


  const [values, setValues] = useState({
    name:'',
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
    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:3001/register', values)
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log(err));
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:3001/register', values)
  //   .then(res => console.log(res))
  //   .then(err => console.log(err));
  // }


  return (
    <div>
            {/* Form đăng kí */}
    <nav id="register" className="mt-5">
    <p className="text-center fw-bold fs-2">Register for more infomation</p>
    <form action='' onSubmit={handleSubmit}>
        <div className="container">
        <div className="row justify-content-center align-content-center">
            <div className="col-auto col-md-8 col-xl-5">
            <label className="form-label">Full name</label>
            <input type="text" className="form-control" name='name'onChange={handleInput} />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
        </div>
        <div className="row justify-content-center align-content-center">
            <div className="col-auto col-md-8 col-xl-5">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name='email' onChange={handleInput}/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
        </div>
        <div className="row justify-content-center align-content-center">
            <div className="col-auto col-md-8 col-xl-5">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name='password' onChange={handleInput} />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
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