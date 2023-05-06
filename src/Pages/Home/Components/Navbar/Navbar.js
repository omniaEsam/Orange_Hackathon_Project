import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "./Navbar.css" ;
import Logo from "../../../../Shared/Assests/Images/Logo.png";
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [NavBg , setNavbg] = useState('#22272b80');
  const Location = useLocation();
  useEffect(()=>{
    if(Location.pathname === "/"){
      setNavbg('#22272b80');
    }
    else{
      setNavbg('#22272b');
    }
  })
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor : NavBg}}>
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src= {Logo} alt='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/AboutUs" activeClassName="active">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Services" activeClassName="active">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Testimonials" activeClassName="active">Testimonials</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Contact Us" activeClassName="active">Contact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search Here" aria-label="Search"/>
      </form>
      <Link className='btn  btn-nav rounded-pill' to="/LogIn" role="button">Log in</Link>
    </div>
  </div>
</nav>
    </div>
  )
}
