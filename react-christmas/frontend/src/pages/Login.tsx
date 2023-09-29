import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

interface Values {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

function Login() {
  const [values, setValues] = useState<Values>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState<Errors>({});

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (!errors.email && !errors.password) {
      axios.post('http://localhost:3001/login', values)
        .then(res => {
          if (res.data === "Success") {
            navigate('/');
          } else {
            alert('No record existed');
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container position-absolute top-50 start-50 translate-middle">
          <p className="fs-2 text-center">Login</p>
          <div className="row justify-content-center align-content-center">
            <div className="col-12 col-md-8 col-xl-5">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" className="form-control" onChange={handleInput} />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
          </div>
          <div className="row justify-content-center align-content-center">
            <div className="col-12 col-md-8 col-xl-5">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name="password" className="form-control" onChange={handleInput} />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
              <a href="/#" className="forgotpassword">Forgot password?</a>
            </div>
          </div>
          <div className="row justify-content-center align-content-center">
            <div className="col-12 col-md-8 col-xl-5">
              <button className="btn btn-danger mt-2 buttonATC" type='submit'>Login</button>
              <p className="text-center pt-2">Don't have an account? <Link to={"/register"}>Register</Link></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
