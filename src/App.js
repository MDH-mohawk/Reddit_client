import './App.css';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader';
import Reddit_posts from './Components/Reddit_posts/Reddit_posts';
import Categories from './Components/Categories/Categories';
import { useState,useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, useParams, useSearchParams } from 'react-router-dom';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const image_arr = [
  {
    key:1,
    src:"https://images.unsplash.com/photo-1618817449098-1d5538be1739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkZGl0fGVufDB8fDB8fHww",
    text:"Watching phone",
    category:"Phone"
  },
  {
    key:2,
    src:"https://images.unsplash.com/photo-1627719172031-ab42dc849bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZGRpdHxlbnwwfHwwfHx8MA%3D%3D",
    text:"Ordering something",
    category:"Screen"
  },
  {
    key:3,
    src:"https://images.unsplash.com/photo-1615985250029-f6c6be15745b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZGRpdHxlbnwwfHwwfHx8MA%3D%3D",
    text:"Developing an application",
    category:"Apps"
  }
]

function App() {

  //important Hooks for filtering posts

  const {category} = useParams()

  
  //Specifically use for categories
  const [cat,setCat] = useState()

  //Specifically used for searching
  const [search,setSearch] = useState('')

  //used to filter information
let [filtered,setFiltered] = useState([])

  //Filtering based on selected category//
  if(filtered.length === 0){
      filtered = image_arr
  }

  //Search filtering by typing text//

  useEffect(() =>{
    let filtered_items = image_arr.filter((i) =>i.text.toLowerCase().includes(`${search}`));
    setFiltered(filtered_items);
  },[search]);
  
  function onValueChanged(e){
    setSearch(e.target.value);
  }
  return (
        <div className="App">    
          <SearchBarHeader val={search} val_change={onValueChanged}/>
          <div className='main_content'>
            <Routes>
              <Route path='/:category' element={<Reddit_posts array={filtered}/>}/>
            </Routes>
            <Categories className="categories" arr={image_arr}/>
          </div>
        </div>
  );
}

export default App;
export {image_arr};