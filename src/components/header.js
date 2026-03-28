

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FlavorsPage from '../FlavorsPage';
import LoginPage from '../LoginPage';
function Header() {
  return (
    <>
      <header id="page_header">
        <div>
            <img src="/images/logo.webp" alt="Sweet Scoop Ice Cream Logo" />
        </div>
        <div>
            <h1>Sweet Scoop Ice Cream</h1>
        </div>
        </header>
        <nav className="navbar">
            <a>    
                <Link to="/">Home</Link>
            </a>
            <a>   
                <Link to="/flavors">Flavors</Link>
            </a> 
            <a>
                <Link to="/login">Login</Link>
            </a>
        </nav>
    </>
  );
}

export default Header;
