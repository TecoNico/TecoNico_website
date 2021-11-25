import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../Assets/img/plate.png";
const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label for="checkbox">
        <MenuIcon id="nav-icon" />
      </label>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/ourproduct">
            Our Products
          </Link>
        </li>
        <li>
          <Link className="link" to="/joinus">
            Join Us
          </Link>
        </li>
        <li className='logo-li'>
          <img className="logo" src={logo} alt="" />
        </li>
        <li>
          <Link className="link" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="link" to="/ourproduct">
            Coming Project
          </Link>
        </li>
        <li>
          <Link className="link" to='/family'>
            Family
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
