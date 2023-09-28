import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/allproducts");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fecthProducts(); // Gọi hàm fecthProducts
  }, []); // Thêm mảng rỗng để chỉ chạy một lần khi component được mount

  const handleDelete = async (idproducts) => {
    try {
      await axios.delete("http://localhost:3001/allproducts/"+idproducts);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-center">Add sản phẩm</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div
              className="col-12 col-md-12 col-xl-4 picture"
              key={product.idproducts}
            >
              <div className="card" style={{ width: "18rem" }}>
                {product.cover && (
                  <img
                    src={product.cover}
                    className="card-img-top imgallproducts img-fluid"
                    alt=""
                  />
                )}
                <div className="card-body">
                  <h2 className="text-center">{product.title}</h2>
                  <p className="text-center">{product.description}</p>
                  <span className="fs-5 text-danger text-center">
                    {product.price}
                  </span>
                  <div>
                    <Link to="/add">
                      <button type="button" className="btn btn-primary ms-3">
                        Add
                      </button>
                    </Link>
                    {/*  */}
                    <Link to={`/update/${product.idproducts}`}>
                      <button type="button" className="btn btn-primary ms-3">
                        Update
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger ps-3 ms-2"
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
    </div> // This closing tag was missing
  );
};

export default Allproducts;
