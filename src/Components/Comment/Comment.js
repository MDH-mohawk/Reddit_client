import './Comment.css'

function Comment ({body,author}){


    return (
    <div className="comment">
        <p>{body}</p>
        <br/>
        <p>By <b>{author}</b></p>
    </div>
    )
}

export default Comment