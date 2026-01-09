import { createContext, useEffect, useState, ReactNode } from "react";
import Api from "../Services/api";

type AuthContextType = {
    isAuth: boolean;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    isAuth: false,
    logout: () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        Api.get("/auth/me", { withCredentials: true })
            .then(() => setIsAuth(true))
            .catch(() => setIsAuth(false));
    }, []);

    const logout = async () => {
        await Api.post("/auth/logout", {}, { withCredentials: true });
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
}