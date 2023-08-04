import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg py-4 px-6">
          <h1 className="text-3xl font-bold">Thomas J</h1>
          <nav className="flex space-x-4 mt-4">
            <NavLink to="/" title="About Me" currentPath={location.pathname} />
            <NavLink to="/portfolio" title="Portfolio" currentPath={location.pathname} />
            <NavLink to="/contact" title="Contact" currentPath={location.pathname} />
            <NavLink to="/resume" title="Resume" currentPath={location.pathname} />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, title, currentPath }) => {
  const isActive = currentPath === to;
  const activeClassName = isActive ? 'text-blue-500' : 'text-white';
  

  return (
    <Link to={to} className={`text-xl font-semibold hover:text-blue-500 ${activeClassName}hover:shadow-md`}>

      {title}
    </Link>
  );
};

export default Header;
