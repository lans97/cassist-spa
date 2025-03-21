import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../config/firebaseConfig"

// TODO:
// [ ] Transfer sign in with Google behaviour here
// [ ] Maybe add other OAuths
// [ ] Process email/password correctly
// [ ] Check for more funtionality to add here

export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("Something went wrong!");
        }
    }
};

export const loginWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, provider);
        return userCredential.user;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("Something went wrong!");
        }
    }
}

export { signOut };
