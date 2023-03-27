import { useState ,useEffect } from 'react';
import { usePosts } from './hooks/usePosts';
import { SpinnerCircular } from 'spinners-react'

import PostServices from './API/PostServices';
import { useFetching } from './hooks/useFetching';
import Pagination from './components/UI/pagination/Pagination';
import { getTotalPages } from './utils/pages';
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

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(4);



  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const limit = 10;

    const response = await PostServices.getAll(limit, currentPage);
    const totalPostsCount = response.headers['x-total-count'];
    const totalNumberOfPages = getTotalPages(totalPostsCount, limit);

    setTotalPages(totalNumberOfPages);
    setPosts(response.data);
  });

  useEffect(() => {
    fetchPosts();
    console.log('RENDER');
    // eslint-disable-next-line
  }, [currentPage])
 
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

      {postError && <h2 style={{textAlign: 'center', marginTop: '30px'}}>Ooops! Error occured during request. {postError}</h2>}
      {isLoading
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

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
      />      
    </div>
  );
}

export default App;
