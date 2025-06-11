import React from "react";
import "@testing-library/jest-dom";
import RedditPost from "./Reddit_post";
import { screen,fireEvent, configure} from "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const mockedUseNav = jest.fn();

//mocking the react router import
jest.mock('react-router', () => ({
...jest.requireActual('react-router'),
    useNavigate: () => mockedUseNav
}));

// mock a reducer for test purposes
const mockReducer = createSlice({
    name:"category",
    initialState:{
        category:"Apps"
    },
    reducers:{}
})

// mock a redux store for test purposes
const mockStore = configureStore({
    reducer:{
        categories:mockReducer.reducer
    }
})


describe("Reddit post component",() =>{

    beforeEach(()=>{
        render(
        <Provider store={mockStore}>
            <RedditPost img_src={undefined} description_text="its this" />
        </Provider>);
    })
})