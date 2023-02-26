import React from 'react';
import Footer from './Footer';
import "./Order.css";
import { useDispatch, useSelector } from 'react-redux';
import { orderData,add } from '../store/Orderslice';
import { useNavigate } from 'react-router-dom';
import { reset } from '../store/cartslice';



function Order() {
    const Swal = require('sweetalert2')

    const navigat = useNavigate();
    const dispatch = useDispatch();
    const { cartdata, GrandTotal } = useSelector(state => state.cart)
    const {orderForm } = useSelector(state => state.order)

    const item = cartdata.map((elem) => {
                 const items = elem.name 
                 const qty = elem.quntity 
                return (items +" x "+ qty);
            })
       
    const totalPay = Math.floor(GrandTotal)


    function orderdetail(elem) {
        const name = elem.target.name;
        const value = elem.target.value;
        
        const itm = item;
        const tot = totalPay
        dispatch(orderData({ name, value, itm, tot }))
    }

    function submit(e){
        e.preventDefault();
        // alert("your order recived \n order will be deliverd within 30 minite");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order will be place', 
            showConfirmButton: false,
            timer: 1500
          })
        dispatch(add(orderForm))
        dispatch(reset())
        navigat("/myorder");
    }


    return (
        <div className='orderpage'>
        <div className='col-11 col-md-5 mx-auto pt-4 '>
            <div className='text-center'>
                <h3>Order Detailes</h3>
            </div>

            <form className="row g-3 form mt-4" onSubmit={submit}>
                <div className="col-12  col-md-12 details">
                    <div className='row mx-auto details d-flex justify-content-center align-center text-left'>
                        <div className='col-4 col-md-4 details'>
                            <h5 className='details' >Full Name : </h5>
                        </div>
                        <div className='col-8 col-md-8 details'>
                            <input type="text" className="form-control " id="validationCustom01" placeholder='Enter FullName' name='name' onChange={orderdetail} autoComplete="off" required />
                        </div>
                    </div>
                </div>

                <div className="col-md-12 details">
                    <div className='row mx-auto details d-flex justify-content-center align-center text-left'>
                        <div className='col-4 details'>
                            <h5 className='details' >Mobile Number : </h5>
                        </div>
                        <div className='col-8 details'>
                            <input type="number" className="form-control " id="validationCustom01" placeholder='Enter your Number' name='number' onChange={orderdetail} autoComplete="off" required />
                        </div>
                    </div>
                </div>

                <div className="col-md-12 details">
                    <div className='row mx-auto details d-flex justify-content-center align-center text-left'>
                        <div className='col-4 details'>
                            <h5 className='details' >Address : </h5>
                        </div>
                        <div className='col-8 details'>
                            <textarea type="text" className="form-control " id="validationCustom01" placeholder='Enter deliver address' name='address' onChange={orderdetail} autoComplete="off" required />
                        </div>
                    </div>
                </div>


                <div className='row mx-auto details mt-2'>
                    <div className='col-4 details'>
                        <h5 className='details'>Items : </h5>
                    </div>
                    <div className='col-12 col-sm-12 col-md-8 details'>
                        <ul className='details'>
                            {cartdata.map((elem, index) => {
                                return <li className='details'key={index} >{elem.name} x {elem.quntity}</li>
                            })}
                        </ul>
                    </div>
                </div>

                <div className='row mx-auto details mt-2'>
                    <div className='col-6 col-md-4 details'>
                        <h5 className='details'>Total Pay : </h5>
                    </div>
                    <div className='col-4 details'>
                        <h5 className="form-label">{totalPay} ₹</h5>
                    </div>
                </div>



                <div className="col-12 mb-3 details text-center">
            
                    <button type="submit" className="btn btn-success">Order Now</button>
                    
                
                </div>
            </form>


        </div>

        <Footer />
        </div>
    )
}

export default Order