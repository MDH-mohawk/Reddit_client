import { render, screen,fireEvent } from '@testing-library/react';
import Categories from '../Categories/Categories';
import { categoryState } from './categorySlice';
import { Provider, useSelector } from 'react-redux';
import store from '../../Store';
import { categories } from '../../App';
import { MemoryRouter } from 'react-router';

//Testing if the position gets changed on click

describe("Categories mobile side menu",() => {
    test("The sidebar appears!",() => {

        //Setup
        //  Mock Click function
        onclick = jest.fn()
        render(<Categories arr={[]} catClick={onclick}/>)
        const button = screen.getByTestId("sidebar_arrow");
        const sidebar= screen.getByTestId("sidebar")

        //Excercise
        fireEvent.click(button);
        const sidebar_styles = getComputedStyle(sidebar);

        //Verify
        expect(sidebar_styles).toHaveProperty("right","0px")
    })
    test("arrow turns on click to the right way", () => {
        //Setup
        onclick = jest.fn()
        render(<Categories arr={[]} catClick={onclick}/>);
        const arrow = screen.getByTestId("sidebar_arrow");
        const cat = screen.getByTestId("test_cat_comp");

        //Exercise
        fireEvent.click(arrow);


        //Verify
        expect(cat.children[1].children[0].classList[0]).toBe("uncollapse_arrow");


    })
})

describe("Clicking on a catgory", () => {
    test("Category state is assigned", () => {

        //Setup
        const state = store.getState()
        render(<Provider store={store}><MemoryRouter><Categories arr={categories}/></MemoryRouter></Provider>)
        const cat = state.categories.category
        const category_button = screen.getAllByText("UXDesign")

        //Exercise
        fireEvent.click(category_button[1]);

        //Verify
        expect(cat).toBe("UXDesign")
    })
test("Search is empty", () => {

        //Setup
        const state = store.getState()
        render(<Provider store={store}><MemoryRouter><Categories arr={categories}/></MemoryRouter></Provider>)
        const search = state.search.searchTerm
        const category_button = screen.getAllByText("UXDesign")

        //Exercise
        fireEvent.click(category_button[1]);

        //Verify
        expect(search).toBe("")
    })
})

