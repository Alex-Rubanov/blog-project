import { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/index.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'It is a programming language'},
    {id: 2, title: 'Javascript 2', body: 'It is a programming language'},
    {id: 3, title: 'Javascript 3', body: 'It is a programming language'},
    {id: 4, title: 'Javascript 4', body: 'It is a programming language'}
  ]);

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  }

  return (
    <div className="App">
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
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostList posts={posts} title="List of JS posts"/>
    </div>
  );
}

export default App;
