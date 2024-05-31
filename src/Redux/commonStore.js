import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

const commonStore = configureStore({
    reducer:{
        todo: todoReducer,
    },
})

export default commonStore