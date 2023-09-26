import React from 'react'

function Gallery() {
  return (
    <div>
            {/* Hình ảnh trưng bày */}
    <nav id="gallery">
    <p className="fw-bold fs-2 text-center mt-2">Our Gallery</p>
    <p className="fw-bold fs-3 text-center">Here are pictures of our products</p>
    <div className="container mt-5">
        <div className="row">
        <div className="col-12 col-md-4 col-xl-4">
            <img src="./images/gallery-img-1.jpg" alt="Sản phẩm giáng sinh của cửa hàng" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-xl-4">
            <img src="./images/gallery-img-2.jpg" alt="Sản phẩm giáng sinh của cửa hàng" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-xl-4">
            <img src="./images/gallery-img-3.jpg" alt="Sản phẩm giáng sinh của cửa hàng" className="img-fluid" />
        </div>
        </div>
        <div className="row mt-3">
        <div className="col-12 col-md-4 col-xl-4">
            <img src="./images/gallery-img-4.jpg" alt="Sản phẩm giáng sinh của cửa hàng" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-xl-4">
            <img src="./images/gallery-img-5.jpg" alt="Sản phẩm giáng sinh của cửa hàng" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-xl-4">
            <img src="./images/gallery-img-6.jpg" alt="Sản phẩm giáng sinh của cửa hàng" className="img-fluid" />
        </div>
        </div>
    </div>
    </nav>

    </div>
  )
}

export default Gallery;