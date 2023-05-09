import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import contact from '../../../../Shared/Assests/Images/illustration 1 (contact section).png'
export default function ContactUs() {
  return (
    <div className='contact-bg'>
       <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <div className='contact-form'> 
         <h2>Contact Us</h2>
         <form>
         <input className="form-control contact-input" type="text" placeholder="Your Name" aria-label="default input example"/>
         <input className="form-control contact-input" type="text" placeholder="Enter your Email" aria-label="default input example"/>
         <textarea className="form-control" type="text" placeholder="Leave your Message" aria-label="default input example"/>
         <Link className='btn btn-bg btn-lg btn-about btn-form' to="/submit" role="button">Submit</Link>
       </form>
        </div>
        </div>
        <div className='col-md-6'>
            <img  className='contact-img ' src= {contact} alt='contact-section' />
        </div>
        </div>
       </div>
    </div>
  )
}
