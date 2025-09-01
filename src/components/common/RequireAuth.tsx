import { Navigate, useLocation } from "react-router"
import { useAuth } from "../../contexts/AuthContext"

import type { ReactNode } from "react";

export default function RequireAuth({ children }: { children: ReactNode }) {

    const auth = useAuth();
    const token = auth?.token;
    const location = useLocation();

    console.log(location);


    if (!token) {
        // no token -  redirect to login
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}