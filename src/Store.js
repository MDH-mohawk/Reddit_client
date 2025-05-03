import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Components/Categories/categorySlice.js'
import searchBarReducer from './Components/Searchbar_header/SearchBarSlice.js'
import RedditPostReducer from './Components/Reddit_posts/RedditPostsSlice.js'

const store = configureStore({
    reducer:{
        categories:categoryReducer,
        search:searchBarReducer,
        posts:RedditPostReducer
    }
});


export default store;