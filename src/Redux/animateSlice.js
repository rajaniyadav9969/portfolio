import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: "default",
}

export const animateSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toText: (state) => {

            state.type = "text"
        },
        toDefault: (state) => {
            state.type = "default"
        },

    },
})

// Action creators are generated for each case reducer function
export const { toDefault, toText } = animateSlice.actions


export default animateSlice.reducer