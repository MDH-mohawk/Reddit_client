import React, { useEffect } from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import {Link} from "react-router"; 
import {useDispatch,useSelector} from "react-redux";
import {changeCategory } from "../Categories/categorySlice";
import {CatFilter } from "../Reddit_posts/RedditPostsSlice";
import {categoryState } from "../Categories/categorySlice";
import { AddSearchTerm } from "../Searchbar_header/SearchBarSlice";
import { Redditdata} from "../Reddit_posts/RedditPostsSlice";


function Category({cat}){

        const dispatch = useDispatch();

        //current category state from the store
        const currentCat = useSelector(categoryState);

        //style for the category button when it is 'selected'
        let style = "category_main";

        //Change style of selected category based on the selected category
        useEffect(() => {
            const selected = document.getElementById(`${currentCat}`)
            selected.classList.add("categoryselected")
        },[currentCat])

        //Handling selecting the category
        function handlecategory(e){
            dispatch(Redditdata(cat))
            //changes the category state
            dispatch(changeCategory({category:cat}))
            //clearing search when category get clicked on
            dispatch(AddSearchTerm(""))
            //remove a class for styling when a category is not selected
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
