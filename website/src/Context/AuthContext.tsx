import { createContext, useEffect, useState, ReactNode } from "react";
import Api from "../Services/api";


type User = {
    _id: string,
    name: string,
    email: string
}

type AuthContextType = {
    isAuth: boolean;
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    isAuth: false,
    user: null,
    setUser: () => { },
    logout: () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        Api.get("/auth/me")
            .then((res) => {
                setIsAuth(true)
                setUser(res.data)

            })
            .catch(() => {
                setIsAuth(false)
                setUser(null)
            });
    }, []);

    const logout = async () => {
        await Api.post("/auth/logout");
        setIsAuth(false);
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{ isAuth, user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}