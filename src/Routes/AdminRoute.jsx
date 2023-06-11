import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../hooks/useAdmin";
import { Navigate } from "react-router-dom";


const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children
    }

    return (
        <Navigate to='/' replace>

        </Navigate>
    );
};

export default AdminRoute;