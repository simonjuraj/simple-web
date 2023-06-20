import React from 'react'
import { Route, Routes, Link } from "react-router-dom"

const Navbar = () => {
    return(
    <>
    <nav class="navbar navbar-inverse navbar-expand-lg ">
      <a class="navbar-brand pl-5" href="#">RICK&MORTY</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active pr-5">
            <a class="nav-link" href="#section1"><Link to="/">Home</Link></a>
          </li>
          <li class="nav-item pr-5">
            <a class="nav-link" href="#section2" ><Link to="/products">Products</Link></a>
          </li>
          <li class="nav-item pr-5">
            <a class="nav-link" href="#section3" ><Link to="/about">About us</Link></a>
          </li>
        </ul>
      </div>
    </nav>
    </>
    );
  }

export default Navbar;