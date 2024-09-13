// src/components/Settings.tsx
import React from 'react';
// import AdminCard from '../components/AdminCard';
import ProductTable from '../Layout/ProductTable';

const Settings: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            {/* <AdminCard /> */}

            <ProductTable />
        </div>
    );
}

export default Settings;
