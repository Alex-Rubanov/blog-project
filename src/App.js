import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/index.css'

// const router = createBrowserRouter([
//   {
//     path: '/posts',
//     element: <Posts/>
//   },
//   {
//     path: '/about',
//     element: <About/>
//   },
//   {
//     path: '/',
//     element: <Navbar/>,
//     errorElement: <ErrorPage/>
//   }
// ]);

function App() {
  
  return (
    <div className="App">
      <BrowserRouter > 

        <Route path="/">
          <Navbar/>
        </Route>

        <Route path="/about">
          <About/>  
        </Route> 

        <Route path="/posts">
          <Posts/>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
