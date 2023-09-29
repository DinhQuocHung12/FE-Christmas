import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Allproducts from './pages/Allproducts';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={
          <>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </>
        }/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/allproducts' element={<Allproducts/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/' element={<Update/>}/>
        <Route path='/update/:idproducts' element={<Update/>}/>
      </Routes>
    </Router>
  );
}

export default App;
