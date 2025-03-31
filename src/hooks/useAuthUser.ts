import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from "../firebase/config/firebaseConfig";

export function useAuthUser() {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser != null) {
                setUser(firebaseUser);
            }
            setIsAuthChecked(true);
        });

        return () => unsubscribe();
    }, []);

    return { user, isAuthChecked };
}
