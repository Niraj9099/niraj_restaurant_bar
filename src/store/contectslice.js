import { createSlice } from "@reduxjs/toolkit";

const contectSlice = createSlice({
    name: 'contect',
    initialState: {
        data: [],
        Form: {
            name: "",
            mail: "",
            message: ""
        }

    },

    reducers: {
        post(state, action) {
            state.data.push(action.payload)
            state.Form = {
                name: "",
                mail: "",
                message: ""

            }

        },
        FormData(state, { payload }) {
            state.Form = {
                ...state.Form,
                [payload.name]: payload.value

            }
        },
       
    }
})

export const { post, FormData } = contectSlice.actions
export default contectSlice.reducer