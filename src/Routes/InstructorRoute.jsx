import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useInstructor from "../hooks/useInstructor";
import { Navigate } from "react-router-dom";


const InstructorRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children
    }

    return (
        <Navigate to='/' replace>

        </Navigate>
    );
};

export default InstructorRoute;