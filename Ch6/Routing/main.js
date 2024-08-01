import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Shop from './shop';
import Nopage from './nopage';
import Product from './product';

function Main() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;