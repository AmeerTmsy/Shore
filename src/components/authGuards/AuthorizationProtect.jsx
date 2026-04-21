import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthorizationProtect({ userRole }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) try {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } catch (err) {
            setUser(null);
        }
        setLoading(false);
    }, []);
    
    if (loading) return null;
    if (!user || user.role !== userRole) {
        return (
            <Navigate to="/" state={{ from: location }} replace />
        );
    }
    return <Outlet />;
}