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
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'paymentConfirm',
                element: <PaymentConfirm></PaymentConfirm>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'instructorClasses',
                element: <InstructorClasses></InstructorClasses>
            }
        ]
    }
])