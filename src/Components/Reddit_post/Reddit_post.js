
import React,{useState} from "react";
import post_style from './Reddit_post.css';
import { BsChatRightTextFill } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";

function RedditPost({img_src,description_text}){

    const[like,setLike] = useState("");
    const [dislike,setDislike] = useState("")

    function Toggle_like(e){
        const current = e.currentTarget;
        if(like == ""){
            current.style.fill = "#00C86B";
            current.style.stroke = "none";
            setLike("#00C86B")
        }
        else{
            current.style.fill = "";
            current.style.stroke = "#00C86B";
            setLike("")
        }
    }

    function Toggle_dislike(e){
        if(dislike == ""){
            e.target.style.fill = "#EF3535";
            e.target.style.stroke = "none";
            setDislike("#EF3535")
        }
        else{
            e.target.style.fill = "";
            e.target.style.stroke = "#EF3535";
            setDislike("")
        }
    }

    return (
                <div className="post">
                    <img src={img_src}/>
                    <div className="lower_post">
                        <div className="likes_dislikes">
                            <TiArrowUpThick className="arrow_up" onClick={Toggle_like} data-testid="Like_button" fill={like}/>
                            <TiArrowDownThick className="arrow_down" onClick={Toggle_dislike} data-testid="Dislike_button"/>
                        </div>
                        <p>{description_text}</p>
                        <BsChatRightTextFill className="comments" />
                    </div>
                </div>
    )
}

export default RedditPost;