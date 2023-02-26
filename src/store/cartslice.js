import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartdata : [],
        totle : 0,
        gst : 0,
        GrandTotal : 0
        
    },

    reducers : {
        add(state, action) {
            state.cartdata.push(action.payload)
            
        },
        plus(state, action) {
            const add = state.cartdata.map((item) => {
               if( item.id === action.payload){
                    return{
                        ...item,
                        quntity : item.quntity === 10 ?  10 : item.quntity+1   
                    }
                } 
               return item;
            })
            state.cartdata = add
        },
        mines(state, action) {
            const min =  state.cartdata.map((item) => {
                if( item.id === action.payload){
                     return{
                         ...item,
                         quntity : item.quntity ===0 ? 0 : item.quntity-1
                     }
                } 
                return item;
             }).filter(elem => elem.quntity !== 0 )
             state.cartdata = min
        },
        
        total(state, action){
            const tot = state.cartdata.reduce((acc, elem) => {
                acc += elem.price * elem.quntity
                return acc
            }, 0)

            state.totle = tot
            state.gst = tot * 18 /100
            state.GrandTotal = tot + state.gst
        },
        
        remove(state, action){
            const remove = state.cartdata.filter((elem) => {
                return (elem.id !== action.payload)
            })
            state.cartdata = remove
        },

        reset(state, action){
            state.cartdata = []
        }
    }

})

export const {add, plus, mines, total, remove, reset} = cartSlice.actions;
export default cartSlice.reducer