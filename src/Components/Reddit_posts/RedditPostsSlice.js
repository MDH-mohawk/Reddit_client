import { createSlice } from "@reduxjs/toolkit";
import { image_arr } from "../../Mock_data";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Redditdata = createAsyncThunk("RedditPosts/getData",
    async(category) => {
        const data = await fetch(`https://www.reddit.com/r/${category}.json`)
        const json = await data.json()
        console.log(json.data.children)
        return json.data
    }
)




const RedditPostReducer = createSlice({
    name:"RedditPosts",
    initialState:{
        mock_data:image_arr.filter(item => item.category === "UXDesign"),
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
    extraReducers:(builder) => {
        builder
        .addCase(Redditdata.pending,(state) => {
            state.isPending = true;
            state.HasError = false;
        })
        .addCase(Redditdata.fulfilled, (state,action) => {
            state.isPending = false;
            state.HasError = false;
            const {children} = action.payload
            const data = children.map((item) => {
                const images = item.data.url === undefined?"":item.data.url
                if(item.data.preview === undefined){
                    console.log("No images!")
                }
                return {
                    key:children.indexOf(item),
                    id:item.data.id,
                    titles:item.data.title,
                    media:item.data.media,
                    ups:item.data.ups,
                    downs:item.data.downs,
                    author:item.data.author,
                    img:images
                }    
            });
            state.real_data = data
        })
        .addCase(Redditdata.rejected,(state) => {
            state.isPending = false;
            state.HasError = true;
        })
    }

});


export default RedditPostReducer.reducer;
export const {CatFilter} = RedditPostReducer.actions;
export const {SearchFilter} = RedditPostReducer.actions;
export const RedditPostsState = (state) => state.posts.mock_data;
export const RedditRealData = (state) => state.posts.real_data;
export const data_pending = (state) => state.posts.isPending;
export const data_error= (state) => state.posts.HasError;