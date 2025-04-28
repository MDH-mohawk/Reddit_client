import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Components/Categories/categorySlice.js'
import searchBarReducer from './Components/Searchbar_header/SearchBarSlice.js'

const store = configureStore({
    reducer:{
        categories:categoryReducer,
        search:searchBarReducer
    }
});


export default store;