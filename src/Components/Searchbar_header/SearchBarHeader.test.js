import "@testing-library/jest-dom";
import { render, waitFor,screen, fireEvent } from "@testing-library/react";
import SearchBarHeader from "./SearchBarHeader";
import { MemoryRouter,Route,Routes } from "react-router";
import { Provider} from "react-redux";
import {createSlice,configureStore } from "@reduxjs/toolkit";

const mockUseNavigate = jest.fn()

jest.mock('react-router',() => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockUseNavigate,
}))

const posts = createSlice({
    name:"posts",
    initialState:{},
    reducers:{}
})

const search = createSlice({
    name:"search",
    initialState:{
        searchTerm:""
    },
    reducers:{}
})

const store = configureStore({
    reducer:{
        posts:posts.reducer,
        search:search.reducer
    }
})

describe("SearchbarHeader elements",() => {


    beforeEach(()=>{
        mockUseNavigate.mockClear();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/UX"]}>
                <Routes>
                    <Route path="/:category" element={<SearchBarHeader/>}></Route>
                </Routes>
                </MemoryRouter>
            </Provider>
        )
        jest.spyOn(console,'log').mockClear()
    })

    afterAll(() => {
        jest.restoreAllMocks()
    })
    test("Goes directly to UXdesign route", async() => {

        //Setup
        //Verify

        await waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledWith("/UXDesign")
        })
    })
    
    test("on button click the search field is empty",() =>{
        
        //Setup
        const formField = screen.getByRole('form');
        const searchField = screen.getByPlaceholderText("search here");

        //Exercise
        fireEvent.change(searchField,{target:{value:'pok'}})
        fireEvent.submit(formField)

        //Verify
        expect(searchField).toHaveValue("")

    })
})