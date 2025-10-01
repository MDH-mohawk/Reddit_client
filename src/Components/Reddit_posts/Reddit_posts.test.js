import "@testing-library/jest-dom";
import RedditPosts from "../Reddit_posts/Redditposts.js"
import { fireEvent, render,screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore,createSlice} from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router";
import {Redditdata} from '../Reddit_posts/RedditPostsSlice.js';
import store from '../../Store.js';
import { useDispatch } from "react-redux";
import App from "../../App.js";

jest.mock('../Reddit_post/Reddit_post.js', () => () => <div className="post" id='1' data-testid="post_test"/>)


const postReducer = createSlice({
    name:"RedditPosts",
    initialState:{
        real_data:{},
        dispost:{
            key:1,
            id:1,
            img:"pok.jpg",
            title:"test",
            author:"test_man",
            ups:100,
            downs:100
        },
        isPending:false,
        hasError:false
    },
    reducers:{}
})

const catReducer = createSlice({
    name:"dispost",
    initialState:{
        category:'Good'
    },
    reducers:{}
})


const this_store = configureStore({
    reducer:{
        posts:postReducer.reducer,
        categories:catReducer.reducer
    }
});


describe("Reddit posts component",() => {

    test("Reddit post is there", () =>{
        //Setup
        render(
        <Provider store={this_store}>
            <MemoryRouter>
            <RedditPosts/>
            </MemoryRouter>
        </Provider>
        )
        const post = screen.getAllByTestId("post-test-p");

        //Exercise

        //Verify

        expect(post).toBeDefined()
    })
})

describe("API data",() => {

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mock('../Reddit_posts/RedditPostsSlice.js',() => ({
            Redditdata:jest.fn(),
    }));
    })

    test("if fullfilled the right thing happens", () => {
        //Setup
        render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/UXDesign"]}>
            <RedditPosts/>
            </MemoryRouter>
        </Provider>
        )

        const func = jest.fn()

        //Exercise
    

        //Verify
        expect(jest.isMockFunction(Redditdata)).toBe(true);
    })
} )
