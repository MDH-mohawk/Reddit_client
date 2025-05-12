import Category from "./Category";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import { screen,fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";


const mockStore = configureStore({
    reducer:{
        categories:{
            category:"Apps"
        }
    }
})


describe("Category component",() => {
    
    test("Category toggle",() => {

        //Setup
        render(
        <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/Apps"]}>
            <Category cat={"Apps"}/>
        </MemoryRouter>
        </Provider>
        );
        button = screen.getByTestId("cat_test")

        //Exercise
        fireEvent.click(button)

        //Verify
        expect(button).toBe("")

    })
})