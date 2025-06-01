import React,{useState} from "react";
import Category from "../Category/Category";
import "./Categories.css";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

function Categories({arr}){
    const [pos,setPos] = useState(-210)

    function onClick() {
        setPos((prevPos) => (prevPos === -210? 0 : -210))
    }
    

    const categories = (arr || [] ).map((item) =>{
        return <Category key={item} cat={item}/>
    })

    const arrow = pos === 0?<IoIosArrowBack className="collapse_arrow" onClick={onClick} data-testid="sidebar_arrow"/>:<IoIosArrowForward className="collapse_arrow" onClick={onClick} data-testid="sidebar_arrow"/>
    

    return (
        <div>
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