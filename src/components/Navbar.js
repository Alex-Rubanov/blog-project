import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context'
import MyButton from './UI/button/MyButton'

export default function Navbar() {
  const {setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  
  return (
    <nav className="navbar">
        
        <div className="navbar__links">
            <MyButton onClick={logout}>Log out</MyButton>
            <div className="navbar__link">
              <Link to="/about">About</Link>
              <Link to="/posts">Posts</Link>
            </div>
        </div>
    </nav>
  )
}
