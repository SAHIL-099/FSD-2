
// Create a React app to perform tasks as asked using functional component:
// 1)Create a react Router that includes three routes: Home, Product, and Contact and implement 
// navigation between these routes. 2)Create a route that displays a Home page, Product details 
// page and Contact details page. 3) When a user clicks on Home page it should navigate to 
// home page and display “Welcome to LJU” in bold in h1 heading. When a user clicks on a 
// Product page, it should navigate to the product detail page and display three products 
// information with price and description using props. And when user clicks on Contact page it 
// should navigate to contact details page and display contact information with blue color font

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./contact"
import Home from "./home"
import Nopage from "./nopage"
import Product from "./Prop7";

function Main() {
    return (
        
            <Router>
                <div className="mymenu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/product">Product</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/product" element={<Product/>}></Route>
                    <Route path="*" element={<Nopage/>}></Route>
                </Routes>
            </Router>
        
    )
}

export default Main;