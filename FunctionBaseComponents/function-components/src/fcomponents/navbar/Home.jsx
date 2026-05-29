import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './about'
import Product from './product'
import Contact from './contact'
import Error from './error'
import Home from './Home'
import More from './more'


const Home = () => {
    return (
        //     Routes setup //
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/more' element={<More />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </Router>

    )
}

export default Home