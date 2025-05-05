import React from "react";
import "@testing-library/jest-dom";
import RedditPost from "./Reddit_post";
import { screen,fireEvent} from "@testing-library/react";
import { render } from "@testing-library/react";

describe("Reddit post component",() =>{

    test("The like button gets filled",() => {

        //Setup
        render(<RedditPost img_src={undefined} description_text="its this" />);
        const button = screen.getByTestId("Like_button");

        //Exercise

        fireEvent.click(button);

        //Verify
        expect(button.style.fill).toBe("#00C86B");

    });

    test("The like button gets a stroke",() => {

        //Setup
        render(<RedditPost img_src={undefined} description_text="its this" />);
        const button = screen.getByTestId("Like_button");

        //Exercise

        fireEvent.click(button);

        //Verify
        expect(button.style.stroke).toBe("none");

    });
    
    test("The dislike button gets filled",() => {

        //Setup
        render(<RedditPost img_src={undefined} description_text="its this" />);
        const button = screen.getByTestId("Dislike_button");

        //Exercise
        fireEvent.click(button);

        //Verify
        expect(button.style.fill).toBe("#EF3535")
    })

    test("The dislike button gets a stroke",() => {

        //Setup
        render(<RedditPost img_src={undefined} description_text="its this" />);
        const button = screen.getByTestId("Dislike_button");

        //Exercise

        fireEvent.click(button);

        //Verify
        expect(button.style.stroke).toBe("none");

    });
})