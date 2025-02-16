import { render, screen,fireEvent } from '@testing-library/react';
import Categories from './Categories';

describe("Category mobile side menu",() => {
    test("The sidebar appears!",() => {
        onclick = jest.fn()
        render(<Categories arr={[]} catClick={onclick}/>)
        const button = screen.getByTestId("sidebar_arrow");
        const sidebar= screen.getByTestId("sidebar")
        fireEvent.click(button);
        const sidebar_styles = getComputedStyle(sidebar);
        expect(sidebar_styles).toHaveProperty("right","0px")
    })
})
