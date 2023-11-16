import { NavLink } from 'react-router-dom';

const Header = ({ search }) => {
  return (
    <header>
      <p>Header</p>
      {/* <input type="text" id="search" onChange={search} /> */}
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
