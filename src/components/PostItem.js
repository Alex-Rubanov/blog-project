import MyButton from "./UI/button/MyButton";
import { useHistory } from "react-router-dom";

function PostItem(props) {
    const router = useHistory();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.deletePost(props.post.id)}>Delete</MyButton>
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Open</MyButton>
            </div>
        </div>
    )
}

export default PostItem;