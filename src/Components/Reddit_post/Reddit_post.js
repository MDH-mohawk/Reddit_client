
import React,{useState} from "react";
import ReactDOM from 'react-dom/client'
import helldivers2 from '../../img/hell_divers_2.jpg';
import post_style from './Reddit_post.css';
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { BsChatRightTextFill } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";


function RedditPost({img_src}){

    const[like,setLike] = useState("");

    function Toggle_like(e){
        if(like == ""){
            e.target.style.fill = "#00C86B";
            e.target.style.stroke = "none";
            setLike("#00C86B")
        }
        else{
            e.target.style.fill = "none";
            e.target.style.stroke = "#00C86B";
            setLike("")
        }
    }

    function Toggle_dislike(e){
        if(like == ""){
            e.target.style.fill = "#EF3535";
            e.target.style.stroke = "none";
            setLike("#EF3535")
        }
        else{
            e.target.style.fill = "none";
            e.target.style.stroke = "#EF3535";
            setLike("")
        }
    }

    return (
            <div className="post">
                <img src={img_src}/>
                <div className="lower_post">
                    <div className="likes_dislikes">
                        <TiArrowUpThick className="arrow_up" onClick={Toggle_like}/>
                        <TiArrowDownThick className="arrow_down" onClick={Toggle_like}/>
                    </div>
                    <p>Description text<br/>something</p>
                    <BsChatRightTextFill className="comments" />
                </div>
            </div>
    )
}

export default RedditPost;