import React from 'react';
import "../App.css";
import { add } from '../store/cartslice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const Item = (props) => {
    const Swal = require('sweetalert2')

    const dispatch = useDispatch();
    const { cartdata } = useSelector(state => state.cart)




    const additem = (itemdata) => {

        if (cartdata.map(elm => elm.id).includes(itemdata.id)) {
            return (
           
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'Item already in cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            )
        } else {
            dispatch(add(itemdata))
        }

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'add To cart Successfuly',
            showConfirmButton: false,
            timer: 1500
          })

    }
  



    return (
        <>


            <div className='container-fluid mt-3'>
                <div className='row itemline'>
                    <div className='col-10 mx-auto'>
                        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-6 row-cols-sm-2 g-3 ">

                            {props.Data.map((elem, index) => {
                                return (
                                    <div className="col item1" key={index}>
                                        <div className="card">
                                            <img src={elem.img} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{elem.name}</h5>
                                                <p className="card-text">Price : {elem.price}₹</p>
                                                <button className='btn addtocart' on onClick={() => additem(elem)}>Add to Cart</button>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Item;