import React from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import { Link,useParams} from "react-router-dom";

function Category({category,catClick}){

    const cat = useParams("category")

    return (
        <Link to={`${cat.category}`}>
        <div className="category_main" id={category} data-testid="category" onClick={catClick}>
            <img className="Category_img" src={helldivers2}/>
            <p id="category_text">{category}{cat.category}</p>
        </div>
        </Link>
    )
}

export default Category;
