import { createSlice } from "@reduxjs/toolkit";

const searchBarReducer = createSlice({
    name:'search',
    initialState:{
        searchTerm:""
    },
    reducers:{
        AddSearchTerm:(state,action) => {
            state.searchTerm = action.payload;
        }
    }
})


export default searchBarReducer.reducer;
export const {AddSearchTerm} = searchBarReducer.actions;
export const searchState = (state) => state.search.searchTerm;