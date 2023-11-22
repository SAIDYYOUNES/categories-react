import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Navbar from "./Pages/Navbar.js";
import Footer from "./Pages/Footer.js";
import Register from "./Pages/Register.js";
import Categories from "./Pages/Categories.js";
import NotFound from "./Pages/NotFound.js";
import Thank from "./Pages/Thank.js";
import { CategoriesSession } from './Components/CategoriesSession.js';
import { CategoriesSubSession } from './Components/CategoriesSubSession.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank" element={<Thank />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path='/categories' element={<Categories/>}>
            <Route path=':sessions' element={<CategoriesSession/>}>
              <Route path=':subsessions' element={<CategoriesSubSession/>} />
            </Route>
          </Route>
        
        <Route path="*" element={<NotFound />} />
    
      </Routes>
      <Footer/>
      </div>
      
    </Router>
  );
}

export default App;