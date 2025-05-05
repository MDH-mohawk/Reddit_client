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
                state.name = name;
                state.likes = likes;
                state.dislikes = dislikes;
                state.img = img;
        }
    }
})

export default RedditPostModalReducer.reducer;
export const {setCurrentPost} = RedditPostModalReducer.actions;
export const currentPostState = (state) => state.currentpost; 