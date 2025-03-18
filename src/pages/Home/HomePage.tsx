import { useNavigate } from 'react-router-dom'
import api from '../api/api'
import { auth, signOut } from '../utils/firebase'

function HomePage() {
    const navigate = useNavigate()

    const HandleLogout = async () => {
        try {
            await signOut(auth)
            localStorage.removeItem('user')
            navigate('/')
        } catch (error) {
            console.error('Logout failed', error)
        }
    }

    return (
        <div>
            <title> Cassist </title>
            <h1> Home </h1>
            <button onClick={HandleLogout}>Logout</button>
        </div>
    )
}

export default HomePage;
