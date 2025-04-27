import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Components/Categories/categorySlice.js'

const store = configureStore({
    reducer:{
        categories:categoryReducer
    }
});


export default store;