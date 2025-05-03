import { createSlice } from "@reduxjs/toolkit"; 

const RedditPostReducer = createSlice({
    name:"RedditPosts",
    initialState:[],
    reducers:{
        CatFilter:(state,action) => {
            state.filter(item => item.category === action.payload.category)
        }
    }
})


export default RedditPostReducer.reducer;
export const {CatFilter} = RedditPostReducer.actions;
export const RedditPostsState = (state) => state.posts;