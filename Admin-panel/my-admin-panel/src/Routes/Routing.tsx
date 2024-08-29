import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Dashboard from '../components/Dashboard ';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';
import Loader from '../components/Loader';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routing: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Set loading to true when the route changes
        setLoading(true);

        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the timeout as needed

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, [location]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="flex-1 p-6 bg-gray-100">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                    </Routes>
                </main>
            </div>
        </div>
    );
}

const RoutingWrapper: React.FC = () => {
    return (
        <Router>
            <Routing />
        </Router>
    );
}

export default RoutingWrapper;
