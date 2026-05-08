import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">米兰</Link>
      <ul className="nav-links">
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/music">MUSIC</Link></li>
        {/* <li><Link to="/blog">BLOG</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
