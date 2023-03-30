import { useContext } from "react"
import { useHistory } from "react-router-dom"
import MyButton from "../components/UI/button/MyButton"
import MyInput from "../components/UI/input/MyInput"
import { AuthContext } from "../context"


const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const router = useHistory();

    const login = (event) => {
        event.preventDefault();

        setIsAuth(true);
        localStorage.setItem('auth', 'true');

        router.push('/posts');
    }
    
    return (
        <div className="login__page">
            <h1>Login page</h1>
            <form className="login__form">
                <MyInput placeholder="Enter your login"/>
                <MyInput type="password" placeholder="Enter your password"/>
                <MyButton onClick={login}>Log In</MyButton>
            </form>
        </div>
    )
}

export default Login;