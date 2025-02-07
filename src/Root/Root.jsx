import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Navigate to="/dashboard" replace />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;