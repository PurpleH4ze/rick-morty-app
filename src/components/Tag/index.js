"use client";

import React from "react";

const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
];

const getRandomColor = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
};

// Boyut sınıfları
const sizeVariants = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
};

const Tag = ({ role, size = "sm" }) => {
    const color = getRandomColor(role);
    const sizeClass = sizeVariants[size] || sizeVariants["sm"];

    return (
        <span
            className={`text-white font-bold rounded-full mr-2 mb-1 inline-block ${color} ${sizeClass}`}
        >
            {role}
        </span>
    );
};

export default Tag;
