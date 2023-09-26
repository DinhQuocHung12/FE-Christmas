import React from 'react'

function Home() {
  return (
    <div>
  {/* Nút mua hàng và label home */}
  <nav id="home">
    <img src="./images/home-bg-1.png" alt="Background giáng sinh" className="responsive" />
    <div className="text-sale d-flex justify-content-center align-items-center">
      <p className="hide1 fs-2 fw-bold">HOLIDAY SALE 30%</p>
    </div>
    <div className="button1">
      <button className="btn btn-danger"> SHOP NOW</button>
    </div>
  </nav>
  {/* 6 bức ảnh về giáng sinh */}
  <nav className="ShowSP">
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 col-md-4 col-xl-2">
          <img src="./images/category-1.png" alt="Hình ảnh về vật dụng giáng sinh" />
          <p>Christmas Decoration</p>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <img src="./images/category-2.png" alt="Hình ảnh về vật dụng giáng sinh" />
          <p>Christmas Decoration</p>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <img src="./images/category-3.png" alt="Hình ảnh về vật dụng giáng sinh" />
          <p>Christmas Decoration</p>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <img src="./images/category-4.png" alt="Hình ảnh về vật dụng giáng sinh" />
          <p>Christmas Decoration</p>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <img src="./images/category-5.png" alt="Hình ảnh về vật dụng giáng sinh" />
          <p>Christmas Decoration</p>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <img src="./images/category-6.png" alt="Hình ảnh về vật dụng giáng sinh" />
          <p>Christmas Decoration</p>
        </div>
      </div>
    </div></nav>
</div>

  )
}

export default Home;