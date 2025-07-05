import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


//API call thunk function for retrieving the comments of an individual post
export const getRedditComments = createAsyncThunk(
    "currentpost/comments", async({postid},thunkAPI) =>
        {   const data = await fetch(`https://www.reddit.com/comments/${postid.toString()}.json?raw_json=1`)
            const json = await data.json();
            console.log(json[1].data.children)
            return json[1].data.children
        }   
)

//reducer specific for individual post page
const RedditPostModalReducer = createSlice({
    name:"CurrentPost",
    initialState:{
        name:"",
        likes:"",
        dislikes:"",
        img:null,
        comments:[],
        commentsPending:false,
        commentsError:false
    },
    reducers:{
        setCurrentPost:(state,action) => {
            const {name,likes,img,dislikes,explain} = action.payload
                state.name = name;
                state.likes = likes;
                state.dislikes = dislikes;
                state.img = img;
                state.explain = explain
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getRedditComments.pending,(state) =>{
            state.commentsPending = true;
            state.commentsError = false;
        });
        builder.addCase(getRedditComments.fulfilled,(state,action) => {
            state.commentsPending = false;
            state.commentsError = false;
            const comments = action.payload.map((item) => {
                return {
                    key:item.data.id,
                    body:item.data.body_html,
                    author:item.data.author
                }
            });
            console.log(comments)
            state.comments = comments
        });
        builder.addCase(getRedditComments.rejected,(state) =>{
            state.commentsPending = false;
            state.commentsError = true;
        })
    }
})

export default RedditPostModalReducer.reducer;
export const {setCurrentPost} = RedditPostModalReducer.actions;
export const currentPostState = (state) => state.currentpost; 