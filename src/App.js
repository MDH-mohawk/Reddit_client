import './App.css';
import {useParams,Outlet} from 'react-router';
import { useDispatch,useSelector} from 'react-redux';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader'
import Categories from './Components/Categories/Categories'
import { useEffect, useState } from 'react';
import { data_error, data_pending, changeDispost,RedditRealData,RedditSearchData, CatFilter, Redditdata} from './Components/Reddit_posts/RedditPostsSlice';
import { searchState } from './Components/Searchbar_header/SearchBarSlice';
import { categoryState } from './Components/Categories/categorySlice';


//predetermined categories for filtering the Reddit API call request
const categories = [
  "UXDesign","gamedev","GameDevelopment","PalWorld"
]

function App() {
  const posts = useSelector(RedditRealData);
  const searchposts = useSelector(RedditSearchData);
  const pending = useSelector(data_pending);
  const term = useSelector(searchState);
  const dispatch = useDispatch();
  const cat = useSelector(categoryState)

  const [results,setResults] = useState(true);


  //show the right posts based on category
  useEffect(()=> {
    console.log(cat)
    console.log(posts)
    dispatch(Redditdata(cat))
  },[cat])

  //filter based on search results based on given category
   useEffect( ()=> {
    if (term === "" && !pending){
      console.log(posts)
      dispatch(changeDispost(posts))
      console.log("the search term is empty")
      setResults(true)
    }
    else if(term.length > 0){
      if(searchposts.length <= 0){
        console.log("no search results!")
        setResults(false);
        console.log(results);
      }
      else {
        setResults(true);
        console.log(results);
        dispatch(changeDispost(searchposts))
      }
    }
    },[pending,term])


  //Rendering the application
  return (
        <div className="App">    
          <SearchBarHeader/>
          <div className='main_content'>
            <div className='reddit_data'>
            {results?<Outlet/>:<p id='no_results'>No results with <b>{term}</b> ! Search again with another <i>term</i></p>}
            </div>
            <Categories className="categories" arr={categories}/>
          </div>
        </div>
  );
}

export default App;