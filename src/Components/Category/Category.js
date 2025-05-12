import React, { useEffect } from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import {Link,useParams} from "react-router"; 
import {useDispatch,useSelector} from "react-redux";
import {changeCategory } from "../Categories/categorySlice";
import {CatFilter } from "../Reddit_posts/RedditPostsSlice";
import {categoryState } from "../Categories/categorySlice";
import { AddSearchTerm } from "../Searchbar_header/SearchBarSlice";


function Category({cat}){

        const dispatch = useDispatch();
        const currentCat = useSelector(categoryState);
        const {category} = useParams()

        let style = "category_main";

        useEffect(() => {
            const selected = document.getElementById(`${currentCat}`)
            selected.classList.add("categoryselected")
        },[category])

        function handlecategory(e){
            dispatch(changeCategory({category:cat}))
            dispatch(CatFilter(cat))
            dispatch(AddSearchTerm(""))
            if(currentCat !== e.currentTarget.children[0].id){
            const unselected = document.getElementById(`${currentCat}`)
            unselected.classList.remove("categoryselected")
            }
        }
        
        

    return (
        <Link to={`${cat}`} key={cat} onClick={handlecategory} data-testid="cat_test">
        <aside className={style} id={cat} data-testid="category">
            <img className="Category_img" src={helldivers2} alt="Representative category"/>
            <p id="category_text">{cat}</p>
        </aside>
        </Link>
    )
}

export default Category;
