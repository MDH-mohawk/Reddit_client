import React from "react";
import "@testing-library/jest-dom";
import RedditPost from "./Reddit_post";
import { screen,fireEvent, configure} from "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const mockedUseNav = jest.fn();

jest.mock('react-router', () => ({
...jest.requireActual('react-router'),
    useNavigate: () => mockedUseNav
}));

const mockReducer = createSlice({
    name:"category",
    initialState:{
        category:"Apps"
    },
    reducers:{}
})

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

    test("The like button gets filled",() => {

        //Setup

        const button = screen.getByTestId("Like_button");

        //Exercise

        fireEvent.click(button);

        //Verify
        expect(button.style.fill).toBe("#00C86B");

    });

    test("The like button gets a stroke",() => {

        //Setup
        const button = screen.getByTestId("Like_button");

        //Exercise

        fireEvent.click(button);

        //Verify
        expect(button.style.stroke).toBe("none");

    });
    
    test("The dislike button gets filled",() => {

        //Setup
        const button = screen.getByTestId("Dislike_button");

        //Exercise
        fireEvent.click(button);

        //Verify
        expect(button.style.fill).toBe("#EF3535")
    })

    test("The dislike button gets a stroke",() => {

        //Setup
        const button = screen.getByTestId("Dislike_button");

        //Exercise

        fireEvent.click(button);

        //Verify
        expect(button.style.stroke).toBe("none");

    });
})