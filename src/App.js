import { useState, useMemo } from 'react';
import PostList from './components/PostList';
import FilterPosts from './components/FilterPosts';
import AddNewPost from './components/AddNewPost';
import './styles/index.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', body: 'dd is a programming language'},
    {id: 2, title: 'bb 2', body: 'cc is a programming language'},
    {id: 3, title: 'cc 3', body: 'bb is a programming language'},
    {id: 4, title: 'dd 4', body: 'aa is a programming language'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    console.log("RENDER");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    const caseInsensitiveQuery = filter.query.toLowerCase();

    return sortedPosts.filter(post => post.title.toLowerCase().includes(caseInsensitiveQuery));
  }, [sortedPosts, filter.query])

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      <AddNewPost createPost={addPost}/>
      <hr style={{margin: '15px 0 15px 20px', width: '100%'}}/>
      <FilterPosts 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        posts={sortedAndSearchedPosts} 
        title="List of JS posts"
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
