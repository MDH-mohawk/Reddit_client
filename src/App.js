import './App.css';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader';
import RedditPost from './Components/Reddit_post/Reddit_post'
import Categories from './Components/Categories/Categories';
import { useState,useEffect } from 'react';

function App() {

  //important Hooks for filtering posts

  const [cat,setCat] = useState()
  const [search,setSearch] = useState('')

  //used to filter information
  let [filtered,setFiltered] = useState([])
  
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


  //Filtering based on selected category//

  function catClick(e){
    setCat(e.currentTarget.id);
  }
  
  if(filtered.length === 0){
      filtered = image_arr
  }

  useEffect(() =>{
    let filtered_items = image_arr.filter((i) => i.category === `${cat}`);
    setFiltered(filtered_items);
  },[cat]);

  ///filtered = image_arr.filter((i) => i.category === `${cat}` || i.text.includes( `${search}`));

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
        <div className='posts'>
          {
            filtered.map((item) => {
              return <RedditPost key={item.key} img_src={item.src} description_text={item.text}/>
            })
          }
        </div>
        <Categories className="categories" arr={image_arr} catClick={catClick}/>
      </div>
    </div>
  );
}

export default App;
