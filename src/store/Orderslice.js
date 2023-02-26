import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderData: [],
        orderForm: {
            name: "",
            number: "",
            address: "",
            item: "",
            totalPay: 0
        },
     
    },

    reducers: {
        add(state, action) {
            state.orderData.push(action.payload)
            state.orderForm = {
                name: "",
                number: "",
                address: "",
                item: "",
                totalPay: 0
            }
        },

        orderData(state, { payload }) {
            state.orderForm = {
                ...state.orderForm,
                [payload.name]: payload.value,
                item: payload.itm,
                totalPay: payload.tot
            }

            

        },

        deletOrder(state, action) {
            const order = state.orderData.filter((elem, index) => {
                return (index !== action.payload)
            })
            state.orderData = order
        },
        OrderTimer(state, action) {
            state.OrderConform=action.payload
        }


    }

})

export const { add, orderData, deletOrder,OrderTimer } = orderSlice.actions;
export default orderSlice.reducer