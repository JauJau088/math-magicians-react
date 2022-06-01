import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <div className="NavContainer">
      <nav className="Nav">
        <h1>Math Magicians</h1>
        <ul className="Nav-Ul">
          {links.map((e) => (
            <li key={e.id} className="Nav-Li">
              <Link to={e.path} exact="true">
                {e.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
