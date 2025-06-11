import './App.css';
import {useParams,Outlet} from 'react-router';
import { useDispatch,useSelector} from 'react-redux';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader'
import Categories from './Components/Categories/Categories'
import { useEffect } from 'react';
import { Redditdata,RedditRealData } from './Components/Reddit_posts/RedditPostsSlice';


//predetermined categories for filtering the Reddit API call request
const categories = [
  "UXDesign","gamedev","GameDevelopment","PalWorld"
]

function App() {


  const dispatch = useDispatch();
  const {category} = useParams();

  //Request data from the reddit API when the category variable changes.
  //This makes sure there is always information to load. UseEffect is perfect for this
  useEffect(() =>{
    dispatch(Redditdata(category))
  },[category])


  //Rendering the application
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