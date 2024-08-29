// src/components/Users.tsx
import React from 'react';
import AdminCard from '../components/AdminCard';

const Users: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">Users</h2>
            <AdminCard />
        </div>
    );
}

export default Users;
