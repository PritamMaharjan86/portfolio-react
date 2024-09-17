import React from 'react'
import '../components/navigation.css';
import { Link } from "react-scroll";

export default function Navigation() {

    return (
        <>
            <div class="nav-holder">
                <div class="nav-top">
                    <Link className='nav' style={{ transition: 'all 0.1s ease-in-out', paddingTop: '10px', paddingBottom: '10px', fontFamily: 'CustomFont', fontWeight:'bold' }}>
                        Home
                    </Link>
                    <Link className='nav' style={{ transition: 'all 0.1s ease-in-out', paddingTop: '10px', paddingBottom: '10px', fontFamily: 'CustomFont', fontWeight:'bold' }}>
                        Projects
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
