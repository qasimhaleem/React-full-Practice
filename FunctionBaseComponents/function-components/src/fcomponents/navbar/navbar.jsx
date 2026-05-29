import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-slate-550 text-sm flex items-center justify-between gap-2'>
            <div><Link to={"/"}>logo</Link></div>
            <form action="">
                <input type="text" name='search_item' id='search_item' />
            </form>
            <nav className='text-white'>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/more">More</Link>
            </nav>
        </div>
    )
}
export default Navbar