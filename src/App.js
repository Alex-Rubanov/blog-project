import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';
import ErrorPage from './pages/ErrorPage';
import './styles/index.css'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter > 
        <Navbar/>
        
        <Switch>
          <Route exact path="/about">
            <About/>  
          </Route> 

          <Route exact path="/posts">
            <Posts/>
          </Route>

          <Route path="/404">
            <ErrorPage/>
          </Route>

          <Redirect to="/404"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
