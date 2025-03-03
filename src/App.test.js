import { render, screen,fireEvent } from '@testing-library/react';
import {catClick,cat,setCat} from './App'
import Category from './Components/Category/Category';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader';


describe('Category button',() => {

  test('The category loads the right posts', () =>{
    render(<Category catClick={catClick} category={"Apps"}/>)
    const id = screen.getByTestId("category");
    fireEvent.click(id);
    expect(id.id).toBe("Apps")
  })
})


describe('Search bar input',() => {
  const mock = jest.fn()
  test('The right input comes out', () => {
    render(<SearchBarHeader val="application" val_change={mock}/>);
    const input = screen.getByTestId("input_works")
    fireEvent.change(input,{target:{value:"application"}});
    expect(input.value).toBe('application');
  })
})

