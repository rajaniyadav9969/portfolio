import { configureStore } from '@reduxjs/toolkit'
import animateSlice from './animateSlice'

export const store = configureStore({
    reducer: {
        animate: animateSlice,
    },
})