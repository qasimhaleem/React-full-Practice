import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// About with 5 seconds delay
const About = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(import("./about"));
        }, 5000);
    });
});

const Contact = lazy(() => import("./contact"));

const Lazy = () => {
    return (
        <Router>
            <nav>
                <Link to="/about">About</Link>
                <br />
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Added fallback property */}
            <Suspense fallback={<div> Loading...</div>}>
                <Routes>
                    {/* Removed the crashing <lazy /> route */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default Lazy;