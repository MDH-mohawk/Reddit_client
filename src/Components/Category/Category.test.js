import Category from "./Category";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import { screen,fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Store";


jest.spyOn(document,'getElementById').mockReturnValue({
    classList:{
        add:jest.fn()
    }
})

describe("Category component",() => {
    
    test("Category toggle",() => {

        //Setup
        render(
        <Provider store={store}>
        <MemoryRouter>
            <Category/>
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