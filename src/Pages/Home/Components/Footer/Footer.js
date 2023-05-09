import React from 'react'
import logo from '../../../../Shared/Assests/Images/Logo.png';
import twitter from '../../../../Shared/Assests/Images/Group 97.png';
import facbook from '../../../../Shared/Assests/Images/Group 98.png';
import instagram from '../../../../Shared/Assests/Images/Group 99.png';
import linkedin from '../../../../Shared/Assests/Images/Group 100.png';
import googleplay from '../../../../Shared/Assests/Images/Badge.png';
import appstore from'../../../../Shared/Assests/Images/Badge-1.png';
import './Footer.css' ;
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='footer-bg'>
        <div className= 'container'>
        <div className='row'>
            <div className='col-md-4'>
            <img className='footer-logo' src={logo} alt='logo' />
            <p className='footer-desc'>Tap Cash is the ultimate payment solution for your everyday needs. With our app you can make transactions with just a few taps on your phone. </p>
            <h6 className='footer-title'>Follow us on:</h6>
             <div className='d-flex'>
              <img className='footer-icon' src={twitter} alt='twitter' />
              <img className='footer-icon' src={facbook} alt='facebook' />
              <img className='footer-icon' src={instagram} alt='instagram' />
              <img className='footer-icon' src={linkedin} alt='linkedin' />
             </div>
            </div>
            <div className='col-md-4'>
        <h6 className='footer-list'>Company Info</h6>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/AboutUs" activeClassName="active">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Services" activeClassName="active">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Contact Us" activeClassName="active">Contact Us</NavLink>
        </li>
      </ul>
      <h6 className='footer-title'>Coming Soon on :</h6>
        <img className='store me-2' src={googleplay} alt="googleplay" />
         <img className='store' src={appstore} alt="appstore" />
            </div>
            <div className='col-md-4'>
            <h6 className='footer-list'>Company Info</h6>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link"  to="/" activeClassName="active">FQ&A</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/" activeClassName="active">Terms and conditions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/" activeClassName="active">Cookies Settings</Link>
        </li>
      </ul>
            </div>
        </div>
        <div className='line'></div>
       <div className='d-flex copy-right'>
       <p>Tap Cash - 2023</p>
       <p className='all-rights'> All rights Reserved @Tap Cash.com </p>
       </div>
    </div>
    </div>
  )
}
