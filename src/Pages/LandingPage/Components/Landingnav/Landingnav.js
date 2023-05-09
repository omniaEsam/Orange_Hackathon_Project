import React from 'react';
import './Landingnav.css';
import { Link } from 'react-router-dom';
import Logo from '../../../../Shared/Assests/Images/Logo.png';

export default function Landingnav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container">
    <Link className="navbar-brand" to="/home">
      <img src= {Logo} alt='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link className='btn  btn-nav rounded-pill land-btn' to="/getTheApp" role="button">Get The App</Link>
    </div>
  </div>
</nav>
    </div>
  )
}
