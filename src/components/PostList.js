import PostItem from "./PostItem";

function PostList({ posts, title }) {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map(post => 
                <PostItem post={post} key={post.title} />
            )}
        </>
    )
}

export default PostList;