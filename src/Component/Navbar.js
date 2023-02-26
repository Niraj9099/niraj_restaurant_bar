import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Items from './Items';
import { Contect } from './Contect';
import { Navlink } from './Navlink';
import { Cart } from './Cart';
import Order from './Order';
import { Nomatch } from './Nomatch';
import { Myorder } from './Myorder';

export const Navbar = () => {
console.log('1');

  return (
    <>
      <Navlink />
      <Routes>

        <Route exect path='/' element={<Home />} />
        <Route exect path='items' element={<Items />} />
        <Route path='contect' element={<Contect />} />
        <Route path='cart' element={<Cart />} />
        <Route path='cart/Order' element={<Order />} />
        <Route path='myorder' element={<Myorder />} />
        <Route path='*' element={<Nomatch />} />
      </Routes>

    </>
  )
}
