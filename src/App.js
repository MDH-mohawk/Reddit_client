import './App.css';
import {useParams,Outlet} from 'react-router';
import { useDispatch,useSelector} from 'react-redux';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader'
import Categories from './Components/Categories/Categories'
import { useEffect } from 'react';
import { Redditdata,RedditRealData } from './Components/Reddit_posts/RedditPostsSlice';


const categories = [
  "UXDesign","gamedev","GameDevelopment","PalWorld"
]

function App() {

  const data = useSelector(RedditRealData)
  const dispatch = useDispatch();
  const {category} = useParams();


  useEffect(() =>{
    dispatch(Redditdata(category))
  },[category])

  return (
        <div className="App">    
          <SearchBarHeader/>
          <div className='main_content'>
            <div className='reddit_data'>
            <Outlet/>
            </div>
            <Categories className="categories" arr={categories}/>
          </div>
        </div>
  );
}

export default App;