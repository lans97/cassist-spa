import { auth } from '../firebase/config/firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import './LandingPage.scss'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/home");
            }
        })
        return unsubscribe;
    }, [auth, navigate]);


    return (
        <div className="LandingPage">
            <title>Cassist</title>
            <Link to="/login">Login</Link>
            <h1>Welcome to Cassist</h1>
        </div>
    )
}

export default LandingPage
