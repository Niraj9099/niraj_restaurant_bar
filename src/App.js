import React, { createContext, useState } from 'react'
import { Provider } from 'react-redux'
// import { Navbar } from './Navbar/Navbar'
import {Navbar} from './Component/Navbar'
import store from './store/store'

// export const CartProvider = createContext()

export const App = () => {
   
    return (
      
        <Provider store={store}>
            <Navbar />
        </Provider>

    )
}
