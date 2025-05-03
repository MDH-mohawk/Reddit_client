import React from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import { Link} from "react-router-dom"; 
import { useDispatch} from "react-redux";
import { changeCategory } from "../Categories/categorySlice";


function Category({cat}){

        const dispatch = useDispatch()


        function handlecategory(){
            dispatch(changeCategory({
                category:cat
            }))
        }

    return (
        <Link to={`${cat}`} key={cat} onClick={handlecategory}>
        <aside className="category_main" id={cat} data-testid="category">
            <img className="Category_img" src={helldivers2} alt="Representative category"/>
            <p id="category_text">{cat}</p>
        </aside>
        </Link>
    )
}

export default Category;
