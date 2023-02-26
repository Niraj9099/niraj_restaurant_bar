import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <>

      <div className="row justify-content-evenly pt-2 pb-5 bg-dark text-white mt-5 footer mx-auto">
        <div className="col-md-3 pt-4">
          <h5 className="pb-2">Niraj Restaurant Bar</h5>
          <p>Niraj Restaurant offers a unique dining experience with high-quality foods, authentic and original recipes, and fast delivery service. Visit us and enjoy delicious food today!</p>
        </div>
        <div className="col-md-3 pt-4">
          <h5 className="pb-2">Important Link</h5>
          <p>
            <NavLink to="/" className='footerlink'>Home</NavLink><br />
            <NavLink to="/items" className='footerlink'>Items</NavLink><br />
            <NavLink to="/cart" className='footerlink'>Order Cart</NavLink><br />
            <NavLink to="/myorder" className='footerlink'>My Order</NavLink><br />
            <NavLink to="/contect" className='footerlink'>Contact us</NavLink><br />
          </p>
        </div>
        <div className="col-md-3 pt-4">
          <h5 className="pb-2">Contact Us</h5>
          <p>Niraj Restaurant Bar, Gujarat <br />
            india - 361120 <br />
            <i className="bi bi-telephone"></i> Mobile No : 9999999999
            <br/>
            <NavLink to="https://www.linkedin.com/in/niraj-bhensdadiya-a518b325b" target='_blank'><i className="bi bi-linkedin social-icon"></i></NavLink>
            <NavLink to="https://instagram.com/niraj_bhensdadiya?igshid=ZDdkNTZiNTM=" target='_blank'><i className="bi bi-instagram social-icon"></i></NavLink>
            <NavLink to="https://www.facebook.com/niraj.bhensdadiya.5?mibextid=ZbWKwL" target='_blank'><i className="bi bi-facebook social-icon"></i></NavLink>
          </p>
        </div>
      </div>

      {/* <!-- copyright --> */}
      <div className="row bg-secondary text-white text-center copyright">
        <div className="col-12 ">
          <p>copyright &copy; by Niraj Restaurant Bar, All Right Reserved</p>
        </div>
      </div>

    </>
  )
}

export default Footer;