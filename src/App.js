import './App.css';
import SearchBarHeader from './Components/Searchbar_header/SearchBarHeader';
import Categories from './Components/Categories/Categories';
import { Outlet} from 'react-router-dom';

const categories = [
  "Phone","Screen","Apps"
]

function App() {


  return (
        <div className="App">    
          <SearchBarHeader/>
          <div className='main_content'>
            <Outlet/>
            <Categories className="categories" arr={categories}/>
          </div>
        </div>
  );
}

export default App;