import React from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';
import { Link,useParams} from "react-router-dom";

function Category({cat}){

        const {category} = useParams()
        
        console.log(category)

    return (
        <Link to={`/${cat}`}>
        <aside className="category_main" id={cat} data-testid="category">
            <img className="Category_img" src={helldivers2}/>
            <p id="category_text">{cat}</p>
        </aside>
        </Link>
    )
}

export default Category;
