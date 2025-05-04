import { Link } from 'react-router-dom';
import { useEffect ,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../App.css';
import './Navbar.css';

// import cart context
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {

  //cart hook
  const { cartItemCount } = useContext(CartContext);

  useEffect(() => {
    // Initialize Bootstrap's JS for the navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarMenu) {
      // Close menu when clicking a link (for mobile)
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navbarMenu.classList.remove('show');
        });
      });
    }
    
    return () => {
      // Cleanup event listeners on component unmount
      if (navbarToggler) {
        navbarToggler.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 navbar-gradient">
      <div className="container">
        {/* Brand/Logo - Bigger and emphasized */}
        <Link to="/" className="navbar-brand fw-bold">
          <span className="text-warning">Golden</span>Homes
        </Link>
        
        {/* Hamburger Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link to="/" className="nav-link">
                Home
                <div className="nav-underline"></div>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/properties" className="nav-link">
                Properties
                <div className="nav-underline"></div>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/contact" className="nav-link">
                Contact
                <div className="nav-underline"></div>
              </Link>
            </li>

            {/* cart code */}
            <li className="nav-item px-2">
              <Link to="/cart" className="nav-link position-relative">
                Cart
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount}
                  </span>
                )}
                <div className="nav-underline"></div>
              </Link>
            </li>

            {/* cart code*/}
          </ul>
          
          {/* Auth Buttons */}
          <div className="d-flex ms-lg-3 mt-3 mt-lg-0 auth-buttons">
            <Link 
              to="/signin" 
              className="btn btn-outline-light btn-sm mx-1 text-white border-white"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="btn btn-warning btn-sm mx-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;