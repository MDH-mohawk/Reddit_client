import {createSlice } from "@reduxjs/toolkit";

//Slice to keep hold of the current selected category as a state in the store

const categoriesReducer = createSlice({
    name:'categories',
    initialState:{
        category:"UXDesign"
    },
    reducers:{
        changeCategory:(state,action) => {
            state.category = action.payload.category
        }
    }
})

export default categoriesReducer.reducer;
export const {changeCategory} = categoriesReducer.actions;
export const categoryState = (state) => state.categories.category