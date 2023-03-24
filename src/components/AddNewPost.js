import { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const AddNewPost = ({ createPost }) => {

    const [post, setPost] = useState({title: '', body: ''});

    const createNewPost = (e) => {
        e.preventDefault();

        const { title, body } = post;

        if (!title || !body) return;

        const newPost = {
            id: Date.now(),
            title,
            body
        }
    
        createPost(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form>
            <MyInput
            value={post.title} 
            onChange={(e) => setPost({...post, title: e.target.value})}
            type="text" 
            placeholder='Enter title' 
            />
            <MyInput 
            value={post.body}
            onChange={(e) => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="Enter description"
            />
            <MyButton onClick={createNewPost}>Add post</MyButton>
      </form>
    )
}

export default AddNewPost;