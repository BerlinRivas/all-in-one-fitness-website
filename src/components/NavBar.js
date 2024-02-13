import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }

    function closeSidebar() {
        setSidebarVisible(false);
    }

    return (
        <nav>
            <ul className="sidebar" style={{ display: sidebarVisible ? 'flex' : 'none' }}>
                <li onClick={closeSidebar}>
                    <Link to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link to="/diet-plan">Diet Plan</Link>
                </li>
                <li>
                    <Link to="/home-workouts">Home Workouts</Link>
                </li>
                <li>
                    <Link to="/gym-workouts">Gym Workouts</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">VitalityPeak</Link>
                </li>
                <li>
                    <Link to="/diet-plan">Diet Plan</Link>
                </li>
                <li>
                    <Link to="/home-workouts">Home Workouts</Link>
                </li>
                <li>
                    <Link to="/gym-workouts">Gym Workouts</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li onClick={toggleSidebar} style={{ marginTop: '25px', marginRight: '10px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </li>
            </ul>
        </nav>
    );
}
