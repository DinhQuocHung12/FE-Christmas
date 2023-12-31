import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Product {
  title: string;
  description: string;
  price: number | null;
  cover: string;
}

const Update: React.FC = () => {
  const [products, setProducts] = useState<Product>({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProducts(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(products);

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/allproducts", products);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className='form1'>
      <h1 className='text-center mt-5'>Update Products</h1>
      <div className='container position-absolute top-50 start-50 translate-middle'>
        <div className='row justify-content-center align-content-center mb-3'>
          <div className='col-xl-6'>
            <input type="text" placeholder='title' className='form-control' onChange={handleChange} name='title'/>
          </div>
        </div>
        <div className='row justify-content-center align-content-center mb-3'>
          <div className='col-xl-6'>
            <input type="text" placeholder='description' className='form-control' onChange={handleChange} name='description'/>
          </div>
        </div>
        <div className='row justify-content-center align-content-center mb-3'>
          <div className='col-xl-6'>
            <input type="number" placeholder='price' className='form-control' onChange={handleChange} name='price'/>
          </div>
        </div>
        <div className='row justify-content-center align-content-center mb-3'>
          <div className='col-xl-6'>
            <input type="text" placeholder='cover' className='form-control' onChange={handleChange} name='cover'/>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className='btn btn-primary buttonAdd'>Update</button>
    </form>
  );
};

export default Update;
