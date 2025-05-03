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
        SearchFilter:(state,action) => {
            let {category,text} = action.payload;
            let newarr = image_arr.filter(item => item.category === category)

            if (text === ""){
                state = [];
                console.log("status?")
            }

            return state = newarr.filter(item => item.text.toLocaleLowerCase().includes(text));
        }
    }
})


export default RedditPostReducer.reducer;
export const {CatFilter} = RedditPostReducer.actions;
export const {SearchFilter} = RedditPostReducer.actions;
export const RedditPostsState = (state) => state.posts;