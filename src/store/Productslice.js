import { createSlice } from "@reduxjs/toolkit";

const STATUS = {
    SUCCESS: 'SUCCESS',
    ERROR: 'error',
    LODING: 'loding'
}


const productSlice = createSlice({
    name : "product",
    initialState: {
        data: [],
        status: STATUS.SUCCESS
    },

    reducers: {
        setProduct (state,action){
            state.data = action.payload
        },
        setstatus(state, action){
            state.status = action.payload
        }
    }
})

export const {setProduct, setstatus} = productSlice.actions
export default productSlice.reducer


export function fatchProduct() {
    return async function fatchProductThunk(dispatch, getstate) {
            dispatch(setstatus(STATUS.LODING))
        try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                dispatch(setProduct(data))
                dispatch(setstatus(STATUS.SUCCESS))
            
            }catch (err){
                console.log(err);
                dispatch(setstatus(STATUS.ERROR))
            }
    }
}