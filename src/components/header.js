import React, {useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import '../App.css'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleTitleClick = () => {
    navigate(''); 
  };
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-tertiary rounded-lg shadow-lg py-4 px-6">
          <h1 className="text-3xl font-bold mb-1 cursor-pointer" onClick={handleTitleClick}> Thomas J
          <span className="flashing-underscore">_</span>
          <div className ="text-background rounded-lg text-xl flex justify-center mb-9 shadow-lg py-4 px-6 bg-primary ">web-dev: ui/ux design js/es mern</div></h1>
          
          <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label="Toggle navigation"
          >
            <FiMenu />
          </button>
        </div>
        <nav className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex-around md:space-x-14 justify-between`}>
            <NavLink to="/" title="//About Me//" currentPath={location.pathname} />
            <NavLink to="/portfolio" title="//Portfolio//" currentPath={location.pathname} />
            <NavLink to="/contact" title="//Contact//" currentPath={location.pathname} />
            <NavLink to="/resume" title="//Resume//" currentPath={location.pathname} />
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
