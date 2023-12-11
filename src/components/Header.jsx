import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [screenWidth]);

  const toggleNav = () => {
    if (screenWidth > 650) {
      return;
    }
    setIsMobileNavOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <header>
      <div className="header-wrap">
        <Link to="/" className="header-logo">
          Zoo!
        </Link>
        <button className="header-menu-btn" onClick={toggleNav}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <nav className={`${isMobileNavOpen ? 'open-nav' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" onClick={toggleNav}>
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink to="/birds" onClick={toggleNav}>
                Birds
              </NavLink>
            </li>
            <li>
              <NavLink to="/insects" onClick={toggleNav}>
                Insects
              </NavLink>
            </li>
            <li>
              <NavLink to="/fish" onClick={toggleNav}>
                Fish
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleNav}>
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
