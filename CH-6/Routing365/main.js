import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from './home';
import About from "./about";


function Main(){
   return(

    <BrowserRouter>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
    </Routes>
    
    </BrowserRouter>

   )
}

export default Main;