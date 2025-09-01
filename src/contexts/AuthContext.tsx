import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Define context type
type AuthContextType = {
    token: string | null;
    setToken: (token: string | null) => void;
    login: (token: string) => void;
    updateFavorites: (newFavorite: string) => void;
};

// Provide a default value for context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    return useContext(AuthContext);
}

// Type children prop
type AuthProviderProps = {
    children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<string | null>(sessionStorage.getItem("token"));
    const [favorites, setFavorites] = useState<string[]>([]);

    function login(newToken: string) {
        setToken(newToken);
        sessionStorage.setItem("token", newToken);

    }

    function updateFavorites(newFavorite: string) {
        let updatedFavorites;
        if (!favorites.includes(newFavorite)) {
            updatedFavorites = [...favorites, newFavorite];
        } else {
            updatedFavorites = favorites.filter(favorite => favorite !== newFavorite);
        }
        setFavorites(updatedFavorites);
        console.log(updatedFavorites);


        fetch(`https://dinmaegler.onrender.com/users/689462b308d6d9006d2e8bfb`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ "homes": [...updatedFavorites] })
        }).then(response => {
            console.log(response);

            return response.json()
        })
            .then(data => {
                console.log(data);
            });
    }



    return (
        <AuthContext.Provider value={{ token, setToken, login, updateFavorites }}>
            {children}
        </AuthContext.Provider>
    );
}