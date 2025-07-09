import "@testing-library/jest-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import RedditPostModal from "./RedditPostModal";
import { createSlice,configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter,Routes,Route } from "react-router";


const modalPostReducer = createSlice({
    name:"modalpost",
    initialState:{
        img:null,
        name:"",
        likes:"",
        dislikes:"",
        explain:"",
        comments:[]
    },
    reducers:{}
})

const posts = createSlice({
    name:'posts',
    initialState:{
        real_data:[
            {
            title:"test",
            id:"test",
            img:'test.jpeg',
            ups:100,
            downs:100,
            extra_text:"test"
        }
    ]
    }
})

const cat = createSlice({
    name:'category',
    initialState:{
        category:"test"
    }
})


const store = configureStore({
    reducer:{
        currentpost:modalPostReducer.reducer,
        posts:posts.reducer,
        categories:cat.reducer
    }
});


describe("RedditPostModal elements", () => {

    beforeEach(() => {
        render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/cat/test"]}>
            <Routes>
                <Route path="/cat/:post" element={<RedditPostModal/>}></Route>
            </Routes>
            </MemoryRouter>
        </Provider>
        )
    })

    test("img only appears when it is not null", () => {


        //Setup
        const img_element = screen.getByTestId("img_modal_test")

        //Exercise


        //Verify
        expect(img_element.children[0]).not.toBeDefined();

    })

    test("without explanation there is no explanation", () => {

        //Setup
        const explain = screen.getByTestId("test_explain")

        //Verify
        expect(explain.children[0]).toBeDefined();
        expect(explain.children[1]).toBeDefined()
    })

    test("Comments render", () => {

        //Setup
        const comment_button = screen.getByTestId("comment_test_button");
        const comments = screen.getByTestId("modal_test_post")

        //Exercise
        fireEvent.click(comment_button.children[0]);

        //Verify
        expect(comments.children[2]).toBeDefined()
    })
})