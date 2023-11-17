import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <p>Header</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
