import React from 'react'
import Navbar from '../Navbar/Navbar'
import AboutImage from "../../../../Shared/Assests/Images/illustration 1 (about section).png" ;
import "./Header.css"
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='aboutUs-contant' >
          <div className='bg'>
        <Navbar/>
        <div className="container">
      <div className='row g-1'>
      <div className="col-sm-12 col-md-6">
        <h1>Our New Product The  Smart Innovative E-Wallet “Tap Cash”</h1>
        <p className='p-about'>Where Consumers can access their accounts, make payments, transfer money, and manage their finances.</p>
        <Link className='btn btn-bg btn-lg btn-about' to="/AboutUs" role="button">Learn More</Link>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <div className="About-image">
          <img className="img-fluid" src= {AboutImage} alt="AboutImage"/>
          </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
