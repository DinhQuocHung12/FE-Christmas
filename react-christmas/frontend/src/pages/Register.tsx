import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';

interface Values {
  name: string;
  email: string;
  password: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

function Register() {
  const [values, setValues] = useState<Values>({
    name: '',
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
    if (!errors.name && !errors.email && !errors.password) {
      axios.post('http://localhost:3001/register', values)
        .then(res => {
          navigate('/login');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <nav id="register" className="mt-5">
        <p className="text-center fw-bold fs-2">Register for more infomation</p>
        <form action='' onSubmit={handleSubmit}>
          <div className="container">
            <div className="row justify-content-center align-content-center">
              <div className="col-auto col-md-8 col-xl-5">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" name='name' onChange={handleInput} />
                {errors.name && <span className='text-danger'>{errors.name}</span>}
              </div>
            </div>
            <div className="row justify-content-center align-content-center">
              <div className="col-auto col-md-8 col-xl-5">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name='email' onChange={handleInput} />
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
  );
}

export default Register;
