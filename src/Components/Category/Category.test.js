import Category from "./Category";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import { screen,fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import SearchBarHeader from "../Searchbar_header/SearchBarHeader";


//mock reducer for testing purposes
const mockReducer = createSlice({
    name:"category",
    initialState:{
        category:"Apps",
    },
    reducers:{}
})

const serachMockReducer = createSlice({
    name:"category",
    initialState:{
        searchTerm:"Pokemon"
    },
    reducers:{}
})

// mock store added for testing purposes
const mockStore = configureStore({
    reducer:{
        categories:mockReducer.reducer,
        search:serachMockReducer.reducer
    }
})
beforeEach(()=>{
    render(
        <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/Apps"]}>
            <Category cat={"Apps"}/>
            <SearchBarHeader/>
        </MemoryRouter>
        </Provider>
        );
})


describe("Category component",() => {
    test("New class is added to classlist of Category component button",() => {

        //Setup
        const button = screen.getByTestId("cat_test")

        //Exercise
        fireEvent.click(button)

        //Verify
        expect(button.children[0].classList[1]).toBe("categoryselected")

    })

    test("searh term is empty",() => {

        //Setup
        const search = screen.getByTestId("input_works")
        const button = screen.getByTestId("cat_test")

        //Exercise
        fireEvent.click(button)
        
        //Verify
        expect(search.value).toBe("")
    })
})