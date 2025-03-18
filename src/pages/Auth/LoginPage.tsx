import './LoginPage.scss';
import { useNavigate } from 'react-router';
import { auth, provider, signInWithPopup } from '../utils/firebase';

function LoginPage() {
    const navigate = useNavigate();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/home");
        } catch (error) {
            console.error("Login failed", error);
        }
    }

    const HandleLogin = () => {
        alert("LOGIN!");
    }

    return(
        <div>
            <title>Login</title>
            <h2>Login</h2>
            <div className='LoginForm'>
            <input type="email" placeholder="JohnDoe@email.com"/>
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button onClick={HandleLogin}>Login</button>
            <br />
            <button onClick={GoogleLogin}>Login with Google</button>
            </div>
        </div>
    )
}

export default LoginPage;
