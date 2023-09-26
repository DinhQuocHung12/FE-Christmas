import React from 'react'

function Products() {
  return (
    <div>
            {/* Shop mua bán */}
    <nav id="products" className="mt-5">
    <p className="fw-bold fs-2 text-center">Our Shop</p>
    <div className="container">
        <div className="row">
        <div className="col-12 col-md-12 col-xl-4">
            <div className="card d-md-block m-md-auto" style={{width: '23rem'}}>
            <img src="./images/product-1.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Christmas Decor</h5>
                <p className="card-text fs-5 text-danger text-center">$140</p>
                <button className="btn btn-danger buttonATC">Add To Cart</button>
            </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-xl-4">
            <div className="card d-md-block m-md-auto" style={{width: '23rem'}}>
            <img src="./images/product-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Christmas Decor</h5>
                <p className="card-text fs-5 text-danger text-center">$140</p>
                <button className="btn btn-danger buttonATC">Add To Cart</button>
            </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-xl-4">
            <div className="card d-md-block m-md-auto" style={{width: '23rem'}}>
            <img src="./images/product-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Christmas Decor</h5>
                <p className="card-text fs-5 text-danger text-center">$140</p>
                <button className="btn btn-danger buttonATC">Add To Cart</button>
            </div>
            </div>
        </div>
        </div>
        <div className="row mt-5">
        <div className="col-12 col-md-12 col-xl-4">
            <div className="card d-md-block m-md-auto" style={{width: '23rem'}}>
            <img src="./images/product-4.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Christmas Decor</h5>
                <p className="card-text fs-5 text-danger text-center">$140</p>
                <button className="btn btn-danger buttonATC">Add To Cart</button>
            </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-xl-4">
            <div className="card d-md-block m-md-auto" style={{width: '23rem'}}>
            <img src="./images/product-5.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Christmas Decor</h5>
                <p className="card-text fs-5 text-danger text-center">$140</p>
                <button className="btn btn-danger buttonATC">Add To Cart</button>
            </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-xl-4">
            <div className="card d-md-block m-md-auto" style={{width: '23rem'}}>
            <img src="./images/product-6.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Christmas Decor</h5>
                <p className="card-text fs-5 text-danger text-center">$140</p>
                <button className="btn btn-danger buttonATC">Add To Cart</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </nav>

    </div>
  )
}

export default Products;