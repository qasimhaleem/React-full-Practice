import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import Home from './Home'
import About from "./About"
import Product from "./Product"
import Products from "./Products"
import Error from "./Error"
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
export default App
