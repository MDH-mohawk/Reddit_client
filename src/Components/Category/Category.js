import React from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import {Link} from "react-router-dom"; 
import {useDispatch,useSelector} from "react-redux";
import {changeCategory } from "../Categories/categorySlice";
import {CatFilter } from "../Reddit_posts/RedditPostsSlice";
import {categoryState } from "../Categories/categorySlice";
import { AddSearchTerm } from "../Searchbar_header/SearchBarSlice";


function Category({cat}){

        const dispatch = useDispatch()
        const currentCat = useSelector(categoryState)


        function handlecategory(){
            dispatch(changeCategory({
                category:cat
            }))
            dispatch(CatFilter(cat))
            dispatch(AddSearchTerm(""))
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
