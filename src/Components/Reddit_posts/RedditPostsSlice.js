import { createSlice } from "@reduxjs/toolkit";
import { image_arr } from "../../Mock_data";

const RedditPostReducer = createSlice({
    name:"RedditPosts",
    initialState:image_arr,
    reducers:{
        CatFilter:(state,action) => {
            let newarr = image_arr.filter(item => item.category === action.payload)
            state = newarr
            return state;
        },
        SeachFilter:(state,action) => {
            return state.filter(item => item.text.includes(action.payload))
        }
    }
})


export default RedditPostReducer.reducer;
export const {CatFilter} = RedditPostReducer.actions;
export const {SeachFilter} = RedditPostReducer.actions;
export const RedditPostsState = (state) => state.posts;