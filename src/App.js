import { useState, useMemo } from 'react';
import PostList from './components/PostList';
import FilterPosts from './components/FilterPosts';
import AddNewPost from './components/AddNewPost';
import MyModal from './components/UI/myModal/MyModal';
import './styles/index.css'
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'rra', body: 'dd is a programming language'},
    {id: 2, title: 'ee 2', body: 'cc is a programming language'},
    {id: 3, title: 'cc 3', body: 'bb is a programming language'},
    {id: 4, title: 'dd 4', body: 'aa is a programming language'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

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
    setModal(false);
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Add a new post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <AddNewPost createPost={addPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0 15px 20px', width: '100%'}}/>
      <FilterPosts 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        posts={sortedAndSearchedPosts} 
        title="List of available posts"
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
