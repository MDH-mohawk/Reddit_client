
import React,{useState} from "react";
import './Reddit_post.css';
import { BsChatRightTextFill } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { setCurrentPost } from "../RedditPostModal/RedditPostModalSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoryState } from "../Categories/categorySlice";

function RedditPost({img_src,description_text}){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentcat = useSelector(categoryState)

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

    function handlePost(e){
        const current = e.currentTarget
        console.log(current.children[1].children[1].innerHTML)
        console.log(currentcat)
        dispatch(setCurrentPost({
            name:current.children[1].children[1].innerHTML,
            likes:"1000",
            dislikes:"500",
            img:current.children[0].src
        }))
        navigate(`/${currentcat}/${current.children[1].children[1].innerHTML}`)
    }
    

    return (
                <div className="post" onClick={handlePost}>
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