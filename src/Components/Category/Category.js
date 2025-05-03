import React from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import { Link,useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCategory } from "../Categories/categorySlice";
import { useSearchParams } from "react-router-dom";


function Category({cat}){
        const {category} = useParams()

        const dispatch = useDispatch()
        
        console.log(category)

        function handlecategory(){
            dispatch(changeCategory({
                category:cat
            }))
            console.log(category)
        }

    return (
        <Link to={cat} key={cat} onClick={handlecategory}>
        <aside className="category_main" id={cat} data-testid="category">
            <img className="Category_img" src={helldivers2}/>
            <p id="category_text">{cat}</p>
        </aside>
        </Link>
    )
}

export default Category;
