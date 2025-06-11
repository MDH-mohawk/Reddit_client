import Category from "./Category";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import { screen,fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";


//mock reducer for testing purposes
const mockReducer = createSlice({
    name:"category",
    initialState:{
        category:"Apps"
    },
    reducers:{}
})

// mock store added for testing purposes
const mockStore = configureStore({
    reducer:{
        categories:mockReducer.reducer
    }
})



describe("Category component",() => {
    test("New class is added to classlist of Category component button",() => {

        //Setup
        render(
        <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/Apps"]}>
            <Category cat={"Apps"}/>
        </MemoryRouter>
        </Provider>
        );
        const button = screen.getByTestId("cat_test")

        //Exercise
        fireEvent.click(button)

        //Verify
        expect(button.children[0].classList[1]).toBe("categoryselected")

    })
})