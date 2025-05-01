import React from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import { Link,useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCategory } from "../Categories/categorySlice";
import { useSearchParams } from "react-router-dom";


function Category({cat}){
        const [searchParams,setSearchParams] = useSearchParams({category:""})

        searchParams.get("category")

        const {category} = useParams()

        const dispatch = useDispatch()
        
        console.log(category)

        function handlecategory(){
            dispatch(changeCategory({
                category:cat
            }))
            setSearchParams({category:cat})
        }

    return (
        <div key={cat} onClick={handlecategory}>
        <aside className="category_main" id={cat} data-testid="category">
            <img className="Category_img" src={helldivers2}/>
            <p id="category_text">{cat}</p>
        </aside>
        </div>
    )
}

export default Category;
