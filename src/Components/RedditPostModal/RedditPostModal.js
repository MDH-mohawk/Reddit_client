import {useState} from "react";
import { BsChatRightTextFill } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { currentPostState } from "./RedditPostModalSlice";
import { useSelector } from "react-redux";
import "../RedditPostModal/RedditPostModelStyle.css"


function RedditPostModal({comments}){

    const currentPosts = useSelector(currentPostState)

    const[like,setLike] = useState("");
    const [dislike,setDislike] = useState("")

    function Toggle_like(e){
        const current = e.currentTarget;
        if(like === ""){
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
        if(dislike === ""){
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
    <div className="modal_post">
        <img src={currentPosts.img} alt="Defines the current post"/>
        <div className="lower_post">
            <div className="likes_dislikes">
                <div className="likes">
                    <TiArrowUpThick className="arrow_up" onClick={Toggle_like} data-testid="Like_button" fill={like}/>
                    <p>{currentPosts.likes}</p>
                </div>
                <div className="dislikes">
                    <TiArrowDownThick className="arrow_down" onClick={Toggle_dislike} data-testid="Dislike_button"/>
                    <p>{currentPosts.dislikes}</p>       
                </div>
            </div>
            <p>Desription</p>
            <div className="comments">
                <BsChatRightTextFill className="comments" />
                <p>{comments}</p>
            </div>
        </div>
        <div className="Commentlist">{comments}</div>
    </div>   
    )
}

export default RedditPostModal;