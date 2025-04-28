import {createSlice } from "@reduxjs/toolkit";

const categoriesReducer = createSlice({
    name:'categories',
    initialState:{
        category:"",
    },
    reducers:{
        changeCategory:(state,action) => {
            state.category = action.payload.category
        }
    }
})

export default categoriesReducer.reducer;
export const {changeCategory} = categoriesReducer.actions;
export const categoryState = (state) => state.category.category