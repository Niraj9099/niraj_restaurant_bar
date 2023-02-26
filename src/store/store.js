import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartslice';
import productReducer from './Productslice'
import contectReducer from './contectslice'
import orderReducer from './Orderslice'


const store = configureStore({
    reducer: {
        cart : cartReducer,
        product : productReducer,
        contect : contectReducer,
        order : orderReducer
    }
})

export default store;