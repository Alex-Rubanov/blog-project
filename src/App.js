import { useState ,useEffect } from 'react';
import { usePosts } from './hooks/usePosts';
import { SpinnerCircular } from 'spinners-react'

import PostServices from './API/PostServices'
import PostList from './components/PostList';
import FilterPosts from './components/FilterPosts';
import AddNewPost from './components/AddNewPost';
import MyModal from './components/UI/myModal/MyModal';
import './styles/index.css'
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [])
 
  async function fetchPosts() {
    setIsPostLoading(true);

    const posts = await PostServices.getAll();
    setPosts(posts);

    setIsPostLoading(false);  
  }
  
  

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

      {isPostLoading
        ? <SpinnerCircular 
            style={{ display: 'block', margin: '50px auto'}} 
            size={69} 
            thickness={100} 
            speed={100} 
            color="teal" 
            secondaryColor="rgba(0, 0, 0, 0.44)" 
          />
      : <PostList 
          posts={searchedAndSortedPosts} 
          title="List of available posts"
          deletePost={deletePost}
        />
      }
    </div>
  );
}

export default App;
