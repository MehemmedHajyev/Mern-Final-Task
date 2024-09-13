// src/components/Topbar.tsx
import React from 'react';

const Topbar: React.FC = () => {
    return (
        <header className="bg-red-950 mh text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button className="bg-red-900 px-4 py-2 rounded">Logout</button>
        </header>
    );
}

export default Topbar;
