import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navlink.css";
import { useSelector } from 'react-redux';

export const Navlink = () => {
    const { cartdata } = useSelector(state => state.cart)
    return (
        <div className='nav'>
            <div className="container-fluid">
                        
                        <div className='row'>
                        
                        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
                            <div className="col-12 col-md-6 col-sm-6 text-left">
                                <NavLink className="navbar-brand" to="/">Niraj Restaurant Bar</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>

                                <div className="collapse navbar-collapse col-4 col-sm-4  text-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/items">Item</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contect">Contect</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/myorder">MyOrder</NavLink>
                                        </li>

                                    </ul>
                                </div>
                           
                     

                        <div className='col-2 col-sm-2 text-center'>
                        <NavLink className="Cart" to="/cart">
                            <button type="button" className="btn carticon position-relative">
                                🛒
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartdata.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </NavLink>
                        </div>
                        </nav>
                        </div>
                    </div>
                </div>
           
    )
}
