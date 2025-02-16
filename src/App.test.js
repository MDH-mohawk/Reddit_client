import { render, screen,fireEvent } from '@testing-library/react';
import {catClick,cat,setCat} from './App'
import Category from './Components/Category/Category';
import { useState } from 'react';


describe('Category button',() => {

  test('The category loads the right posts', () =>{
    render(<Category catClick={catClick} category={"Apps"}/>)
    const id = screen.getByTestId("category");
    fireEvent.click(id);
    expect(id.id).toBe("Apps")
  })
})