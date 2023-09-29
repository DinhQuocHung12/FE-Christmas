import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Product {
  idproducts: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

const Allproducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<Product[]>("http://localhost:3001/allproducts");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts(); // Call fetchProducts function
  }, []); // Add empty array to run only once when component is mounted

  const handleDelete = async (idproducts: number) => {
    try {
      await axios.delete(`http://localhost:3001/allproducts/${idproducts}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
        <p className="fw-bold fs-2 text-center">Our Shop</p>
    <div className="container">
        <div className="row mt-5">
        {products.map((product)=>(
        <div className="col-12 col-md-12 col-xl-4" key={product.idproducts}>
            <div className="card d-md-block m-md-auto" style={{width: '23rem'}}>
            <img src={product.cover} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{product.title}</h5>
                <p className="card-text fs-5 text-center">{product.description}</p>
                <p className="card-text fs-5 text-danger text-center">{product.price}$</p>
                <div>
                    <Link to="/add">
                      <button type="button" className="btn btn-primary ms-2">
                        Add
                      </button>
                    </Link>
                    {/*  */}
                    <Link to={`/update/${product.idproducts}`}>
                      <button type="button" className="btn btn-primary ms-5">
                        Update
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger ps-3 ms-5"
                      onClick={() => handleDelete(product.idproducts)}>
                      Delete
                    </button>
                  </div>
            </div>
            </div>
        </div>
        ))}
        </div>
    </div>
    
        </div>
  );
};

export default Allproducts;
