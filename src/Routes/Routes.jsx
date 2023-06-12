import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Intructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../Pages/StudentDashboard/SelectedClasses/SelectedClasses";
import PaymentHistory from "../Pages/StudentDashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../Pages/StudentDashboard/EnrolledClasses/EnrolledClasses";
import PaymentConfirm from "../Pages/StudentDashboard/SelectedClasses/PaymentConfirm.jsx/PaymentConfirm";
import ManageClasses from "../Pages/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers/ManageUsers";
import AddAClass from "../Pages/InstructorDashboard/AddAClass/AddAClass";
import InstructorClasses from "../Pages/InstructorDashboard/InstructorClasses/InstructorClasses";
import StudentRoute from "./StudentRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import SendFeedback from "../Pages/AdminDashboard/ManageClasses/SendFeedback/SendFeedback";
import UpdateAClass from "../Pages/InstructorDashboard/InstructorClasses/UpdateAClass/UpdateAClass";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'selectedClasses',
                element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
            },
            {
                path: 'enrolledClasses',
                element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
            },
            {
                path: 'paymentHistory',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },
            {
                path: 'paymentConfirm',
                element: <StudentRoute><PaymentConfirm></PaymentConfirm></StudentRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'addAClass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: 'instructorClasses',
                element: <InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
            },
            {
                path: 'sendFeedback/:id',
                element: <AdminRoute><SendFeedback></SendFeedback></AdminRoute>
            },
            {
                path: 'updateAClass/:id',
                element: <UpdateAClass></UpdateAClass>
            }
        ]
    }
])