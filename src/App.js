import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import './styles/index.css'
import { AuthContext } from './context';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    
    setLoading(false);
  }, [isLoading])

  return (
    <div className="App">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}>
        <BrowserRouter >   
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
