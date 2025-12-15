import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Product from './Product'
import Products from './Products'
import Error from './Error'
import Home from './Home'
import { useParams } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Link to='/about'>About</Link>
            <br />
            <Link to='./product'>Products</Link>
            <Link to='./product'>Product</Link>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/product/:pid" element={<Product />} />
                <Route path='/products' element={<Products />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App