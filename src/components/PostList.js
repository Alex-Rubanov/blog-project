import PostItem from "./PostItem";

function PostList({ posts, title }) {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) => 
                <PostItem post={post} key={post.id} number={index + 1} />
            )}
        </>
    )
}

export default PostList;