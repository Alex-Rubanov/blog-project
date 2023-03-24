import { useState } from 'react';
import PostList from './components/PostList';
import AddNewPost from './components/AddNewPost';
import './styles/index.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'It is a programming language'},
    {id: 2, title: 'Javascript 2', body: 'It is a programming language'},
    {id: 3, title: 'Javascript 3', body: 'It is a programming language'},
    {id: 4, title: 'Javascript 4', body: 'It is a programming language'}
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      <AddNewPost createPost={addPost}/>
      <PostList 
        posts={posts} 
        title="List of JS posts"
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
