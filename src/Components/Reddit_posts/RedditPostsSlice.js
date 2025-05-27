import { createSlice } from "@reduxjs/toolkit";
import { image_arr } from "../../Mock_data";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Redditdata = createAsyncThunk("RedditPosts/getData",
    async() => {
        const data = await fetch("https://www.reddit.com/r/UXDesign.json")
        return data
    }
)




const RedditPostReducer = createSlice({
    name:"RedditPosts",
    initialState:{
        mock_data:image_arr.filter(item => item.category === "Apps"),
        real_data:{},
        isPending:false,
        HasError:false
    },
    reducers:{
        CatFilter:(state,action) => {
            let newarr = image_arr.filter(item => item.category === action.payload)
            state.mock_data = newarr
            return state;
        },
        SearchFilter:(state,action) => {
            let {category,text} = action.payload;
            let newarr = image_arr.filter(item => item.category === category)

            if (text === ""){
                console.log("status?")
                state.mock_data = newarr;
            }

            state.mock_data = newarr.filter(item => item.text.toLocaleLowerCase().includes(text));

            return state;
        }
    },
    extraReducers:{
        [Redditdata.pending]:(state) => {
            state.isPending = true;
            state.HasError = false;
        },
        [Redditdata.fulfilled]:(state,action) => {
            state.isPending = false;
            state.HasError = false;
            state.real_data = action.payload;
        },
        [Redditdata.rejected]:(state) => {
            state.isPending = false;
            state.HasError = true;
        }
    }


})


export default RedditPostReducer.reducer;
export const {CatFilter} = RedditPostReducer.actions;
export const {SearchFilter} = RedditPostReducer.actions;
export const RedditPostsState = (state) => state.posts.mock_data;