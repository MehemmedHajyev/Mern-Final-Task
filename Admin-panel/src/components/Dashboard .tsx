// src/components/Dashboard.tsx
import React from 'react';
import Card from './Card ';

const Dashboard: React.FC = () => {
    return (
        <main className="flex-1 p-6 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Admin Panel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card title="Card 1" />
                <Card title="Card 2" />
                <Card title="Card 3" />
                <Card title="Card 4" />
            </div>
        </main>
    );
}

export default Dashboard;
