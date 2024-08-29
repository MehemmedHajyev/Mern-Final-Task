// src/components/Card.tsx
import React from 'react';
interface CardProps {
    title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div className="bg-white p-4 shadow rounded">
            {title}

        </div>
    );
}

export default Card;
