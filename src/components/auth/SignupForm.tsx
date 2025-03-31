import { useState } from "react"
import { signUpUser, authWithGoogle } from "../../firebase/auth/firebaseAuth"
import { useNavigate } from "react-router-dom"

function SignupForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const user = await signUpUser(email, password);
            localStorage.setItem("user", JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoUrl: user.photoURL,
            }));
            sessionStorage.setItem("user", JSON.stringify({
                accessToken: user.getIdToken,
            }));
            navigate("/home");
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        }
    }

    async function handleGoogleLogin(e: React.FormEvent) {
        e.preventDefault()
        try {
            const user = await authWithGoogle()
            localStorage.setItem("user", JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoUrl: user.photoURL,
            }));
            navigate("/home")
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <br />
                <button type="submit">Login</button>
                <br />
            </form>
            <button type={"button"} onClick={handleGoogleLogin}>
                Login with Google
            </button>
        </>
    )
}

export default SignupForm;
