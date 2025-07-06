import React,{useState} from "react";
import Category from "../Category/Category";
import "./Categories.css";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

function Categories({arr}){
    //position variable state for the categories menu on mobile view
    const [pos,setPos] = useState(-210)

    // onClick function to change the position state
    // This makes sure the menu has an interaction to hide to make
    // right of use of space in the mobiel environment
    function onClick() {
        setPos((prevPos) => (prevPos === -210? 0 : -210))
    }
    
    //the categories loading based on the 'arr' array prop
    const categories = (arr || [] ).map((item) =>{
        return <Category key={item} cat={item}/>
    })

    //condition to change appearance of the arrow button on mobile categories menu
    const arrow = pos === 0?<IoIosArrowForward className="uncollapse_arrow" onClick={onClick} data-testid="sidebar_arrow"/>:<IoIosArrowBack className="collapse_arrow" onClick={onClick} data-testid="sidebar_arrow"/>
    

    return (
        <div data-testid="test_cat_comp">
        <div className="categories_overview">
            {categories}
        </div>
        <div className="categories_overview_mobile" data-testid="sidebar" style={{
                right:`${pos}px`
        }}>
            {arrow}
            {categories}

        </div>
        </div>
    )
}


export default Categories;