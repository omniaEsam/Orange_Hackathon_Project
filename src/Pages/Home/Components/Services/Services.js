import React from 'react';
import dollar from '../../../../Shared/Assests/Images/Group 17 (1).png';
import shopping from '../../../../Shared/Assests/Images/Group 17 (2).png';
import tracking from '../../../../Shared/Assests/Images/Group 17 (3).png';
import './Services.css';
export default function Services() {
  return (
    <div className='services-section'>
      <div className='services-desc'>
        <h2>
        Streamline Your Finances with Our E-Wallet: Safe, Secure, and Convenient
         </h2>
         <p> 
            Here you can check our innovative Services Such as Transfer & Collecting Money,
             Online Shopping , Tracking your Expenses and so much more... 
        </p>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className='col-md-4'>
        <div className='row'>
        <div className="carousel-item active">
    <div className='slider'>
        <div className='slider-icon d-flex'>
            <img src={dollar} alt='icon'/>
        </div>
        <div className='slider-desc'>
            <h5>Transfer Money</h5>
            <p>Easily transfer/Receive money from & to other users, who may be located in the same country or even in another country.</p>
        </div>
      </div> 
    </div>
    <div className="carousel-item">
    <div className='slider'>
        <div className='slider-icon d-flex'>
        <img src={shopping} alt='icon'/>
        <h5>Online Shopping</h5>
        </div>
        <div className='slider-desc'>
            <p>Make payments to merchants, either online or in-person, using their mobile devices.</p>
        </div>
      </div> 
    </div>
    <div className="carousel-item">
    <div className='slider'>
        <div className='slider-icon d-flex'>
        <img src={tracking} alt='icon'/>
        <h5>System Tracking </h5>
        </div>
        <div className='slider-desc'>
            <p>Track your spending & Keep a record of every pound you spend. This will help you identify where your money is going and where you can cut back.</p>
        </div>
      </div> 
    </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
</div>
 
  )
}
