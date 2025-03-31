import "./LoginPage.scss"
import LoginForm from "../../components/auth/LoginForm"
import { useAuthUser } from "../../hooks/useAuthUser"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
    const { user, isAuthChecked } = useAuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthChecked && user) {
            navigate("/home");
        }
    }, [user, isAuthChecked, navigate]);

    if (!isAuthChecked) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <title>Login</title>
            <h2>Login</h2>
            <LoginForm />
        </>
    )
}

export default LoginPage
