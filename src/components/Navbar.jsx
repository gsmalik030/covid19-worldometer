import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="backArrow" to="/"><FaArrowLeft /></NavLink>
      <h4>Covid-19 Worldometer</h4>
      <div className="icons">
        <span><FaMicrophone /></span>
        <span><FiSettings /></span>
      </div>
    </header>
  );
}

export default Navbar;
