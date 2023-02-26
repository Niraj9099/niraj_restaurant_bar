import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './Footer';
import Item from './Item';
import Sdata from '../Sdata';
import { Gujjubiteimg } from './Gujjubiteimg'


const newArry = [...new Set(Sdata.map((elem) => elem.name))]
// console.log(newArry);



const Items = () => {
  const [Data, setData] = useState(Sdata)
  const [Option, setOption] = useState("LOW")
 


  // -------select item -------------------

  const filterItem = (elem) => {
    const val = elem.target.value;
    // console.log(val);
    if (val === 'All') {
      return setData(Sdata)
    }
    const updatitem = Sdata.filter((elem) => {
      return elem.name === val
    })
    setData(updatitem)
  }

  //  ----------sort item --------------------

  const sortproduct = (elem) => {
    setOption(elem.target.value)
    if (Option === 'HIGH') {

      const lowtoHIgh = Data.sort(function (a, b) {
        return a.price - b.price;
      })
      setData(lowtoHIgh)

    }
    if (Option === 'LOW') {
      const hightolow = Data.sort(function (a, b) {
        return b.price - a.price;
      })
      setData(hightolow)

    }
  }


  // console.log(Option);
  return (
    <>
    <div className='itempage'>    
    <Gujjubiteimg />
      <div className='row d-flex justify-content-between '>
        {/* --------------------- Cataget select ----------------------- */}
        <div className='menu_tabs container mt-3 col-12 col-md-6'>
          <div className='menu_tab d-flex justify-content-center'>
            <h4>Catagery :</h4>
            <select className='select' onChange={filterItem}>
              <option value={'All'}>All</option>

              {newArry.map((elem, index) => {
                return (
                  <option value={elem} key={index}>{elem}</option>
                )
              })}
            </select>
          </div>
        </div>

        {/* -----------------------Sort by price-------------------------- */}
        <div className='menu_tabs container mt-3 col-12 col-md-6'>
          <div className='menu_tab d-flex justify-content-center'>
            <h4>Sort :</h4>
            <select className='select' onChange={sortproduct}>

              <option value='LOW'>Low TO High</option>
              <option value='HIGH'>High TO Low</option>
            </select>
          </div>
        </div>

      </div>

      


      <Item Data={Data} />

      <Footer />
      </div>
  
    </>
  )
}

export default Items;

