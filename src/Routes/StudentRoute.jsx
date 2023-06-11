import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useStudent from "../hooks/useStudent";
import { Navigate } from "react-router-dom";


const StudentRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isStudent, isStudentLoading] = useStudent()

    if (loading || isStudentLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children
    }

    return (
        <Navigate to='/' replace>

        </Navigate>
    );
};

export default StudentRoute;