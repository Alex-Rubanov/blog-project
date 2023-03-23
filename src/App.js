import { useState } from 'react';
import PostList from './components/PostList';
import './styles/postItem.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'It is a programming language'},
    {id: 2, title: 'Javascript 2', body: 'It is a programming language'},
    {id: 3, title: 'Javascript 3', body: 'It is a programming language'},
    {id: 4, title: 'Javascript 4', body: 'It is a programming language'}
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="List of JS posts"/>
    </div>
  );
}

export default App;
