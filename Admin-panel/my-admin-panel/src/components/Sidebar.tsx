// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-red-950 text-white p-6">
            <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
            <ul>
                <li className="mb-4">
                    <Link to="/" className="hover:text-gray-400">Dashboard</Link>
                </li>
                <li className="mb-4">
                    <Link to="/users" className="hover:text-gray-400">Users</Link>
                </li>
                <li className="mb-4">
                    <Link to="/settings" className="hover:text-gray-400">Settings</Link>
                </li>
                <li className="mb-4">
                    <Link to="/login" className="hover:text-gray-400">Login</Link>
                </li>

                <li className="mb-4">
                    <Link to="/register" className="hover:text-gray-400">Register</Link>
                </li>
                {/* Diğer menü öğeleri */}
            </ul>
        </aside>
    );
}

export default Sidebar;
