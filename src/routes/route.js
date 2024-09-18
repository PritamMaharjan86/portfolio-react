import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import Projects from '../pages/projects';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />


                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routing
