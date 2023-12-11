import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = ({ resetSearch }) => {
  return (
    <header>
      <div className="header-wrap">
        <Link to="/" className="header-logo" onClick={resetSearch}>
          Zoo!
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={resetSearch}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" onClick={resetSearch}>
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink to="/birds" onClick={resetSearch}>
                Birds
              </NavLink>
            </li>
            <li>
              <NavLink to="/insects" onClick={resetSearch}>
                Insects
              </NavLink>
            </li>
            <li>
              <NavLink to="/fish" onClick={resetSearch}>
                Fish
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={resetSearch}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
