import './App.css';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader';
import Categories from './Components/Categories/Categories';
import { Outlet} from 'react-router';

const categories = [
  "Phone","Screen","Apps"
]


function App() {

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