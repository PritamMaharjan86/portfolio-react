import React from 'react'
import '../components/navigation.css';
import { Link } from "react-scroll";

export default function Navigation() {

    return (
        <>
            <div class="nav-holder">
                <div class="nav-top">
                    <Link className='nav' activeClass="active" smooth spy to="home">
                        Home
                    </Link>
                    <Link className='nav' activeClass="active" smooth spy to="about">
                        About
                    </Link>
                    <Link className='nav' activeClass="active" smooth spy to="work">
                        Work
                    </Link>
                </div>
            </div>
        </>
    )
}
