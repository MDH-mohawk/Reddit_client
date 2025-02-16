import React,{useState} from "react";
import Category from "../Category/Category";
import "./Categories.css";
import { IoIosArrowBack } from "react-icons/io";


function Categories({arr,catClick}){
    const [pos,setPos] = useState(-95)

    function onClick() {
        setPos((prevPos) => (prevPos === -95? 0 : -95))
    }
    

    const categories = (arr || [] ).map((item) =>{
        return <Category key={item.id || item.category} category={item.category} catClick={catClick}/>
    })

    

    return (
        <div>
        <div className="categories_overview">
            {categories}
        </div>
        <div className="categories_overview_mobile" style={{
                right:`${pos}px`
        }}>
            <IoIosArrowBack className="collapse_arrow" onClick={onClick}/>
            {categories}

        </div>
        </div>
    )
}


export default Categories;