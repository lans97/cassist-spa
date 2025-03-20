import './LoginPage.scss';
import { useNavigate } from 'react-router';

function LoginPage() {
    const navigate = useNavigate();

    const GoogleLogin = async () => {
        // TODO: User new firbase login functions
    }

    const HandleLogin = () => {
        // TODO: User new firbase login functions
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
