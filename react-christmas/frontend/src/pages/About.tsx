import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
        {/* Giới thiệu sản phẩm */}
<nav id="about">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-md-12 col-xl-6">
        <img src="./images/about-img.png" alt="Hình ảnh về giáng sinh" className="about" />
      </div>
      <div className="col mt-5 bg-light">
        <p className="fs-2 text-center fw-bold">Christmas Sales 30%</p>
        <p>Christmas is an annual festival celebrating the birth of Jesus. There are many things that people can do during this holiday, such as decorating houses, gathering with family and friends, exchanging presents, etc. I love Christmas because I can receive many lovely gifts.
          May this gift remind you of how special you are to me.
        </p>
       
        <Link to={`/gallery`}><button className="btn btn-danger buttonrm" type="submit">Read More</button></Link>
        <div className="container">
          <div className="row mt-5">
            <div className="col-4" style={{backgroundColor: 'rgb(238, 238, 238)'}}>
              <p className="icon-tree mt-2"><i className="fa-solid fa-tree fs-1 text-success" /></p>
              <p>Christmas Tree</p>
            </div>
            <div className="col-4" style={{backgroundColor: 'rgb(238, 238, 238)'}}>
              <p className="icon-cookie mt-2"><i className="fa-solid fa-cookie fs-1" style={{color: 'orange'}} /></p>
              <p>Christmas Cookie</p>
            </div>
            <div className="col-4" style={{backgroundColor: 'rgb(238, 238, 238)'}}>
              <p className="icon-gift mt-2"><i className="fa-solid fa-gift fs-1 text-danger" /></p>
              <p>Christmas Gifts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default About;