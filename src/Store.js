import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Components/Categories/categorySlice.js'
import searchBarReducer from './Components/Searchbar_header/SearchBarSlice.js'
import RedditPostReducer from './Components/Reddit_posts/RedditPostsSlice.js'
import RedditPostModalReducer from "./Components/RedditPostModal/RedditPostModalSlice.js";

const store = configureStore({
    reducer:{
        categories:categoryReducer,
        search:searchBarReducer,
        posts:RedditPostReducer,
        currentpost:RedditPostModalReducer
    }
});


export default store;