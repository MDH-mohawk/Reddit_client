import { render, screen,fireEvent } from '@testing-library/react';
import Categories from '../Categories/Categories';

jest.mock('../Category/Category.js', () => () => <div>HI</div>)

//Testing if the position gets changed on click

describe("Category mobile side menu",() => {
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

