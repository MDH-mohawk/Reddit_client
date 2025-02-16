import React from "react";
import helldivers2 from '../../img/hell_divers_2.jpg';
import  './Category.css';

function Category({category,catClick}){

    return (
        <>
        <div className="category_main" id={category} data-testid="category" onClick={catClick}>
            <img className="Category_img" src={helldivers2}/>
            <p id="category_text">{category}</p>
        </div>
        </>
    )
}

export default Category;
