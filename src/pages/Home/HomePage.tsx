import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase/config/firebaseConfig"
import { signOut } from "../../firebase/auth/firebaseAuth"
import { useAuthUser } from "../../hooks/useAuthUser"

function HomePage() {
    const navigate = useNavigate()

    const { user, isAuthChecked } = useAuthUser();

    const HandleLogout = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch (error) {
            console.error("Logout failed", error)
        }
    }

    return (
        <div>
            <title> Cassist </title>
            <h1> Home </h1>
            <h2> Welcome {user?.displayName} </h2>
            <button onClick={HandleLogout}>Logout</button>
        </div>
    )
}

export default HomePage
