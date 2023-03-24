import PostItem from "./PostItem";
import PostsTitle from "./PostTitle";

function PostList({ posts, title, deletePost }) {
    return (
        <>
            {posts.length 
                ? <PostsTitle title={title}/>
                : <PostsTitle title="There are no available posts at the moment"/>
            }
            {posts.map((post, index) => 
                <PostItem 
                    post={post} 
                    id={post.id}
                    key={post.id} 
                    number={index + 1} 
                    deletePost={deletePost}
                />
            )}
        </>
    )
}

export default PostList;