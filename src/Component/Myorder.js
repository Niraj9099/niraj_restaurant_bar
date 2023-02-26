import React from 'react';
import Footer from './Footer';
import { Gujjubiteimg } from './Gujjubiteimg';

import "./Myorder.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Myorder = () => {

    const navigate = useNavigate()

    const {orderData} = useSelector(state => state.order)

    function handelordernow() {
        navigate("/items")
    }


    return (
        <>
            <div className='orderpage'>
                <Gujjubiteimg />

                <div className='text-center'><h3>My order list</h3></div>
                <div className='row row-cols-3 row-cols-md-3 g-0 ' style={{ background: "transparent" }} >

                    {orderData.length < 1 ?
                        <div className='col-5 mx-auto'>
                            <div className='text-center'>
                                <h4 className='text-center mt-5'>Order data Empty !</h4>
                                <h5 className='text-center'>Please..</h5>
                                <button className='ordernow mt-3' onClick={handelordernow}>Ourder Now</button>
                            </div>
                        </div>
                        :
                        orderData.map((elem, index) => {
                            return (
                                <>
                                    <div className="card mx-auto mt-3 ordercart" key={index} >
                                        <div className="card-header">
                                           {index+1}. Order Details
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Name : {elem.name} </li>
                                            <li className="list-group-item">Number : {elem.number}</li>
                                            <li className="list-group-item orderaddress">Address : {elem.address} </li>
                                            <li className="list-group-item orderitem" >Item : <ol>{elem.item.map((elem, index) => <li key={index}>{elem}</li>)}</ol> </li>
                                            <li className="list-group-item">Bill Amount : {elem.totalPay}₹</li>
                                            <li className="list-group-item" style={{ color: "green" }}>
                                                    ✔ Order Confirmed
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )

                        })

                    }



                </div>
                <Footer />
            </div>
        </>
    )
}
