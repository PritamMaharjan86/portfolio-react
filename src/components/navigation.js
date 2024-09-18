import React from 'react';
import { useLocation } from 'react-router-dom';
import './navigation.css';

function Navbar() {
    const location = useLocation();

    return (
        <div className='nav-holder'>
            <ul>
                <li>
                    <a
                        href="/home"
                        className={location.pathname === "/home" ? "active" : ""}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/projects"
                        className={location.pathname === "/projects" ? "active" : ""}
                    >
                        Projects
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
