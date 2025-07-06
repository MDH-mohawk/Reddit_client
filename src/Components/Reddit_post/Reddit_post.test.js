import "@testing-library/jest-dom";
import RedditPost from "./Reddit_post";
import { screen,fireEvent,render} from "@testing-library/react";
import { Provider } from "react-redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Route, Routes } from "react-router";
import * as reactRedux from 'react-redux';

const mockedUseNav = jest.fn();

//mocking the react router import
jest.mock('react-router', () => ({
...jest.requireActual('react-router'),
    useNavigate: () => mockedUseNav
}));

const navigate = mockedUseNav();


const mocknavfunc = jest.fn(() => {
    navigate(`/${currentcat}/${post_id}`)
})


// mock a reducer for test purposes
const mockReducer = createSlice({
    name:"category",
    initialState:{
        category:"App"
    },
    reducers:{}
})

// mock a redux store for test purposes
const mockStore = configureStore({
    reducer:{
        categories:mockReducer.reducer
    }
})

beforeEach(() => {

    mockedUseNav.mockClear();

    render(
        <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/"]}>
            <RedditPost img_src="this.txt" description_text="its this" post_id={"1434"}/>
        </MemoryRouter>
        </Provider>
        );
})

afterEach(() => {
    jest.clearAllMocks()
})


describe("Reddit post component",() =>{

    //Mock useSelector value
    test("no jpeg or png -> no image", () => {
        
        //Setup
        const elem = screen.getByTestId("post_test");

        //Exercise

        //Verify
        expect(elem.children[0]).not.toContainHTML('<img src="this.txt"/>')
    })

    test("route is changed on click",() => {

        //Setup
        const new_post = screen.getByTestId("Go_post")

        //Exercise
        fireEvent.click(new_post)
        
        //Verify
        expect(mockedUseNav).toHaveBeenCalledTimes(1);
        expect(mockedUseNav).toHaveBeenCalledWith("/App/1434")
        
    })
})