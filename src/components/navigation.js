import React from 'react'
import '../components/navigation.css';

export default function Navigation() {

    return (
        <>
            <div className='navigation'>

                <ul>
                    <li activeClassName="navbar-link-item">Home</li>
                    <li activeClassName="navbar-link-item">Contact</li>
                    <li activeClassName="navbar-link-item">About </li>
                </ul>
            </div>

        </>
    )
}
