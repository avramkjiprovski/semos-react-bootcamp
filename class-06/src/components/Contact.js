import React from 'react';
import { Outlet } from 'react-router-dom';

export const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <Outlet />
        </div>
    )
}