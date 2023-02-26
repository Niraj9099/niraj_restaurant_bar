import React, { useEffect } from 'react';
import Footer from './Footer';
import { Gujjubiteimg } from './Gujjubiteimg';
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux';
import { plus, remove, mines, total } from '../store/cartslice';
import { NavLink, useNavigate } from 'react-router-dom';


export const Cart = () => {
  const navigat = useNavigate()
  const dispatch = useDispatch()
  const { cartdata, totle, gst } = useSelector(state => state.cart)
  const topay = Math.trunc(totle + gst)


  const pluselem = (id) => {
    dispatch(plus(id))

  }

  const min = (id) => {
    dispatch(mines(id))

  }

  const removeElem = (id) => {
    dispatch(remove(id))
  }

  useEffect(() => {
    dispatch(total())
  }, [cartdata, dispatch])

  const handelordernow = () => {
     navigat("/items")
  }

  return (
    <>
    <div className='cartpage'>
      <Gujjubiteimg />
      <div className='container-fluid'>
        <div className='row mx-auto'>
          <div className='col-12 col-md-11'>
            <div className='row'>
              <div className='col-12 col-md-6 mx-auto itemscart mx-auto mb-3'>
                <h3 className='text-center'>Your selected Items</h3>
                <hr />

                {cartdata.length < 1 ?
                  <div className='text-center'>
                    <h5 className='text-center'>Cart data Empty !</h5>
                    <button className='ordernow mt-5' onClick={handelordernow}>Ourder Now</button>
                  </div>

                  : 
                  <div>
                    <div>
                    {cartdata.map((elm, index) => {
                    return (
                      <div className='row mt-3 cartdata' key={index}>
                        <div className='col-6 col-md-4 image'>
                          <img src={elm.img} className='img-fluid' alt='img'></img>
                        </div>
                        <div className='col-6 col-md-6 text mt-2'>
                          <h4>{elm.name}</h4>
                          <h5>Price : {elm.price}</h5>
                          <div className='row '>
                            <div className='col-12 col-md-8'>
                              <div className='row text-center'>
                              <div className='col-4'><button className=' buton' onClick={() => pluselem(elm.id)}>+</button></div>
                              <div className='col-4 qty'>{elm.quntity}</div>
                              <div className='col-4'><button className=' buton' onClick={() => min(elm.id)}>-</button></div>
                              </div>
                            </div>
                            <div className='col-12 col-md-4 '>
                              <button className='btn btn-danger removebtn' onClick={() => removeElem(elm.id)} >Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                    )
                  })}
                    </div>
                    <div className='text-center'>
                    <button className='ordernow mt-5' onClick={handelordernow}>add More Item</button>
                    </div>
                  </div>
                  
                  
                  
                  
                  
                }
              </div>
              <div className='col-12 col-md-4'>
                <div className='bill'>
                  <h4 className='text-center'>Your Bill</h4>
                  <hr />
                  <div className='row mx-auto'>
                    <div className='col-8 col-md-6 text-center bill-text'>Total bill :</div>
                    <div className='col-4 col-md-6 text-center num'>{totle}</div>
                  </div>
                  <div className='row mx-auto'>
                    <div className='col-8 col-md-6  text-center bill-text'>Gst 18% :</div>
                    <div className='col-4 col-md-6 text-center num'>+ {gst}</div>
                  </div>
                  <hr />
                  <div className='row mx-auto'>
                    <div className='col-8 col-md-6 text-center bill-text'>To Pay :</div>
                    <div className='col-4 col-md-6 text-center num'>{topay}</div>
                  </div>
                  {topay !== 0 ?
                    <div className=' order text-center mt-3 pt-3'>
                      <NavLink to='Order'>

                        <button className='btn btn-success'>Order Now</button>
                      </NavLink>
                    </div>
                    : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  <Footer />
  </div>
    </>

  )

}