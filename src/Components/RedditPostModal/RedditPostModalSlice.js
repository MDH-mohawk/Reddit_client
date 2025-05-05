import { createSlice } from "@reduxjs/toolkit";

const RedditPostModalReducer = createSlice({
    name:"CurrentPost",
    initialState:{
        name:"",
        likes:"",
        dislikes:"",
        img:""
    },
    reducers:{
        setCurrentPost:(state,action) => {
            const {name,likes,img,dislikes} = action.payload
            state = {
                name:name,
                likes:likes,
                dislikes:dislikes,
                img:img
                }
        }
    }
})

export default RedditPostModalReducer.reducer;
export const {setCurrentPost} = RedditPostModalReducer.actions;
const currentPostState = (state) => state.currentpost; 