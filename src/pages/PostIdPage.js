import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import  PostServices  from '../API/PostServices'
import { SpinnerCircular } from 'spinners-react';
import MyButton from '../components/UI/button/MyButton';

export default function PostIdPage() {
  const postID = useParams().id;

  const router = useHistory();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPost, isLoading, postError] = useFetching(async (id) => {
    const post = await PostServices.getPostById(id);
    setPost(post);
  })

  const [fetchComments, commentsIsLoading, commentsError] = useFetching(async (id) => {
    const comments = await PostServices.getCommentsByPostId(id);
    setComments(comments);
  })

  useEffect(() => {
    fetchPost(postID);
    fetchComments(postID);
  }, [])

  return (
    <div className="post__item">
      {postError || commentsError ? router.push('/404') : null}
      
      {isLoading || commentsIsLoading
        ? <SpinnerCircular/>
        : <div>
            <h1>You have opened a new page with post {post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr  style={{margin: '25px 0'}}/>
            {comments.map(comment =>
              <div key={comment.id}>
                <h2>{comment.name}</h2>
                <div>{comment.email}</div>
                <p>{comment.body}</p>
            </div>  
            )}
          </div>
      }

      <MyButton onClick={() => router.goBack()}>Go Back</MyButton>
    </div>
    
  )
}
