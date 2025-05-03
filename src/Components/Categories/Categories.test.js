import { render, screen,fireEvent } from '@testing-library/react';
import Categories from '../Categories/Categories';

jest.mock('../Category/Category.js', () => () => <div>HI</div>)

describe("Category mobile side menu",() => {
    test("The sidebar appears!",() => {

        //Setup

        //Mock Click function
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
})
