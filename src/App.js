import './App.css';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader';
import RedditPost from './Components/Reddit_post/Reddit_post'
import Categories from './Components/Categories/Categories';
import { useState } from 'react';

function App() {

  const [cat,setCat] = useState("")

  const image_arr = [
    {
      key:1,
      src:"https://images.unsplash.com/photo-1618817449098-1d5538be1739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkZGl0fGVufDB8fDB8fHww",
      text:"Description text",
      category:"Phone"
    },
    {
      key:2,
      src:"https://images.unsplash.com/photo-1627719172031-ab42dc849bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZGRpdHxlbnwwfHwwfHx8MA%3D%3D",
      text:"Description text",
      category:"Screen"
    },
    {
      key:3,
      src:"https://images.unsplash.com/photo-1615985250029-f6c6be15745b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZGRpdHxlbnwwfHwwfHx8MA%3D%3D",
      text:"Description text",
      category:"Apps"
    }
  ]
  
  const filtered = image_arr.filter((i) => i.category === `${cat}`);
  console.log(filtered)

  function catClick(e){
    setCat(e.currentTarget.id)
    
  }
  
  return (
    <div className="App">    
      <SearchBarHeader/>
      <div className='main_content'>
        <div className='posts'>
          {
            filtered.map((item) => {
              return <RedditPost key={item.key} img_src={item.src}/>
            })
          }
        </div>
        <Categories className="categories" arr={image_arr} catClick={catClick}/>
      </div>
    </div>
  );
}

export default App;
