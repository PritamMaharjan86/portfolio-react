import React from 'react'
import '../components/navigation.css';
import { Link } from "react-scroll";

export default function Navigation() {

    return (
        <>
            <div class="nav-holder">
                <div class="nav-top">
                    <Link className='nav' activeStyle={{ color: '#5754a8', transition:'all .2s ease', backgroundColor:'white', borderRadius:'35px', paddingTop:'10px', paddingBottom:'10px' }} smooth spy to="home">
                        Home
                    </Link>
                    <Link className='nav' activeStyle={{ color: '#5754a8', transition:'all .2s ease', backgroundColor:'white', borderRadius:'35px', paddingTop:'10px', paddingBottom:'10px'  }} smooth spy to="about">
                        About
                    </Link>
                    <Link className='nav' activeStyle={{ color: '#5754a8', transition:'all .2s ease', backgroundColor:'white', borderRadius:'35px', paddingTop:'10px', paddingBottom:'10px'  }} smooth spy to="work">
                        Work
                    </Link>
                </div>
            </div>
        </>
    )
}
