import React from 'react'

import Footer from './Footer'
import "./Contect.css"
import { Gujjubiteimg } from './Gujjubiteimg'
import { post, FormData } from '../store/contectslice'
import { useDispatch, useSelector } from 'react-redux'


export const Contect = () => {
  const Swal = require('sweetalert2')
  const dispatch = useDispatch()

  const { data, Form } = useSelector(state => state.contect)
  console.log(data);

  function infochange(elem) {
    const name = elem.target.name
    const value = elem.target.value
    dispatch(FormData({ name, value }))

  }
  // console.log(data);


  const submit = (e) => {
    e.preventDefault()
    // alert(`hii ${Form.name}, your message was send \n our team will contect soon`)
    Swal.fire({
      title: `Hello ${Form.name}, \n Message Send Successfully`,
      text: 'Our team will be Your Contect Soon',
      imageUrl: 'https://images.unsplash.com/photo-1670237735381-ac5c7fa72c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    dispatch(post(Form))


  }
  return (
    <>

      {/* --------------------------------------------- */}

      <div className="row justify-content-evenly pt-2  contect">
        <Gujjubiteimg />
        <div className='text-center'><h2>Contect us</h2></div>

        <div className="col-md-5 col-11 mt-5">
          <div className='col-12 text-center mt-5'><h1 className='namehead'>Niraj Restaurant Bar</h1></div>
          <div className='col-12 text-center mt-5'> <h3 className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg> Address</h3> </div>
          <div className='col-12 text-center mt-4'>  <p className='addres'> MotiBanugar, Jamnagar-Rajkot Highway <br /> Dist - Jamnagar, State-Gujarat, India</p></div>
          <div className='col-12 text-center mt-5'><h5><strong>Mail-Id </strong>: Nirajbhensdadiya2000@gmail.com</h5></div>
          <div className='col-12 text-center mt-3'><h5><strong> Contect No </strong> : 9999999999</h5></div>

        </div>

        <div className="col-md-5 col-11 mt-5">
          <h3 className="mb-4">Contect Form</h3>
          <form className='contectus' onSubmit={submit} >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder='Enter FullName' name='name' value={Form.name} onChange={infochange} autoComplete="off" required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Mail' name='mail' value={Form.mail} onChange={infochange} autoComplete="off" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="type your message" name='message' value={Form.message} onChange={infochange} autoComplete="off"></textarea>
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>

        <Footer />
      </div>


    </>
  )
}
