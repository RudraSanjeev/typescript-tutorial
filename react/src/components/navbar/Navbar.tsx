import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <span className="logo">logo</span>
        <ul className="links">
          <Link to="#" className="link">
            Home
          </Link>
          <Link to="#" className="link">
            About
          </Link>
          <Link to="#" className="link">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
