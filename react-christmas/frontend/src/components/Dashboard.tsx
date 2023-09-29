import React from 'react'
import { Link } from 'react-router-dom';
import {Nav} from "react-bootstrap";

function Dashboard() {
  return (
    <div>
        <div>
    <div className="offcanvas offcanvas-start w-25" tabIndex={-1} id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
        <div className="offcanvas-header">
        <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas"></h6>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body px-0">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
            <li className="nav-item">
            <Nav.Link as={Link} to={"/"} ><i className="fs-5 bi-house" />Home</Nav.Link>
            </li>
            <li>
            <Nav.Link as={Link} to={"/products"} ><i className="fs-5 bi-table" />Order</Nav.Link>
            </li>
            <li>
            <Nav.Link as={Link} to={"/allproducts"} ><i className="fs-5 bi-grid" />Products</Nav.Link>
            </li>
            <li>
            <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-people" /><span className="ms-1 d-none d-sm-inline">Customers</span> </a>
            </li>
        </ul>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
        <div className="col min-vh-100 py-3">
            {/* toggler */}
            <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
            <i className="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" />
            </button>
            Admin Page
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard;