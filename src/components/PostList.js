import { CSSTransition, TransitionGroup } from "react-transition-group";

import PostItem from "./PostItem";
import PostsTitle from "./PostTitle";

function PostList({ posts, title, deletePost }) {
    return (
        <>
            {posts.length 
                ? <PostsTitle title={title}/>
                : <PostsTitle title="There are no available posts at the moment"/>
            }
            <TransitionGroup>
            {posts.map((post, index) => 
                <CSSTransition
                    key={post.id} 
                    timeout={500}
                    classNames="post"    
                >
                    <PostItem 
                    post={post} 
                    id={post.id}
                    number={index + 1} 
                    deletePost={deletePost}
                />
                </CSSTransition>
            )}
            </TransitionGroup>
        </>
    )
}

export default PostList;