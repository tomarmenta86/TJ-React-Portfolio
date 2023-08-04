import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <nav className="flex space-x-4">
          <NavLink to="/" title="About Me" currentPath={location.pathname} />
          <NavLink to="/portfolio" title="Portfolio" currentPath={location.pathname} />
          <NavLink to="/contact" title="Contact" currentPath={location.pathname} />
          <NavLink to="/resume" title="Resume" currentPath={location.pathname} />
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, title, currentPath }) => {
  const isActive = currentPath === to;
  const activeClassName = isActive ? 'text-blue-500' : 'text-white';

  return (
    <Link to={to} className={`text-xl font-semibold hover:text-blue-500 ${activeClassName}`}>
      {title}
    </Link>
  );
};

export default Header;
