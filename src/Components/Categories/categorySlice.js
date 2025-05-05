import {createSlice } from "@reduxjs/toolkit";

const categoriesReducer = createSlice({
    name:'categories',
    initialState:{
        category:"Apps",
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