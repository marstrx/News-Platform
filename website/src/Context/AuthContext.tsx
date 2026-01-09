import { createContext, useEffect, useState, ReactNode } from "react";
import Api from "../Services/Api";

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
        Api.get("/auth/me")
            .then(() => setIsAuth(true))
            .catch(() => setIsAuth(false));
    }, []);

    const logout = async () => {
        await Api.post("/auth/logout");
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
}