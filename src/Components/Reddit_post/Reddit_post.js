
import React,{useState} from "react";
import './Reddit_post.css';
import { BsChatRightTextFill } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { categoryState } from "../Categories/categorySlice";

function RedditPost({img_src,description_text,post_id,author,ups,downs}){

    const {post} = useParams()
    const navigate = useNavigate()

    const currentcat = useSelector(categoryState)


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
        navigate(`/${currentcat}/${post_id}`)
        console.log(post)
    }


    return (
                <div className="post" onClick={handlePost} id={post_id}>
                    {!img_src.match(/\.(jpe?g)$/i)?null:<img src={img_src}/>}
                    <div className="lower_post">
                        <div className="likes_dislikes">
                            <TiArrowUpThick className="arrow_up" onClick={Toggle_like} data-testid="Like_button" fill={like}/><p>{ups}</p>
                            <TiArrowDownThick className="arrow_down" onClick={Toggle_dislike} data-testid="Dislike_button"/><p>{downs}</p>
                        </div>
                            <p id="post_description" >{description_text}</p>
                        <p>posted by <b>{author}</b></p>
                        <button type="button"> see post</button>
                    </div>
                </div>
    )
}

export default RedditPost;