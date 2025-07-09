import "@testing-library/jest-dom";
import RedditPosts from "../Reddit_posts/Redditposts.js"
import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore,createSlice} from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router";

jest.mock('../Reddit_post/Reddit_post.js', () => () => <div className="post" id='1' data-testid="post_test"/>)


const postReducer = createSlice({
    name:"dispost",
    initialState:{
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
        const post = screen.getAllByTestId("post_test");

        //Exercise

        //Verify

        expect(post).toBeDefined()
    })
})